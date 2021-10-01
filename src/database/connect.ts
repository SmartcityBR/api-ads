import { createConnection } from "typeorm";

createConnection().then(() => console.log("Connected with DB.")).catch(err => console.error(err));