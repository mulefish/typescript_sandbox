import express from 'express';
import bodyParser from 'body-parser';
import { validateThis } from './dataValidator';

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/validate', async (req, res) => {
  try {
    const candidate_json = req.body
    const t1 = new Date().getTime() 
    const x = await validateThis( candidate_json )
    const milliseconds = new Date().getTime() - t1 

    let results: Record<string, boolean|number> = {}; 
    for ( let k in x ) {
      results[k] = x[k]
    }
    results['milliseconds'] = milliseconds
    res.status(200).json(results)
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

