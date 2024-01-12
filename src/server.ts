import express from 'express';
import bodyParser from 'body-parser';
import { validateProductInteraction } from './dataValidator';
import { Receipt } from './types';


const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.json());



app.post('/send-data', (req, res) => {
  try {
    const candidate = req.body
    console.log("BYTES " + JSON.stringify(candidate).length)
    const t1 = new Date().getTime() 
    const receipt: Receipt = validateProductInteraction(candidate);
    const t2 = new Date().getTime() 
    const milliseconds = t2 - t1 
    receipt.millisec = milliseconds
    res.status(200).json(receipt)
  } catch (boom: unknown) {
    console.log(boom)
    console.error(boom)
    const obj = { "status": "bad", "message": boom }
    res.status(500).json(obj)
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

