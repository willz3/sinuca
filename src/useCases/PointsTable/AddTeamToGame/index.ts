import { JSONDatabasePointsTableRepository } from "../../../repositories/implementation/JsonDB/JSONDatabasePointsTableRepository";
import { AddTeamToGameUseCase } from "./AddTeamToGameUseCase";
import { AddTeamToGameController } from "./AddTeamToGameController";
import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";
import { AddTeamToGameValidator } from "./AddTeamToGameValidator";


const jsonDatabasePointsTableRepository = new JSONDatabasePointsTableRepository(new JsonDatabase());

const addTeamToGameUseCase = new AddTeamToGameUseCase(jsonDatabasePointsTableRepository);

const addTeamToGameController = new AddTeamToGameController(addTeamToGameUseCase);

export { addTeamToGameUseCase, addTeamToGameController }