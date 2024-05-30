import { DataSource } from "typeorm";

export default new DataSource({
    type: 'mongodb',
    url: 'mongodb://root:example@mongodb:27017/',
});
