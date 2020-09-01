"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JWTTokenService = void 0;
var core_1 = require("@angular/core");
var jwt_decode = require("jwt-decode");
var JWTTokenService = /** @class */ (function () {
    function JWTTokenService() {
    }
    JWTTokenService.prototype.setToken = function (token) {
        if (token) {
            this.jwtToken = token;
        }
    };
    JWTTokenService.prototype.decodeToken = function () {
        if (this.jwtToken) {
            this.decodedToken = jwt_decode(this.jwtToken);
        }
    };
    JWTTokenService.prototype.getDecodeToken = function () {
        return jwt_decode(this.jwtToken);
    };
    JWTTokenService.prototype.getUser = function () {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.displayname : null;
    };
    JWTTokenService.prototype.getEmailId = function () {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken.email : null;
    };
    JWTTokenService.prototype.getExpiryTime = function () {
        this.decodeToken();
        return this.decodedToken ? Number(this.decodedToken.exp) : null;
    };
    JWTTokenService.prototype.isTokenExpired = function () {
        var expiryTime = this.getExpiryTime();
        if (expiryTime) {
            return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
        }
        else {
            return false;
        }
    };
    JWTTokenService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], JWTTokenService);
    return JWTTokenService;
}());
exports.JWTTokenService = JWTTokenService;
