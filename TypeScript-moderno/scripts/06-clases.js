"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coche = /** @class */ (function () {
    // marca:string;
    // modelo:string;
    // year:number;
    // color:string;
    // arrancado:boolean;
    // constructor(
    //     marca:string = "Renault",
    //     modelo:string = "Clio",
    //     year:number = 2_000,
    //     color:string = "rojo",
    //     arrancado:boolean = false
    // ){
    //     this.marca  = marca;
    //     this.modelo  = modelo;
    //     this.year = year;
    //     this.color = color;
    //     this.arrancado = arrancado;
    // }
    function Coche(marca, modelo, year, color, arrancado) {
        if (marca === void 0) { marca = "Renault"; }
        if (modelo === void 0) { modelo = "Clio"; }
        if (year === void 0) { year = 2000; }
        if (color === void 0) { color = "rojo"; }
        if (arrancado === void 0) { arrancado = false; }
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = arrancado;
    }
    Coche.prototype.arrancar = function () {
        this.arrancado = true;
    };
    Coche.prototype.apagar = function () {
        this.arrancado = false;
    };
    Object.defineProperty(Coche.prototype, "setColor", {
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "getColor", {
        get: function () {
            return this.color;
        },
        enumerable: false,
        configurable: true
    });
    Coche.saludar = function () {
        return "Hola que tal";
    };
    return Coche;
}());
// let miCoche = new Coche();
// console.log(miCoche);
// console.log(Coche.saludar());
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(marca, modelo, year, color, arrancado) {
        if (marca === void 0) { marca = "Renault"; }
        if (modelo === void 0) { modelo = "Clio"; }
        if (year === void 0) { year = 2000; }
        if (color === void 0) { color = "rojo"; }
        if (arrancado === void 0) { arrancado = false; }
        return _super.call(this) || this;
    }
    return Camioneta;
}(Coche));
// let miCamioneta = new Camioneta("Jeep", "1990", 2000 ,"negro");
// console.log(miCamioneta);
