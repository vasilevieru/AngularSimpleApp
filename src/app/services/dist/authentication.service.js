"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AuthenticationService = void 0;
var user_model_1 = require("./../models/user.model");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, authToken, authUser) {
        this.http = http;
        this.authToken = authToken;
        this.authUser = authUser;
        this.loggedId$ = new rxjs_1.BehaviorSubject(this.getJWTToken() !== null ? true : false);
    }
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        this.http.post('http://localhost:4200/login', { email: email, password: password })
            .subscribe(function (response) {
            localStorage.setItem(_this.authUser, response.text());
            localStorage.setItem(_this.authToken, response.headers.get('Set-Authorization'));
            _this.loggedId$.next(true);
        }, function () {
            _this.loggedId$.next(false);
        });
    };
    AuthenticationService.prototype.getUser = function () {
        return new user_model_1.User(JSON.parse(localStorage.getItem(this.authUser)));
    };
    AuthenticationService.prototype.getJWTToken = function () {
        return localStorage.getItem(this.authToken);
    };
    AuthenticationService.prototype.isLoggedId = function () {
        return this.loggedId$;
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem(this.authToken);
        localStorage.removeItem(this.authUser);
        this.loggedId$.next(false);
    };
    AuthenticationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(1, core_1.Inject('AUTH_TOKEN')),
        __param(2, core_1.Inject('AUTH_USER'))
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
