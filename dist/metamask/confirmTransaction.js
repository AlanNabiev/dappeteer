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
exports.confirmTransaction = void 0;
const helpers_1 = require("../helpers");
const MIN_GAS = 21000;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const confirmTransaction = (page, getSingedIn, version) => (options) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.bringToFront();
    if (!(yield getSingedIn())) {
        throw new Error("You haven't signed in yet");
    }
    yield page.waitForTimeout(500);
    yield page.reload();
    if (options) {
        yield (0, helpers_1.clickOnButton)(page, 'Edit');
        yield (0, helpers_1.clickOnButton)(page, 'Edit suggested gas fee');
        //non EIP1559 networks don't have priority fee. TODO: run separate Ganache with older hardfork to test this
        let priority = false;
        if (options.priority) {
            priority = yield (0, helpers_1.typeOnInputField)(page, 'Max priority fee', String(options.priority), true, true, true);
        }
        if (options.gasLimit && options.gasLimit >= MIN_GAS)
            yield (0, helpers_1.typeOnInputField)(page, 'Gas Limit', String(options.gasLimit), true);
        if (options.gas && options.gasLimit >= MIN_GAS)
            yield (0, helpers_1.typeOnInputField)(page, priority ? 'Max fee' : 'Gas Limit', String(options.gasLimit), true);
        yield (0, helpers_1.clickOnButton)(page, 'Save');
    }
    yield (0, helpers_1.clickOnButton)(page, '[data-testid="page-container-footer-next"]');
});
exports.confirmTransaction = confirmTransaction;
