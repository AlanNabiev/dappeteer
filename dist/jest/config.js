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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDappeteerConfig = exports.DAPPETEER_DEFAULT_CONFIG = void 0;
const path_1 = __importDefault(require("path"));
const node_fs_1 = require("node:fs");
const node_process_1 = require("node:process");
const index_1 = require("../index");
exports.DAPPETEER_DEFAULT_CONFIG = { metamaskVersion: index_1.RECOMMENDED_METAMASK_VERSION };
function getDappeteerConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const configPath = 'dappeteer.config.js';
        const filePath = path_1.default.resolve((0, node_process_1.cwd)(), configPath);
        if (!(0, node_fs_1.existsSync)(filePath))
            return {
                dappeteer: exports.DAPPETEER_DEFAULT_CONFIG,
                metamask: {},
            };
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const config = yield require(filePath);
        return {
            dappeteer: Object.assign(Object.assign({}, exports.DAPPETEER_DEFAULT_CONFIG), config.dappeteer),
            metamask: Object.assign({}, config.metamask),
        };
    });
}
exports.getDappeteerConfig = getDappeteerConfig;
