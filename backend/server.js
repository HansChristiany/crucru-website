const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// API Routes
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Cassiane Ryn Engresso',
    bio: `She is a joyful and cheerful individual whose presence naturally uplifts those around her. Her positive outlook in life is reflected in the way she carries herself with grace, kindness, and genuine warmth. Grounded in strong faith, she is God-fearing, allowing her beliefs to guide her decisions, values, and daily actions.

Academically driven, she remains focused and dedicated to her studies, consistently striving for excellence and self-improvement. Her discipline and commitment highlight her determination to achieve her goals while maintaining balance in her life.

What makes her truly remarkable is the subtle yet profound impact she has on others. Even the slightest movement or gesture from her radiates a sense of joy and comfort, effortlessly bringing happiness to those who admire her. Her presence alone serves as a quiet inspirationproof that sincerity, faith, and positivity can leave a lasting impression.`,
    photo: '/images/ryn.jpg',
    hobbies: ['Watching Kdrama', 'Roblox', 'ML'],
    quote: 'Isaiah 60:22',
    socialLinks: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  });
});

app.get('/api/gallery', (req, res) => {
  res.json({
    photos: [
      { id: 1, url: '/images/pic1.jpg', caption: 'Photo 1' },
      { id: 2, url: '/images/pic2.jpg', caption: 'Photo 2' },
      { id: 3, url: '/images/pic3.jpg', caption: 'Photo 3' }
    ]
  });
});

// Catch-all handler for single-page app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
