import { JSONDatabasePointsTableRepository } from "../../../repositories/implementation/JsonDB/JSONDatabasePointsTableRepository";
import { UpdateTeamPointsUseCase } from "./UpdateTeamPointsUseCase";
import { UpdateTeamPointsController } from "./UpdateTeamPointsController";
import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";


const jsonDatabasePointsTableRepository = new JSONDatabasePointsTableRepository(new JsonDatabase());

const updateTeamPointsUseCase = new UpdateTeamPointsUseCase(jsonDatabasePointsTableRepository);

const addTeamToGameController = new UpdateTeamPointsController(updateTeamPointsUseCase);

export { updateTeamPointsUseCase, addTeamToGameController }