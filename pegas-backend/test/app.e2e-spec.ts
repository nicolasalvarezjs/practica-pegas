import request from 'supertest';
import app from '../src/index';

describe('ApiRest test enpoints end to end', () => {

    test('should return a successful response', async () => {
        const response = await request(app).get('/hello');
        expect(response.status).toBe(200);
    });
})

