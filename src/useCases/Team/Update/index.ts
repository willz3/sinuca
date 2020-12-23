import { JSONDatabaseTeamRepository } from "../../../repositories/implementation/JsonDB/JSONDatabaseTeamRepository";
import { UpdateTeamUseCase } from "./UpdateTeamUseCase";
import { UpdateTeamController } from "./UpdateTeamController";
import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";

const jsonDatabaseTeamRepository = new JSONDatabaseTeamRepository(new JsonDatabase());

const updateTeamUseCase = new UpdateTeamUseCase(jsonDatabaseTeamRepository);

const updateTeamController = new UpdateTeamController(updateTeamUseCase);

export { updateTeamUseCase, updateTeamController }