import { Router } from 'express';

const router = Router();

router.get('/people', (req, res) => {
    res.send('GET /people');
});

router.post('/people', (req, res) => {
    res.send('POST /people');
});

export default router;