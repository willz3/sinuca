import { JSONDatabasePlayerRepository } from "../../../repositories/implementation/JsonDB/JSONDatabasePlayerRepository";
import { UpdatePlayerUseCase } from "./UpdatePlayerUseCase";
import { UpdatePlayerController } from "./UpdatePlayerController";

import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";


const jsonDatabasePlayerRepository = new JSONDatabasePlayerRepository(new JsonDatabase());

const updatePlayerUseCase = new UpdatePlayerUseCase(jsonDatabasePlayerRepository);

const updatePlayerController = new UpdatePlayerController(updatePlayerUseCase);

export { updatePlayerUseCase, updatePlayerController }