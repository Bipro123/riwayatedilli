(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-details-post-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post-details/post-details.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-details/post-details.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-button color=\"dark\" class=\"btnback\" (click)=\"back()\">Back</ion-button>\n    <!-- <ion-title color=\"tertiary\">\n      \n    </ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-align\">\n    <!-- <ion-card class=\"welcome-card\" *ngFor=\"let post of details\">\n      <ion-card-header>\n     \n        <ion-card-title><p>{{post.title.rendered}}</p></ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>{{post.content.rendered}}</p>\n      </ion-card-content>\n    </ion-card> -->\n    <!-- <ion-card class=\"welcome-card\" *ngFor=\"let post of details\">\n  <ion-card-header>\n    <ion-card-title (click)=\"clickrun()\">{{post.title.rendered}}</ion-card-title>\n  </ion-card-header> -->\n\n  <!-- <ion-card-content>\n   <div [innerHTML]=\"post.content.rendered\"></div> --> \n   <!-- <p>{{post.content.rendered}}</p> -->  \n  <!-- </ion-card-content>\n</ion-card> -->\n<!-- <ion-text><h>{{post.title.rendered}}</h></ion-text> -->\n<ion-toolbar class=\"item-content\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  <ion-title class=\"headertitle\">{{title}}</ion-title>\n  <ion-item-divider class=\"headerdivider\" color=\"primary\"></ion-item-divider>\n</ion-toolbar>\n    <!-- <ion-item-divider color=\"primary\"></ion-item-divider> -->\n\n  \n\n<ion-card class=\"quote\">\n  <ion-card-header>\n    <!-- <ion-card-title class=\"quotetitle\">Quote</ion-card-title> -->\n    <img src=\"{{src}}\" style=\"padding-top: 2.5%; width:100%; height:30%\">\n  </ion-card-header>\n\n  <ion-card-content>\n   <div class=\"quoteclass\" [ngStyle]=\"{'font-size': font_quoteclass + 'px'}\" [innerHTML]=\"quote\"></div>\n   <hr>\n   <!-- <p>{{post.content.rendered}}</p> -->  \n  </ion-card-content>\n</ion-card>\n\n<ion-card class=\"welcome-card\">\n  <ion-card-header>\n    <ion-card-title class=\"archtitle\">Architecture</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n   <div class=\"archclass\" [ngStyle]=\"{'font-size': font_archclass + 'px'}\" [innerHTML]=\"arch\"></div> \n   <!-- <p>{{post.content.rendered}}</p> -->  \n  </ion-card-content>\n</ion-card>\n<ion-card class=\"welcome-card\">\n  <ion-card-header>\n    <ion-card-title class=\"narratitle\">Narrative</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n   <div class=\"narraclass\" [ngStyle]=\"{'font-size': font_narraclass + 'px'}\" [innerHTML]=\"narrative\"></div> \n   <!-- <p>{{post.content.rendered}}</p> -->  \n  </ion-card-content>\n</ion-card>\n<ion-card class=\"welcome-card\">\n  <ion-card-header>\n    <ion-card-title class=\"refertitle\">Reference</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n   <div class=\"referclass\" [ngStyle]=\"{'font-size': font_referclas + 'px'}\" [innerHTML]=\"reference\"></div> \n   <!-- <p>{{post.content.rendered}}</p> -->  \n  </ion-card-content>\n</ion-card>\n<ion-card class=\"comment_card\">\n  <ion-card-header>\n    <ion-card-title class=\"comtitle\">Comments</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content *ngFor=\"let com of comments\">\n   <!-- <div class=\"referclass\" [ngStyle]=\"{'font-size': font_referclas + 'px'}\" [innerHTML]=\"reference\"></div>  -->\n      <img  class=\"user_pic\" src=\"../assets/icon/user.svg\" width=\"120px\" height=\"60px\">\n \n   <ion-item>\n      <ion-card>\n        <ion-card-content>\n          <ion-text  class=\"author_name\"[innerHTML]=\"com.author_name\" color=\"tertiary\"></ion-text>\n          <ion-text class=\"comment_body\" [innerHTML]=\"com.content.rendered\"></ion-text>\n          <ion-text class=\"comment_date\" [innerHTML]=\"com.date\"></ion-text>\n        </ion-card-content>\n      </ion-card>\n  </ion-item>\n   <!-- <p>{{post.content.rendered}}</p> -->  \n  </ion-card-content>\n</ion-card>\n<ion-card *ngFor=\"let blog of blogs\">\n  <ion-card-header>\n    <!-- <ion-item color=\"tertiary\" lines=\"none\">\n      <img  class=\"gandhi_image\" [src]=\"slide.image\">\n    </ion-item> -->\n    <ion-card-title><ion-text color=\"primary\">{{blog.title.rendered}}</ion-text></ion-card-title>\n    <!-- <ion-card-subtitle><ion-text color=\"tertiary\">India's Great</ion-text></ion-card-subtitle> -->\n  </ion-card-header>\n\n  <ion-card-content>\n    <!-- <ion-text color=\"tertiary\" [innerHTML]=\"del.content.rendered\"> -->\n    <!-- Keep close to Nature's heart... and break clear away, once in awhile,\n    and climb a mountain or spend a week in the woods. Wash your spirit clean. -->\n    <!-- post.content -->\n  <!-- </ion-text> -->\n  <ion-text class=\"comment_body\" [innerHTML]=\"blog.content.rendered\"></ion-text>\n  </ion-card-content>\n  <ion-item lines=\"none\">\n  <ion-button color=\"primary\"><ion-text color=\"tertiary\">Comment</ion-text></ion-button>\n  <!-- <ion-fab-button class=\"fab_card\" color=\"tertiary\"> -->\n    <div style=\"padding-left: 150px;\">\n      <ion-icon name=\"md-thumbs-up\" color=\"tertiary\" style=\"padding-left: 10px;\"></ion-icon>\n      <ion-text color=\"tertiary\">14</ion-text>\n      <ion-icon name=\"md-eye\" color=\"tertiary\" style=\"padding-left: 10px;\"></ion-icon>\n      <ion-text color=\"tertiary\">14</ion-text>\n    </div>\n    <!-- </ion-fab-button> -->\n</ion-item>\n\n</ion-card>\n<ion-item class=\"blank\" lines=\"none\"> \n  </ion-item>\n  <!-- <ion-fab vertical=\"center\" horizontal=\"center\" slot=\"fixed\">\n  <ion-fab-list (click)=\"readyToShare()\">\n    <ion-fab-button>\n      <ion-icon name=\"share\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n  <ion-fab-list (click)=\"presentModal()\">\n    <ion-fab-button>\n      <ion-icon name=\"md-chatboxes\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n  <ion-fab-list  class=\"increase\"(click)=\"increaseFontSize()\">\n    <ion-fab-button>\n      <ion-icon name=\"md-add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n  <ion-fab-list  class=\"decrease\" (click)=\"decreaseFontSize()\">\n    <ion-fab-button>\n      <ion-icon name=\"md-remove\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n</ion-fab> -->\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button (click)=\"readyToShare()\"><ion-icon name=\"share\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"presentModal()\" ><ion-icon name=\"md-chatboxes\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n    <ion-fab-list side=\"end\" >\n      <ion-fab-button (click)=\"increaseFontSize()\"><ion-icon name=\"md-add\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"decreaseFontSize()\"><ion-icon name=\"md-remove\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/post-details/post-details.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/post-details/post-details.module.ts ***!
    \*****************************************************/

  /*! exports provided: PostdetailsPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostdetailsPageModule", function () {
      return PostdetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _comment_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../comment/comment.page */
    "./src/app/comment/comment.page.ts");
    /* harmony import */


    var _post_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./post-details.page */
    "./src/app/post-details/post-details.page.ts");

    let PostdetailsPageModule = class PostdetailsPageModule {};
    PostdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _post_details_page__WEBPACK_IMPORTED_MODULE_7__["PostdetailsPage"]
      }])],
      declarations: [_post_details_page__WEBPACK_IMPORTED_MODULE_7__["PostdetailsPage"], _comment_comment_page__WEBPACK_IMPORTED_MODULE_6__["CommentPage"]],
      entryComponents: [_comment_comment_page__WEBPACK_IMPORTED_MODULE_6__["CommentPage"]]
    })], PostdetailsPageModule);
    /***/
  },

  /***/
  "./src/app/post-details/post-details.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/post-details/post-details.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".quoteclass {\n  font-weight: bold;\n  font-style: italic;\n  font-family: \"GaramondBold\";\n  color: black;\n  text-align: left;\n}\n\n.archclass {\n  font-weight: normal;\n  color: #000000;\n  text-align: justify;\n}\n\n.narraclass {\n  font-weight: normal;\n  color: #000000;\n  text-align: justify;\n}\n\n.increase {\n  padding-left: 210px;\n}\n\n.decrease {\n  padding-left: 110px;\n}\n\n.referclass {\n  font-weight: normal;\n  color: #000000;\n  text-align: left;\n}\n\n.blank {\n  height: 15%;\n}\n\n.share {\n  margin-left: -2px;\n}\n\n.refertitle {\n  font-weight: bold;\n  text-align: left;\n}\n\n.narratitle {\n  font-weight: bold;\n  text-align: left;\n}\n\n.comtitle {\n  font-weight: bold;\n  text-align: left;\n}\n\n.quote {\n  margin-top: 60px;\n}\n\n.archtitle {\n  font-weight: bold;\n  text-align: left;\n}\n\n.headerdivider {\n  margin-top: 0px;\n  margin-left: -2px;\n  min-height: 0.1px !important;\n}\n\n.headertitle {\n  text-align: center;\n  padding-bottom: 10px;\n  color: #2e1901;\n}\n\n.item-content {\n  position: fixed;\n  background-color: #ffffff;\n  text-align: justify;\n}\n\n.itemgrp {\n  position: fixed;\n  background-color: white;\n  text-align: justify;\n}\n\n.content-align {\n  text-align: justify;\n}\n\np.comment_body {\n  padding-top: 100px;\n  font-size: 80px;\n  font-weight: bold;\n  font-style: italic;\n  font-family: \"GaramondBold\";\n}\n\n.user_pic {\n  width: 100px;\n  height: 50px;\n}\n\n.author_name {\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"GaramondBold\";\n  padding-top: 100px;\n}\n\n.comment_date {\n  padding-top: 100px;\n}\n\n.btnback {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1kZXRhaWxzL0M6XFxVc2Vyc1xcV0lOXFxEZXNrdG9wXFx0ZXN0XFxjYW1lcmFhcHAxL3NyY1xcYXBwXFxwb3N0LWRldGFpbHNcXHBvc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3QtZGV0YWlscy9wb3N0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0FDQUQ7O0FERUE7RUFDQyxtQkFBQTtFQUVBLGNBQUE7RUFDQSxtQkFBQTtBQ0FEOztBREVBO0VBQ0MsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsbUJBQUE7QUNBRDs7QURFQTtFQUNDLG1CQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxtQkFBQTtBQ0VEOztBREFBO0VBQ0MsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFRDs7QURBQTtFQUNDLFdBQUE7QUNHRDs7QURBQTtFQUNDLGlCQUFBO0FDR0Q7O0FEQUE7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0FDR0Q7O0FEREE7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0FDSUQ7O0FERkE7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0FDS0Q7O0FESEE7RUFDQyxnQkFBQTtBQ01EOztBREpBO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtBQ09EOztBRExBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNRRjs7QURKQTtFQUNDLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDT0Q7O0FETEE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1FGOztBRE5BO0VBQ0MsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNTRDs7QURQQTtFQUNDLG1CQUFBO0FDVUQ7O0FEUkE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNXRDs7QURSQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0FDV0Q7O0FEVEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFRCwyQkFBQTtFQUNBLGtCQUFBO0FDV0Q7O0FETkE7RUFDQyxrQkFBQTtBQ1NEOztBRFBBO0VBQ0MsWUFBQTtBQ1VEIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1kZXRhaWxzL3Bvc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVvdGVjbGFzc3tcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0Zm9udC1mYW1pbHk6ICdHYXJhbW9uZEJvbGQnO1xyXG5cdC8vIGZvbnQtc2l6ZTogMjBweDtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0dGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcbi5hcmNoY2xhc3N7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHQvLyBmb250LXNpemU6IDE3cHg7XHJcblx0Y29sb3I6ICMwMDAwMDA7XHJcblx0dGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG59XHJcbi5uYXJyYWNsYXNze1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Ly8gZm9udC1zaXplOiAxN3B4O1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG5cdHRleHQtYWxpZ246anVzdGlmeTtcclxufVxyXG4uaW5jcmVhc2V7XHJcblx0cGFkZGluZy1sZWZ0OiAyMTBweDtcclxufVxyXG4uZGVjcmVhc2V7XHJcblx0cGFkZGluZy1sZWZ0OiAxMTBweDtcclxufVxyXG4ucmVmZXJjbGFzc3tcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdC8vIGZvbnQtc2l6ZTogMTdweDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxuXHR0ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuLmJsYW5re1xyXG5cdGhlaWdodDogMTUlO1xyXG59XHJcblxyXG4uc2hhcmV7XHJcblx0bWFyZ2luLWxlZnQgOiAtMnB4O1xyXG59XHJcblxyXG4ucmVmZXJ0aXRsZXtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5uYXJyYXRpdGxle1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNvbXRpdGxle1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHRcclxufVxyXG4ucXVvdGV7XHJcblx0bWFyZ2luLXRvcDogNjBweDtcclxufVxyXG4uYXJjaHRpdGxle1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmhlYWRlcmRpdmlkZXJ7IFxyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tbGVmdDogLTJweDtcclxuICBtaW4taGVpZ2h0OiAwLjFweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnBhZ2V0b3BoZWFke1xyXG59XHJcbi5oZWFkZXJ0aXRsZXtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XHJcblx0Y29sb3I6ICMyZTE5MDE7XHJcbn1cclxuLml0ZW0tY29udGVudCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbn1cclxuLml0ZW1ncnB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdHRleHQtYWxpZ246anVzdGlmeTtcclxufVxyXG4uY29udGVudC1hbGlnbntcclxuXHR0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbn1cclxucC5jb21tZW50X2JvZHl7XHJcblx0cGFkZGluZy10b3A6MTAwcHg7XHJcblx0Zm9udC1zaXplOiA4MHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRmb250LWZhbWlseTogJ0dhcmFtb25kQm9sZCc7XHJcblxyXG59XHJcbi51c2VyX3BpY3tcclxuXHR3aWR0aDoxMDBweDtcclxuXHRoZWlnaHQ6NTBweDtcclxufVxyXG4uYXV0aG9yX25hbWV7XHJcblx0IGZvbnQtc2l6ZTogMThweDtcclxuXHQgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Ly8gZm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGZvbnQtZmFtaWx5OiAnR2FyYW1vbmRCb2xkJztcclxuXHRwYWRkaW5nLXRvcDoxMDBweDtcclxuXHJcblxyXG5cclxufVxyXG4uY29tbWVudF9kYXRle1xyXG5cdHBhZGRpbmctdG9wOjEwMHB4O1x0XHJcbn1cclxuLmJ0bmJhY2t7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG59IiwiLnF1b3RlY2xhc3Mge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LWZhbWlseTogXCJHYXJhbW9uZEJvbGRcIjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYXJjaGNsYXNzIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uYXJyYWNsYXNzIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5pbmNyZWFzZSB7XG4gIHBhZGRpbmctbGVmdDogMjEwcHg7XG59XG5cbi5kZWNyZWFzZSB7XG4gIHBhZGRpbmctbGVmdDogMTEwcHg7XG59XG5cbi5yZWZlcmNsYXNzIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ibGFuayB7XG4gIGhlaWdodDogMTUlO1xufVxuXG4uc2hhcmUge1xuICBtYXJnaW4tbGVmdDogLTJweDtcbn1cblxuLnJlZmVydGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5hcnJhdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5xdW90ZSB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi5hcmNodGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmhlYWRlcmRpdmlkZXIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICBtaW4taGVpZ2h0OiAwLjFweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVydGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzJlMTkwMTtcbn1cblxuLml0ZW0tY29udGVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLml0ZW1ncnAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY29udGVudC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbnAuY29tbWVudF9ib2R5IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBmb250LXNpemU6IDgwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiBcIkdhcmFtb25kQm9sZFwiO1xufVxuXG4udXNlcl9waWMge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmF1dGhvcl9uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiR2FyYW1vbmRCb2xkXCI7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuLmNvbW1lbnRfZGF0ZSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuLmJ0bmJhY2sge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/post-details/post-details.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/post-details/post-details.page.ts ***!
    \***************************************************/

  /*! exports provided: PostdetailsPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostdetailsPage", function () {
      return PostdetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _comment_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../comment/comment.page */
    "./src/app/comment/comment.page.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js"); // import { HttpHeaders } from '@angular/common/http';


    let PostdetailsPage = class PostdetailsPage {
      constructor(navCtrl, socialSharing, toastController, platform, loadingCtrl, http, route, router, modal, storage) {
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.toastController = toastController;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.route = route;
        this.router = router;
        this.modal = modal;
        this.storage = storage;
        this.isLoading = false;
        this.comen = [];
        this.font_quoteclass = 20;
        this.font_archclass = 17;
        this.font_narraclass = 17;
        this.font_referclas = 17; // this.postid =this.route.snapshot.paramMap.get('id');
        //   this.blogid =this.route.snapshot.paramMap.get('bid');

        this.route.params.subscribe(params => {
          this.postid = params.id, this.blogid = params.bid;
          this.returnDecide = params.pagereturn;
        }); // alert(this.postid);
        // var divToChange = document.getElemetById('my_id');

        this.loadingPresent(); // this.http.get('http://riwayatedilli.com/site/wp-json/wp/v2/posts/'+this.postid).subscribe(data => {

        storage.get('postlist').then(val => {
          this.details = Array.of(val); // console.log(val);
          // for(let post of this.details){
          //    var amg=post.content;
          //    this.title=post.title;
          //  }

          var amg = this.details[0][this.postid]['content'];
          this.title = this.details[0][this.postid]['title'];
          this.src = this.details[0][this.postid]['image'];
          let parser = new DOMParser();
          let parsedHtml = parser.parseFromString(amg, 'text/html');
          this.narrative = parsedHtml.getElementById("narrative").innerHTML;
          this.arch = parsedHtml.getElementById("arch").innerHTML;
          this.quote = parsedHtml.getElementById("quote").innerHTML;
          this.reference = parsedHtml.getElementById("refer").innerHTML;
          this.getComment();
          this.getBlog();
          this.loadingdismiss(); // this.getPost();
        }, error => {
          this.loadingdismiss();
          this.presentToast();
        });
      } // comment(){
      //   let formdata=new FormData();
      //   formdata.append('post',this.postid);
      //   formdata.append('author_name','Biprt');
      //   formdata.append('author_email','djkjd@gmail.com');
      //   formdata.append('content','Doodle');
      //   this.http.post('http://riwayatedilli.com/site/wp-json/wp/v2/comments',formdata).subscribe(data=>{
      //       console.log(data);
      //   },error=>{
      //     console.log("Error");
      //   });
      // }
      // newpost(){
      //   let newpo=new FormData();
      //   newpo.append('title','test from ionic');
      //   newpo.append('content','Show Data');
      //   let headers = new HttpHeaders({
      //     'Authorization': 'Basic cml3YXlhdGVkaWxsaTpSaXdheWF0ZWRpbGwmJjIwMTk='});
      //   let options = { headers: headers };
      //   this.http.post('https://riwayatedilli.com/site/wp-json/wp/v2/posts',newpo,options).subscribe(data=>{
      //       console.log(data);
      //   },error=>{
      //     console.log("Error");
      //   });
      // }
      // increaseFontSize() {
      //     this.font_size = this.font_size * 1.1;
      //     let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("html")[0];
      //     if (htmlRoot != null) {
      //        htmlRoot.style.fontSize = this.font_size + '%';
      //     }
      // getPost()
      // {
      //   let formdata=new FormData();
      //   formdata.append('id','543');
      //   formdata.append('name','Iron Pillar');
      //   this.http.post('https://riwayatedilli.com/site/wp-json/wp/v2/categories',formdata).subscribe(data => {
      //                this.posts = data;
      //                console.log(this.posts);
      //                this.loadingdismiss();
      //               },error=>{
      //                   this.loadingdismiss();
      //                   this.presentToast();           
      //               });
      // }


      back() {
        if (this.returnDecide == 0) {
          this.router.navigate(['/cities-of-delhi']);
        } else {
          this.router.navigate(['/home']);
        }
      }

      getComment() {
        // let formdata=new FormData();
        // formdata.append('post',this.postid);
        this.http.get('https://riwayatedilli.com/site/wp-json/wp/v2/comments?post=' + this.postid).subscribe(data => {
          // console.log(data);
          this.comments = data; // for(let com of this.comments)
          // {
          //     this.comen={'title':com.title,'username':com.author_name,'date':com.author_name,'content':com.content.rendered};
          // }
          // console.log(this.comments);
        }, error => {
          this.loadingdismiss();
          this.presentToast();
        });
      }

      getBlog() {
        this.http.get('https://riwayatedilli.com/site/wp-json/wp/v2/posts?categories=' + this.blogid).subscribe(data => {
          this.blogs = data; // console.log(data);
        }, error => {
          this.loadingdismiss();
          this.presentToast();
        });
      }

      increaseFontSize() {
        this.font_quoteclass = this.font_quoteclass + 10;
        this.font_archclass = this.font_archclass + 10;
        this.font_narraclass = this.font_narraclass + 10;
        this.font_referclas = this.font_referclas + 10;
      }

      decreaseFontSize() {
        if (this.font_quoteclass > 20 && this.font_archclass > 17 && this.font_narraclass > 17 && this.font_referclas > 17) {
          this.font_quoteclass = this.font_quoteclass - 10;
          this.font_archclass = this.font_archclass - 10;
          this.font_narraclass = this.font_narraclass - 10;
          this.font_referclas = this.font_referclas - 10;
        }
      } // setMyStyles(){
      //   let styles = {
      //     'font_size': 17 + 'px',
      //   };
      //   return styles;
      // }
      // }


      readyToShare() {
        var options = {
          title: 'Riwayat-e-Dill',
          message: this.title,
          subject: '',
          files: '',
          url: 'https://riwayatedilli.com/site/?p=' + this.postid
        };
        this.socialSharing.shareWithOptions(options);
      }

      ngOnDestroy() {
        this.loadingdismiss(); // this.backbttunsub();
      } // backbttsub()
      // {
      //   this.platform.backButton.subscribe(async ()=>{
      //             if(this.isLoading==true)
      //             {
      //               this.loadingdismiss();
      //             }
      //             this.navCtrl.back(); 
      //            });
      // }
      // backbttunsub(){
      //   this.platform.backButton.unsubscribe();
      // }
      // goBack()
      // {
      //  		this.router.navigateByUrl('/cities-of-delhi');
      // }


      loadingPresent() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.isLoading = true;
          return yield this.loadingCtrl.create({
            message: "Please wait until data is loaded"
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

      ionViewDidEnter() {// this.backbttsub();
      }

      ionViewWillEnter() {// alert("is entering");
      }

      presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: 'No Internet Connection or Data not found',
            duration: 2000,
            position: "middle",
            color: "primary",
            showCloseButton: true,
            closeButtonText: "Reload"
          });
          toast.onDidDismiss().then(data => {// alert('Reload');
          });
          toast.present();
        });
      }

      presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let newmodal = yield this.modal.create({
            component: _comment_comment_page__WEBPACK_IMPORTED_MODULE_6__["CommentPage"],
            componentProps: {
              'postid': this.postid
            },
            cssClass: 'my-comment-modal-css'
          });
          return yield newmodal.present();
        });
      }

      ngOnInit() {
        this.postid = this.route.snapshot.paramMap.get('id');
      }

    };

    PostdetailsPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }, {
      type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
    }];

    PostdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-postdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post-details/post-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-details.page.scss */
      "./src/app/post-details/post-details.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])], PostdetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=post-details-post-details-module-es5.js.map