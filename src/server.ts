import express, { response } from 'express';

const PORT = 3333;

const app = express();

app.get('/', (request, response) => {
  return response.send('iu');
})

app.post('/test-post', (request, response) => {
  return response.send('Salve familia')
})

app.listen(PORT, () => console.log(`🔥 Server is running at port ${PORT}`));