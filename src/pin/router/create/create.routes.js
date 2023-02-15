import { Router } from "express";
import {
  createCreateHandler,
  createGetHandler,
  createDeleteHandler,
} from "../../handler/create/create.handler.js";
import { createValidation } from "../../middleware/create.validation.js";

const router = Router();

router
  .route("/")
  .post(
    createValidation,
    createCreateHandler,
    createGetHandler,
    createDeleteHandler
  );

export default router;
