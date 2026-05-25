"use strict";
(self["webpackChunkexamfront"] = self["webpackChunkexamfront"] || []).push([["main"],{

/***/ 43:
/*!*************************************!*\
  !*** ./src/app/rabbitmq.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RabbitmqService: () => (/* binding */ RabbitmqService)
/* harmony export */ });
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sockjs-client */ 9550);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stomp/stompjs */ 1702);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/config.service */ 3696);
var _staticBlock;
// import { Client, IMessage } from '@stomp/stompjs/esm6';


// import {rabbitmqUrl,} from './helper';



class RabbitmqService {
  constructor(configService) {
    this.configService = configService;
    this.stompClient = new _stomp_stompjs__WEBPACK_IMPORTED_MODULE_1__.Client();
    this.messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.messageStream$ = this.messageSubject.asObservable();
  }
  connect() {
    const socket = new (sockjs_client__WEBPACK_IMPORTED_MODULE_0___default())(`${this.configService.rabbitmq_url}/ws`); // ✅ Your backend endpoint
    this.stompClient = new _stomp_stompjs__WEBPACK_IMPORTED_MODULE_1__.Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Connected to WebSocket');
        this.stompClient.subscribe('/topic/messages', message => {
          console.log('Received message:', message.body);
          if (message.body) {
            this.messageSubject.next(message.body);
          }
        });
      }
    });
    this.stompClient.activate();
  }
  disconnect() {
    if (this.stompClient) {
      this.stompClient.deactivate();
      console.log('Disconnected');
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function RabbitmqService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RabbitmqService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: RabbitmqService,
    factory: RabbitmqService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5759);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 6060);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 9743);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-ui-loader */ 9995);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 9847);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/config.service */ 3696);
/* harmony import */ var _rabbitmq_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rabbitmq.service */ 43);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;




// Material Modules














// Components (if they are also standalone, otherwise they are declared in their own feature modules)








class AppComponent {
  constructor(configService, websocketService, http, renderer) {
    this.configService = configService;
    this.websocketService = websocketService;
    this.http = http;
    this.renderer = renderer;
    this.title = 'TestYourself';
    this.websocketService.connect();
  }
  ngOnInit() {
    this.loadBackgroundImage();
  }
  loadBackgroundImage() {
    this.http.get(`${this.configService.image_url}/api/images/background`, {
      responseType: 'blob'
    }).subscribe(blob => {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        this.renderer.setStyle(document.body, 'backgroundImage', `url('${imageUrl}')`);
        this.renderer.setStyle(document.body, 'backgroundSize', 'cover');
        this.renderer.setStyle(document.body, 'backgroundPosition', 'center');
      };
      reader.readAsDataURL(blob);
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_21__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_rabbitmq_service__WEBPACK_IMPORTED_MODULE_22__.RabbitmqService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.Renderer2));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 5,
    vars: 0,
    consts: [["fgsColor", "#ff4081", "pbColor", "#ff4081", "text", "Please wait..", "pbThickness", "6", "textColor", "#ff4081"], ["ngxUiLoaderBlurred", "", "blur", "6"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ngx-ui-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "app-navbar")(3, "router-outlet")(4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterOutlet, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__.CKEditorModule, ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__.NgxUiLoaderModule, ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__.NgxUiLoaderComponent, ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__.NgxUiLoaderBlurredDirective, ngx_ui_loader__WEBPACK_IMPORTED_MODULE_17__.NgxUiLoaderHttpModule,
    // All application components need to be imported here if they are standalone
    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 345:
/*!***********************************************************************!*\
  !*** ./src/app/pages/user/user-dashboard/user-dashboard.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDashboardComponent: () => (/* binding */ UserDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 4119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;


 // Using the alias here


class UserDashboardComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = _staticBlock = () => (this.ɵfac = function UserDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UserDashboardComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: UserDashboardComponent,
    selectors: [["app-user-dashboard"]],
    decls: 7,
    vars: 0,
    consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-2"], [1, "col-md-10"]],
    template: function UserDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-sidebar-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 539:
/*!*************************************************************!*\
  !*** ./src/app/pages/user/load-quiz/load-quiz.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadQuizComponent: () => (/* binding */ LoadQuizComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/quiz.service */ 4571);
var _staticBlock;










function LoadQuizComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "mat-card", 8)(2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-card-content")(9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-card-action")(12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const q_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", q_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", q_r1.category.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/user-dashboard/instructions/" + q_r1.qId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Questions :", q_r1.numberOfQuestions, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("M.M :", q_r1.maxMarks);
  }
}
function LoadQuizComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "mat-card")(2, "mat-card-content")(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "No data in this category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function LoadQuizComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoadQuizComponent_div_4_div_1_Template, 20, 6, "div", 5)(2, LoadQuizComponent_div_4_div_2_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.quizzes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.quizzes.length == 0);
  }
}
class LoadQuizComponent {
  constructor(_route, _quiz) {
    this._route = _route;
    this._quiz = _quiz;
  }
  ngOnInit() {
    this._route.params.subscribe(params => {
      this.catId = params.catId;
      if (this.catId == 0) {
        console.log('Load all the quiz');
        this._quiz.getActiveQuizzes().subscribe(data => {
          this.quizzes = data;
          console.log(this.quizzes);
        }, error => {
          console.log(error);
          alert('error in loading all quizzes');
        });
      } else {
        console.log('Load specific quiz');
        this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(data => {
          this.quizzes = data;
          console.log(this.quizzes);
        }, error => {
          alert('error in loading quiz data');
        });
      }
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function LoadQuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoadQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_6__.QuizService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LoadQuizComponent,
    selectors: [["app-load-quiz"]],
    decls: 5,
    vars: 1,
    consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "mt20"], ["class", "row mt20", 4, "ngIf"], [1, "row", "mt20"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-4"], [1, "mb20"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "truncate"], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent", 1, "ml10", 3, "routerLink"], ["mat-button", "", "color", "accent"], [1, "col-md-12"]],
    template: function LoadQuizComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Available Quizzes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LoadQuizComponent_div_4_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.quizzes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
    styles: [".truncate[_ngcontent-%COMP%] {\n  display: block;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/exam1.png\");\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlci9sb2FkLXF1aXovbG9hZC1xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsc0JBQXNCO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiLnRydW5jYXRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2V4YW0xLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 1343:
/*!************************************************************!*\
  !*** ./src/app/pages/admin/add-quiz/add-quiz.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddQuizComponent: () => (/* binding */ AddQuizComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5759);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 6060);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 9743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/category.service */ 4354);
/* harmony import */ var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/quiz.service */ 4571);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8388);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 8724);
var _staticBlock;






















function AddQuizComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", c_r1.cid);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", c_r1.title, " ");
  }
}
class AddQuizComponent {
  constructor(_cat, _snack, _quiz) {
    this._cat = _cat;
    this._snack = _snack;
    this._quiz = _quiz;
    this.categories = [];
    this.quizData = {
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active: true,
      category: {
        cid: ''
      }
    };
  }
  ngOnInit() {
    this._cat.categories().subscribe(data => {
      //categories load
      this.categories = data;
      // console.log(this.categories);
    }, error => {
      console.log(error);
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error!!', 'error in loading data from server', 'error');
    });
  }
  //
  addQuiz() {
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this._snack.open('Title Required !!', '', {
        duration: 3000
      });
      return;
    }
    //validation...
    //call server
    this._quiz.addQuiz(this.quizData).subscribe(data => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Success', 'quiz is added', 'success');
      this.quizData = {
        title: '',
        description: '',
        maxMarks: '',
        numberOfQuestions: '',
        active: true,
        category: {
          cid: ''
        }
      };
    }, error => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error!! ', 'Error while adding quiz', 'error');
      console.log(error);
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AddQuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AddQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_12__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_13__.QuizService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: AddQuizComponent,
    selectors: [["app-add-quiz"]],
    decls: 37,
    vars: 7,
    consts: [[1, "container"], [1, "row"], [1, "col-md-8", "offset-md-2"], [3, "ngSubmit"], ["appearance", "fill", 1, "w100"], ["type", "text", "name", "title", "placeholder", "Enter here", "matInput", "", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "description", "placeholder", "Enter here", "matInput", "", "rows", "5", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], ["type", "text", "name", "maxMarks", "placeholder", "Enter here", "matInput", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "numberOfQuestions", "placeholder", "Enter here", "matInput", "", 3, "ngModelChange", "ngModel"], ["name", "active", 1, "mt20", 3, "ngModelChange", "ngModel"], ["appearance", "fill", 1, "mt20", "w100"], ["name", "category", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "container", "text-center"], ["mat-raised-button", "", "color", "accent", "type", "submit"], [3, "value"]],
    template: function AddQuizComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card")(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Add New Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 2)(6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function AddQuizComponent_Template_form_ngSubmit_6_listener() {
          return ctx.addQuiz();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-form-field", 4)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Enter Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuizComponent_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.quizData.title, $event) || (ctx.quizData.title = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "mat-form-field", 4)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Enter Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuizComponent_Template_textarea_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.quizData.description, $event) || (ctx.quizData.description = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 1)(16, "div", 7)(17, "mat-form-field", 4)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Maximum Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuizComponent_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.quizData.maxMarks, $event) || (ctx.quizData.maxMarks = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 7)(22, "mat-form-field", 4)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "Number of Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuizComponent_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.quizData.numberOfQuestions, $event) || (ctx.quizData.numberOfQuestions = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "mat-slide-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuizComponent_Template_mat_slide_toggle_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.quizData.active, $event) || (ctx.quizData.active = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, " Publish Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "mat-form-field", 11)(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuizComponent_Template_mat_select_ngModelChange_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.quizData.category.cid, $event) || (ctx.quizData.category.cid = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, AddQuizComponent_mat_option_33_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 14)(35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.quizData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.quizData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.quizData.maxMarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.quizData.numberOfQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.quizData.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.quizData.category.cid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.categories);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__.CKEditorModule],
    styles: [".w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRkLXF1aXovYWRkLXF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbIi53MTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 1779:
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/view-categories/view-categories.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewCategoriesComponent: () => (/* binding */ ViewCategoriesComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/category.service */ 4354);
var _staticBlock;
















function ViewCategoriesComponent_mat_expansion_panel_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-expansion-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("opened", function ViewCategoriesComponent_mat_expansion_panel_4_Template_mat_expansion_panel_opened_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.panelOpenState = true);
    })("closed", function ViewCategoriesComponent_mat_expansion_panel_4_Template_mat_expansion_panel_closed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", c_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](c_r3.description);
  }
}
function ViewCategoriesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No categories found. Please add new categories.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
class ViewCategoriesComponent {
  constructor(_category) {
    this._category = _category;
    this.categories = [];
    this.panelOpenState = false;
  }
  ngOnInit() {
    this._category.categories().subscribe(data => {
      //css
      this.categories = data;
      console.log(this.categories);
    }, error => {
      //
      console.log(error);
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error !!', 'Error in loading data', 'error');
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ViewCategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ViewCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_11__.CategoryService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: ViewCategoriesComponent,
    selectors: [["app-view-categories"]],
    decls: 9,
    vars: 2,
    consts: [[1, "scrollable-accordion"], [3, "opened", "closed", 4, "ngFor", "ngForOf"], ["class", "container text-center mt20", "style", "color: gray;", 4, "ngIf"], [1, "container", "text-center", "mt20"], ["routerLink", "/admin/add-category", "mat-raised-button", "", "color", "accent"], [3, "opened", "closed"], [1, "container", "text-center", "mt20", 2, "color", "gray"]],
    template: function ViewCategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card")(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "All Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ViewCategoriesComponent_mat_expansion_panel_4_Template, 6, 2, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ViewCategoriesComponent_div_5_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Add New Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.categories.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle],
    styles: ["mat-card[_ngcontent-%COMP%] {\n  max-width: 1000px; \n\n  margin: 10px 10px 50px 20px; \n\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\nmat-list[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.container.text-center.mt20[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 180px;\n}\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nmat-panel-title[_ngcontent-%COMP%], \nmat-panel-description[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n\nmat-accordion.scrollable-accordion[_ngcontent-%COMP%] {\n  max-height: 500px; \n\n  overflow-y: auto;\n  border: 1px solid #ddd; \n\n  padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vdmlldy1jYXRlZ29yaWVzL3ZpZXctY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUUsb0JBQW9CO0VBQ3ZDLDJCQUEyQixFQUFFLG9DQUFvQztFQUNqRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLDRDQUE0QztFQUMvRCxnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUUsa0NBQWtDO0VBQzFELFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDEwMDBweDsgLyogSW5jcmVhc2VkIHdpZHRoICovXHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggNTBweCAyMHB4OyAvKiBBZGp1c3RlZCBtYXJnaW4gZm9yIHBvc2l0aW9uaW5nICovXHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxubWF0LWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIudGV4dC1jZW50ZXIubXQyMCBidXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcblxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5tYXQtcGFuZWwtdGl0bGUsXHJcbm1hdC1wYW5lbC1kZXNjcmlwdGlvbiB7XHJcbiAgZmxleC1ncm93OiAwO1xyXG59XHJcblxyXG5tYXQtYWNjb3JkaW9uLnNjcm9sbGFibGUtYWNjb3JkaW9uIHtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCB0byBzaG93IGFwcHJveCA3IGl0ZW1zICovXHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAvKiBPcHRpb25hbDogZm9yIHZpc3VhbCBib3VuZGFyeSAqL1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 2176:
/*!********************************************************!*\
  !*** ./src/app/image-upload/image-upload.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageUploadComponent: () => (/* binding */ ImageUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5759);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _flags_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../flags-ui.service */ 4253);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/user.service */ 2266);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/config.service */ 3696);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8388);
