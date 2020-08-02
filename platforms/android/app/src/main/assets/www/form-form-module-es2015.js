(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <img class=\"home_head\" src=\"../assets/icon/blog.png\" width=\"60px\" height=\"30px\" align=\"middle\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!--   <ion-card hidden>\n    \n    <ion-card-content>\n     <img *ngIf=\"!fileUrl\" src=\"assets/no-image.jpeg\" hidden />\n     <img *ngIf=\"fileUrl\" src=\"{{fileUrl}}\" hidden/> \n      \n    </ion-card-content>\n  </ion-card>\n<ion-item>\n        <ion-button color=\"medium\" size=\"large\" (click)=\"takePhoto()\">\n          <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n        </ion-button>\n</ion-item> -->\n<ion-item>\n  <ion-label position=\"floating\">Title</ion-label>\n  <ion-input [(ngModel)]=\"title\"></ion-input>\n</ion-item>\n<!-- <ion-item>\n  <ion-label position=\"floating\">Author's Name</ion-label>\n  <ion-input [(ngModel)]=\"A\"></ion-input>\n</ion-item> -->\n<!-- <ion-item>\n  <ion-label position=\"floating\">Email Address</ion-label>\n  <ion-input [(ngModel)]=\"email\"></ion-input>\n</ion-item> -->\n<ion-item>\n\n  <ion-textarea placeholder=\"Text Area\" auto-grow=\"true\" autofocus=\"true\" spellcheck=\"true\" [(ngModel)]=\"content\"></ion-textarea>\n</ion-item>\n<!-- <re-captcha (resolved)=\"captchaResolved($event)\" siteKey=\"6Le0FdwUAAAAAB3SLUNtz-N58qirFWHoXLfKpX5H\"></re-captcha> -->\n<!-- <button [disabled]=\"!captchaPassed\" ion-button (click)=\"sendForm()\">Submit</button> -->\n<ion-item lines=\"none\">\n<ion-checkbox class=\"captchatick\" [(ngModel)]=\"myBoolean\" (ionChange)=\"changeBoolean()\" color=\"secondary\"></ion-checkbox>\n<ion-text style=\"padding-left: 0.75rem;\">I'm not a Robot</ion-text>\n</ion-item>\n<ion-button [disabled]=\"!captchaPassed\" expand=\"full\" color=\"tertiary\" (click)=\"newpost()\">Publish</ion-button>\n <!-- <app-google-maps>\n </app-google-maps> -->\n <!-- <app-loader-component>\n\n  </app-loader-component> --> \n\n  <!-- <loader-component>\n\n  </loader-component> -->\n  <!-- <ng-template>\n      <loader-component>\n      </loader-component>    \n  </ng-template> -->\n  <!-- <div class=\"loader-component\">\n    </div> -->\n  <!--\n    <div *ngIf=\"selectedItem\" padding>\n      You navigated here from <b>{{selectedItem.title }}</b>\n    </div>\n  -->\n</ion-content>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loader-component/loader-component.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loader-component/loader-component.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  loader-component works!\n</p>\n");

/***/ }),

/***/ "./src/app/form/form.module.ts":
/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/
/*! exports provided: FormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageModule", function() { return FormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form.page */ "./src/app/form/form.page.ts");
/* harmony import */ var _loader_component_loader_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader-component/loader-component.component */ "./src/app/loader-component/loader-component.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");










let FormPageModule = class FormPageModule {
};
FormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _form_page__WEBPACK_IMPORTED_MODULE_7__["FormPage"]
                }
            ])
        ],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_7__["FormPage"], _loader_component_loader_component_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponentComponent"]],
        entryComponents: []
    })
], FormPageModule);



/***/ }),

