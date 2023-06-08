import request from 'supertest';
import app from '../src/index';

const path = '/api/people';
describe('ApiRest test enpoints end to end', () => {

    test('POST people should return a successful response', async () => {
        const response = await request(app).post(path);
        expect(response.status).toBe(200);
    });
    
    test('GET people should return a successful response', async () => {
        const response = await request(app).get(path);
        expect(response.status).toBe(200);
    });

})

