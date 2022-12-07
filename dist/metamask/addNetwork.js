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
exports.addNetwork = void 0;
const helpers_1 = require("../helpers");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addNetwork = (page, version) => ({ networkName, rpc, chainId, symbol, }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.bringToFront();
    yield (0, helpers_1.openNetworkDropdown)(page);
    yield (0, helpers_1.clickOnButton)(page, 'Add Network');
    const responsePromise = page.waitForResponse((response) => new URL(response.url()).pathname === new URL(rpc).pathname);
    yield (0, helpers_1.typeOnInputField)(page, 'Network Name', networkName);
    yield (0, helpers_1.typeOnInputField)(page, 'New RPC URL', rpc);
    yield (0, helpers_1.typeOnInputField)(page, 'Chain ID', String(chainId));
    yield (0, helpers_1.typeOnInputField)(page, 'Currency Symbol', symbol);
    yield responsePromise;
    yield page.waitForTimeout(500);
    const errorMessage = yield (0, helpers_1.getErrorMessage)(page);
    if (errorMessage)
        throw new SyntaxError(errorMessage);
    yield (0, helpers_1.clickOnButton)(page, 'Save');
    yield page.waitForXPath(`//*[text() = '${networkName}']`);
});
exports.addNetwork = addNetwork;
