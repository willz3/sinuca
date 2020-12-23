import { IRepository } from "../IRepository";
import { PointsTable } from "../../entities/PointsTable";

export interface IPointsTableRepository extends IRepository{
    findByName(name: string): Promise<PointsTable>;
}