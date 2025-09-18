"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var VerifyBasicAuthHelper_1 = __importDefault(require("../Helpers/VerifyBasicAuthHelper"));
var ValidateTypes_1 = require("../Helpers/ValidateTypes");
var MessagesModel_1 = __importDefault(require("../Models/MessagesModel"));
var MessagesRepository_1 = require("../Repositories/MessagesRepository");
var MessageController = /** @class */ (function () {
    function MessageController() {
    }
    MessageController.prototype.SendMessage = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, message, headerResponse, messageToSend, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, message = _a.message;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        headerResponse = (0, VerifyBasicAuthHelper_1.default)(request.headers['authorization']);
                        if (headerResponse === 400) {
                            return [2 /*return*/, response.status(400).json({ message: "Usuário não autenticado!" })];
                        }
                        else if (headerResponse === 401) {
                            return [2 /*return*/, response.status(401).json({ message: "Usuário não autorizado!" })];
                        }
                        if (!(0, ValidateTypes_1.ValidateString)(name)) {
                            return [2 /*return*/, response.status(400).json({ message: "Não há um nome de quem está enviando a mensagem!" })];
                        }
                        else if (!(0, ValidateTypes_1.ValidateString)(message)) {
                            return [2 /*return*/, response.status(400).json({ message: "Não há mensagem a ser enviada!" })];
                        }
                        messageToSend = new MessagesModel_1.default(name, message);
                        return [4 /*yield*/, (0, MessagesRepository_1.SendMessage)(messageToSend)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, response.json({ message: 'Mensagem enviada com sucesso!' })];
                    case 3:
                        error_1 = _b.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível enviar a mensagem, tente novamente mais tarde!" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MessageController.prototype.GetAll = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var headerResponse, all, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        headerResponse = (0, VerifyBasicAuthHelper_1.default)(request.headers['authorization']);
                        if (headerResponse === 400) {
                            return [2 /*return*/, response.status(400).json({ message: "Usuário não autenticado!" })];
                        }
                        else if (headerResponse === 401) {
                            return [2 /*return*/, response.status(401).json({ message: "Usuário não autorizado!" })];
                        }
                        return [4 /*yield*/, (0, MessagesRepository_1.GetAll)()];
                    case 1:
                        all = _a.sent();
                        return [2 /*return*/, response.json(all)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível enviar a mensagem, tente novamente mais tarde!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MessageController.prototype.DeleteMessage = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, headerResponse, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.body.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        headerResponse = (0, VerifyBasicAuthHelper_1.default)(request.headers['authorization']);
                        if (headerResponse === 400) {
                            return [2 /*return*/, response.status(400).json({ message: "Usuário não autenticado!" })];
                        }
                        else if (headerResponse === 401) {
                            return [2 /*return*/, response.status(401).json({ message: "Usuário não autorizado!" })];
                        }
                        return [4 /*yield*/, (0, MessagesRepository_1.DeleteById)(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json({ message: 'Mensagem deletada com sucesso!' })];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível deletar a mensagem, tente novamente mais tarde!" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return MessageController;
}());
exports.default = new MessageController();
