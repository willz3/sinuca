import { Router } from "express";

import PlayerRoutes from "./Player.routes";
import TeamRoutes from "./Team.routes";
import PointsTableRoutes from "./PointsTable.routes";

const router = Router()

router.use((request, response, next) => {
    console.log(request.url);
    console.log(request.method);
    next();
});

PlayerRoutes(router);
TeamRoutes(router);
PointsTableRoutes(router);

export { router };