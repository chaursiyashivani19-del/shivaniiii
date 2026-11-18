/**
 * Drooling Station - Interactive Menu Filtering & Search
 */
import { menuCategories, menuItems } from './data.js';

let activeCategory = 'all';
let activeDiet = 'all'; // 'all' | 'veg' | 'non-veg'
let searchQuery = '';

export function initMenu() {
  const categoryPillsContainer = document.getElementById('menu-category-pills');
  const menuGridContainer = document.getElementById('menu-items-grid');
  const searchInput = document.getElementById('menu-search-input');
  const dietToggles = document.querySelectorAll('.diet-toggle-btn');
  const menuCounter = document.getElementById('menu-item-count');

  if (!menuGridContainer) return;

  // Render Category Filter Buttons
  if (categoryPillsContainer) {
    categoryPillsContainer.innerHTML = menuCategories.map(cat => `
      <button class="cat-pill ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    categoryPillsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;
      activeCategory = btn.dataset.category;
      
      categoryPillsContainer.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderItems();
    });
  }

  // Diet Toggle Buttons (All, Veg, Non-Veg)
  dietToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      dietToggles.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDiet = btn.dataset.diet;
      renderItems();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderItems();
    });
  }

  function renderItems() {
    const filtered = menuItems.filter(item => {
      // Category filter
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      // Diet filter
      const matchesDiet = 
        activeDiet === 'all' ? true :
        activeDiet === 'veg' ? item.isVeg === true :
        item.isVeg === false;
      // Search filter
      const matchesSearch = 
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery) ||
        (item.description && item.description.toLowerCase().includes(searchQuery));

      return matchesCat && matchesDiet && matchesSearch;
    });

    if (menuCounter) {
      menuCounter.textContent = `Showing ${filtered.length} dish${filtered.length === 1 ? '' : 'es'}`;
    }

    if (filtered.length === 0) {
      menuGridContainer.innerHTML = `
        <div class="menu-empty-state">
          <p style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-main);">No dishes found matching your selection.</p>
          <p style="font-size: 0.85rem; color: var(--text-dim);">Try clearing filters or search terms.</p>
        </div>
      `;
      return;
    }

    menuGridContainer.innerHTML = filtered.map(item => `
      <article class="menu-item-row" data-id="${item.id}">
        <div class="menu-item-info">
          <div class="menu-item-header">
            <span class="diet-badge ${item.isVeg ? 'veg' : 'non-veg'}" title="${item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}"></span>
            <h3 class="menu-item-name">${item.name}</h3>
            ${item.isSignature ? '<span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 9999px; color: #fbbf24; font-weight: 700;">Popular</span>' : ''}
          </div>
          <p class="menu-item-desc">${item.description || 'Prepared fresh with house spices.'}</p>
        </div>
        <div class="menu-item-pricing">
          <span class="item-price">₹${item.price}</span>
        </div>
      </article>
    `).join('');
  }

  // Initial render
  renderItems();
}

export function initSignatures() {
  const container = document.getElementById('signature-items-grid');
  if (!container) return;

  const signatures = menuItems.filter(item => item.isSignature).slice(0, 3);
  
  container.innerHTML = signatures.map(item => `
    <article class="signature-card">
      <div class="signature-img-wrap">
        <img src="${item.image}" alt="${item.name} at Drooling Station" loading="lazy" width="400" height="220" />
        <span class="signature-badge">Verified Signature</span>
      </div>
      <div class="signature-content">
        <div class="signature-meta">
          <span class="diet-badge ${item.isVeg ? 'veg' : 'non-veg'}" title="${item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
          <span class="signature-price">₹${item.price}</span>
        </div>
        <h3 class="signature-title">${item.name}</h3>
        <p class="signature-desc">${item.description}</p>
        <div>
          <a href="#menu" class="btn btn-secondary" style="width: 100%; padding: 0.65rem 1rem; font-size: 0.88rem;">
            Explore In Full Menu
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

