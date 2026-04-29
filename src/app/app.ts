import express from 'express';

const app = express();

app.get('/', (req,res) => {
  res.json('Welcome to Express & TypeScript Server');

});


export default app