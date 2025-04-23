import Controller from "../interfaces/controller.interface";
import { Router, Request, Response } from "express";
import { Server } from "socket.io";

class SensorController implements Controller {
    public path = '/send-data';
    public router = Router();
    private io: Server;

    constructor(io: Server) {
        this.io = io;
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(this.path, this.handleSensorData);
    }

    private handleSensorData = (req: Request, res: Response) => {
        const data = req.body;

        console.log(" Otrzymano dane czujnika:", data);

        this.io.emit("sensor-data", data);

        res.status(200).json({ message: "Dane wysłane" });
    };
}

export default SensorController;