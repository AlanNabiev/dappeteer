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
exports.unlock = void 0;
const helpers_1 = require("../helpers");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unlock = (page, setSignedIn, getSingedIn, version) => (password = 'password1234') => __awaiter(void 0, void 0, void 0, function* () {
    if (yield getSingedIn()) {
        throw new Error("You can't sign in because you are already signed in");
    }
    yield page.bringToFront();
    yield (0, helpers_1.typeOnInputField)(page, 'Password', password);
    yield (0, helpers_1.clickOnButton)(page, 'Unlock');
    yield setSignedIn(true);
});
exports.unlock = unlock;