var _staticBlock;







 // Assuming MatCardModule might be used









const _c0 = (a0, a1) => ({
  "background-color": a0,
  "color": a1
});
const _c1 = () => ({});
function ImageUploadComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Error loading data for this page. Please check the browser console for details and ensure the backend services are running.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ImageUploadComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r0.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function ImageUploadComponent_div_15_img_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImageUploadComponent_div_15_img_9_Template_img_click_0_listener() {
      const img_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.setAsBackground(img_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", img_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function ImageUploadComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\uD83D\uDDBC Uploaded Images ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span")(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ImageUploadComponent_div_15_img_9_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.uploadedImages);
  }
}
function ImageUploadComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImageUploadComponent_div_27_Template_div_click_0_listener() {
      const color_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.selectColor(color_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r0.getColorStyle(color_r5.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", color_r5.color, " ");
  }
}
class ImageUploadComponent {
  constructor(http, renderer, flagService, userService, configService) {
    this.http = http;
    this.renderer = renderer;
    this.flagService = flagService;
    this.userService = userService;
    this.configService = configService;
    this.description = '';
    this.selectedFile = null;
    this.imagePreview = null;
    this.uploadedImages = [];
    this.dataLoadingError = false; // New flag for data loading errors
    this.Colours = [];
    this.selectedColor = null;
    this.colour = {
      color: ""
    };
    this.imags = [];
    this.fetchUploadedImages();
  }
  ngOnInit() {
    console.log("ImageUploadComponent: Initializing data...");
    this.userService.getBgColours().subscribe({
      next: data => {
        console.log("ImageUploadComponent: Background colors fetched successfully.");
        this.Colours = JSON.parse(data);
      },
      error: error => {
        console.error("ImageUploadComponent Error fetching colors:", error);
        this.dataLoadingError = true;
      }
    });
  }
  isMaterialColor(color) {
    return ['primary', 'accent', 'warn'].includes(color);
  }
  selectColor(color) {
    this.flagService.setColor(color);
    // this.flagService.setColor.subscribe((data:any)=>{
    // console.log(":::::::imageui::::data"+data)
    //     } , (error) => {
    //       console.error("Error for activating color colors:", error);})
    this.selectedColor = color.color;
  }
  // For display box
  getColorStyle(color) {
    return this.isMaterialColor(color) ? {
      border: '1px solid #999',
      padding: '10px',
      textAlign: 'center',
      width: '100px',
      height: '50px',
      cursor: 'pointer'
    } : {
      backgroundColor: color,
      color: this.getTextColor(color),
      border: '1px solid black',
      padding: '10px',
      textAlign: 'center',
      width: '100px',
      height: '50px',
      cursor: 'pointer'
    };
  }
  // Light/dark contrast helper
  getTextColor(color) {
    if (!color) return 'black'; // fallback for null/undefined
    const darkColors = ['black', 'blue', 'indigo', 'purple', 'brown', 'gray', 'teal'];
    return darkColors.includes(color.toLowerCase()) ? 'white' : 'black';
  }
  addColor() {
    let obj = {
      "color": this.colourData,
      "active": false
    };
    this.userService.addColor(obj).subscribe(data => {
      console.log("data" + data);
    });
    console.log(this.colourData);
  }
  onFileChange(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }
  onSubmit() {
    if (!this.description || !this.selectedFile) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Warning', 'Please fill all fields', 'warning');
      return;
    }
    const formData = new FormData();
    formData.append('description', this.description);
    formData.append('image', this.selectedFile);
    formData.append('isBackground', String(false));
    this.http.post(`${this.configService.image_url}/api/images/upload`, formData).subscribe({
      next: () => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Success', 'Image uploaded successfully!', 'success');
        this.description = '';
        this.selectedFile = null;
        this.imagePreview = null;
      },
      error: () => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error', 'Image upload failed.', 'error');
      }
    });
  }
  fetchUploadedImages() {
    this.http.get(`${this.configService.image_url}/api/images`).subscribe({
      next: images => {
        this.imags = images;
        this.uploadedImages = images.map(image => image); // Extract URLs into the array
        console.log("ImageUploadComponent: Loaded image URLs:", this.uploadedImages);
      },
      error: err => {
        console.error('ImageUploadComponent Failed to fetch images', err);
        this.dataLoadingError = true;
      }
    });
  }
  setBackground(imageUrl) {
    this.renderer.setStyle(document.body, 'backgroundImage', `url('${imageUrl}')`);
    this.renderer.setStyle(document.body, 'backgroundSize', 'cover');
    this.renderer.setStyle(document.body, 'backgroundPosition', 'center');
  }
  setAsBackground(id) {
    const imageUrls = `${this.configService.image_url}/api/images/${id}`;
    this.http.post(`${this.configService.image_url}/images/set-background/${id}`, {}).subscribe(() => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Success', 'Background set!', 'success');
      this.loadBackgroundImage(); // Optional if you want to reload with blob
    });
    this.renderer.setStyle(document.body, 'backgroundImage', `url('${imageUrls}')`);
    this.renderer.setStyle(document.body, 'backgroundSize', 'cover');
    this.renderer.setStyle(document.body, 'backgroundPosition', 'center');
  }
  loadBackgroundImage() {
    this.http.get(`${this.configService.image_url}/api/images/background`, {
      responseType: 'blob'
    }).subscribe(blob => {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        this.renderer.setStyle(document.body, 'backgroundImage', `url('${imageUrl}')`);
        this.renderer.setStyle(document.body, 'backgroundSize', 'cover');
        this.renderer.setStyle(document.body, 'backgroundPosition', 'center');
      };
      reader.readAsDataURL(blob);
    });
  }
  sendData() {
    this.flagService.changeMessage({
      msg: 'success'
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ImageUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ImageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_flags_ui_service__WEBPACK_IMPORTED_MODULE_10__.FlagsUiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_11__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_12__.ConfigService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ImageUploadComponent,
    selectors: [["app-image-upload"]],
    decls: 31,
    vars: 13,
    consts: [["style", "color: red; padding: 20px; border: 1px solid red; margin: 20px 0;", 4, "ngIf"], [1, "upload-container", "mat-elevation-z4"], ["enctype", "multipart/form-data", 3, "submit"], ["appearance", "fill", 1, "full-width"], ["matInput", "", "name", "description", "required", "", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", "image/*", "required", "", 3, "change"], ["class", "image-preview", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "upload-btn"], ["class", "image-list", 4, "ngIf"], ["type", "text", 3, "ngModelChange", "ngModel"], [3, "click"], [2, "display", "flex", "flex-wrap", "wrap", "gap", "10px"], ["class", "color-box", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [2, "margin-top", "20px"], ["mat-raised-button", "", 3, "color", "ngStyle"], [2, "color", "red", "padding", "20px", "border", "1px solid red", "margin", "20px 0"], [1, "image-preview"], ["alt", "Image Preview", 3, "src"], [1, "image-list"], [2, "display", "flex"], [1, "image-grid"], ["title", "Click to set as background", 3, "src", "click", 4, "ngFor", "ngForOf"], ["title", "Click to set as background", 3, "click", "src"], [1, "color-box", 3, "click", "ngStyle"]],
    template: function ImageUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "image-upload works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ImageUploadComponent_div_2_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 1)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\uD83D\uDCE4 Upload Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("submit", function ImageUploadComponent_Template_form_submit_6_listener($event) {
          ctx.onSubmit();
          return $event.preventDefault();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-form-field", 3)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ImageUploadComponent_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.description, $event) || (ctx.description = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImageUploadComponent_Template_input_change_11_listener($event) {
          return ctx.onFileChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ImageUploadComponent_div_12_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, ImageUploadComponent_div_15_Template, 10, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Select Background Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div")(22, "div")(23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ImageUploadComponent_Template_input_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.colourData, $event) || (ctx.colourData = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImageUploadComponent_Template_button_click_24_listener() {
          return ctx.addColor();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "ADD color");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, ImageUploadComponent_div_27_Template, 2, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 13)(29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.dataLoadingError);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.imagePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.uploadedImages.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.colourData);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.Colours);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx.isMaterialColor(ctx.selectedColor) ? ctx.selectedColor : null)("ngStyle", !ctx.isMaterialColor(ctx.selectedColor) ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](9, _c0, ctx.selectedColor, ctx.getTextColor(ctx.selectedColor)) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Selected Color: ", ctx.selectedColor || "None", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClientModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule],
    styles: [".upload-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 40px auto;\n  padding: 24px;\n  border-radius: 8px;\n  background-color: #fdfdfd;\n  border: 1px solid #ccc;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  max-width: 100%;\n  border-radius: 8px;\n  border: 1px solid #ddd;\n}\n\n.upload-btn[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}.upload-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 40px auto;\n  padding: 24px;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 1px solid #ccc;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  max-width: 100%;\n  border-radius: 8px;\n  border: 1px solid #ddd;\n}\n\n.upload-btn[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.image-list[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.image-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.image-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 6px;\n  border: 2px solid #ccc;\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n\n.image-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  border-color: #3f51b5;\n  transform: scale(1.05);\n}\n\n\n.color-box[_ngcontent-%COMP%] {\n  font-weight: bold;\n  border-radius: 5px;\n  transition: transform 0.2s ease;\n}\n.color-box[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIsQ0FBQztFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0Msc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltYWdlLXByZXZpZXcgaW1nIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLnVwbG9hZC1idG4ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0udXBsb2FkLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltYWdlLXByZXZpZXcgaW1nIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLnVwbG9hZC1idG4ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1saXN0IHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtZ3JpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtZ3JpZCBpbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmltYWdlLWdyaWQgaW1nOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuXHJcbi5jb2xvci1ib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG59XHJcbi5jb2xvci1ib3g6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 2266:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ 3696);
var _staticBlock;



class UserService {
  constructor(http, configService) {
    this.http = http;
    this.configService = configService;
  }
  //add user
  addUser(user) {
    return this.http.post(`${this.configService.api_url}/auth/register`, user);
  }
  getVersion() {
    return this.http.get(`${this.configService.api_url}/auth/version`);
  }
  getBgColours() {
    return this.http.get(`${this.configService.image_url}/images`, {
      responseType: 'text'
    });
  }
  selectColor(color) {
    return this.http.put(`${this.configService.image_url}/images/activate/` + color, color);
  }
  getActiveColor() {
    return this.http.get(`${this.configService.image_url}/images/a`, {
      responseType: 'text'
    });
  }
  addColor(data) {
    return this.http.post(`${this.configService.image_url}/images`, data, {
      responseType: 'text'
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 2315:
/*!*****************************************!*\
  !*** ./src/app/services/admin.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminGuard: () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ 3067);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;



class AdminGuard {
  constructor(login, router) {
    this.login = login;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.login.isLoggedIn() && this.login.getUserRole() == 'ADMIN') {
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AdminGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AdminGuard,
    factory: AdminGuard.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 2683:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ 3067);
var _staticBlock;









function ProfileComponent_mat_card_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Your Profile Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card-content")(4, "div", 1)(5, "div", 2)(6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "table", 8)(13, "tr")(14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tr")(19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Userid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tr")(24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "tr")(29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "tr")(34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-card-actions", 9)(39, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "UPDATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "SHARE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r0.user.firstName, " ", ctx_r0.user.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("EXAM", ctx_r0.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.user.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.user.authorities[0].authority);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.user.enabled ? "ACTIVE" : "NOTACTIVE");
  }
}
class ProfileComponent {
  constructor(login) {
    this.login = login;
    this.user = null;
  }
  ngOnInit() {
    this.user = this.login.getUser();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "bootstrap-wrapper"], [1, "container"], [1, "container", "text-center"], ["src", "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg", "alt", "", 1, "profile-image"], [1, "mt20"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "table", "text-center"], [1, "text-center"], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ProfileComponent_mat_card_0_Template, 43, 7, "mat-card", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule],
    styles: [".profile-image[_ngcontent-%COMP%] {\n  max-width: 150px;\n  max-height: 150px;\n  border: 2px solid #ff4081;\n  border-radius: 50%;\n}\n\n\n\n\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  border: 0.5px solid #e2e2e2;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTs7O0dBR0c7QUFDSDtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmNDA4MTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLyogLm1hdC1jYXJkIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufSAqL1xyXG4udGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi50YWJsZSB0ciB0ZCB7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgI2UyZTJlMjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 2715:
/*!******************************************!*\
  !*** ./src/app/services/normal.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NormalGuard: () => (/* binding */ NormalGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ 3067);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;



class NormalGuard {
  constructor(login, router) {
    this.login = login;
    this.router = router;
  }
  canActivate(route, state) {
    console.log('NormalGuard: Checking canActivate...');
    const isLoggedIn = this.login.isLoggedIn();
    const userRole = this.login.getUserRole();
    console.log('NormalGuard: isLoggedIn:', isLoggedIn);
    console.log('NormalGuard: userRole:', userRole);
    if (isLoggedIn && userRole == 'NORMAL') {
      console.log('NormalGuard: Access granted.');
      return true;
    }
    console.log('NormalGuard: Access denied. Redirecting to login.');
    this.router.navigate(['login']);
    return false;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NormalGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NormalGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NormalGuard,
    factory: NormalGuard.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 3067:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ 3696);
var _staticBlock;




class LoginService {
  constructor(http, configService) {
    this.http = http;
    this.configService = configService;
    this.loginStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  //current user: which is loggedin
  getCurrentUser(username) {
    return this.http.get(`${this.configService.api_url}/auth/${username}`);
  }
  //generate token
  generateToken(loginData) {
    return this.http.post(`${this.configService.api_url}/auth/generate-token`, loginData);
  }
  //login user: set token in localStorage
  loginUser(token) {
    localStorage.setItem('token', token);
    return true;
  }
  //isLogin: user is logged in or not
  isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }
  // logout : remove token from local storage
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
  //get token
  getToken() {
    return localStorage.getItem('token');
  }
  //set userDetail
  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  //getUser
  getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }
  //get user role
  getUserRole() {
    let user = this.getUser();
    console.log(user);
    return user.userRoles[0].role.roleId == 44 ? "ADMIN" : "NORMAL";
    // removed by dead control flow
{}
  }
  static #_ = _staticBlock = () => (this.ɵfac = function LoginService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoginService,
    factory: LoginService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 3095:
/*!*****************************************************!*\
  !*** ./src/app/pages/user/start/start.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartComponent: () => (/* binding */ StartComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 4102);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 5430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/question.service */ 7002);
/* harmony import */ var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/quiz.service */ 4571);
var _staticBlock;


















function StartComponent_div_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " On Going Quiz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.questions[0].quiz.title);
  }
}
function StartComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12)(1, "p")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "mat-divider")(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 17)(8, "div", 18)(9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function StartComponent_div_0_div_24_Template_input_ngModelChange_9_listener($event) {
      const q_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](q_r4.givenAnswer, $event) || (q_r4.givenAnswer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 18)(12, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function StartComponent_div_0_div_24_Template_input_ngModelChange_12_listener($event) {
      const q_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](q_r4.givenAnswer, $event) || (q_r4.givenAnswer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 17)(15, "div", 18)(16, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function StartComponent_div_0_div_24_Template_input_ngModelChange_16_listener($event) {
      const q_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](q_r4.givenAnswer, $event) || (q_r4.givenAnswer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 18)(19, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function StartComponent_div_0_div_24_Template_input_ngModelChange_19_listener($event) {
      const q_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](q_r4.givenAnswer, $event) || (q_r4.givenAnswer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Q ", i_r5 + 1, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", q_r4.content, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", q_r4.option1)("name", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", q_r4.givenAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", q_r4.option1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", q_r4.option2)("name", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", q_r4.givenAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", q_r4.option2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", q_r4.option3)("name", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", q_r4.givenAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", q_r4.option3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", q_r4.option4)("name", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", q_r4.givenAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", q_r4.option4, " ");
  }
}
function StartComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 5)(7, "mat-card", 6)(8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, StartComponent_div_0_ng_container_9_Template, 5, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8)(11, "mat-card", 9)(12, "mat-card-header")(13, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Progress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " Quiz will automatically submitted when timer reaches to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "0:0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "mat-card-content")(20, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "mat-divider", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, StartComponent_div_0_div_24_Template, 21, 18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 14)(26, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function StartComponent_div_0_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submitQuiz());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, " Submit Quiz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.questions);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getFormattedTime());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r1.timer / (ctx_r1.questions.length * 2 * 60) * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.questions);
  }
}
function StartComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 17)(2, "div", 20)(3, "mat-card")(4, "mat-card-header")(5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Quiz Result ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-card-content", 10)(8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-card-actions", 10)(15, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Marks Got : ", ctx_r1.marksGot);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Correct Answers : ", ctx_r1.correctAnswers);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Questions Attempted :", ctx_r1.attempted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", "/user-dashboard/0");
  }
}
class StartComponent {
  constructor(locationSt, _route, _question, _quiz) {
    this.locationSt = locationSt;
    this._route = _route;
    this._question = _question;
    this._quiz = _quiz;
    this.marksGot = 0;
    this.correctAnswers = 0;
    this.attempted = 0;
    this.isSubmit = false;
  }
  ngOnInit() {
    this.preventBackButton();
    this.qid = this._route.snapshot.params.qid;
    console.log('StartComponent: Initial qid:', this.qid); // Log initial qid
    this.loadQuestions();
    console.log('StartComponent: isSubmit (ngOnInit):', this.isSubmit); // Log initial isSubmit
  }
  loadQuestions() {
    console.log('StartComponent: Loading questions for qid:', this.qid); // Log question loading initiation
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(data => {
      this.questions = data;
      console.log('StartComponent: Questions loaded:', this.questions); // Log loaded questions
      if (this.questions && this.questions.length > 0) {
        this.timer = this.questions.length * 2 * 60;
        console.log('StartComponent: Timer initialized to:', this.timer); // Log timer value
        this.startTimer();
      } else {
        console.warn('StartComponent: No questions loaded or questions array is empty.');
      }
    }, error => {
      console.log(error);
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Error', 'Error in loading questions of quiz', 'error');
      console.error('StartComponent: Error loading questions:', error); // Log error
    });
  }
  preventBackButton() {
    history.pushState(null, null, location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, null, location.href);
    });
  }
  submitQuiz() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: `Submit`,
      icon: 'info'
    }).then(e => {
      if (e.isConfirmed) {
        this.evalQuiz();
      }
    });
  }
  startTimer() {
    let t = window.setInterval(() => {
      //code
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000);
  }
  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }
  evalQuiz() {
    console.log('StartComponent: evalQuiz() called. Submitting quiz...'); // Log evalQuiz call
    this._question.evalQuiz(this.questions).subscribe(data => {
      console.log('StartComponent: Eval Quiz data received:', data); // Log eval quiz data
      this.marksGot = data.marksGot;
      this.correctAnswers = data.correctAnswers;
      this.attempted = data.attempted;
      this.isSubmit = true;
      console.log('StartComponent: isSubmit after evalQuiz:', this.isSubmit); // Log isSubmit after eval
    }, error => {
      console.log(error);
      console.error('StartComponent: Error evaluating quiz:', error); // Log error
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function StartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.LocationStrategy), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_12__.QuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_13__.QuizService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: StartComponent,
    selectors: [["app-start"]],
    decls: 2,
    vars: 2,
    consts: [["class", "bootstrap-wrapper", 4, "ngIf"], [1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-2"], [1, "col-md-10", "offset-md-1"], [1, "mt10", "mr-5", "justify-content-center"], [4, "ngIf"], [1, "timer-section-container", "mb10"], [1, "timer-card"], [1, "text-center"], ["mode", "determinate", "color", "accent", 2, "margin", "auto", 3, "value"], [1, "mb20"], ["class", "mb20", 4, "ngFor", "ngForOf"], [1, "container", "text-center", "mt20"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "ml10", 3, "innerHTML"], [1, "row", "mt20"], [1, "col-md-6"], ["type", "radio", 3, "ngModelChange", "value", "name", "ngModel"], [1, "col-md-6", "offset-md-3"], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent", 3, "routerLink"]],
    template: function StartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, StartComponent_div_0_Template, 28, 4, "div", 0)(1, StartComponent_div_1_Template, 19, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isSubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isSubmit);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner],
    styles: [".timer-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 150px;\n}\n\n.timer-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\n.timer-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.timer-section-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%; \n\n}\n\n.timer-section-container[_ngcontent-%COMP%]   .timer-card[_ngcontent-%COMP%] {\n  max-width: 400px; \n\n  width: 100%; \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlci9zdGFydC9zdGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVyxFQUFFLDZDQUE2QztBQUM1RDs7QUFFQTtFQUNFLGdCQUFnQixFQUFFLDRDQUE0QztFQUM5RCxXQUFXLEVBQUUsMkJBQTJCO0FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVyLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLnRpbWVyLWNhcmQgbWF0LWNhcmQtaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpbWVyLWNhcmQgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aW1lci1zZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTsgLyogRW5zdXJlIGl0IHRha2VzIGZ1bGwgd2lkdGggb2YgaXRzIHBhcmVudCAqL1xyXG59XHJcblxyXG4udGltZXItc2VjdGlvbi1jb250YWluZXIgLnRpbWVyLWNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgZm9yIGRlc2lyZWQgY2FyZCB3aWR0aCAqL1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBNYWtlIGl0IGZpbGwgbWF4LXdpZHRoICovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 3175:
/*!**********************************************************!*\
  !*** ./src/app/pages/admin/welcome/welcome.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeComponent: () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;

class WelcomeComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = _staticBlock = () => (this.ɵfac = function WelcomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WelcomeComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WelcomeComponent,
    selectors: [["app-welcome"]],
    decls: 2,
    vars: 0,
    template: function WelcomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to ADMIN Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 3696:
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3855);
var _staticBlock;


class ConfigService {
  constructor(http) {
    this.http = http;
  }
  loadConfig() {
    const timestamp = new Date().getTime();
    return this.http.get(`./assets/config.json?t=${timestamp}`).toPromise().then(data => {
      this.config = data;
    });
  }
  get api_url() {
    if (!this.config) {
      throw Error('Config file not loaded!');
    }
    return this.config.api_url;
  }
  get image_url() {
    if (!this.config) {
      throw Error('Config file not loaded!');
    }
    return this.config.image_url;
  }
  get rabbitmq_url() {
    if (!this.config) {
      throw Error('Config file not loaded!');
    }
    return this.config.rabbitmq_url;
  }
  get upload_img_enabled() {
    if (!this.config) {
      throw Error('Config file not loaded!');
    }
    return this.config.upload_img_enabled;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ConfigService,
    factory: ConfigService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 3707:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/admin/view-quiz-questions/view-quiz-questions.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewQuizQuestionsComponent: () => (/* binding */ ViewQuizQuestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/question.service */ 7002);
