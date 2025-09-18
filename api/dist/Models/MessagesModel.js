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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __importDefault(require("./BaseModel"));
var Messages = /** @class */ (function (_super) {
    __extends(Messages, _super);
    function Messages(name, message) {
        var _this = _super.call(this) || this;
        _this.Name = name;
        _this.Message = message;
        return _this;
    }
    //getters
    Messages.prototype.getName = function () {
        return this.Name;
    };
    Messages.prototype.getMessage = function () {
        return this.Message;
    };
    //setters
    Messages.prototype.setName = function (name) {
        this.Name = name;
    };
    Messages.prototype.setMessage = function (message) {
        this.Message = message;
    };
    return Messages;
}(BaseModel_1.default));
exports.default = Messages;
