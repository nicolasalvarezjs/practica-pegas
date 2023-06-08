import express from 'express';
import router from './routes';
const app = express();

app.use('/api', router);

const port: any = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server on in PORT: ${port}`);
});

export default app;