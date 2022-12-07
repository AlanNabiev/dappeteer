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
exports.approve = void 0;
const helpers_1 = require("../helpers");
// TODO: thing about renaming this method?
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const approve = (page, version) => () => __awaiter(void 0, void 0, void 0, function* () {
    yield page.bringToFront();
    yield page.reload();
    // TODO: step 1 of connect chose account to connect?
    yield (0, helpers_1.clickOnButton)(page, '.btn-primary');
    yield (0, helpers_1.clickOnButton)(page, '[data-testid="page-container-footer-next"]');
});
exports.approve = approve;
