import * as process from "node:process";

export const config = {
    port: process.env.PORT || 3100,
    databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0.jnzqgko.mongodb.net/IoT?retryWrites=true&w=majority&appName=Cluster0',
    socketPort: process.env.PORT || 3000

};