import { Router } from "express";
import UserRoutes from "./UserRoutes";
import RoleRoutes from "./RoleRoutes";
import PostRoutes from "./PostRoutes ";
import CategoryRoutes from "./CategoryRoutes";
import PlaceRoutes from "./PlaceRoutes";
import ImageRoutes from "./ImageRoutes";

const router: Router = Router();
const url_prefix = "/api/v1";

router.use(`${url_prefix}/user`, new UserRoutes().getRouter());
router.use(`${url_prefix}/role`, new RoleRoutes().getRouter());
router.use(`${url_prefix}/post`, new PostRoutes().getRouter());
router.use(`${url_prefix}/category`, new CategoryRoutes().getRouter());
router.use(`${url_prefix}/place`, new PlaceRoutes().getRouter());
router.use(`${url_prefix}/image`, new ImageRoutes().getRouter());

export default router;
