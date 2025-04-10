"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ItemController = /** @class */ (function () {
    function ItemController() {
        var _this = this;
        this.path = '/items';
        this.router = (0, express_1.Router)();
        this.items = [];
        this.getAllItems = function (req, res) {
            res.json(_this.items);
        };
        this.getItemById = function (req, res) {
            var id = parseInt(req.params.id);
            var item = _this.items.find(function (i) { return i.id === id; });
            item ? res.json(item) : res.status(404).json({ message: 'Item not found' });
        };
        this.createItem = function (req, res) {
            var newItem = { id: Date.now(), name: req.body.name };
            _this.items.push(newItem);
            res.status(201).json(newItem);
        };
        this.updateItem = function (req, res) {
            var id = parseInt(req.params.id);
            var index = _this.items.findIndex(function (i) { return i.id === id; });
            if (index !== -1) {
                _this.items[index].name = req.body.name;
                res.json(_this.items[index]);
            }
            else {
                res.status(404).json({ message: 'Item not found' });
            }
        };
        this.deleteItem = function (req, res) {
            var id = parseInt(req.params.id);
            var index = _this.items.findIndex(function (i) { return i.id === id; });
            if (index !== -1) {
                var deletedItem = _this.items.splice(index, 1);
                res.json(deletedItem[0]);
            }
            else {
                res.status(404).json({ message: 'Item not found' });
            }
        };
        this.initializeRoutes();
    }
    ItemController.prototype.initializeRoutes = function () {
        this.router.get(this.path, this.getAllItems);
        this.router.get("".concat(this.path, "/:id"), this.getItemById);
        this.router.post(this.path, this.createItem);
        this.router.put("".concat(this.path, "/:id"), this.updateItem);
        this.router.delete("".concat(this.path, "/:id"), this.deleteItem);
    };
    return ItemController;
}());
exports.default = ItemController;
//# sourceMappingURL=item.controller.js.map