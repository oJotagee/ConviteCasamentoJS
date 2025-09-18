"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateString = ValidateString;
function ValidateString(value) {
    if (!value || value === "") {
        return false;
    }
    else {
        return true;
    }
}
