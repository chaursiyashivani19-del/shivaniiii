/**
 * Drooling Station - Main Application Controller
 */
import { restaurantInfo } from './data.js';
import { initMenu, initSignatures } from './menu.js';
import { initGallery } from './gallery.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize modular sections
  initSignatures();
  initMenu();
  initGallery();

  // 1. Live Open / Closed Status (IST - UTC+5:30)
  updateLiveHoursStatus();
  setInterval(updateLiveHoursStatus, 60000); // Check every minute

  // 2. Mobile Menu Navigation Drawer
  initMobileNav();

  // 3. Address Copy to Clipboard
  initAddressCopy();

  // 4. Scroll Header Shadow & Active Links
  initScrollSpy();
});

/**
 * Calculates current Delhi Time (IST) and updates status indicators
 * Hours: 12:00 PM to 10:30 PM (12.0 to 22.5 hours in decimal)
 */
function updateLiveHoursStatus() {
  const statusPills = document.querySelectorAll('.live-status-pill');
  if (!statusPills.length) return;

  // Compute Indian Standard Time
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istDate = new Date(utc + (3600000 * 5.5)); // +5:30
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const decimalHour = hours + (minutes / 60);

  // Drooling Station opens at 12:00 PM (12.0) and closes at 10:30 PM (22.5)
  const isOpen = decimalHour >= 12.0 && decimalHour < 22.5;

  statusPills.forEach(pill => {
    if (isOpen) {
      pill.className = 'status-pill open live-status-pill';
      pill.innerHTML = `<span class="status-dot"></span> Open Now · Closes 10:30 PM`;
    } else {
      pill.className = 'status-pill closed live-status-pill';
      pill.innerHTML = `<span class="status-dot"></span> Closed Now · Opens 12:00 PM`;
    }
  });
}

/**
 * Mobile Navigation Drawer
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function toggleDrawer() {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '☰';
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = '✕';
      document.body.style.overflow = 'hidden';
    }
  }

  toggleBtn.addEventListener('click', toggleDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '☰';
      document.body.style.overflow = '';
    });
  });
}

/**
 * Copy Verified Address with Toast Notification
 */
function initAddressCopy() {
  const copyBtn = document.getElementById('copy-address-btn');
  const toast = document.getElementById('copy-toast');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(restaurantInfo.address.fullAddress);
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `<span>✓ Address Copied!</span>`;
      copyBtn.style.color = '#34d399';

      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.color = '';
      }, 2500);
    } catch (err) {
      // Fallback
      alert(`Address: ${restaurantInfo.address.fullAddress}`);
    }
  });
}

/**
 * Scrollspy & Navbar header backdrop blur
 */
function initScrollSpy() {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header backdrop intensity
    if (header) {
      if (scrollPos > 40) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
      } else {
        header.style.boxShadow = 'none';
      }
    }

    // Active Section Link Highlight
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

