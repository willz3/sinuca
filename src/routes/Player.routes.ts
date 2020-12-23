import { createPlayerController } from "../useCases/Player/Create";
import { findPlayerController } from "../useCases/Player/Find";
import { updatePlayerController } from "../useCases/Player/Update";

export default (router) => {
    router.post('/player', (request, response) => {
        return createPlayerController.execute(request, response);
    });

    router.put('/player', (request, response) => {
        return updatePlayerController.execute(request, response);
    })

    router.get('/player/:uuid', (request, response) => {
        return findPlayerController.show(request, response);
    });

    router.get('/players', (request, response) => {
        return findPlayerController.findAll(request, response);
    });

};