var _staticBlock;















function ViewQuizQuestionsComponent_mat_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-content")(2, "p")(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 8)(7, "div", 2)(8, "div", 9)(9, "p")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 9)(14, "p")(15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 2)(19, "div", 9)(20, "p")(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 9)(25, "p")(26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "p", 0)(31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Correct Answer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "mat-card-action")(35, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViewQuizQuestionsComponent_mat_card_8_Template_button_click_35_listener() {
      const q_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.deleteQuestion(q_r2.quesId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Q ", i_r4 + 1, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", q_r2.content, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", q_r2.option1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", q_r2.option2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", q_r2.option3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", q_r2.option4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", q_r2.answer);
  }
}
class ViewQuizQuestionsComponent {
  constructor(_route, _question, _snak) {
    this._route = _route;
    this._question = _question;
    this._snak = _snak;
    this.questions = [];
  }
  ngOnInit() {
    this.qId = this._route.snapshot.params.qid;
    this.qTitle = this._route.snapshot.params.title;
    console.log('qId:', this.qId, 'qTitle:', this.qTitle); // Added log
    this._question.getQuestionsOfQuiz(this.qId).subscribe(data => {
      console.log(data);
      this.questions = data;
    }, error => {
      console.log(error);
    });
  }
  //delete quesion
  deleteQuestion(qid) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure , want to delete this question?'
    }).then(result => {
      if (result.isConfirmed) {
        //confim
        this._question.deleteQuestion(qid).subscribe(data => {
          this._snak.open('Question Deleted ', '', {
            duration: 3000
          });
          this.questions = this.questions.filter(q => q.quesId != qid);
        }, error => {
          this._snak.open('Error in deleting questions', '', {
            duration: 3000
          });
          console.log(error);
        });
      }
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ViewQuizQuestionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ViewQuizQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_11__.QuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ViewQuizQuestionsComponent,
    selectors: [["app-view-quiz-questions"]],
    decls: 9,
    vars: 3,
    consts: [[1, "mt20"], [1, "bootstrap-wrapper"], [1, "row"], [1, "col-md-12"], [1, "container", "text-center"], ["mat-raised-button", "", "color", "accent", 3, "routerLink"], ["class", "mt20", 4, "ngFor", "ngForOf"], [1, "ml20", 3, "innerHTML"], [1, "container-fluid"], [1, "col-md-6"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "primary"]],
    template: function ViewQuizQuestionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " Add Question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ViewQuizQuestionsComponent_mat_card_8_Template, 39, 7, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Questions of ", ctx.qTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", "/admin/add-question/" + ctx.qId + "/" + ctx.qTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.questions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 4119:
/*!*********************************************************!*\
  !*** ./src/app/pages/user/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/category.service */ 4354);
/* harmony import */ var src_app_flags_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/flags-ui.service */ 4253);
var _staticBlock;















function SidebarComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 5)(1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/user-dashboard/" + c_r1.cid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", c_r1.title, " ");
  }
}
class SidebarComponent {
  constructor(_cat, _snack, flagService) {
    this._cat = _cat;
    this._snack = _snack;
    this.flagService = flagService;
    this.backgroundColor = 'pink'; // Initialize with a default color
  }
  ngOnInit() {
    this._cat.categories().subscribe(data => {
      this.categories = data;
    }, error => {
      this._snack.open('Error in loading categories from server', '', {
        duration: 3000
      });
    });
    this.flagService.getcolor.subscribe(data => {
      if (data && data.color) {
        this.backgroundColor = data.color;
      }
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_flags_ui_service__WEBPACK_IMPORTED_MODULE_8__.FlagsUiService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["app-sidebar-user"]],
    decls: 9,
    vars: 3,
    consts: [[1, "scrollable-sidebar"], ["mat-subheader", ""], ["mat-list-item", "", "routerLink", "/user-dashboard/0"], ["mat-list-icon", ""], ["mat-list-item", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "routerLink"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card")(1, "mat-action-list", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Available Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 2)(5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " All Quizzes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, SidebarComponent_button_8_Template, 4, 2, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.categories);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatActionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListSubheaderCssMatStyler, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule],
    styles: [".scrollable-sidebar[_ngcontent-%COMP%] {\n  max-height: 650px; \n\n  overflow-y: auto;\n  border: 1px solid #eee; \n\n  padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlci9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFFLDRDQUE0QztFQUMvRCxnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUUsa0NBQWtDO0VBQzFELFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxhYmxlLXNpZGViYXIge1xyXG4gIG1heC1oZWlnaHQ6IDY1MHB4OyAvKiBBZGp1c3RlZCB0byBzaG93IGFwcHJveGltYXRlbHkgMTMgaXRlbXMgKi9cclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7IC8qIE9wdGlvbmFsOiBmb3IgdmlzdWFsIGJvdW5kYXJ5ICovXHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 4132:
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationComponent: () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _rabbitmq_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rabbitmq.service */ 43);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ 3696);
var _staticBlock;








function NotificationComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NotificationComponent_div_0_div_6_Template_form_ngSubmit_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.sendMessage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function NotificationComponent_div_0_div_6_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.newMessage, $event) || (ctx_r1.newMessage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newMessage);
  }
}
function NotificationComponent_div_0_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Message:-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", msg_r4, " ");
  }
}
function NotificationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " RabbitMQ Realtime Messaging ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationComponent_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NotificationComponent_div_0_div_6_Template, 5, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NotificationComponent_div_0_p_8_Template, 4, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationComponent_div_0_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.getHistory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.checkUorA);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.visibleMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.history);
  }
}
class NotificationComponent {
  constructor(websocketService, http, configService) {
    this.websocketService = websocketService;
    this.http = http;
    this.configService = configService;
    this.messages = [];
    this.newMessage = '';
    this.checkUorA = false;
    this.type = 'info';
    this.visible = false;
    this.hflag = false;
    this.visibleMessages = [];
    // Toast variables
    this.toastVisible = false;
    this.toastMessage = '';
    this.toastType = 'info';
  }
  ngOnInit() {
    this.history = 'See all messages from Redis memory';
    const check = localStorage.getItem('username');
    if (check === 'admin') this.checkUorA = true;
    this.websocketService.messageStream$.subscribe(msg => {
      this.messages.push(msg);
      this.updateVisibleMessages();
      this.showToast(msg, 'info');
    });
  }
  toggleVisibility() {
    this.visible = !this.visible;
  }
  hide() {
    this.visible = false;
  }
  getHistory() {
    this.hflag = !this.hflag;
    this.history = this.hflag ? 'Hide all from Redis memory' : 'See all messages from Redis memory';
    this.http.get(`${this.configService.rabbitmq_url}/api/messages/history`, {
      responseType: 'text'
    }).subscribe(response => {
      this.messages = JSON.parse(response);
      this.updateVisibleMessages();
    });
  }
  updateVisibleMessages() {
    this.visibleMessages = this.hflag ? this.messages : this.messages.slice(-2);
  }
  sendMessage(event) {
    event.preventDefault();
    if (!this.newMessage.trim()) return;
    this.http.post(`${this.configService.rabbitmq_url}/api/messages/send`, this.newMessage, {
      responseType: 'text'
    }).subscribe(() => {
      this.newMessage = '';
    });
  }
  // Toast notification method
  showToast(message, type) {
    this.toastMessage = message;
    this.toastType = type;
    this.toastVisible = true;
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toastVisible = false;
    }, 3000);
  }
  // Optional backward compatibility for old calls
  showNotificationWithTimeout(message, type) {
    this.showToast(message, type);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NotificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_rabbitmq_service__WEBPACK_IMPORTED_MODULE_4__.RabbitmqService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NotificationComponent,
    selectors: [["app-notification"]],
    inputs: {
      type: "type",
      visible: "visible"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "notification", 3, "ngClass", 4, "ngIf"], [1, "notification", 3, "ngClass"], [1, "container"], [3, "click"], [4, "ngIf"], [1, "message-box"], [4, "ngFor", "ngForOf"], [3, "ngSubmit"], ["type", "text", "name", "message", "required", "", "placeholder", "Type your message", 3, "ngModelChange", "ngModel"], ["type", "submit"]],
    template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NotificationComponent_div_0_Template, 11, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.visible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: [".notification[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-radius: 4px;\n  position: fixed;\n  top: 62px;\n  right: 1px;\n  z-index: 1000;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width: 250px;\n}\n\n.notification.success[_ngcontent-%COMP%] {\n  background-color: #2f3530;\n}\n\n.notification.error[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n\n.notification.info[_ngcontent-%COMP%] {\n  background-color: #393d40;\n}\n\n.notification.warning[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n}\n\n.notification[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n  margin-left: 10px;\n}\n\n.message-box[_ngcontent-%COMP%] {\n  max-height: 200px; \n\n  overflow-y: auto;\n  padding: 8px;\n\n  background-color: #393d40;\n}\n.message-box[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.message-box[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color:#393d40;\n \n}\n.notification-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 80vh;\n}\n\n.notification-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  border-radius: 8px;\n  max-width: 450px;\n  width: 100%;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n  text-align: center;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.send-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 8px;\n  margin-right: 10px;\n}\n\n.send-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  cursor: pointer;\n}\n\n.message-box[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: left;\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n.message-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n\n\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  padding: 15px 25px;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 500;\n  box-shadow: 0 4px 10px rgba(0,0,0,0.2);\n  z-index: 1000;\n  opacity: 0.95;\n}\n\n.toast.success[_ngcontent-%COMP%] { background-color: #4caf50; }\n.toast.error[_ngcontent-%COMP%] { background-color: #f44336; }\n.toast.info[_ngcontent-%COMP%] { background-color: #2196f3; }\n.toast.warning[_ngcontent-%COMP%] { background-color: #ff9800; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUsZ0NBQWdDO0VBQ25ELGdCQUFnQjtFQUNoQixZQUFZOztFQUVaLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0JBQXdCOztBQUUxQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUEsaUJBQWlCLHlCQUF5QixFQUFFO0FBQzVDLGVBQWUseUJBQXlCLEVBQUU7QUFDMUMsY0FBYyx5QkFBeUIsRUFBRTtBQUN6QyxpQkFBaUIseUJBQXlCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uIHtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDYycHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi5zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzNTMwO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLmVycm9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLmluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNkNDA7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ud2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1ib3gge1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4OyAvKiBBZGp1c3QgYmFzZWQgb24geW91ciBsYXlvdXQgKi9cclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2Q0MDtcclxufVxyXG4ubWVzc2FnZS1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzOTNkNDA7XHJcbiBcclxufVxyXG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNsb3NlLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZW5kLXNlY3Rpb24gaW5wdXQge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnNlbmQtc2VjdGlvbiBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lc3NhZ2UtYm94IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm1lc3NhZ2UtYm94IHAge1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi8qIFRvYXN0IHN0eWxlcyAqL1xyXG4udG9hc3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDMwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgb3BhY2l0eTogMC45NTtcclxufVxyXG5cclxuLnRvYXN0LnN1Y2Nlc3MgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyB9XHJcbi50b2FzdC5lcnJvciB7IGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7IH1cclxuLnRvYXN0LmluZm8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XHJcbi50b2FzdC53YXJuaW5nIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDsgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 4253:
/*!*************************************!*\
  !*** ./src/app/flags-ui.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlagsUiService: () => (/* binding */ FlagsUiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ 2266);
var _staticBlock;



class FlagsUiService {
  constructor(userService) {
    this.userService = userService;
    this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.currentMessage$ = this.messageSource.asObservable();
    // Start with default color
    this.bgColor = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      color: 'accept'
    });
    this.getcolor = this.bgColor.asObservable();
    this.colorFetched = false; // Tracks if API was already called
  }
  /**
   * Call this in component ngOnInit() – it will fetch from API only once.
   */
  initColorOnce() {
    if (!this.colorFetched) {
      this.colorFetched = true;
      this.fetchColorFromServer();
    }
  }
  /**
   * Called once on init if no color has been fetched
   */
  fetchColorFromServer() {
    this.userService.getActiveColor().subscribe({
      next: data => {
        const parsed = typeof data === 'string' ? JSON.parse(data) : data;
        console.log('Fetched color from server:', parsed);
        this.bgColor.next(parsed); // full object like { color: 'red' }
      },
      error: err => {
        console.error('Failed to load active color', err);
      }
    });
  }
  /**
   * When user selects or updates a color.
   */
  setColor(data) {
    console.log("flag data:", JSON.stringify(data));
    if (!data || !data.color) {
      console.warn("Invalid color data provided to setColor:", data);
      return;
    }
    this.userService.selectColor(data.color).subscribe(response => {
      console.log("Color from backend:", response);
    }, error => {
      console.error("Error for activating color:", error);
    });
    this.bgColor.next(data);
  }
  /**
   * Optional method for other component communication
   */
  changeMessage(data) {
    this.messageSource.next(data);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function FlagsUiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FlagsUiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FlagsUiService,
    factory: FlagsUiService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 4354:
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryService: () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ 3696);
var _staticBlock;



class CategoryService {
  constructor(_http, configService) {
    this._http = _http;
    this.configService = configService;
  }
  //load all the cateogries
  categories() {
    return this._http.get(`${this.configService.api_url}/service1/category/getList`);
  }
  //add new category
  addCategory(category) {
    return this._http.post(`${this.configService.api_url}/service1/category/create`, category);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function CategoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CategoryService,
    factory: CategoryService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ 5312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/services/config.service */ 3696);
/* harmony import */ var _app_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/services/auth.interceptor */ 5672);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app/pages/home/home.component */ 5047);
/* harmony import */ var _app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app/pages/login/login.component */ 7195);
/* harmony import */ var _app_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app/pages/signup/signup.component */ 7013);
/* harmony import */ var _app_pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app/pages/admin/dashboard/dashboard.component */ 5255);
/* harmony import */ var _app_pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app/pages/user/user-dashboard/user-dashboard.component */ 345);
/* harmony import */ var _app_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app/pages/profile/profile.component */ 2683);
/* harmony import */ var _app_pages_admin_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app/pages/admin/welcome/welcome.component */ 3175);
/* harmony import */ var _app_pages_admin_view_categories_view_categories_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app/pages/admin/view-categories/view-categories.component */ 1779);
/* harmony import */ var _app_pages_admin_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app/pages/admin/add-category/add-category.component */ 8089);
/* harmony import */ var _app_pages_admin_view_quizzes_view_quizzes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app/pages/admin/view-quizzes/view-quizzes.component */ 8831);
/* harmony import */ var _app_pages_admin_add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app/pages/admin/add-quiz/add-quiz.component */ 1343);
/* harmony import */ var _app_pages_admin_update_quiz_update_quiz_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app/pages/admin/update-quiz/update-quiz.component */ 8595);
/* harmony import */ var _app_pages_admin_view_quiz_questions_view_quiz_questions_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app/pages/admin/view-quiz-questions/view-quiz-questions.component */ 3707);
/* harmony import */ var _app_pages_admin_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app/pages/admin/add-question/add-question.component */ 5389);
/* harmony import */ var _app_pages_user_load_quiz_load_quiz_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app/pages/user/load-quiz/load-quiz.component */ 539);
/* harmony import */ var _app_pages_user_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app/pages/user/instructions/instructions.component */ 8643);
/* harmony import */ var _app_pages_user_start_start_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app/pages/user/start/start.component */ 3095);
/* harmony import */ var _app_services_admin_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app/services/admin.guard */ 2315);
/* harmony import */ var _app_services_normal_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app/services/normal.guard */ 2715);
/* harmony import */ var _app_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./app/image-upload/image-upload.component */ 2176);
// src/main.ts









