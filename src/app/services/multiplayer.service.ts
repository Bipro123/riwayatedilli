import { Injectable,OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})


export class MultiplayerService implements OnInit {
   playerName:any;
   playerTargert:any;
   playerRooms:any=[];
   scoket_id:any;
   currentRoom:any;
   currentusername:any;
  constructor(private socket: Socket) {

   }
   ngOnInit(){
    
    this.socket.connect();

    // this.socket.fromEvent('move-made').subscribe(message => {
      
      
    // });

  }
  sentPlayerMove(playerPos:any){
    console.log("Working");
    this.socket.emit('set-move', {'room_name':this.currentRoom,'playerposition':playerPos,"current_username":this.currentusername});

  }

}
