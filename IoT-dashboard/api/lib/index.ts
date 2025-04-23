import App from './app';
//import DataController from './controllers/data.controller';
import IndexController from "./controllers/index.controller";
import SensorController from './controllers/sensor.controller';

//import TestController from "./controllers/test.controller";

//import ItemController from "./controllers/item.controller";

const app: App = new App([]);
const io = app.getIo();
const controllers = [
    //new TestController(),
    new IndexController(io),
    new SensorController(io),
];
controllers.forEach((controller) => {
    app.app.use("/", controller.router);
});


app.listen();



