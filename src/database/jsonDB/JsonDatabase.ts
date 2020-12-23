import { JsonDB } from 'node-json-db';
import { uuid } from "uuidv4";
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import { resolve } from "path";

import { IUUID } from "../IUUID";

export class JsonDatabase implements IUUID {

    private db: JsonDB;

    constructor() {
        this.reload();
    }

    //Trabalhando com arquivos
    reload(): void {
        this.db = new JsonDB(new Config(resolve(__dirname, './jsonDB'), true, false, '/'));
    }

    generateId(): string {
        return uuid();
    }

    async save(route: string, object: any): Promise<void> {
        if(!object.uuid) {
            object.uuid = this.generateId();
        }
        this.db.push(`${route}[]`, object, true);
    }

    async update(route: string, object: any) {
        this.reload();
        const index = this.db.getIndex(`${route}[]`, object.id);
        this.db.push(`${route}[${index}]`, object);
    }

    async findById(route: string, uuid: string): Promise<any> {
        this.reload();
        //Trocado pois o JsoDB obriga que a property 'id' seja long/number
        const index = this.db.getIndex(`${route}`, uuid, "uuid");
        if(!index || index == -1) {
            return null;
        }
        return this.db.getData(`${route}[${index}]`);
    }
 
    async findByField(route: string, field: string, value: any): Promise<any> {
        this.reload();
        const index = this.db.getIndex(`${route}`, value, field);
        if(!index || index == -1) {
            return null;
        }
        const object = this.db.getData(`${route}[${index}]`);
        return object;
    }

    async findAll(route: string): Promise<any[]> {
        this.reload();
        return this.db.getData(route);
    }
    
}