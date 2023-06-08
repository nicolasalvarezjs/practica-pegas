import { Router } from 'express';
import { getPeopleController, postPeopleController } from '../controllers/people.controller';

const router = Router();

router.get('/people', getPeopleController);
router.post('/people', [] ,postPeopleController);

export default router;