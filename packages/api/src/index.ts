import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Document, addDocument, queryDocuments } from './services/dataCollectionService';

const app = express()
const port = process.env.PORT || 8080

// middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/', (_req: Request, res: Response) => {
  return res.send(
    'Data collection API\n' + 'Endpoints:\n' + 'POST /documents\n' + 'POST /query-documents\n'
  );
});

app.post('/documents', async (req: Request, res: Response) => {
  const { title, description, content }: Document = req.body;
  if (!title || !content) {
    return res.status(400).send('Title and content are required');
  }
  await addDocument(title, description, content); 
});

app.post('/documents/query', async (req: Request, res: Response) => {
  const { query }  = req.body;
  const documents = await queryDocuments(query);
  return res.send({ documents });
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
});

export default app;
