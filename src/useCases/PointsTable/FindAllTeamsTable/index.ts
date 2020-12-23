import { JSONDatabasePointsTableRepository } from "../../../repositories/implementation/JsonDB/JSONDatabasePointsTableRepository";
import { FindAllTeamTableUseCase } from "./FindAllTeamTableUseCase";
import { FindAllTeamTableController } from "./FindAllTeamTableController";
import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";

const jsonDatabasePointsTableRepository = new JSONDatabasePointsTableRepository(new JsonDatabase());

const findAllTeamTableUseCase = new FindAllTeamTableUseCase(jsonDatabasePointsTableRepository);

const findAllTeamTableController = new FindAllTeamTableController(findAllTeamTableUseCase);

export { findAllTeamTableUseCase, findAllTeamTableController }