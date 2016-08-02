System.register(['angular2/platform/browser', 'angular2/core', 'angular2/common', 'angular2/http', './nav'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, common_1, http_1, nav_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (nav_1_1) {
                nav_1 = nav_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(http) {
                    this.http = http;
                }
                App.prototype.ngOnInit = function () {
                    this.getButtons();
                };
                App.prototype.getButtons = function () {
                    var _this = this;
                    this.http.get('http://localhost:3001/api/buttons')
                        .subscribe(function (data) { return _this.generateArray(data.json()); });
                };
                App.prototype.generateArray = function (obj) {
                    this.buttons = obj.data;
                };
                App.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app'
                    }),
                    core_1.View({
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, nav_1.Nav],
                        templateUrl: './src/app.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], App);
                return App;
            }());
            exports_1("App", App);
            browser_1.bootstrap(App, [http_1.HTTP_PROVIDERS]);
        }
    }
});
