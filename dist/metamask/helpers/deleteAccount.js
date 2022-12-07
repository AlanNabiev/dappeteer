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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccount = void 0;
const helpers_1 = require("../../helpers");
const switchAccount_1 = require("../switchAccount");
const deleteAccount = (page, version) => (accountNumber) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.bringToFront();
    if (accountNumber === 1)
        throw new SyntaxError('Account 1 cannot be deleted');
    yield (0, switchAccount_1.switchAccount)(page, version)(accountNumber);
    yield (0, helpers_1.openAccountDropdown)(page);
    yield (0, helpers_1.clickOnElement)(page, 'Remove account');
    yield (0, helpers_1.clickOnButton)(page, 'Remove');
});
exports.deleteAccount = deleteAccount;
