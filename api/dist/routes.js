"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var Multer_1 = require("./Configurations/Multer");
var InvitesController_1 = __importDefault(require("./Controllers/InvitesController"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var MessageController_1 = __importDefault(require("./Controllers/MessageController"));
var router = (0, express_1.Router)();
var uploadDir = path_1.default.join(__dirname, 'Uploads');
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir);
}
var upload = (0, multer_1.default)({ storage: Multer_1.storage });
router.get("/", function (req, res) { res.send("Estou on!"); });
router.get("/GetAllInvites", InvitesController_1.default.GetAllInvites);
router.get("/GetAllConfirmed", InvitesController_1.default.GetAllConfirmed);
router.get("/GetAllMessages", MessageController_1.default.GetAll);
router.put("/ConfirmPresence", InvitesController_1.default.ConfirmPresence);
router.put("/RemovePresence", InvitesController_1.default.RemovePresence);
router.post('/uploadInvites', upload.single('file'), InvitesController_1.default.UploadExcel);
router.post('/SearchInvite', InvitesController_1.default.SearchInvite);
router.post('/SendMessage', MessageController_1.default.SendMessage);
router.delete('/DeleteAllInvites', InvitesController_1.default.DeleteAllInvites);
router.delete('/DeleteMessage', MessageController_1.default.DeleteMessage);
router.get("/sendAllNotConfirmedEmail", InvitesController_1.default.SendAllNotConfirmedEmail);
router.get("/DownloadAllConfirmed", InvitesController_1.default.DownloadConfirmed);
exports.default = router;
