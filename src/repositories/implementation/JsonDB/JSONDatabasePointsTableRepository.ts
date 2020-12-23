import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";
import { PointsTable } from "../../../entities/PointsTable";
import { IPointsTableRepository } from "../../interfaces/IPointsTableRepository";

export class JSONDatabasePointsTableRepository implements IPointsTableRepository {

    constructor(private db: JsonDatabase) {
  
    }
    async save(pointsTable: PointsTable): Promise<void> {
        await this.db.save('/pointsTable', pointsTable);
    }

    async update(pointsTable: PointsTable): Promise<void> {
        await this.db.update('/pointsTable', pointsTable);
    }

    async findById(uuid: string): Promise<PointsTable> {
        return await this.db.findById('/pointsTable', uuid);
    }

    async findAll(): Promise<PointsTable[]> {
        return await this.db.findAll('/pointsTable');
    }

    async findByName(name: string): Promise<PointsTable> {
        return await this.db.findByField('/pointsTable', 'name', name);
    }

}