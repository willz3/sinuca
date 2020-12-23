import { JSONDatabasePlayerRepository } from "../../../repositories/implementation/JsonDB/JSONDatabasePlayerRepository";
import { CreatePlayerUseCase } from "./CreatePlayerUseCase";
import { CreatePlayerController } from "./CreatePlayerController";

import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";


const jsonDatabasePlayerRepository = new JSONDatabasePlayerRepository(new JsonDatabase());

const createPlayerUseCase = new CreatePlayerUseCase(jsonDatabasePlayerRepository);

const createPlayerController = new CreatePlayerController(createPlayerUseCase);

export { createPlayerUseCase, createPlayerController }