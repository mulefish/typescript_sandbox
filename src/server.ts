import express from 'express';
import bodyParser from 'body-parser';
import { validateProductInteraction } from './dataValidator';
import { Receipt } from './types';


const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/send-data', (req, res) => {
  const candidate = req.body
  console.log("BYTES " + JSON.stringify(candidate).length)

  const receipt: Receipt = validateProductInteraction(candidate);
  res.status(200).json(receipt)
  /* 
  if (validateProductInteraction(data)) {
    res.status(200).json({ response: 'Data received and validated!', result: data });
  } else {
    console.log('Invalid data:', data);
    res.status(400).json({ error: 'Invalid data format' });
  }
  */ 
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

