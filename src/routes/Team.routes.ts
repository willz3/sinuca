import { createTeamController } from "../useCases/Team/Create";
import { findTeamController } from "../useCases/Team/Find";

export default (router) => {
    router.post('/team', (request, response) => {
        return createTeamController.execute(request, response);
    });

    router.get('/teams', (request, response) => {
        return findTeamController.findAll(request, response);
    });
};