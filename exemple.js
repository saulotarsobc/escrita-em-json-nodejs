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
const database_1 = require("./src/database");
function debugar(title, data) {
    console.log(`======\n${title}\n`, data, "\n=======================\n");
}
function reads() {
    return __awaiter(this, void 0, void 0, function* () {
        let dadosCompletos = yield (0, database_1.dbRead)({ index: "" });
        debugar("Sem index", dadosCompletos);
        let cidade = yield (0, database_1.dbRead)({ index: 'cidade' });
        debugar("Com index", cidade);
    });
}
;
function writes() {
    return __awaiter(this, void 0, void 0, function* () {
        const escrita1 = yield (0, database_1.dbWrite)({ index: "", content: "bla bla bla" });
        debugar("Escrevendo sem index", escrita1);
        const escrita2 = yield (0, database_1.dbWrite)({ index: "nome", content: "" });
        debugar("Escrevendo sem content", escrita2);
        const escrita3 = yield (0, database_1.dbWrite)({ index: "nome", content: "costa" });
        debugar("Escrevendo com index", escrita3);
        const escrita4 = yield (0, database_1.dbWrite)({ index: "idade", content: 30 });
        debugar("Escrevendo com index", escrita4);
    });
}
;
reads();
// writes();
