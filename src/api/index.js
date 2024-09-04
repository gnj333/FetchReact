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
exports.fetchUserReposFx = void 0;
const effector_1 = require("effector");
const model_1 = require("../components/Recipes/model");
const link = 'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&';
exports.fetchUserReposFx = (0, effector_1.createEffect)((_a) => __awaiter(void 0, [_a], void 0, function* ({ q, health, calories, diet }) {
    const response = yield fetch(`${link}q=${q}${health ? `&health=${health.toLowerCase().replace(/ /g, "-")}` : ''}${diet ? `&diet=${diet.toLowerCase().replace(/ /g, '-')}` : ''}${calories ? `&calories=${calories}` : ''}`);
    const json = yield response.json();
    (0, model_1.dataChanges)(json);
}));
