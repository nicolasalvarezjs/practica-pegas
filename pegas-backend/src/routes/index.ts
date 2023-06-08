import { Router } from "express";
import {
  getPeopleController,
  postPeopleController,
} from "../controllers/people.controller";
import {
  fieldsAreRequired,
  phoneIsAlreadyUse,
} from "../middlewares/people.middleware";

const router = Router();

router.get("/people", getPeopleController);
router.post(
  "/people",
  [fieldsAreRequired, phoneIsAlreadyUse],
  postPeopleController
);

export default router;
