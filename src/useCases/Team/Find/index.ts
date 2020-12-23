import { JSONDatabaseTeamRepository } from "../../../repositories/implementation/JsonDB/JSONDatabaseTeamRepository";
import { FindTeamUseCase } from "./FindTeamUseCase";
import { FindTeamController } from "./FindTeamController";

import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";

const jsonDatabaseTeamRepository = new JSONDatabaseTeamRepository(new JsonDatabase());

const findTeamUseCase = new FindTeamUseCase(jsonDatabaseTeamRepository);

const findTeamController = new FindTeamController(findTeamUseCase);

export { findTeamUseCase, findTeamController }