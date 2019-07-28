"use strict";
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.estaPrendido = false;
    }
    SmartPhone.prototype.prender = function () {
        this.estaPrendido = true;
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    SmartPhone.prototype.llamar = function (numero) {
        console.log('Llamando al ' + numero + ' ...');
    };
    SmartPhone.prototype.sacarFoto = function () {
        console.log('Se ha tomado una foto');
    };
    return SmartPhone;
}());
exports["default"] = SmartPhone;
