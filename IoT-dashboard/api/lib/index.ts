import App from './app';
import DataController from './controllers/data.controller';
//import IndexController from "./controllers/index.controller";
//import ItemController from "./controllers/item.controller";

const app: App = new App([
new DataController()
]);

app.listen();