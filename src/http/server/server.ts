import express from 'express';
import mongoose from 'mongoose';
import { userRoutes } from '../../modules/users/routes';

const app = express();
mongoose.connect('mongodb://localhost/firstApi');

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (request, response) => {
  return response.json({ message: 'testando server!' });
});

app.listen(3000, () => {
  console.log('Server conncted!');
});
