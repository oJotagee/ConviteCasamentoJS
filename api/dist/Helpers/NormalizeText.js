"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = normalizeText;
function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
