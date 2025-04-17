const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// ─── MIDDLEWARE ────────────────────────────────────────────────────────────────
// parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve _any_ static file (css, js, images, etc.) out of your project root
// so that <script src="scripts/index.js"> (or a future css folder) just works
app.use(express.static(__dirname));

// ─── MONGODB / MONGOOSE SETUP ──────────────────────────────────────────────────
const mongoURI = 'mongodb://127.0.0.1:27017/dreamhomes';
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✔️ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// data model for properties
const Property = mongoose.model(
  'Property',
  new mongoose.Schema({
    name: String,
    price: Number,
    bedrooms: Number,
    bathrooms: Number,
    imageUrl: String,
    location: String,
    description: String,
  })
);

// ─── ROUTES ────────────────────────────────────────────────────────────────────
// serve your HTML pages (all in the project root)
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/listings', (req, res) => res.sendFile(path.join(__dirname, 'listing.html')));
app.get('/agents', (req, res) => res.sendFile(path.join(__dirname, 'agents.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));

// ─── API ROUTES ────────────────────────────────────────────────────────────────

// new GET API for all properties
app.get('/api/properties', async (req, res) => {
  try {
    const properties = await Property.find({});
    res.json(properties);
  } catch (err) {
    console.error('Error fetching properties:', err);
    res.status(500).json({ error: 'Error fetching properties' });
  }
});

// Search form from index.html / home.html
app.post('/search', async (req, res) => {
  const { query } = req.body;
  try {
    const results = await Property.find({ location: { $regex: query, $options: 'i' } });
    return res.json(results);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error fetching properties' });
  }
});

// Dynamic Listings page
app.post('/listings', async (req, res) => {
  try {
    const all = await Property.find({});
    return res.json(all);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error fetching listings' });
  }
});

// Agents page (you can hook this up to a real collection later)
app.post('/agents', (req, res) => {
  const agents = [
    { name: 'John Doe', office: 'Los Angeles', email: 'john@example.com' },
    { name: 'Jane Smith', office: 'Beverly Hills', email: 'jane@example.com' },
  ];
  res.json(agents);
});

// Contact-form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', req.body);
  // TODO: save to DB or send email
  res.json({ status: 'success', message: 'Your message was received!' });
});

// ─── START SERVER ──────────────────────────────────────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
