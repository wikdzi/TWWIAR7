import Controller from "../interfaces/controller.interface";
import { Router, Request, Response } from 'express';
class ItemController implements Controller {
    public path = '/old/api/data';
    public router = Router();

    private items: { id: number; value: number }[] = [
        { id: 1, value:  1 },
        { id: 2, value:  2 },
    ];

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllItems);
        this.router.get(`${this.path}/:id`, this.getItemById);
        this.router.post(this.path, this.createItem);
        this.router.put(`${this.path}/:id`, this.updateItem);
        this.router.delete(`${this.path}/:id`, this.deleteItem);
    }

    private getAllItems = (req: Request, res: Response) => {
        res.json(this.items);
    };
    private getItemById = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const item = this.items.find(i => i.id === id);
        item ? res.json(item) : res.status(404).json({ message: 'Item not found1' });
    };
    private createItem = (req: Request, res: Response) => {
        const newItem = {    id: req.body.id,
            value: req.body.value || 0  };
        this.items.push(newItem);
        res.status(201).json(newItem);
    };
    private updateItem = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
            this.items[index].value = req.body.value;
            res.json(this.items[index]);
        } else {
            res.status(404).json({ message: 'Item not found2' });
        }
    };
    private deleteItem = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
            const deletedItem = this.items.splice(index, 1);
            res.json(deletedItem[0]);
        } else {
            res.status(404).json({ message: 'Item not found3' });
        }
    };
}
export default ItemController