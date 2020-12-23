import { createPointsTableController } from "../useCases/PointsTable/Create";

export default (router) => {
    router.post('/pointsTable', (request, response) => {
        return createPointsTableController.execute(request, response);
    });
    
};