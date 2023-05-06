import { Router } from "express";
import UserRoutes from "./UserRoutes";
import RoleRoutes from "./RoleRoutes";

const router: Router = Router();
const url_prefix = "/api/v1";

router.use(`${url_prefix}/user`, new UserRoutes().getRouter());
router.use(`${url_prefix}/role`, new RoleRoutes().getRouter());

export default router;
