"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NormalizeText_1 = __importDefault(require("../../Helpers/NormalizeText"));
describe.only('NormalizeText test', function () {
    test('deve retornar o texto normalizado sem acento e minúsculo', function () {
        var result = (0, NormalizeText_1.default)('Célia');
        expect(result).toBe('celia');
    });
});
