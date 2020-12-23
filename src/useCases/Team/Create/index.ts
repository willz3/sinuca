import { JSONDatabaseTeamRepository } from "../../../repositories/implementation/JsonDB/JSONDatabaseTeamRepository";
import { CreateTeamUseCase } from "./CreateTeamUseCase";
import { CreateTeamController } from "./CreateTeamController";
import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";

const jsonDatabaseTeamRepository = new JSONDatabaseTeamRepository(new JsonDatabase());

const createTeamUseCase = new CreateTeamUseCase(jsonDatabaseTeamRepository);

const createTeamController = new CreateTeamController(createTeamUseCase);

export { createTeamUseCase, createTeamController }