"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = API;
var axios_1 = __importDefault(require("axios"));
function API() {
    var baseUrl = process.env.API_SEND_EMAIL;
    var api = axios_1.default.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    api.interceptors.request.use(function (request) {
        return request;
    }, function (error) {
        return Promise.reject(error);
    });
    api.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });
    return api;
}
