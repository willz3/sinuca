import { JSONDatabasePlayerRepository } from "../../../repositories/implementation/JsonDB/JSONDatabasePlayerRepository";
import { FindPlayerUseCase } from "./FindPlayerUseCase";
import { FindPlayerController } from "./FindPlayerController";

import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";

const jsonDatabasePlayerRepository = new JSONDatabasePlayerRepository(new JsonDatabase());

const findPlayerUseCase = new FindPlayerUseCase(jsonDatabasePlayerRepository);

const findPlayerController = new FindPlayerController(findPlayerUseCase);

export { findPlayerUseCase, findPlayerController }