/***/ "./src/app/form/form.page.scss":
/*!*************************************!*\
  !*** ./src/app/form/form.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upload {\n  position: fixed;\n  margin-left: 200px;\n}\n\n.takepic {\n  position: fixed;\n  margin-left: 50px;\n}\n\n.title_photo {\n  top: 0;\n  left: 40px;\n  padding: 0 90px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\nion-card {\n  height: 50% !important;\n}\n\n.home_head {\n  font-size: 0.9rem;\n  padding-top: 0.1rem;\n  padding-left: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9DOlxcVXNlcnNcXFdJTlxcRGVza3RvcFxcdGVzdFxcY2FtZXJhYXBwMS9zcmNcXGFwcFxcZm9ybVxcZm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvcm0vZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0UsTUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNJLHNCQUFBO0FDRUo7O0FEQUU7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2Fke1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdG1hcmdpbi1sZWZ0OiAyMDBweDtcblxufVxuLnRha2VwaWN7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bWFyZ2luLWxlZnQ6IDUwcHg7XG5cbn1cbi50aXRsZV9waG90b3tcbiAgdG9wOiAwO1xuICBsZWZ0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDkwcHggMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHRcbn1cbmlvbi1jYXJke1xuICAgIGhlaWdodDo1MCUgIWltcG9ydGFudFxuICB9XG4gIC5ob21lX2hlYWR7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nLXRvcDogMC4xcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG59IFxuLy8gLmNhcHRjaGF0aWNre30iLCIudXBsb2FkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG59XG5cbi50YWtlcGljIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLnRpdGxlX3Bob3RvIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDkwcHggMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcbn1cblxuLmhvbWVfaGVhZCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nLXRvcDogMC4xcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/form/form.page.ts":
/*!***********************************!*\
  !*** ./src/app/form/form.page.ts ***!
  \***********************************/
