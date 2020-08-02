import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController,Platform } from '@ionic/angular';
import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';
import { HttpClient } from '@angular/common/http';
import {MultiplayerService} from '../services/multiplayer.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  message = '';
  messages = [];
  currentUser = '';
  roomer='';
  rooms=[];
  roomdet:any;
  currentroom:any='';
  textBox:boolean=false;
  msgforoom:any;
  matches:String[];
  isRecording=false;
  searchtext:string="";
  searchBox:boolean=false;
  response: object;
  msg:any;
  constructor(private socket: Socket, private toastCtrl: ToastController,private plt:Platform,private speechrecog:SpeechRecognition,public http: HttpClient,private multiplay:MultiplayerService) { 


  }

  ngOnInit() {
    this.socket.connect();
 
    let name = `user-${new Date().getTime()}`;
    this.currentUser = name;
    this.multiplay.currentusername = name;
    this.socket.emit('set-name', name);

    this.socket.emit('get-chat-room', 'all');
 
    this.socket.fromEvent('users-changed').subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });
 
    this.socket.fromEvent('message').subscribe(message => {
      this.messages.push(message);
    });

    this.socket.fromEvent('create-room-ack').subscribe(room => {
      console.log('it is working');
      this.roomdet=room;
      if(this.roomdet.roomdesc!="NO")
      {
        this.rooms.push(this.roomdet.roomdesc);
        this.showToast(this.roomdet.message);
        this.textBox=!this.textBox;
      }
      else{
        this.showToast(this.roomdet.roomdesc);
        this.textBox=!this.textBox;
      }
    });

    this.socket.fromEvent('join-room-ack').subscribe(room => {
      console.log('it is working');
      this.roomdet=room;
      if(this.roomdet.roomdesc!="NO")
      {
        this.rooms.push(this.roomdet.roomdesc);
        this.showToast(this.roomdet.message);
        this.textBox=!this.textBox;
      }
      else{
        this.showToast(this.roomdet.roomdesc);
        this.textBox=!this.textBox;
      }
    });

    this.socket.fromEvent('send-message-room-ack').subscribe(message => {
      this.msgforoom=message;
      console.log("ack recieved for room message");
      if(this.msgforoom.msg!="NO")
      {
        console.log("Room exists");
        this.messages.push(this.msgforoom);
        this.showToast("Message in roomid-"+this.msgforoom.room);
      }
      else{
        console.log("Room doesn't exists");
        this.showToast("No Such room exists");
      }
    });
    this.socket.fromEvent('set-move-room-ack').subscribe(message => {
      alert("Going ON ");
      this.msgforoom=message;
      console.log("ack recieved for room message");
      if(this.msgforoom.msg!="NO")
      {
        console.log("Room exists");
        this.messages.push(this.msgforoom);
        this.showToast("Message in roomid-"+this.msgforoom.room);
        this.showToast(this.msgforoom.msg);
      }
      else{
        console.log("Room doesn't exists");
        this.showToast("No Such room exists");
      }
    });

    // this.socket.fromEvent('set-move-room-ack').subscribe(message => {
    //   // alert("Going ON ");
    //   // this.msgforoom=message;
    //   // console.log("ack recieved for room message");
    //   // if(this.msgforoom.msg!="NO")
    //   // {
    //   //   console.log("Room exists");
    //   //   this.messages.push(this.msgforoom);
    //   //   this.showToast("Message in roomid-"+this.msgforoom.room);
    //   //   this.showToast(this.msgforoom.msg);
    //   // }
    //   // else{
    //   //   console.log("Room doesn't exists");
    //   //   this.showToast("No Such room exists");
    //   // }

    // });

    this.socket.fromEvent('search-room-result').subscribe(
      (response: Response) => {
        // console.log(roomname);
        this.msg=response;
        if(this.msg.msg!="NO")
        {
          this.rooms.push(this.msg.msg);
          this.searchBox=false;
        }
        else{
          this.showToast("No room found");
          this.searchBox=true;
        }
        
      }
    );

    this.socket.fromEvent('list-of-room').subscribe(
      (response: Response) => {
        console.log(response);
        this.msg=response;
        if(this.msg.msg!="NO")
        {
          // this.rooms.push(this.msg.msg);
          // this.searchBox=false;
          // this.msg.msg.forEach(function (value) {
          //   console.log(value.chat_room_name);
          //   this.rooms.push(value.chat_room_name);
          // });
          for (var i = this.msg.msg.length - 1; i >= 0; i--) {
            console.log(this.msg.msg[i].chat_room_name);
            this.rooms.push(this.msg.msg[i].chat_room_name);
          }
          // console.log("Length"+this.msg.msg.length);
        }
        else{
          this.showToast("No room found");
          this.searchBox=true;
        }
        
      }
    );

    

  }

  startListening(){
    console.log("listening listening");
    let options={
      language:'en-US'
    };
    this.speechrecog.startListening().subscribe(matches=>{
      this.showToast("Recording....");
      this.matches=matches;
    });

    this.isRecording=true;

  }
  stopListening(){
    console.log("Stop listening");
    this.speechrecog.stopListening().then(()=>{
    this.showToast("Recording Stopped");
    });

  }

  getPermission(){
    console.log("getting permission");
    this.speechrecog.hasPermission().then((hasPermission:boolean)=>{
        console.log(hasPermission);
      if(!hasPermission){
        this.speechrecog.requestPermission();
      }

    })
  }
  sendMessage() {
    console.log("room message is sent");
    this.socket.emit('send-message-room', {text: this.message,room:this.currentroom});
    this.message = '';
  }


   createRoom(){
     this.socket.emit('create-room',this.roomer);
     this.roomer='';
   }
 
  ionViewWillLeave() {
    this.socket.disconnect();
  }
 
  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  changeRoom(roomid){
    this.currentroom=roomid;

    this.multiplay.currentRoom=roomid;
    
  }
  openTextbox(){
    this.textBox=!this.textBox;
  }

  openSearchbox(){
    this.searchBox=!this.searchBox;
  }

  getMatch(textspeech){
      this.message=textspeech;
      this.matches.splice(0,this.matches.length);
      this.isRecording=false;
  }

  searchRoom(){
     alert(this.searchtext);
    this.socket.emit('join-room', this.searchtext);
    
  }

}
