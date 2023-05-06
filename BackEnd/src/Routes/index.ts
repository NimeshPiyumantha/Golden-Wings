import { Router } from "express";
import UserRoutes from "./UserRoutes";

const router: Router = Router();
const url_prefix = "/api/v1";

router.use(`${url_prefix}/user`, new UserRoutes().getRouter());

export default router;
