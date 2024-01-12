import express from 'express';
import bodyParser from 'body-parser';
import { validateProductInteraction } from './dataValidator';

const app = express();
const port = 3001;
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/send-data', (req, res) => {
  const data = req.body
  console.log("BYTES " + JSON.stringify(data).length)




  if (validateProductInteraction(data)) {
    res.status(200).json({ response: 'Data received and validated!', result: data });
  } else {
    console.log('Invalid data:', data);
    res.status(400).json({ error: 'Invalid data format' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

