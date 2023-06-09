import { Router } from "express";
import {
  getPeopleController,
  postPeopleController,
} from "../controllers/people.controller";
import {
  fieldsAreRequired,
  phoneIsAlreadyExist,
} from "../middlewares/people.middleware";

const router = Router();

router.get("/people", getPeopleController);
router.post(
  "/people",
  [ fieldsAreRequired, phoneIsAlreadyExist],
  postPeopleController
);

export default router;