// Import your components




















if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.enableProdMode)();
}
// Define routes
const routes = [{
  path: '',
  component: _app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__.HomeComponent,
  pathMatch: 'full'
}, {
  path: 'home',
  component: _app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__.HomeComponent
}, {
  path: 'signup',
  component: _app_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__.SignupComponent
}, {
  path: 'login',
  component: _app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__.LoginComponent
}, {
  path: 'admin',
  component: _app_pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__.DashboardComponent,
  canActivate: [_app_services_admin_guard__WEBPACK_IMPORTED_MODULE_28__.AdminGuard],
  children: [{
    path: '',
    component: _app_pages_admin_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_17__.WelcomeComponent,
    pathMatch: 'full'
  }, {
    path: 'profile',
    component: _app_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__.ProfileComponent
  }, {
    path: 'categories',
    component: _app_pages_admin_view_categories_view_categories_component__WEBPACK_IMPORTED_MODULE_18__.ViewCategoriesComponent
  }, {
    path: 'add-category',
    component: _app_pages_admin_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_19__.AddCategoryComponent
  }, {
    path: 'quizzes',
    component: _app_pages_admin_view_quizzes_view_quizzes_component__WEBPACK_IMPORTED_MODULE_20__.ViewQuizzesComponent
  }, {
    path: 'image-upload',
    component: _app_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_30__.ImageUploadComponent
  }, {
    path: 'add-quiz',
    component: _app_pages_admin_add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_21__.AddQuizComponent
  }, {
    path: 'quiz/:qid',
    component: _app_pages_admin_update_quiz_update_quiz_component__WEBPACK_IMPORTED_MODULE_22__.UpdateQuizComponent
  }, {
    path: 'view-questions/:qid/:title',
    component: _app_pages_admin_view_quiz_questions_view_quiz_questions_component__WEBPACK_IMPORTED_MODULE_23__.ViewQuizQuestionsComponent
  }, {
    path: 'add-question/:qid/:title',
    component: _app_pages_admin_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_24__.AddQuestionComponent
  }]
}, {
  path: 'user-dashboard',
  component: _app_pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_15__.UserDashboardComponent,
  canActivate: [_app_services_normal_guard__WEBPACK_IMPORTED_MODULE_29__.NormalGuard],
  children: [{
    path: ':catId',
    component: _app_pages_user_load_quiz_load_quiz_component__WEBPACK_IMPORTED_MODULE_25__.LoadQuizComponent
  }, {
    path: 'instructions/:qid',
    component: _app_pages_user_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_26__.InstructionsComponent
  }]
}, {
  path: 'start/:qid',
  component: _app_pages_user_start_start_component__WEBPACK_IMPORTED_MODULE_27__.StartComponent,
  canActivate: [_app_services_normal_guard__WEBPACK_IMPORTED_MODULE_29__.NormalGuard]
}];
// Bootstrap Angular with hash routing and app initializer
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, {
  providers: [_app_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__.authInterceptorProviders, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.withInterceptorsFromDi)()), _app_services_config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService, (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.provideAnimations)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_10__.provideRouter)(routes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_10__.withHashLocation)()),
  // ✅ hash routing to fix 404 on refresh
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.provideAppInitializer)(() => {
    const configService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService);
    return configService.loadConfig(); // ✅ return Promise<void> directly
  })]
}).catch(err => console.error(err));

/***/ }),

/***/ 4571:
/*!******************************************!*\
  !*** ./src/app/services/quiz.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizService: () => (/* binding */ QuizService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ 3696);
var _staticBlock;



class QuizService {
  constructor(_http, configService) {
    this._http = _http;
    this.configService = configService;
  }
  quizzes() {
    return this._http.get(`${this.configService.api_url}/service2/quiz/getList`);
  }
  //add quiz
  addQuiz(quiz) {
    return this._http.post(`${this.configService.api_url}/service2/quiz/create`, quiz);
  }
  //delete quiz
  deleteQuiz(qId) {
    return this._http.delete(`${this.configService.api_url}/service2/quiz/${qId}`);
  }
  //get the single quiz
  getQuiz(qId) {
    return this._http.get(`${this.configService.api_url}/service2/quiz/${qId}`);
  }
  //update quiz
  updateQuiz(quiz) {
    return this._http.put(`${this.configService.api_url}/service2/quiz/`, quiz);
  }
  //get quizzes of category
  getQuizzesOfCategory(cid) {
    return this._http.get(`${this.configService.api_url}/service2/quiz/category/${cid}`);
  }
  //qet active quizzes
  getActiveQuizzes() {
    return this._http.get(`${this.configService.api_url}/service2/quiz/active`);
  }
  //get active quizzes of category
  getActiveQuizzesOfCategory(cid) {
    return this._http.get(`${this.configService.api_url}/service2/quiz/category/active/${cid}`);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function QuizService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: QuizService,
    factory: QuizService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 5047:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;

class HomeComponent {
  constructor() {
    this.fullText = `
<h1>Welcome to the Exam Portal!</h1>

<h2>This system helps manage:</h2>
- Students
- Exams
- Results
- Reports
we take the Exam and Imporve our knowlege .
This Application we helps to develop the skils and helps improve our skills and talents .
For exams its is best choice to prepare.
Easily track and manage all data in one place.
  `;
    this.typedText = ""; // will hold the text being typed
    this.i = 0; // pointer to current character
  }
  ngOnInit() {
    this.typingEffect();
  }
  typingEffect() {
    if (this.i < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.i);
      this.i++;
      setTimeout(() => this.typingEffect(), 50); // typing speed
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomeComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 2,
    vars: 1,
    consts: [[1, "typing-container"], [3, "innerHTML"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomProperty"]("innerHTML", ctx.typedText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    },
    styles: [".typing-container[_ngcontent-%COMP%] {\n  font-family: 'Courier New', monospace;\n  white-space: pre-wrap;   \n\n  overflow: hidden;\n  border-right: 2px solid #000;\n  animation: _ngcontent-%COMP%_blink 0.7s step-end infinite alternate;\n  font-size: 18px;\n  line-height: 1.6;\n  padding: 20px;\n  font-weight: bold;       \n\n  color: #1e40af;     \n   text-align: center;           \n\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  50% { border-color: transparent; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMscUJBQXFCLElBQUksbUNBQW1DO0VBQzVELGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsaURBQWlEO0VBQ2pELGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQixRQUFRLG1CQUFtQjtFQUM1QyxjQUFjO0dBQ2Isa0JBQWtCLFlBQVksZUFBZTtBQUNoRDs7QUFFQTtFQUNFLE1BQU0seUJBQXlCLEVBQUU7QUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwaW5nLWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7ICAgLyogcHJlc2VydmUgbGluZSBicmVha3MgJiBzcGFjaW5nICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDAwO1xyXG4gIGFuaW1hdGlvbjogYmxpbmsgMC43cyBzdGVwLWVuZCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDsgICAgICAgLyogTWFrZSB0ZXh0IGJvbGQgKi9cclxuICBjb2xvcjogIzFlNDBhZjsgICAgIFxyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgICAgICAvKiBCbHVlIGNvbG9yICovXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmsge1xyXG4gIDUwJSB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 5255:
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 9179);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;

 // Import the admin sidebar



class DashboardComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = _staticBlock = () => (this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 7,
    vars: 0,
    consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-2"], [1, "col-md-10"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 5389:
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/add-question/add-question.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddQuestionComponent: () => (/* binding */ AddQuestionComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 4287);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5759);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 6060);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 9743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/question.service */ 7002);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8388);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 8724);
var _staticBlock;






















function AddQuestionComponent_mat_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r0.question.option1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.question.option1);
  }
}
function AddQuestionComponent_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r0.question.option2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.question.option2);
  }
}
function AddQuestionComponent_mat_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r0.question.option3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.question.option3);
  }
}
function AddQuestionComponent_mat_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r0.question.option4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.question.option4);
  }
}
class AddQuestionComponent {
  constructor(_route, _question, _snack // Inject MatSnackBar
  ) {
    this._route = _route;
    this._question = _question;
    this._snack = _snack;
    this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
    this.question = {
      quiz: {},
      content: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: ''
    };
  }
  ngOnInit() {
    this.qId = this._route.snapshot.params.qid;
    this.qTitle = this._route.snapshot.params.title;
    this.question.quiz['qId'] = this.qId;
  }
  formSubmit() {
    console.log('AddQuestionComponent: Form submission initiated.');
    console.log('Question data (before validation):', this.question);
    if (this.question.content.trim() == '' || this.question.content == null) {
      this._snack.open('Question content is required !!', '', {
        duration: 3000
      });
      console.warn('AddQuestionComponent: Validation failed - content missing.');
      return;
    }
    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      this._snack.open('Option 1 is required !!', '', {
        duration: 3000
      });
      console.warn('AddQuestionComponent: Validation failed - option1 missing.');
      return;
    }
    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      this._snack.open('Option 2 is required !!', '', {
        duration: 3000
      });
      console.warn('AddQuestionComponent: Validation failed - option2 missing.');
      return;
    }
    if (this.question.answer.trim() == '' || this.question.answer == null) {
      this._snack.open('Answer is required !!', '', {
        duration: 3000
      });
      console.warn('AddQuestionComponent: Validation failed - answer missing.');
      return;
    }
    //form submit
    console.log('AddQuestionComponent: Validation passed. Attempting to add question...');
    this._question.addQuestion(this.question).subscribe(data => {
      console.log('AddQuestionComponent: Question added successfully:', data);
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Success ', 'Question Added. Add Another one', 'success');
      this.question.content = '';
      this.question.option1 = '';
      this.question.option2 = '';
      this.question.option3 = '';
      this.question.option4 = '';
      this.question.answer = '';
    }, error => {
      console.error('AddQuestionComponent: Error in adding question:', error);
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error', 'Error in adding question', 'error');
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AddQuestionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AddQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_13__.QuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: AddQuestionComponent,
    selectors: [["app-add-question"]],
    decls: 51,
    vars: 13,
    consts: [[1, "bootstrap-wrapper"], [1, "row", "mt20"], [1, "col-md-12"], [2, "font-weight", "bold"], [1, "mt20", 3, "submit"], [1, "w100"], ["required", "", "rows", "8", "name", "content", "matInput", "", "placeholder", "Enter here", 3, "ngModelChange", "ngModel"], ["name", "content", 3, "ngModelChange", "editor", "ngModel"], [1, "row"], [1, "col-md-6"], ["required", "", "name", "option1", "type", "text", "matInput", "", 3, "ngModelChange", "ngModel"], ["required", "", "name", "option2", "type", "text", "matInput", "", 3, "ngModelChange", "ngModel"], ["name", "option3", "type", "text", "matInput", "", 3, "ngModelChange", "ngModel"], ["name", "option4", "type", "text", "matInput", "", 3, "ngModelChange", "ngModel"], ["required", "", "name", "answer", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngIf"], [1, "container", "text-center"], ["mat-raised-button", "", "color", "accent"], [3, "value"]],
    template: function AddQuestionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Add Question to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-card")(8, "mat-card-header")(9, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " Enter the detail of the new question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "mat-card-content")(12, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("submit", function AddQuestionComponent_Template_form_submit_12_listener() {
          return ctx.formSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "mat-form-field", 5)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Write question content");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuestionComponent_Template_textarea_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.question.content, $event) || (ctx.question.content = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "ckeditor", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuestionComponent_Template_ckeditor_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.question.content, $event) || (ctx.question.content = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 8)(19, "div", 9)(20, "mat-form-field", 5)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "Enter Option1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.question.option1, $event) || (ctx.question.option1 = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 9)(25, "mat-form-field", 5)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Enter Option2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.question.option2, $event) || (ctx.question.option2 = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 8)(30, "div", 9)(31, "mat-form-field", 5)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Enter Option3");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.question.option3, $event) || (ctx.question.option3 = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 9)(36, "mat-form-field", 5)(37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "Enter Option4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.question.option4, $event) || (ctx.question.option4 = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "mat-form-field", 5)(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "Select Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AddQuestionComponent_Template_mat_select_ngModelChange_43_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.question.answer, $event) || (ctx.question.answer = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, AddQuestionComponent_mat_option_44_Template, 2, 2, "mat-option", 15)(45, AddQuestionComponent_mat_option_45_Template, 2, 2, "mat-option", 15)(46, AddQuestionComponent_mat_option_46_Template, 2, 2, "mat-option", 15)(47, AddQuestionComponent_mat_option_47_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 16)(49, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.qTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.question.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("editor", ctx.Editor);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.question.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.question.option1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.question.option2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.question.option3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.question.option4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.question.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.question.option1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.question.option2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.question.option3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.question.option4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__.CKEditorModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__.CKEditorComponent],
    styles: [".w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRkLXF1ZXN0aW9uL2FkZC1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLncxMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;

class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = _staticBlock = () => (this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FooterComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 0,
    vars: 0,
    template: function FooterComponent_Template(rf, ctx) {},
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 5672:
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor),
/* harmony export */   authInterceptorProviders: () => (/* binding */ authInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ 3067);
var _staticBlock;



class AuthInterceptor {
  constructor(login) {
    this.login = login;
  }
  intercept(req, next) {
    //add the jwt token (localStorage) request
    let authReq = req;
    const token = this.login.getToken();
    console.log('inside interceptor');
    if (token != null) {
      authReq = authReq.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(authReq);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  }));
}
_staticBlock();
const authInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}];

/***/ }),

