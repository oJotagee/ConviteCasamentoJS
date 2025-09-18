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
var InvitesRepository_1 = require("../Repositories/InvitesRepository");
var ReadExcel_1 = require("../Helpers/ReadExcel");
var fs_1 = __importDefault(require("fs"));
var InvitesModel_1 = __importDefault(require("../Models/InvitesModel"));
var MongoDb_1 = require("../Connections/MongoDb");
var NormalizeText_1 = __importDefault(require("../Helpers/NormalizeText"));
var SendEmailService_1 = __importDefault(require("../Services/SendEmailService"));
var InvitesController = /** @class */ (function () {
    function InvitesController() {
    }
    InvitesController.prototype.ConfirmPresence = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var ids, headerResponse, arrayIds, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = request.body.ids;
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
                        if (!(0, ValidateTypes_1.ValidateString)(ids)) {
                            return [2 /*return*/, response.status(400).json({ message: "Não há nenhum convidado selecionado no momento!" })];
                        }
                        arrayIds = ids.split(",");
                        return [4 /*yield*/, Promise.all(arrayIds.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, (0, InvitesRepository_1.UpdateConfirmed)(item, true)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json({ message: "".concat(arrayIds.length > 1 ? "Convidados confirmados" : "Convidado confirmado", " com sucesso!") })];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível confirmar a presença, tente novamente mais tarde!" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InvitesController.prototype.GetAllInvites = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var headerResponse, result, error_2;
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
                        return [4 /*yield*/, (0, InvitesRepository_1.GetAll)()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, response.json(result)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível deletar todos os convites, tente novamente mais tarde!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InvitesController.prototype.GetAllConfirmed = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var headerResponse, result, error_3;
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
                        return [4 /*yield*/, (0, InvitesRepository_1.GetAllConfirmed)()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, response.json(result)];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível obter todos os convites, tente novamente mais tarde!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InvitesController.prototype.DeleteAllInvites = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var headerResponse, error_4;
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
                        return [4 /*yield*/, (0, InvitesRepository_1.DeleteAll)()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.json({ message: 'Convites deletados com sucesso!' })];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível deletar todos os convites, tente novamente mais tarde!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InvitesController.prototype.SearchInvite = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var name, headerResponse, invites_1, uniqueFamilyIds, familyData, error_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = request.body.name;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        headerResponse = (0, VerifyBasicAuthHelper_1.default)(request.headers['authorization']);
                        switch (headerResponse) {
                            case 400:
                                return [2 /*return*/, response.status(400).json({ message: "Usuário não autenticado!" })];
                            case 401:
                                return [2 /*return*/, response.status(401).json({ message: "Usuário não autorizado!" })];
                        }
                        if (!(0, ValidateTypes_1.ValidateString)(name)) {
                            return [2 /*return*/, response.status(400).json({ message: "Não há nenhum nome para buscar no momento!" })];
                        }
                        return [4 /*yield*/, (0, InvitesRepository_1.GetByName)(name)];
                    case 2:
                        invites_1 = _a.sent();
                        if (!invites_1.length) {
                            return [2 /*return*/, response.json({ families: [] })];
                        }
                        uniqueFamilyIds = Array.from(new Set(invites_1.map(function (invite) { return invite.FamilyId; })));
                        return [4 /*yield*/, Promise.all(uniqueFamilyIds.map(function (familyId) { return __awaiter(_this, void 0, void 0, function () {
                                var members, nameSearch;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, (0, InvitesRepository_1.GetAllByFamilyId)(familyId)];
                                        case 1:
                                            members = _a.sent();
                                            nameSearch = invites_1.find(function (x) { return x.FamilyId == familyId; }).Name;
                                            return [2 /*return*/, {
                                                    FamilyId: familyId,
                                                    NameSearched: nameSearch,
                                                    Members: members
                                                }];
                                    }
                                });
                            }); }))];
                    case 3:
                        familyData = _a.sent();
                        return [2 /*return*/, response.json({ families: familyData })];
                    case 4:
                        error_5 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível buscar o convidado, tente novamente mais tarde!" })];
                    case 5:
                        (0, MongoDb_1.closeConnection)();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    InvitesController.prototype.DownloadConfirmed = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var result, file, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, InvitesRepository_1.GetAllConfirmed)()];
                    case 1:
                        result = _a.sent();
                        file = (0, ReadExcel_1.WriteExcel)(result);
                        response.setHeader('Content-Disposition', 'attachment; filename="convidados.xlsx"');
                        response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                        return [2 /*return*/, response.send(file)];
                    case 2:
                        error_6 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível fazer o download de todos os convidados confirmados, tente novamente mais tarde!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InvitesController.prototype.RemovePresence = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var ids, headerResponse, arrayIds, error_7;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = request.body.ids;
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
                        if (!(0, ValidateTypes_1.ValidateString)(ids)) {
                            return [2 /*return*/, response.status(400).json({ message: "Não há nenhum convidado selecionado no momento!" })];
                        }
                        arrayIds = ids.split(",");
                        return [4 /*yield*/, Promise.all(arrayIds.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, (0, InvitesRepository_1.UpdateConfirmed)(item, false)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json({ message: "".concat(arrayIds.length > 1 ? "Confirmações removidas" : "Confirmação removida", " com sucesso!") })];
                    case 3:
                        error_7 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível remover a confirmação de presença, tente novamente mais tarde!" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InvitesController.prototype.UploadExcel = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var headerResponse, file, excelJson, result, list, group, family, error_8;
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
                        file = request.file;
                        excelJson = (0, ReadExcel_1.ReadExcel)(file.path);
                        result = excelJson.reduce(function (result, currentValue) {
                            (result[currentValue['FamilyId']] = result[currentValue['FamilyId']] || []).push(currentValue);
                            return result;
                        }, {});
                        list = [];
                        for (group in result) {
                            family = result[group];
                            family.forEach(function (member) {
                                var invite = new InvitesModel_1.default(member.Name, false, member.FamilyId, (0, NormalizeText_1.default)(member.Name).toLowerCase());
                                list.push(invite);
                            });
                        }
                        return [4 /*yield*/, (0, InvitesRepository_1.CreateInviteMassive)(list)];
                    case 1:
                        _a.sent();
                        fs_1.default.unlinkSync(file.path);
                        return [2 /*return*/, response.json({ data: result, message: "Upload concluído com sucesso!" })];
                    case 2:
                        error_8 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível realizar o upload, tente novamente mais tarde!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InvitesController.prototype.SendAllNotConfirmedEmail = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var allNotConfirmed, resp, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, (0, InvitesRepository_1.GetAllNotConfirmed)()];
                    case 1:
                        allNotConfirmed = _a.sent();
                        return [4 /*yield*/, (0, SendEmailService_1.default)(allNotConfirmed.map(function (x) { return x.Name; }).join(","), allNotConfirmed.length)];
                    case 2:
                        resp = _a.sent();
                        return [2 /*return*/, response.json({ message: "Email enviado com sucesso!", api_response: resp })];
                    case 3:
                        error_9 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ message: "Não foi possível realizar o envio de email, tente novamente mais tarde!" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return InvitesController;
}());
exports.default = new InvitesController();
