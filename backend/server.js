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
    name: 'Ella Mae N. Engreso',
    bio: `She is a joyful and cheerful individual whose presence naturally uplifts those around her. Her positive outlook in life is reflected in the way she carries herself with grace, kindness, and genuine warmth. Grounded in strong faith, she is God-fearing, allowing her beliefs to guide her decisions, values, and daily actions.

Academically driven, she remains focused and dedicated to her studies, consistently striving for excellence and self-improvement. Her discipline and commitment highlight her determination to achieve her goals while maintaining balance in her life.

What makes her truly remarkable is the subtle yet profound impact she has on others. Even the slightest movement or gesture from her radiates a sense of joy and comfort, effortlessly bringing happiness to those who admire her. Her presence alone serves as a quiet inspirationproof that sincerity, faith, and positivity can leave a lasting impression.`,
    photo: '/images/profile.jpg',
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
      { id: 3, url: '/images/pic3.jpg', caption: 'Photo 3' },
      { id: 4, url: '/images/pic4.jpg', caption: 'Photo 4' },
      { id: 5, url: '/images/pic5.jpg', caption: 'Photo 5' },
      { id: 6, url: '/images/pic6.jpg', caption: 'Photo 6' },
      { id: 7, url: '/images/pic7.jpg', caption: 'Photo 7' },
      { id: 8, url: '/images/pic8.jpg', caption: 'Photo 8' },
      { id: 9, url: '/images/pic9.jpg', caption: 'Photo 9' },
      { id: 10, url: '/images/pic10.jpg', caption: 'Photo 10' },
      { id: 11, url: '/images/pic11.jpg', caption: 'Photo 11' },
      { id: 12, url: '/images/pic12.jpg', caption: 'Photo 12' },
      { id: 13, url: '/images/pic13.jpg', caption: 'Photo 13' },
      { id: 14, url: '/images/pic14.jpg', caption: 'Photo 14' },
      { id: 15, url: '/images/pic15.jpg', caption: 'Photo 15' },
      { id: 16, url: '/images/pic16.jpg', caption: 'Photo 16' },
      { id: 17, url: '/images/pic17.jpg', caption: 'Photo 17' }
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
