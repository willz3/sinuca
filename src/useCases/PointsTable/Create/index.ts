import { JSONDatabasePointsTableRepository } from "../../../repositories/implementation/JsonDB/JSONDatabasePointsTableRepository";
import { CreatePointsTableUseCase } from "./CreatePointsTableUseCase";
import { CreatePointsTableController } from "./CreatePointsTableController";
import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";

const jsonDatabasePointsTableRepository = new JSONDatabasePointsTableRepository(new JsonDatabase());

const createPointsTableUseCase = new CreatePointsTableUseCase(jsonDatabasePointsTableRepository);

const createPointsTableController = new CreatePointsTableController(createPointsTableUseCase);

export { createPointsTableUseCase, createPointsTableController }