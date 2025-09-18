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
exports.CreateInvite = CreateInvite;
exports.CreateInviteMassive = CreateInviteMassive;
exports.GetByName = GetByName;
exports.GetAll = GetAll;
exports.GetAllNotConfirmed = GetAllNotConfirmed;
exports.GetAllConfirmed = GetAllConfirmed;
exports.UpdateConfirmed = UpdateConfirmed;
exports.GetAllByFamilyId = GetAllByFamilyId;
exports.DeleteAll = DeleteAll;
var MongoDb_1 = require("../Connections/MongoDb");
var NormalizeText_1 = __importDefault(require("../Helpers/NormalizeText"));
var collectionName = "casamento";
function CreateInvite(invite) {
    return __awaiter(this, void 0, void 0, function () {
        var db, collection, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, (0, MongoDb_1.connectDB)()];
                case 1:
                    db = _a.sent();
                    collection = db.collection(collectionName);
                    return [4 /*yield*/, collection.insertOne(invite)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    throw err_1;
                case 4:
                    (0, MongoDb_1.closeConnection)();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function CreateInviteMassive(invites) {
    return __awaiter(this, void 0, void 0, function () {
        var db, collection, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, (0, MongoDb_1.connectDB)()];
                case 1:
                    db = _a.sent();
                    collection = db.collection(collectionName);
                    return [4 /*yield*/, collection.insertMany(invites)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    err_2 = _a.sent();
                    throw err_2;
                case 4:
                    (0, MongoDb_1.closeConnection)();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function GetByName(name) {
    return __awaiter(this, void 0, void 0, function () {
        var db, collection, users, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, (0, MongoDb_1.connectDB)()];
                case 1:
                    db = _a.sent();
                    collection = db.collection(collectionName);
                    return [4 /*yield*/, collection.find({ NameSearch: { $regex: new RegExp(".*" + (0, NormalizeText_1.default)(name) + ".*", "i") } }).toArray()];
                case 2:
                    users = _a.sent();
                    return [2 /*return*/, users];
                case 3:
                    err_3 = _a.sent();
                    throw err_3;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function GetAllByFamilyId(familyId) {
    return __awaiter(this, void 0, void 0, function () {
        var db, collection, result, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, (0, MongoDb_1.connectDB)()];
                case 1:
                    db = _a.sent();
                    collection = db.collection(collectionName);
                    return [4 /*yield*/, collection.find({ FamilyId: familyId }).toArray()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 3:
                    err_4 = _a.sent();
                    throw err_4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function GetAll() {
    return __awaiter(this, void 0, void 0, function () {
        var db, collection, result, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, (0, MongoDb_1.connectDB)()];
                case 1:
                    db = _a.sent();
                    collection = db.collection(collectionName);
                    return [4 /*yield*/, collection.find({}).toArray()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 3:
                    err_5 = _a.sent();
                    throw err_5;
                case 4:
                    (0, MongoDb_1.closeConnection)();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function GetAllNotConfirmed() {
    return __awaiter(this, void 0, void 0, function () {
        var db, collection, result, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, (0, MongoDb_1.connectDB)()];
                case 1:
                    db = _a.sent();
                    collection = db.collection(collectionName);
                    return [4 /*yield*/, collection.find({ Confirmed: false }).toArray()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 3:
                    err_6 = _a.sent();
                    throw err_6;
                case 4:
                    (0, MongoDb_1.closeConnection)();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function GetAllConfirmed() {
    return __awaiter(this, void 0, void 0, function () {
        var db, collection, result, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, (0, MongoDb_1.connectDB)()];
                case 1:
                    db = _a.sent();
                    collection = db.collection(collectionName);
                    return [4 /*yield*/, collection.find({ Confirmed: true }).toArray()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 3:
                    err_7 = _a.sent();
                    throw err_7;
                case 4:
                    (0, MongoDb_1.closeConnection)();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function UpdateConfirmed(id, confirmed) {
    return __awaiter(this, void 0, void 0, function () {
        var db, collection, filter, update, options, result, err_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, (0, MongoDb_1.connectDB)()];
                case 1:
                    db = _a.sent();
                    collection = db.collection(collectionName);
                    filter = { Id: id };
                    update = { $set: { Confirmed: confirmed } };
                    options = { returnDocument: "after", upsert: false };
                    return [4 /*yield*/, collection.findOneAndUpdate(filter, update, options)];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 3:
                    err_8 = _a.sent();
                    throw err_8;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function DeleteAll() {
    return __awaiter(this, void 0, void 0, function () {
        var db, collection, result, err_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, (0, MongoDb_1.connectDB)()];
                case 1:
                    db = _a.sent();
                    collection = db.collection(collectionName);
                    return [4 /*yield*/, collection.deleteMany({})];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 3:
                    err_9 = _a.sent();
                    throw err_9;
                case 4:
                    (0, MongoDb_1.closeConnection)();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
