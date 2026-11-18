/**
 * Drooling Station - Food Gallery & Lightbox Component
 */
import { galleryItems } from './data.js';

let currentIndex = 0;

export function initGallery() {
  const galleryGrid = document.getElementById('food-gallery-grid');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (!galleryGrid) return;

  // Render gallery tiles
  galleryGrid.innerHTML = galleryItems.map((item, index) => `
    <div class="gallery-item" data-index="${index}" role="button" tabindex="0" aria-label="View ${item.title}">
      <img src="${item.image}" alt="${item.title}" loading="lazy" width="300" height="300" />
      <div class="gallery-overlay">
        <h4>${item.title}</h4>
        <span>${item.category}</span>
      </div>
    </div>
  `).join('');

  // Click handler
  galleryGrid.addEventListener('click', (e) => {
    const itemEl = e.target.closest('.gallery-item');
    if (!itemEl) return;
    const index = parseInt(itemEl.dataset.index, 10);
    openLightbox(index);
  });

  // Keyboard accessibility
  galleryGrid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const itemEl = e.target.closest('.gallery-item');
      if (itemEl) {
        e.preventDefault();
        const index = parseInt(itemEl.dataset.index, 10);
        openLightbox(index);
      }
    }
  });

  function openLightbox(index) {
    if (!lightbox) return;
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = galleryItems[currentIndex];
    if (!item) return;
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxCategory.textContent = item.category;
    lightboxCaption.textContent = item.caption;
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightboxContent();
      } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxContent();
      }
    });
  }
}

