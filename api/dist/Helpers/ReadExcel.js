"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadExcel = ReadExcel;
exports.WriteExcel = WriteExcel;
var xlsx_1 = __importDefault(require("xlsx"));
function ReadExcel(file) {
    var workbook = xlsx_1.default.readFile(file);
    var sheetNames = workbook.SheetNames;
    var firstSheet = workbook.Sheets[sheetNames[0]];
    var data = xlsx_1.default.utils.sheet_to_json(firstSheet);
    return data;
}
function WriteExcel(data) {
    var worksheet = xlsx_1.default.utils.json_to_sheet(data);
    var workbook = xlsx_1.default.utils.book_new();
    xlsx_1.default.utils.book_append_sheet(workbook, worksheet, 'Convidados');
    var excelBuffer = xlsx_1.default.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    return excelBuffer;
}
