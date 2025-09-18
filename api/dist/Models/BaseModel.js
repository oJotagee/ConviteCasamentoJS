"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var BaseModel = /** @class */ (function () {
    function BaseModel() {
        this.Id = (0, uuid_1.v4)();
        this.Created = new Date();
    }
    //getters
    BaseModel.prototype.getId = function () {
        return this.Id;
    };
    BaseModel.prototype.getCreated = function () {
        return this.Created;
    };
    BaseModel.prototype.getModified = function () {
        return this.Modified;
    };
    //setters
    BaseModel.prototype.setModified = function () {
        this.Modified = new Date();
    };
    return BaseModel;
}());
exports.default = BaseModel;