/***/ 7002:
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionService: () => (/* binding */ QuestionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ 3696);
var _staticBlock;



class QuestionService {
  constructor(_http, configService) {
    this._http = _http;
    this.configService = configService;
  }
  getQuestionsOfQuiz(qid) {
    return this._http.get(`${this.configService.api_url}/service1/question/quiz/all/${qid}`);
  }
  getQuestionsOfQuizForTest(qid) {
    return this._http.get(`${this.configService.api_url}/service1/question/quiz/${qid}`);
  }
  //add question
  addQuestion(question) {
    return this._http.post(`${this.configService.api_url}/service1/question/`, question);
  }
  //delete question
  deleteQuestion(questionId) {
    return this._http.delete(`${this.configService.api_url}/service1/question/${questionId}`);
  }
  //eval quiz
  evalQuiz(questions) {
    return this._http.post(`${this.configService.api_url}/service1/question/eval-quiz`, questions);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function QuestionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: QuestionService,
    factory: QuestionService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }),

/***/ 7013:
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5759);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ 2266);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8388);
var _staticBlock;















class SignupComponent {
  constructor(userService, snack) {
    this.userService = userService;
    this.snack = snack;
    this.user = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
  }
  ngOnInit() {}
  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      // alert('User is required !!');
      this.snack.open('Username is required !! ', '', {
        duration: 3000
      });
      return;
    }
    if (this.user.password == '' || this.user.password == null) {
      // alert('User is required !!');
      this.snack.open('Password is required !! ', '', {
        duration: 3000
      });
      return;
    }
    //validate
    //addUser: userservice
    this.userService.addUser(this.user).subscribe(data => {
      //success
      console.log(data);
      //alert('success');
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Successfully done !!', 'User id is ' + data.id, 'success');
    }, error => {
      //error
      console.log(error);
      // alert('something went wrong');
      this.snack.open(error.error.text, '', {
        duration: 3000
      });
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SignupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: SignupComponent,
    selectors: [["app-signup"]],
    decls: 41,
    vars: 6,
    consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3"], [1, "container", "text-center"], ["src", "../../../assets/logo.png", "alt", ""], [1, "text-center"], [3, "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["required", "", "name", "username", "matInput", "", "placeholder", "Enter here", 3, "ngModelChange", "ngModel"], ["required", "", "name", "password", "type", "password", "matInput", "", "placeholder", "Enter here", 3, "ngModelChange", "ngModel"], ["required", "", "name", "firstName", "matInput", "", "placeholder", "Enter here", 3, "ngModelChange", "ngModel"], ["required", "", "name", "lastName", "matInput", "", "placeholder", "Enter here", 3, "ngModelChange", "ngModel"], ["required", "", "name", "email", "type", "email", "matInput", "", "placeholder", "Enter here", 3, "ngModelChange", "ngModel"], ["required", "", "name", "phone", "type", "number", "matInput", "", "placeholder", "Enter here", 3, "ngModelChange", "ngModel"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["type", "button", "mat-raised-button", "", "color", "accent", 2, "margin-left", "20px"]],
    template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-card")(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Register Here !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() {
          return ctx.formSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-form-field", 8)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.user.username, $event) || (ctx.user.username = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Username must be unique !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-form-field", 8)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "User Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.user.password, $event) || (ctx.user.password = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-form-field", 8)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.user.firstName, $event) || (ctx.user.firstName = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.user.lastName, $event) || (ctx.user.lastName = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-form-field", 8)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.user.email, $event) || (ctx.user.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-form-field", 8)(33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.user.phone, $event) || (ctx.user.phone = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 4)(37, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.user.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.user.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.user.phone);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule],
    styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 7195:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5759);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/login.service */ 3067);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8388);
var _staticBlock;
















class LoginComponent {
  constructor(snack, login, router) {
    this.snack = snack;
    this.login = login;
    this.router = router;
    this.loginData = {
      username: '',
      password: ''
    };
  }
  ngOnInit() {}
  formSubmit() {
    console.log('login btn clicked');
    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      this.snack.open('Username is required !! ', '', {
        duration: 3000
      });
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000
      });
      return;
    }
    //request to server to generate token
    this.login.generateToken(this.loginData).subscribe(data => {
      localStorage.setItem("username", this.loginData.username);
      console.log('success');
      console.log(data);
      //login...
      this.login.loginUser(data.token);
      this.login.getCurrentUser(this.loginData.username).subscribe(user => {
        this.login.setUser(user);
        console.log(this.login.getUserRole() + "??????????????");
        //redirect ...ADMIN: admin-dashboard
        //redirect ...NORMAL:normal-dashboard
        if (this.login.getUserRole() == 'ADMIN') {
          //admin dashboard
          // window.location.href = '/admin';
          this.router.navigate(['admin']);
          this.login.loginStatusSubject.next(true);
        } else if (this.login.getUserRole() == 'NORMAL') {
          //normal user dashbaord
          // window.location.href = '/user-dashboard';
          this.router.navigate(['user-dashboard/0']);
          this.login.loginStatusSubject.next(true);
        } else {
          this.login.logout();
        }
      });
    }, error => {
      console.log('Error !');
      console.log(error);
      this.snack.open('Invalid Details !! Try again', '', {
        duration: 3000
      });
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 23,
    vars: 2,
    consts: [[1, "logincard"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "container", "text-center"], ["src", "../../../assets/logo.png", "alt", ""], [1, "text-center"], [1, "form", 3, "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["name", "username", "required", "", "matInput", "", "placeholder", "Enter here", 3, "ngModelChange", "ngModel"], ["name", "password", "type", "password", "required", "", "matInput", "", "placeholder", "Enter here", 3, "ngModelChange", "ngModel"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mat-raised-button", "", "color", "accent", 1, "ml10"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-card")(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Login Here !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
          return ctx.formSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-form-field", 8)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.loginData.username, $event) || (ctx.loginData.username = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "User Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.loginData.password, $event) || (ctx.loginData.password = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 4)(19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.loginData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.loginData.password);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule],
    styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%; \n\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 40px 30px;       \n\n  min-height: 550px;        \n\n  max-width: 400px;         \n\n  margin: 90px auto;        \n\n  border-radius: 8px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  text-align: center;       \n\n}\n\n.logincard[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;  \n\n  align-items: center;      \n\n  min-height: 80vh;         \n\n}\n\n.mat-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 30px 0;           \n\n  color: #3f51b5;\n}\n\n.form[_ngcontent-%COMP%] {\nwidth: 70% ;\nmargin-left: 15%;\n  margin-bottom: 20px;      \n\n}\n\n.mat-raised-button[_ngcontent-%COMP%] {\n  padding: 10px 30px;       \n\n  font-size: 17px;\n  font-weight: 500;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n  margin: 15px auto;        \n\n  display: block;\n  width: 100%;\n  max-width: 200px;         \n\n}\n\n.mat-raised-button[color=\"primary\"][_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: #fff;\n}\n\n.mat-raised-button[color=\"accent\"][_ngcontent-%COMP%] {\n  background-color: #ff4081;\n  color: #fff;\n}\n\n.mat-raised-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n\n\n\n.container.text-center[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n  margin-top: 30px;         \n\n  margin-bottom: 30px;      \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBRSwwQkFBMEI7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0IsUUFBUSxtQkFBbUI7RUFDN0MsaUJBQWlCLFNBQVMsd0NBQXdDO0VBQ2xFLGdCQUFnQixVQUFVLGVBQWU7RUFDekMsaUJBQWlCLFNBQVMsd0NBQXdDO0VBQ2xFLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsa0JBQWtCLFFBQVEsZ0NBQWdDO0FBQzVEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QixHQUFHLHdCQUF3QjtFQUNsRCxtQkFBbUIsT0FBTyxzQkFBc0I7RUFDaEQsZ0JBQWdCLFVBQVUsK0JBQStCO0FBQzNEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLFlBQVksOEJBQThCO0VBQ3hELGNBQWM7QUFDaEI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsZ0JBQWdCO0VBQ2QsbUJBQW1CLE9BQU8seUJBQXlCO0FBQ3JEOztBQUVBO0VBQ0Usa0JBQWtCLFFBQVEsdUJBQXVCO0VBQ2pELGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUIsU0FBUyx3QkFBd0I7RUFDbEQsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0IsVUFBVSxxQkFBcUI7QUFDakQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix5Q0FBeUM7QUFDM0M7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixVQUFVLHFCQUFxQjtFQUMvQyxtQkFBbUIsT0FBTyxxQkFBcUI7QUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIGtlZXAgZnVsbCBpbnB1dCB3aWR0aCAqL1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDQwcHggMzBweDsgICAgICAgLyogbm9ybWFsIHBhZGRpbmcgKi9cclxuICBtaW4taGVpZ2h0OiA1NTBweDsgICAgICAgIC8qIGluY3JlYXNlIGhlaWdodCBmb3IgYnJlYXRoaW5nIHNwYWNlICovXHJcbiAgbWF4LXdpZHRoOiA0MDBweDsgICAgICAgICAvKiBjYXJkIHdpZHRoICovXHJcbiAgbWFyZ2luOiA5MHB4IGF1dG87ICAgICAgICAvKiBjZW50ZXIgaG9yaXpvbnRhbGx5IHdpdGggdG9wIG1hcmdpbiAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgIC8qIGNlbnRlciBhbGlnbiB0ZXh0ICYgYnV0dG9ucyAqL1xyXG59XHJcblxyXG4ubG9naW5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgLyogY2VudGVyIGhvcml6b250YWxseSAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgLyogY2VudGVyIHZlcnRpY2FsbHkgKi9cclxuICBtaW4taGVpZ2h0OiA4MHZoOyAgICAgICAgIC8qIGNhcmQgaW4gbWlkZGxlIG9mIHZpZXdwb3J0ICovXHJcbn1cclxuXHJcbi5tYXQtY2FyZCBoMSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiAzMHB4IDA7ICAgICAgICAgICAvKiBzcGFjZSBhYm92ZSAmIGJlbG93IHRpdGxlICovXHJcbiAgY29sb3I6ICMzZjUxYjU7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxud2lkdGg6IDcwJSA7XHJcbm1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgICAgICAvKiBzcGFjZSBiZXR3ZWVuIGlucHV0cyAqL1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDsgICAgICAgLyogbm9ybWFsIGJ1dHRvbiBzaXplICovXHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgbWFyZ2luOiAxNXB4IGF1dG87ICAgICAgICAvKiBzcGFjZSBiZWxvdyBidXR0b25zICovXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDsgICAgICAgICAvKiBwcmV2ZW50IHRvbyB3aWRlICovXHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbltjb2xvcj1cInByaW1hcnlcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbltjb2xvcj1cImFjY2VudFwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi8qIEltYWdlIHN0eWxpbmcgKi9cclxuLmNvbnRhaW5lci50ZXh0LWNlbnRlciBpbWcge1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDsgICAgICAgICAvKiBzcGFjZSBhYm92ZSBsb2dvICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgICAgICAvKiBzcGFjZSBiZWxvdyBsb2dvICovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 8089:
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/add-category/add-category.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCategoryComponent: () => (/* binding */ AddCategoryComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 5759);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/category.service */ 4354);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8388);
var _staticBlock;















