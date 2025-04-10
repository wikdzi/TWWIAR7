"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var index_controller_1 = __importDefault(require("./controllers/index.controller"));
var item_controller_1 = __importDefault(require("./controllers/item.controller"));
var app = new app_1.default([
    new index_controller_1.default(),
    new item_controller_1.default()
]);
app.listen();
//# sourceMappingURL=index.js.map