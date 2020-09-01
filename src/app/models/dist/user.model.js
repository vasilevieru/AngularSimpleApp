"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(user) {
        this.firstName = user && user.firstName || null;
        this.lastName = user && user.lastName || null;
    }
    return User;
}());
exports.User = User;
