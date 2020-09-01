"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthorizeGuard = void 0;
var core_1 = require("@angular/core");
var AuthorizeGuard = /** @class */ (function () {
    function AuthorizeGuard(loginService, authStorageService, jwtService) {
        this.loginService = loginService;
        this.authStorageService = authStorageService;
        this.jwtService = jwtService;
    }
    AuthorizeGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.jwtService.getUser()) {
            if (this.jwtService.isTokenExpired()) {
                // Should Redirect Sig-In Page
            }
            else {
                return true;
            }
        }
        else {
            return new Promise(function (resolve) {
                _this.loginService.signIncallBack().then(function (e) {
                    resolve(true);
                })["catch"](function (e) {
                    // Should Redirect Sign-In Page
                });
            });
        }
    };
    AuthorizeGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthorizeGuard);
    return AuthorizeGuard;
}());
exports.AuthorizeGuard = AuthorizeGuard;
