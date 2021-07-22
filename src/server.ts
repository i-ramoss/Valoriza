import express from 'express';

const PORT = 3333;

const app = express();

app.listen(PORT, () => console.log(`🔥 Server is running at port ${PORT}`));