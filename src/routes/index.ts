import { Router } from "express";
import * as helloController from "@controllers/hello";

const router = Router();

router.get("/", helloController.index);

export default router;
