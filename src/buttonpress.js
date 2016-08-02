System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var Buttonpress;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Buttonpress = (function () {
                function Buttonpress(http) {
                    this.http = http;
                }
                Buttonpress.prototype.pushButton = function (name) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    console.log(name);
                    this.http.post('http://localhost:3001/api/buttonPress', JSON.stringify({ name: name }), { headers: headers }).subscribe(function (data) {
                        console.log('Press Sent');
                    }, function (error) {
                        console.log(JSON.stringify(error.json));
                    });
                };
                Buttonpress.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                Buttonpress = __decorate([
                    core_1.Component({
                        selector: 'buttonpress',
                        templateUrl: './src/buttonpress.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Buttonpress);
                return Buttonpress;
            }());
            exports_1("Buttonpress", Buttonpress);
        }
    }
});
