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
exports.dbWrite = exports.dbRead = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const dbRead = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield promises_1.default.readFile(path_1.default.join(__dirname, '../../db.json'), { encoding: 'utf8' });
        if (params.index == "") {
            return JSON.parse(data);
        }
        else {
            return JSON.parse(data)[params.index];
        }
    }
    catch (err) {
        console.log(err);
        return { error: true };
    }
});
exports.dbRead = dbRead;
const dbWrite = (params) => __awaiter(void 0, void 0, void 0, function* () {
    if (params.index == "" || params.content == "") {
        return { error: true, msg: "Sem index ou content não dá..." };
    }
    try {
        let data = yield (0, exports.dbRead)({ index: "" });
        data[params.index] = params.content;
        yield promises_1.default.writeFile(path_1.default.join(__dirname, '../../db.json'), JSON.stringify(data));
        return yield (0, exports.dbRead)({ index: params.index });
    }
    catch (err) {
        console.log(err);
        return { error: true };
    }
});
exports.dbWrite = dbWrite;
