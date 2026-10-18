
import express from 'express';

const app = express();
app.use(express.json());

let quotes = [
  { id: 1, text: 'Stay hungry, stay foolish.', author: 'Steve Jobs' },
  { id: 2, text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
  { id: 3, text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  { id: 4, text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' }
];

// GET all quotes
app.get('/quotes', (req, res) => {
  res.status(200).json(quotes);
});

// GET one quote
app.get('/quotes/:id', (req, res) => {
  const id = Number(req.params.id);
  const quote = quotes.find(q => q.id === id);

  if (!quote) {
    return res.status(404).json({ error: 'Quote not found' });
  }

  res.status(200).json(quote);
});

// POST a new quote
app.post('/quotes', (req, res) => {
  const { text, author } = req.body;

  if (
    typeof text !== 'string' || !text.trim() ||
    typeof author !== 'string' || !author.trim()
  ) {
    return res.status(400).json({
      error: 'Both text and author are required'
    });
  }

  const newId = quotes.length
    ? Math.max(...quotes.map(q => q.id)) + 1
    : 1;

  const newQuote = {
    id: newId,
    text: text.trim(),
    author: author.trim()
  };

  quotes.push(newQuote);

  res.status(201).json(newQuote);
});

// DELETE a quote
app.delete('/quotes/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = quotes.findIndex(q => q.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Quote not found' });
  }

  quotes.splice(index, 1);
  res.status(204).send();
});

// 404 fallback for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
