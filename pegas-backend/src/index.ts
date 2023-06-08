import express from 'express';

const app = express();

app.use('/hello', (request, response) => {
    response.send('hello');
});

const port: any = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server on in PORT: ${port}`);
});

export default app;