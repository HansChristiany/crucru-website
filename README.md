# 💕 Profile Showcase Website

A beautiful, modern website to showcase information about someone special. Perfect for creating a personalized profile page with photos, hobbies, and quotes.

## Features

✨ **Beautiful Design** - Modern, feminine aesthetic with smooth animations
📸 **Photo Gallery** - Display your favorite photos
💫 **Profile Section** - Bio and personal information
🎯 **Hobbies Display** - Highlight interests and hobbies
✍️ **Quote Section** - Feature a favorite quote
📱 **Fully Responsive** - Looks great on all devices
🚀 **Fast & Lightweight** - Quick loading times

## Tech Stack

- **Backend**: Express.js (Node.js)
- **Frontend**: HTML5, CSS3, JavaScript
- **Design**: Modern CSS with animations

## Installation

1. Navigate to the project directory:
```bash
cd crush-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5000
```

## Project Structure

```
crush-website/
├── backend/
│   └── server.js           # Express server
├── frontend/
│   ├── index.html          # Main page
│   ├── styles.css          # Styling
│   └── script.js           # Frontend logic
├── public/
│   └── images/             # Place images here
├── package.json
└── README.md
```

## Customization

### Update Profile Information

Edit the `/api/profile` endpoint in `backend/server.js`:

```javascript
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Her Name',
    bio: 'Add bio here',
    photo: '/images/profile.jpg',
    hobbies: ['Hobby 1', 'Hobby 2'],
    quote: 'Favorite quote',
    socialLinks: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  });
});
```

### Add Photos

1. Place your images in the `public/images/` folder
2. Update the photo paths in `backend/server.js` in the `/api/gallery` endpoint

### Change Colors

Edit the CSS variables in `frontend/styles.css`:

```css
:root {
    --primary-color: #ff69b4;
    --secondary-color: #ff1493;
    --accent-color: #ffc0cb;
    /* etc... */
}
```

## Hosting

This project can be deployed to:
- Vercel
- Heroku
- Netlify
- AWS
- Any Node.js hosting

## Future Enhancements

- Admin panel for easy updates
- Comment section
- Contact form
- Video integration
- Dark mode
- Multiple language support

## License

ISC

## Made with 💕

Created to help you express your feelings in a creative and beautiful way!