/*! exports provided: FormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPage", function() { return FormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");





// import { File } from '@ionic-native/file/ngx';






// import{LoaderComponentComponent}from '../loader-component/loader-component.component';
let FormPage = class FormPage {
    constructor(navCtrl, camera, loadingCtrl, toastController, http, route, router, platform, zone, network, storage) {
        // this.postid =this.route.snapshot.paramMap.get('id');
        // this.postid =this.route.snapshot.paramMap.get('id');
        // alert(this.postid);
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.http = http;
        this.route = route;
        this.router = router;
        this.platform = platform;
        this.zone = zone;
        this.network = network;
        this.storage = storage;
        this.isLoading = false;
        this.captchaPassed = false;
        this.myBoolean = false;
        // storageLength:int;
        this.float_length = 0;
        // this.postid = this.platform.getQueryParam("n");
        // alert(this.postid);
        this.postid = this.route.snapshot.paramMap.get('id');
        // alert(this.blogID);
        // alert(this.postid);
        // alert(this.captchaPassed);
        // alert(this.postid);
    }
    takePhoto() {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }
    captchaResolved(response) {
        this.zone.run(() => {
            this.captchaPassed = true;
            this.captchaResponse = response;
            // alert(this.captchaPassed);
        });
        // alert(this.captchaPassed);
    }
    sendForm() {
        let data = {
            captchaResponse: this.captchaResponse
        };
        // this.http.post('http://localhost:8080/test', data).subscribe(res => {
        //     console.log(res);
        // });
    }
    ngOnInit() {
    }
    presentToast(p) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (p == 1) {
                var mesg = "Blog has been created";
                var clobutton = "";
            }
            else {
                var mesg = "Connection error Please try again";
                var clobutton = "Reload";
            }
            const toast = yield this.toastController.create({
                message: mesg,
                duration: 2000,
                position: "middle",
                color: "primary",
                showCloseButton: true,
                closeButtonText: clobutton
            });
            toast.onDidDismiss().then((data) => {
                // alert('Reload');
            });
            toast.present();
        });
    }
    loadingPresent() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                message: "Please wait while blog is created",
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    loadingdismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
    // async loadingPresent() {
    //   this.isLoading = true;
    //   return await this.loadingCtrl.create({
    //     message:"Please wait while blog is created",
    //   }).then(a => {
    //     a.present().then(() => {
    //       console.log('presented');
    //       if (!this.isLoading) {
    //         a.dismiss().then(() => console.log('abort presenting'));
    //       }
    //     });
    //   });
    // }
    //   async loadingdismiss() {
    //   this.isLoading = false;
    //   return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
    // }
    newpost() {
        //alert(this.title);
        this.loadingPresent();
        this.now = [this.postid];
        // var tag={'category':this.postid}
        // alert(JSON.stringify(tag));
        // var tag=Array.of(this.now);
        let newpo = new FormData();
        newpo.append('title', this.title);
        newpo.append('content', this.content);
        newpo.append('status', 'publish');
        newpo.append('categories[]', this.postid);
        // var newpo= {
        // "title":this.title,
        // "content":this.content,
        // "status": 'publish',
        // "categories": []
        // }
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': 'Basic cml3YXlhdGVkaWxsaTpSaXdheWF0ZWRpbGwmJjIwMTk='
        });
        let options = { headers: headers };
        this.http.post('https://riwayatedilli.com/site/wp-json/wp/v2/posts', newpo, options).subscribe(data => {
            // (data);
            this.presentToast(1);
            this.loadingdismiss();
            this.navCtrl.navigateBack('/home');
        }, error => {
            this.presentToast(2);
        });
    }
    // async presentToast(p:any) {
    //     if (p==1)
    //     {
    //       var mesg="Blog has been created";
    //       var clobutton="";
    //     }
    //     else{
    //      var mesg="Connection error Please try again"; 
    //      var clobutton="Reload";
    //     }
    //     const toast = await this.toastController.create({
    //       message: mesg,
    //       duration: 2000,
    //       position:"middle",
    //       color:"primary",
    //       showCloseButton: true,
    //       closeButtonText:clobutton
    //     });
    //     toast.onDidDismiss().then((data)=>{
    //           // alert('Reload');
    //     });
    //     toast.present();
    //   }
    // newpost(){
    //   // console.log(this.title);
    //   // let newpo=new FormData();
    //   this.storage.get('length').then((val) => {
    //     this.storageLength=val;
    //   });
    //   this.postarray=[{'title':this.title,'content':this.content}];
    //   console.log(this.postarray.length);
    //   return;
    //     // newpo.append('title',this.title);
    //     // newpo.append('content',this.content);
    //     // console.log(JSON.stringify(newpo));
    //     // return;
    //     this.storage.set('newpoLS[]',this.postarray);
    //   //   this.storage.get('newpoLS[]').then((val) => {
    //   //   // console.log(val);
    //   // });
    //       this.storage.get('newpoLS[]').then((val) => {
    //           // this.formdetails=Array.of(val);
    //           for(let npl of this.formdetails){
    //              // console.log(npl);
    //              // console.log(npl);
    //               // this.http.post('https://riwayatedilli.com/site/wp-json/wp/v2/posts',newpo,options).subscribe(data=>{
    //               // // (data);
    //               //       this.presentToast(1); 
    //               //       this.loadingdismiss();
    //               //       this.navCtrl.navigateBack('/home');
    //               //   },error=>{
    //               //         this.presentToast(2);
    //               //   });
    //              // this.http.post('https://riwayatedilli.com/site/wp-json/wp/v2/posts',npl,options).subscribe(data=>{
    //              //      console.log(data);
    //              //  },error=>{
    //              //    console.log("Error");
    //              //  });
    //           }
    //       });
    //      // alert("in the function");
    //      // return;
    //     let headers = new HttpHeaders({
    //       'Authorization': 'Basic cml3YXlhdGVkaWxsaTpSaXdheWF0ZWRpbGwmJjIwMTk='});
    //     let options = { headers: headers };
    //     // watch network for a disconnection
    //     let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    //       alert("disconnection");
    //     });
    //     // stop disconnect watch
    //     disconnectSubscription.unsubscribe();
    //     // watch network for a connection
    //     let connectSubscription = this.network.onConnect().subscribe(() => {
    //        alert('network connected!');
    //       this.storage.get('newpoLS[]').then((val) => {
    //           for(let npl of val){
    //              alert(npl);
    //               return;
    //               this.http.post('https://riwayatedilli.com/site/wp-json/wp/v2/posts',newpo,options).subscribe(data=>{
    //               // (data);
    //                     this.presentToast(1); 
    //                     this.loadingdismiss();
    //                     this.navCtrl.navigateBack('/home');
    //                 },error=>{
    //                       this.presentToast(2);
    //                 });
    //              // this.http.post('https://riwayatedilli.com/site/wp-json/wp/v2/posts',npl,options).subscribe(data=>{
    //              //      console.log(data);
    //              //  },error=>{
    //              //    console.log("Error");
    //              //  });
    //           }
    //       });
    //     });
    //     // stop connect watch
    //     connectSubscription.unsubscribe();
    // }
    changeBoolean() {
        // alert(this.myBoolean
        if (this.myBoolean == true) {
            this.captchaPassed = true;
        }
        else {
            this.captchaPassed = false;
        }
    }
};
FormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
FormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.page.scss */ "./src/app/form/form.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], FormPage);



/***/ }),

/***/ "./src/app/loader-component/loader-component.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/loader-component/loader-component.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci1jb21wb25lbnQvbG9hZGVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/loader-component/loader-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/loader-component/loader-component.component.ts ***!
  \****************************************************************/
/*! exports provided: LoaderComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponentComponent", function() { return LoaderComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponentComponent = class LoaderComponentComponent {
    constructor() { }
    ngOnInit() { }
};
LoaderComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loader-component/loader-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader-component.component.scss */ "./src/app/loader-component/loader-component.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoaderComponentComponent);



/***/ })

}]);