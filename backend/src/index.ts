import express from 'express';

const app = express();
const PORT = 5051;

app.get('/', (_req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
