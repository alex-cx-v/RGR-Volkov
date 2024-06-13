const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/rssnews', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const newsSchema = new mongoose.Schema({
  title: String,
  link: String,
  contentSnippet: String,
  pubDate: String
});

const News = mongoose.model('News', newsSchema);

const fetchAndSaveNews = async () => {
  try {
    const parser = new Parser();
    const feed1 = await parser.parseURL('https://pravo.ua/rss');
    const feed2 = await parser.parseURL('https://yur-gazeta.com/news/rss/feed.xml');

    const allFeeds = [...feed1.items, ...feed2.items];

    for (const item of allFeeds) {
      const newsItem = new News({
        title: item.title,
        link: item.link,
        contentSnippet: item.contentSnippet,
        pubDate: item.pubDate
      });
      await newsItem.save();
    }
    console.log('News fetched and saved successfully');
  } catch (error) {
    console.error('Error fetching or saving news:', error.message);
  }
};

fetchAndSaveNews();

app.get('/api/news', async (req, res) => {
  try {
    const newsItems = await News.find();
    res.status(200).json(newsItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/news', async (req, res) => {
  try {
    const newsItem = new News(req.body);
    await newsItem.save();
    res.status(201).json(newsItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/news', async (req, res) => {
  try {
    await News.deleteMany({});
    res.status(200).send('Базу даних очищено');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
