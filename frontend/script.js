// Fetch and display profile data
async function loadProfileData() {
  try {
    const response = await fetch('/api/profile');
    const data = await response.json();
    
    // Update profile section
    document.getElementById('profileName').textContent = data.name;
    document.getElementById('profileBio').textContent = data.bio;
    document.getElementById('profileImage').src = data.photo;
    document.getElementById('profileQuote').textContent = `"${data.quote}"`;
    
    // Update hobbies
    const hobbiesList = document.getElementById('hobbiesList');
    hobbiesList.innerHTML = '';
    const mediaData = {
      'Watching Kdrama': {
        title: 'Watched Kdramas',
        description: 'A curated selection of her favorite Kdramas, each paired with a cover-style preview and title.',
        items: [
          {
            title: 'In Your Radiant Season',
            image: '/images/sea.jpg'
          },
          {
            title: 'Spring Fever',
            image: '/images/spring.jpg'
          },
          {
            title: 'Our Universe Behind the Scenes',
            image: '/images/our.jpg'
          },
          {
            title: 'No Tail to Tell',
            image: '/images/no.jpg'
          }
        ]
      },
      'Roblox': {
        title: 'Favorite Roblox Games',
        description: 'Three games she enjoys in Roblox, shown with the cover image and game title below.',
        items: [
          {
            title: 'Grow a Garden',
            image: '/images/grow.jpg'
          },
          {
            title: '99 Nights',
            image: '/images/night.jpg'
          },
          {
            title: 'Combat Arena',
            image: '/images/com.jpg'
          }
        ]
      },
      'ML': {
        title: 'Favorite Heroes',
        description: 'Her top ML heroes, displayed with their portrait and name for a polished hero showcase.',
        items: [
          {
            title: 'Hanabi',
            image: '/images/han.jpg'
          },
          {
            title: 'Cici',
            image: '/images/cici.jpg'
          },
          {
            title: 'Nana',
            image: '/images/nana.jpg'
          }
        ]
      }
    };

    data.hobbies.forEach(hobby => {
      const card = document.createElement('div');
      card.className = 'hobby-card';
      card.innerHTML = `
        <span class="hobby-icon">⭐</span>
        <p>${hobby}</p>
      `;

      if (mediaData[hobby]) {
        card.addEventListener('click', () => {
          const current = mediaData[hobby];
          document.getElementById('modalTitle').textContent = current.title;
          document.getElementById('modalDescription').textContent = current.description;
          const grid = document.getElementById('mediaGrid');
          grid.innerHTML = current.items.map(item => `
            <div class="media-card">
              <img src="${item.image}" alt="${item.title}">
              <p>${item.title}</p>
            </div>
          `).join('');
          document.getElementById('popupModal').classList.remove('hidden');
        });
      }

      hobbiesList.appendChild(card);
    });
    
    // Update social links
    const socialLinks = document.querySelectorAll('.social-icon');
    if (data.socialLinks) {
      socialLinks.forEach((link, index) => {
        const platforms = Object.keys(data.socialLinks);
        if (platforms[index]) {
          link.href = data.socialLinks[platforms[index]];
        }
      });
    }
  } catch (error) {
    console.error('Error loading profile:', error);
  }
}

// Fetch and display gallery
async function loadGallery() {
  try {
    const response = await fetch('/api/gallery');
    const data = await response.json();
    
    const gallery = document.getElementById('photoGallery');
    gallery.innerHTML = '';
    
    data.photos.forEach(photo => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.innerHTML = `
        <img src="${photo.url}" alt="${photo.caption}">
        <div class="heart heart-1"></div>
        <div class="heart heart-2"></div>
        <div class="heart heart-3"></div>
      `;
      item.addEventListener('click', () => {
        const galleryPopup = document.getElementById('galleryPopup');
        const popupImage = document.getElementById('galleryPopupImage');
        const popupCaption = document.getElementById('galleryPopupCaption');
        const popupCard = document.getElementById('galleryPopupCard');

        popupImage.src = photo.url;
        popupImage.alt = photo.caption;
        popupCaption.textContent = photo.caption;
        popupCard.classList.remove('pop-active');
        void popupCard.offsetWidth;
        popupCard.classList.add('pop-active');
        galleryPopup.classList.remove('hidden');
      });
      gallery.appendChild(item);
    });
  } catch (error) {
    console.error('Error loading gallery:', error);
  }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

function setupModal() {
  const popupModal = document.getElementById('popupModal');
  const closeButton = document.getElementById('closeModal');

  if (!popupModal || !closeButton) return;

  closeButton.addEventListener('click', () => {
    popupModal.classList.add('hidden');
  });

  popupModal.addEventListener('click', (event) => {
    if (event.target === popupModal) {
      popupModal.classList.add('hidden');
    }
  });
}

function setupGalleryModal() {
  const galleryPopup = document.getElementById('galleryPopup');
  const closeGalleryButton = document.getElementById('closeGalleryModal');
  const popupCard = document.getElementById('galleryPopupCard');

  if (!galleryPopup || !closeGalleryButton || !popupCard) return;

  closeGalleryButton.addEventListener('click', () => {
    galleryPopup.classList.add('hidden');
    popupCard.classList.remove('pop-active');
  });

  galleryPopup.addEventListener('click', (event) => {
    if (event.target === galleryPopup) {
      galleryPopup.classList.add('hidden');
      popupCard.classList.remove('pop-active');
    }
  });
}

// Initialize on page load
function setupWelcomeOverlay() {
  const overlay = document.getElementById('welcomeOverlay');
  const button = document.getElementById('closeWelcome');

  if (!overlay || !button) return;

  button.addEventListener('click', () => {
    overlay.classList.add('hidden');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadProfileData();
  loadGallery();
  setupModal();
  setupGalleryModal();
  setupWelcomeOverlay();
});
