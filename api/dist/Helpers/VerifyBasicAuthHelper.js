"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VerifyBasicAuthHelper;
var BasicAuthentication_1 = __importDefault(require("../Authentications/BasicAuthentication"));
function VerifyBasicAuthHelper(basicHeader) {
    if (!basicHeader) {
        return 400;
    }
    var basic = basicHeader.split(' ');
    var auth = (0, BasicAuthentication_1.default)(basic);
    if (auth.status !== 200) {
        return auth.status;
    }
    return 200;
}