class AddCategoryComponent {
  constructor(_category, _snack) {
    this._category = _category;
    this._snack = _snack;
    this.category = {
      title: '',
      description: ''
    };
  }
  ngOnInit() {}
  formSubmit() {
    if (this.category.title.trim() == '' || this.category.title == null) {
      this._snack.open('Title Required !!', '', {
        duration: 3000
      });
      return;
    }
    //all done
    this._category.addCategory(this.category).subscribe(data => {
      this.category.title = '';
      this.category.description = '';
      console.log(data);
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Success !!', 'Category is added successfuly', 'success');
    }, error => {
      console.log(error);
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error !!', 'Server error !!', 'error');
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AddCategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AddCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_9__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AddCategoryComponent,
    selectors: [["app-add-category"]],
    decls: 19,
    vars: 2,
    consts: [[1, "bootstrap-wrapper"], [1, "row"], [1, "col-md-8", "offset-md-2"], [3, "ngSubmit"], ["appearance", "outline", 1, "w100"], ["required", "", "autofocus", "", "type", "text", "name", "title", "matInput", "", "placeholder", "Enter here", 3, "ngModelChange", "ngModel"], ["name", "description", "matInput", "", "placeholder", "Enter Category Description", "rows", "15", 3, "ngModelChange", "ngModel"], [1, "container", "text-center", "mt15"], ["mat-raised-button", "", "color", "accent"]],
    template: function AddCategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Add New Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card-content")(4, "div", 0)(5, "div", 1)(6, "div", 2)(7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function AddCategoryComponent_Template_form_ngSubmit_7_listener() {
          return ctx.formSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-form-field", 4)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AddCategoryComponent_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.category.title, $event) || (ctx.category.title = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-form-field", 4)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function AddCategoryComponent_Template_textarea_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.category.description, $event) || (ctx.category.description = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 7)(17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.category.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.category.description);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton],
    styles: [".w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mt15[_ngcontent-%COMP%] {\n  margin-top: 15px !important;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.ml20[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n.mr20[_ngcontent-%COMP%] {\n  margin-right: 20px !important;\n}\n.mt20[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}\n.mb20[_ngcontent-%COMP%] {\n  margin-bottom: 20px !important;\n}\n.ml10[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n}\n.mr10[_ngcontent-%COMP%] {\n  margin-right: 10px !important;\n}\n.mt10[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n}\n.mb10[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  max-width: 1000px; \n\n  margin: 10px 10px 50px 20px; \n\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.container.text-center.mt15[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUIsRUFBRSxvQkFBb0I7RUFDdkMsMkJBQTJCLEVBQUUsb0NBQW9DO0VBQ2pFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIudzEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tdDE1IHtcclxuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWwyMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubXIyMCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm10MjAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWIyMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tbDEwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tcjEwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubXQxMCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYjEwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDEwMDBweDsgLyogSW5jcmVhc2VkIHdpZHRoICovXHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggNTBweCAyMHB4OyAvKiBBZGp1c3RlZCBtYXJnaW4gZm9yIHBvc2l0aW9uaW5nICovXHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci50ZXh0LWNlbnRlci5tdDE1IGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 8595:
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/update-quiz/update-quiz.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateQuizComponent: () => (/* binding */ UpdateQuizComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5759);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 6060);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 9743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/quiz.service */ 4571);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/category.service */ 4354);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8388);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 8724);
var _staticBlock;






















function UpdateQuizComponent_form_6_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", c_r3.cid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", c_r3.title, " ");
  }
}
function UpdateQuizComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("submit", function UpdateQuizComponent_form_6_Template_form_submit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.updateData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-form-field", 5)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Enter Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.quiz.title, $event) || (ctx_r1.quiz.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-form-field", 5)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Enter Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_textarea_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.quiz.description, $event) || (ctx_r1.quiz.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 1)(10, "div", 8)(11, "mat-form-field", 5)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Maximum Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.quiz.maxMarks, $event) || (ctx_r1.quiz.maxMarks = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 8)(16, "mat-form-field", 5)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Number of Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.quiz.numberOfQuestions, $event) || (ctx_r1.quiz.numberOfQuestions = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "mat-slide-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_mat_slide_toggle_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.quiz.active, $event) || (ctx_r1.quiz.active = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, " Publish Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "mat-form-field", 12)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function UpdateQuizComponent_form_6_Template_mat_select_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.quiz.category.cid, $event) || (ctx_r1.quiz.category.cid = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, UpdateQuizComponent_form_6_mat_option_27_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 15)(29, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.quiz.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.quiz.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.quiz.maxMarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.quiz.numberOfQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.quiz.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.quiz.category.cid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
  }
}
class UpdateQuizComponent {
  constructor(_route, _quiz, _cat, _router) {
    this._route = _route;
    this._quiz = _quiz;
    this._cat = _cat;
    this._router = _router;
    this.qId = 0;
  }
  ngOnInit() {
    this.qId = this._route.snapshot.params.qid;
    // alert(this.qId);
    this._quiz.getQuiz(this.qId).subscribe(data => {
      this.quiz = data;
      console.log(this.quiz);
    }, error => {
      console.log(error);
    });
    this._cat.categories().subscribe(data => {
      this.categories = data;
    }, error => {
      alert('error in loading categories');
    });
  }
  //update form submit
  updateData() {
    //validatate
    this._quiz.updateQuiz(this.quiz).subscribe(data => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Success !!', 'quiz updated', 'success').then(e => {
        this._router.navigate(['/admin/quizzes']);
      });
    }, error => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error', 'error in updating quiz', 'error');
      console.log(error);
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function UpdateQuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UpdateQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_14__.QuizService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_15__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: UpdateQuizComponent,
    selectors: [["app-update-quiz"]],
    decls: 7,
    vars: 1,
    consts: [[1, "container"], [1, "row"], [1, "col-md-8", "offset-md-2"], [3, "submit", 4, "ngIf"], [3, "submit"], ["appearance", "fill", 1, "w100"], ["type", "text", "name", "title", "placeholder", "Enter here", "matInput", "", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "description", "placeholder", "Enter here", "matInput", "", "rows", "5", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], ["type", "text", "name", "maxMarks", "placeholder", "Enter here", "matInput", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "numberOfQuestions", "placeholder", "Enter here", "matInput", "", 3, "ngModelChange", "ngModel"], ["name", "active", 1, "mt20", 3, "ngModelChange", "ngModel"], ["appearance", "fill", 1, "mt20", "w100"], ["name", "category", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "container", "text-center"], ["mat-raised-button", "", "color", "accent", "type", "submit"], [3, "value"]],
    template: function UpdateQuizComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card")(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Update Quiz Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, UpdateQuizComponent_form_6_Template, 31, 7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.quiz);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__.CKEditorModule],
    styles: [".w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vdXBkYXRlLXF1aXovdXBkYXRlLXF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbIi53MTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 8643:
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/instructions/instructions.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructionsComponent: () => (/* binding */ InstructionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 4102);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/quiz.service */ 4571);
var _staticBlock;










