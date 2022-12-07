"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECOMMENDED_METAMASK_VERSION = exports.getMetamaskWindow = exports.getMetamask = void 0;
// re-export
var metamask_1 = require("./metamask");
Object.defineProperty(exports, "getMetamask", { enumerable: true, get: function () { return metamask_1.getMetamask; } });
Object.defineProperty(exports, "getMetamaskWindow", { enumerable: true, get: function () { return metamask_1.getMetamaskWindow; } });
__exportStar(require("./types"), exports);
__exportStar(require("./setup"), exports);
// default constants
exports.RECOMMENDED_METAMASK_VERSION = 'v10.22.0';
