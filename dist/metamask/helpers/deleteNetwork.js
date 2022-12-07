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
exports.deleteNetwork = void 0;
const helpers_1 = require("../../helpers");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteNetwork = (page, version) => (name) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.bringToFront();
    yield (0, helpers_1.openNetworkDropdown)(page);
    const network = yield (0, helpers_1.getElementByContent)(page, name);
    yield network.hover();
    const deleteButton = yield page.waitForXPath(`//*[contains(text(), '${name}')]/following-sibling::i`);
    yield deleteButton.click();
    yield (0, helpers_1.clickOnButton)(page, 'Delete');
    yield (0, helpers_1.clickOnLogo)(page);
});
exports.deleteNetwork = deleteNetwork;