class InstructionsComponent {
  constructor(_route, _quiz, _router) {
    this._route = _route;
    this._quiz = _quiz;
    this._router = _router;
  }
  ngOnInit() {
    this.qid = this._route.snapshot.params.qid;
    console.log('InstructionsComponent: Quiz ID from route (ngOnInit):', this.qid); // Log qid
    this._quiz.getQuiz(this.qid).subscribe(data => {
      this.quiz = data;
      console.log('InstructionsComponent: Quiz data loaded (ngOnInit):', this.quiz); // Log quiz data
    }, error => {
      console.log(error);
      alert('Error in loading quiz data');
    });
  }
  startQuiz() {
    console.log('InstructionsComponent: === startQuiz() method entered ==='); // NEW LOG
    console.log('InstructionsComponent: Navigating directly with qid:', this.qid); // NEW LOG
    // Temporarily bypass SweetAlert2 to test direct navigation
    this._router.navigate(['/start/' + this.qid]);
    // Original SweetAlert2 code (now commented out)
    // Swal.fire({
    //   title: 'Do you want to start the quiz?',
    //   showCancelButton: true,
    //   confirmButtonText: `Start`,
    //   denyButtonText: `Don't save`,
    //   icon: 'info',
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     console.log('InstructionsComponent: Confirming navigation to /start/' + this.qid);
    //     this._router.navigate(['/start/' + this.qid]);
    //   } else if (result.isDenied) {
    //     Swal.fire('Changes are not saved', '', 'info');
    //   }s
    // });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function InstructionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InstructionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_6__.QuizService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: InstructionsComponent,
    selectors: [["app-instructions"]],
    decls: 63,
    vars: 5,
    consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "mt20"], [1, "ml20"], [1, "text-center"], ["mat-raised-button", "", "color", "primary", 1, "", 3, "click"]],
    template: function InstructionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-card", 4)(5, "mat-card-header")(6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Read the instructions of this page carefully ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " One step more to go ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-card-content", 5)(11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "mat-divider")(16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Important Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ul")(20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "This quiz is only for practice purpose.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " You have to submit quiz with in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "You can attempt the quiz any number of time .");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " There are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " in this quiz. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Each questions carries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, ". No negative marking for wrong ones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "All questions is of MCQ Types.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "mat-divider")(41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Attempting Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "ul")(45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Start Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " button to start the quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, " The time will start the moment you click the Start Test button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, " You can not resume this quiz, if interrupted due to any reason. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Scroll downl to move to next question.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Click on Submit Quiz button on completion of the quiz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, " Report of the test is automatically generated in the form of PDF copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "mat-card-actions", 6)(61, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InstructionsComponent_Template_button_click_61_listener() {
          return ctx.startQuiz();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " Start QUIZ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.quiz.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.quiz.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.quiz.numberOfQuestions * 2, " Minutes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.quiz.numberOfQuestions, " questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.quiz.maxMarks / ctx.quiz.numberOfQuestions, " marks");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 8831:
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/view-quizzes/view-quizzes.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewQuizzesComponent: () => (/* binding */ ViewQuizzesComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/quiz.service */ 4571);
var _staticBlock;














function ViewQuizzesComponent_mat_card_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 3)(1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-card-content")(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-card-action")(11, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " Questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViewQuizzesComponent_mat_card_0_Template_button_click_21_listener() {
      const q_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.deleteQuiz(q_r2.qId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", q_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", q_r2.category.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](q_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", "/admin/view-questions/" + q_r2.qId + "/" + q_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Max Marks: ", q_r2.maxMarks, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Questions: ", q_r2.numberOfQuestions, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", "/admin/quiz/" + q_r2.qId);
  }
}
class ViewQuizzesComponent {
  constructor(_quiz) {
    this._quiz = _quiz;
    this.quizzes = [];
  }
  ngOnInit() {
    this._quiz.quizzes().subscribe(data => {
      this.quizzes = data;
      console.log(this.quizzes);
    }, error => {
      console.log(error);
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error !', 'Error in loading data !', 'error');
    });
  }
  //
  deleteQuiz(qId) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then(result => {
      if (result.isConfirmed) {
        //delete...
        this._quiz.deleteQuiz(qId).subscribe(data => {
          this.quizzes = this.quizzes.filter(quiz => quiz.qId != qId);
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Success', 'Quiz deleted ', 'success');
        }, error => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Error in deleting quiz', 'error');
        });
      }
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ViewQuizzesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ViewQuizzesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_10__.QuizService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ViewQuizzesComponent,
    selectors: [["app-view-quizzes"]],
    decls: 4,
    vars: 1,
    consts: [["class", "mt10 mr20 ml20", 4, "ngFor", "ngForOf"], [1, "container", "text-center", "mt20"], ["routerLink", "/admin/add-quiz", "mat-raised-button", "", "color", "accent"], [1, "mt10", "mr20", "ml20"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-flat-button", "", "color", "accent", 3, "routerLink"], ["mat-stroked-button", "", "color", "accent", 1, "ml20"], ["mat-flat-button", "", "color", "accent", 1, "ml20", 3, "routerLink"], ["mat-flat-button", "", "color", "accent", 1, "ml20"], ["mat-flat-button", "", "color", "warn", 1, "ml10", 3, "click"]],
    template: function ViewQuizzesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ViewQuizzesComponent_mat_card_0_Template, 23, 7, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Add New Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.quizzes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule],
    styles: [".example-header-image[_ngcontent-%COMP%] {\n  background-image: url('exam.png');\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vdmlldy1xdWl6emVzL3ZpZXctcXVpenplcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQW9EO0VBQ3BELHNCQUFzQjtBQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2V4YW0ucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 9179:
/*!**********************************************************!*\
  !*** ./src/app/pages/admin/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ 3067);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ 2266);
/* harmony import */ var src_app_flags_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/flags-ui.service */ 4253);
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/config.service */ 3696);
var _staticBlock;














function SidebarComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 9)(1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Theme Setting ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class SidebarComponent {
  constructor(login, use, flagService, configService) {
    this.login = login;
    this.use = use;
    this.flagService = flagService;
    this.configService = configService;
    this.show = false;
    this.view = false;
  }
  ngOnInit() {
    this.show = this.configService.upload_img_enabled;
    const isFirstLoad = sessionStorage.getItem('colorFetched') !== 'true';
    if (isFirstLoad) {
      // Fetch from API only on first load
      this.use.getActiveColor().subscribe(data => {
        const parsed = typeof data === 'string' ? JSON.parse(data) : data;
        this.colour = parsed.color;
        console.log("Color fetched from API:", this.colour);
        // Save flag to avoid future API calls
        sessionStorage.setItem('colorFetched', 'true');
        // Emit color to shared service
        this.flagService.setColor(parsed);
      }, error => {
        console.error("Error fetching color from API:", error);
        this.colour = 'pink';
      });
    }
    // Always subscribe to observable for updates
    this.flagService.getcolor.subscribe(data => {
      console.log("Color updated from observable:", this.colour);
      if (data && data.color) {
        this.colour = data.color;
        console.log("Color updated from observable:", this.colour);
      }
    });
  }
  logout() {
    this.login.logout();
    window.location.reload();
    // this.login.loginStatusSubject.next(false);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_flags_ui_service__WEBPACK_IMPORTED_MODULE_8__.FlagsUiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__.ConfigService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["app-sidebar"]],
    decls: 33,
    vars: 5,
    consts: [[1, "mat-card"], ["mat-subheader", ""], ["routerLink", "/admin", "mat-list-item", ""], ["mat-list-icon", ""], ["mat-list-item", "", "routerLink", "/admin/profile"], ["mat-list-item", "", "routerLink", "/admin/categories"], ["mat-list-item", "", "routerLink", "/admin/add-category"], ["mat-list-item", "", "routerLink", "/admin/quizzes"], ["mat-list-item", "", "routerLink", "/admin/add-quiz"], ["mat-list-item", "", "routerLink", "/admin/image-upload"], ["mat-list-item", "", "routerLink", "/home", 3, "click"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-action-list")(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2)(5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 4)(9, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 5)(13, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 6)(17, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Add Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 7)(21, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Quizzes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 8)(25, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Add Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](28, SidebarComponent_Conditional_28_Template, 4, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_29_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.colour);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.colour);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.show ? 28 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatActionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListSubheaderCssMatStyler, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
    styles: [".mat-card[_ngcontent-%COMP%] {\n  margin: 10px;\n  height: 100vh ;\n  width: 10lh;\n  align-items: center;\n  right:  24px;\n  bottom: 10px;\n  margin-right: 10%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBoZWlnaHQ6IDEwMHZoIDtcclxuICB3aWR0aDogMTBsaDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHJpZ2h0OiAgMjRweDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }),

/***/ 9847:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../notification/notification.component */ 4132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/login.service */ 3067);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ 2266);
/* harmony import */ var src_app_rabbitmq_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/rabbitmq.service */ 43);
/* harmony import */ var src_app_flags_ui_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/flags-ui.service */ 4253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 9885);
var _staticBlock;

















function NavbarComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", "/login");
  }
}
function NavbarComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", "/signup");
  }
}
function NavbarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_Conditional_10_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function NavbarComponent_Conditional_11_button_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.user.username, " ");
  }
}
function NavbarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, NavbarComponent_Conditional_11_button_0_Template, 2, 1, "button", 12);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.isLoggedIn && ctx_r2.user);
  }
}
class NavbarComponent {
  constructor(login, use, websocketService, flagService, router) {
    this.login = login;
    this.use = use;
    this.websocketService = websocketService;
    this.flagService = flagService;
    this.router = router;
    this.isLoggedIn = false;
    this.user = null;
    this.version = '';
    this.colour = 'pink';
    this.color = 'red';
    // message: string = '';
    this.type = 'info';
  }
  // Removed: showNotification : boolean = false; 
  // message = 'Operation successful';
  // type = 'success';
  ngOnInit() {
    this.flagService.initColorOnce();
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
    this.use.getVersion().subscribe(ver => {
      console.log(ver);
      this.version = ver;
    });
    const isFirstLoad = sessionStorage.getItem('colorFetched') !== 'true';
    if (isFirstLoad) {
      // Fetch from API only on first load
      this.use.getActiveColor().subscribe(data => {
        const parsed = typeof data === 'string' ? JSON.parse(data) : data;
        this.colour = parsed.color;
        console.log("Color fetched from API:", this.colour);
        // Save flag to avoid future API calls
        sessionStorage.setItem('colorFetched', 'true');
        // Emit color to shared service
        this.flagService.setColor(parsed);
      }, error => {
        console.error("Error fetching color from API:", error);
        this.colour = 'pink';
      });
    }
    // Always subscribe to observable for updates
    this.flagService.getcolor.subscribe(data => {
      console.log("Color updated from observable:", this.colour);
      if (data && data.color) {
        this.colour = data.color;
        console.log("Color updated from observable:", this.colour);
      }
    });
    // this.flagService.getcolor((data:any)=>{
    //       this.color=JSON.parse(data).color     
    //     })
    this.websocketService.connect();
    this.subscription = this.websocketService.messageStream$.subscribe(msg => {
      // this.message = msg;
      this.type = 'info'; // Or parse based on backend message
      // Removed: this.visible = true;
      if (msg) {
        // Removed: this.showNotification=true;
        this.notificationComponent.showNotificationWithTimeout(msg, this.type); // Call method on NotificationComponent
      }
      // Removed: setTimeout(() => {
      // Removed: }, 3000);
    });
    this.flagService.currentMessage$.subscribe(data => {
      this.colour = data;
    });
  }
  triggerNotification() {
    // Removed: console.log('!!!!!!!!!!!'+ this.visible);
    // Removed: this.message = 'Data saved successfully!';
    this.type = 'success';
    // Removed: this.showNotification= !this.showNotification;
    // Removed: //  this.showNotification=!this.visible;
    // Removed: setTimeout(() => {
    // Removed: //  this.visible=!this.visible;
    // Removed: //  console.log('Timeout!');
    // Removed: }, 1000);
    this.notificationComponent.toggleVisibility(); // Call toggle method on NotificationComponent
  }
  logout() {
    this.login.logout();
    // window.location.reload();
    this.router.navigate(['/home']);
    this.login.loginStatusSubject.next(false);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.websocketService.disconnect();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_rabbitmq_service__WEBPACK_IMPORTED_MODULE_11__.RabbitmqService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_flags_ui_service__WEBPACK_IMPORTED_MODULE_12__.FlagsUiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    viewQuery: function NavbarComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__.NotificationComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.notificationComponent = _t.first);
      }
    },
    decls: 16,
    vars: 8,
    consts: [["notificationComponent", ""], ["routerLink", "/admin", "mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-button", "", "class", "", "aria-label", "Login button", 3, "routerLink", 4, "ngIf"], ["mat-button", "", "class", " ml10", "aria-label", "Register button", 3, "routerLink", 4, "ngIf"], ["mat-button", "", "aria-label", "Logout button", 1, "ml10"], ["mat-button", "", "routerLink", "/admin/profile", "aria-label", "User profile button", 1, "navbar-button", "ml10"], ["mat-button", "", 1, "ml10", 3, "click"], [3, "type"], ["mat-button", "", "aria-label", "Login button", 1, "", 3, "routerLink"], ["mat-button", "", "aria-label", "Register button", 1, "ml10", 3, "routerLink"], ["mat-button", "", "aria-label", "Logout button", 1, "ml10", 3, "click"], ["class", "navbar-button ml10", "mat-button", "", "routerLink", "/admin/profile", "aria-label", "User profile button", 4, "ngIf"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-toolbar")(1, "a", 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "menu_book");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, NavbarComponent_a_7_Template, 2, 1, "a", 3)(8, NavbarComponent_a_8_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](10, NavbarComponent_Conditional_10_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](11, NavbarComponent_Conditional_11_Template, 1, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.triggerNotification());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "app-notification", 8, 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", ctx.colour);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Examportal ", ctx.version);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.isLoggedIn ? 10 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.isLoggedIn && ctx.user ? 11 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.type);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__.NotificationComponent],
    styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  min-height: 64px;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin-right: 20px;\n}\n\n\n\n.navbar-button[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 500;\n  padding: 0 15px;\n  transition: all 0.3s ease;\n  border-radius: 20px; \n\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 8px; \n\n  color: #fff; \n\n  background-color: var(--primary-color, #f44336); \n\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); \n\n}\n\n.navbar-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color, #f44336); \n\n  transform: none; \n\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); \n\n}\n\n\n\n.mat-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px; \n\n}\n\n\n\n.example-icon[_ngcontent-%COMP%] {\n  background: none; \n\n  box-shadow: none; \n\n  margin-right: 10px; \n\n}\n\n.example-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1); \n\n  transform: none; \n\n  box-shadow: none; \n\n}\n\n.ml10[_ngcontent-%COMP%] {\n  margin-left: 10px; \n\n}\n\n.mr10[_ngcontent-%COMP%] {\n  margin-right: 10px; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLHFGQUFxRjtBQUNyRjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBRSx3Q0FBd0M7RUFDN0QsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBRSx1Q0FBdUM7RUFDdEQsV0FBVyxFQUFFLGVBQWU7RUFDNUIsK0NBQStDLEVBQUUsNENBQTRDO0VBQzdGLHdDQUF3QyxFQUFFLGtCQUFrQjtBQUM5RDs7QUFFQTtFQUNFLCtDQUErQyxFQUFFLHdDQUF3QztFQUN6RixlQUFlLEVBQUUsZ0NBQWdDO0VBQ2pELHdDQUF3QyxFQUFFLDhCQUE4QjtBQUMxRTs7QUFFQSxrREFBa0Q7QUFDbEQ7RUFDRSxpQkFBaUIsRUFBRSxnQ0FBZ0M7QUFDckQ7O0FBRUEsOENBQThDO0FBQzlDO0VBQ0UsZ0JBQWdCLEVBQUUsb0NBQW9DO0VBQ3RELGdCQUFnQixFQUFFLGNBQWM7RUFDaEMsa0JBQWtCLEVBQUUsOEJBQThCO0FBQ3BEOztBQUVBO0VBQ0UsMENBQTBDLEVBQUUsbUNBQW1DO0VBQy9FLGVBQWUsRUFBRSwwQkFBMEI7RUFDM0MsZ0JBQWdCLEVBQUUscUNBQXFDO0FBQ3pEOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUsZ0NBQWdDO0FBQ3JEOztBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsZ0NBQWdDO0FBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNjRweDtcbn1cblxuLm1hdC10b29sYmFyIHNwYW4ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLyogU3R5bGluZyBmb3IgYWxsIG5hdmJhciBidXR0b25zIChMb2dpbiwgUmVnaXN0ZXIsIExvZ291dCwgVXNlcm5hbWUsIE5vdGlmaWNhdGlvbikgKi9cbi5uYXZiYXItYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IC8qIFJvdW5kZWQgZm9yIG5vdGlmaWNhdGlvbiBiYWRnZSBsb29rICovXG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCA4cHg7IC8qIENvbnNpc3RlbnQgc3BhY2luZyBiZXR3ZWVuIGJ1dHRvbnMgKi9cbiAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIHRleHQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgI2Y0NDMzNik7IC8qIENvbnNpc3RlbnQgcHJpbWFyeSBjb2xvciBmb3IgYmFja2dyb3VuZCAqL1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBTdWJ0bGUgc2hhZG93ICovXG59XG5cbi5uYXZiYXItYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgI2Y0NDMzNik7IC8qIEtlZXAgc2FtZSBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXG4gIHRyYW5zZm9ybTogbm9uZTsgLyogUmVtb3ZlIGxpZnQgZWZmZWN0IG9uIGhvdmVyICovXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIEtlZXAgc2FtZSBzaGFkb3cgb24gaG92ZXIgKi9cbn1cblxuLyogRW5zdXJlIHRoZSBtYXQtaWNvbiB3aXRoaW4gYnV0dG9ucyBpcyBhbGlnbmVkICovXG4ubWF0LWljb24tYnV0dG9uIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IC8qIFNwYWNlIGJldHdlZW4gaWNvbiBhbmQgdGV4dCAqL1xufVxuXG4vKiBUaGUgZGVmYXVsdCBpY29uIGJ1dHRvbiBmb3IgdGhlIG1lbnUgaWNvbiAqL1xuLmV4YW1wbGUtaWNvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7IC8qIE5vIGJhY2tncm91bmQgZm9yIHRoZSBtZW51IGljb24gKi9cbiAgYm94LXNoYWRvdzogbm9uZTsgLyogTm8gc2hhZG93ICovXG4gIG1hcmdpbi1yaWdodDogMTBweDsgLyogU3BhY2UgYWZ0ZXIgdGhlIG1lbnUgaWNvbiAqL1xufVxuXG4uZXhhbXBsZS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyAvKiBTdWJ0bGUgaG92ZXIgZm9yIHRoZSBtZW51IGljb24gKi9cbiAgdHJhbnNmb3JtOiBub25lOyAvKiBObyBsaWZ0IGZvciBtZW51IGljb24gKi9cbiAgYm94LXNoYWRvdzogbm9uZTsgLyogTm8gc2hhZG93IG9uIGhvdmVyIGZvciBtZW51IGljb24gKi9cbn1cblxuLm1sMTAge1xuICBtYXJnaW4tbGVmdDogMTBweDsgLyogQWRqdXN0aW5nIGZvciBmaW5lciBjb250cm9sICovXG59XG5cbi5tcjEwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBBZGp1c3RpbmcgZm9yIGZpbmVyIGNvbnRyb2wgKi9cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map