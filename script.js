// ============================================
// Apex Painting & Renevations LLC - Main JavaScript
// ============================================
document.addEventListener('DOMContentLoaded', () => {
// Initialize Lucide Icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

const supabase = window.supabase.createClient(
  'https://dklcrchnhlllcwpxjoxc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrbGNyY2huaGxsbGN3cHhqb3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4MTI2MTQsImV4cCI6MjA5MzM4ODYxNH0.PcEii2gprJqeG7cg6qbVQtK-cRPXA5pHAiUEziMxUMg');


// ============================================
// PROJECT DATA
// ============================================
const projects = [
  {
    id: 0,
    title: 'Cabnit Refresh',
    category: 'residential-interior',
    categoryLabel: 'Residential Interior',
    description: 'A full cabinet refinishing project transforming outdated natural wood cabinets into a clean, modern white finish. Surfaces were carefully prepped, sanded, and cleaned, with all hinges, hardware, and surrounding areas fully masked and protected to ensure a flawless, professional result. We applied a premium-grade cabinet enamel designed for high durability, smooth leveling, and long-lasting resistance to chipping, moisture, and daily wear.',
    image: '/pics/19.jpg',
    location: 'Denevr, CO',
    date: 'March 2024',
    duration: '3 hours',
    hasBeforeAfter: true,
    beforeImage: '/pics/20.jpg',
    afterImage: '/pics/19.jpg'
  },
  {
    id: 1,
    title: 'Corporate Office Renovation',
    category: 'cabnits',
    categoryLabel: 'Kitchen Transformation',
    description: 'A complete kitchen transformation featuring updated appliances, new flooring, and a fully refreshed aesthetic. We installed a modern stove and microwave, replaced countertops with a clean, durable surface, and refinished all cabinets with a premium white finish for a bright, cohesive look. New flooring ties the space together, creating a seamless, high-end feel throughout. The result is a fully modernized kitchen that feels brand new, both functional and visually elevated.',
    image: '/pics/17.jpg',
    location: 'Littleton, CO',
    date: 'January 2024',
    duration: '7 days',
    hasBeforeAfter: true,
    beforeImage: '/pics/18.jpg',
    afterImage: '/pics/17.jpg'
  },
  {
    id: 2,
    title: 'Kitchen Cabinet Makeover',
    category: 'cabinet',
    categoryLabel: 'Cabinet Refinishing',
    description: 'Transformed outdated oak cabinets into a sleek, modern cream finish. Saved the homeowners 60% compared to replacement while achieving a brand new kitchen look.',
    image: '/pics/15.jpg',
    location: 'Lone Tree, CO',
    date: 'February 2026',
    duration: '1 day',
    hasBeforeAfter: true,
    beforeImage: '/pics/16.jpg',
    afterImage: '/pics/15.jpg'
  },
  {
    id: 3,
    title: 'Bathroom Remodle',
    category: 'residential-interior',
    categoryLabel: 'Residential Interior',
    description: 'A full bathroom makeover featuring a complete upgrade of all key finishes. We installed new shower wall tile for a clean, modern look, paired with a refreshed sink and countertop for improved functionality and style. A new mirror and updated flooring tie the space together, creating a bright, cohesive, and spa-like feel. The result is a fully modernized bathroom that feels fresh, polished, and built to last.',
    image: '/pics/13.jpg',
    location: 'Littleton, CO',
    date: 'September 2025',
    duration: '5 days',
    hasBeforeAfter: true,
    beforeImage: '/pics/14.jpg',
    afterImage: '/pics/13.jpg'
  },
  {
    id: 4,
    title: 'Sideing & Window Replacement',
    category: 'residential-exterior',
    categoryLabel: 'residential Exterior',
    description: 'A full exterior home refresh featuring professional painting of all siding and window trim to restore curb appeal and protect against the elements. Surfaces were properly prepped, cleaned, and repaired as needed before applying premium exterior-grade paint designed for long-lasting durability, weather resistance, and a smooth, even finish. The updated color scheme enhances the home’s architectural details, giving it a clean, modern, and well-maintained appearance that significantly boosts overall curb appeal and property value.',
    image: '/pics/11.jpg',
    location: 'Highlands Ranch, CO',
    date: 'November 2023',
    duration: '5 days',
    hasBeforeAfter: true,
    beforeImage: '/pics/12.jpg',
    afterImage: '/pics/11.jpg'
  },
  {
    id: 5,
    title: 'Luxury House Refinish',
    category: 'residential-exterior',
    categoryLabel: 'Residential Exterior',
    description: 'A bold exterior transformation featuring a rich, deep purple finish that completely redefines the home’s curb appeal. The project included full surface preparation, repairs, and meticulous masking before applying premium exterior grade paint designed for maximum durability and weather resistance. The result is a striking, modern statement home with a smooth, even finish that stands out while still feeling intentional, clean, and professionally executed.',
    image: '/pics/9.jpg',
    location: 'Highlands Ranch, CO',
    date: 'April 2024',
    duration: '3 days',
    hasBeforeAfter: true,
    beforeImage: '/pics/10.jpg',
    afterImage: '/pics/9.jpg'
  },
  {
    id: 6,
    title: 'Resedential Fence Refinish',
    category: 'residential-exterior',
    categoryLabel: 'Residential Exterior',
    description: 'A professional fence restoration and refinishing project designed to restore both appearance and protection. The surface was thoroughly cleaned, prepped, and treated before applying a high quality exterior stain/paint system formulated for maximum weather resistance, UV protection, and long-term durability. The finish enhances the natural look of the fence while sealing and protecting the wood against moisture, cracking, and seasonal wear. The result is a clean, uniform appearance that improves curb appeal and extends the life of the structure.',
    image: '/pics/7.jpg',
    location: 'parker, CO',
    date: 'August 2026',
    duration: '1 day',
    hasBeforeAfter: true,
    beforeImage: '/pics/8.jpg',
    afterImage: 'pics/7.jpg'
  },
  {
    id: 7,
    title: 'Shed Revival',
    category: 'residential-exterior',
    categoryLabel: 'Residential Exterior',
    description: 'A full shed and garage exterior restoration project bringing a worn down structure back to life. The existing paint was peeling and weather damaged, so surfaces were thoroughly scraped, sanded, and prepped to ensure proper adhesion and a long lasting finish. We repainted the entire shed with a durable exterior grade coating and carefully restored the garage door, correcting peeling and uneven wear for a smooth, uniform appearance. The result is a fully refreshed exterior that not only looks clean and modern, but is also properly sealed and protected against future weather damage.',
    image: '/pics/5.jpg',
    location: 'Dakota Ridge, CO',
    date: 'June 2023',
    duration: '8 days',
    hasBeforeAfter: true,
    beforeImage: '/pics/6.jpg',
    afterImage: '/pics/5.jpg'
  },
  {
    id: 8,
    title: 'Whole Home Color Makeover & Finish',
    category: 'consultation',
    categoryLabel: 'Color Consultation + Exterior',
    description: 'Our color consultant worked with the homeowners to create a cohesive palette flowing through every room. Then our team executed the vision flawlessly across 3,200 sq ft.',
    image: '/pics/3.jpg',
    location: 'Denevr, CO',
    date: 'May 2024',
    duration: '5 days',
    hasBeforeAfter: true,
    beforeImage: '/pics/4.jpg',
    afterImage: '/pics/3.jpg'
  },
  {
    id: 9,
    title: 'Residential Room Painted & Finished',
    category: 'residential-interior',
    categoryLabel: 'Residential Interior',
    description: 'A full interior repaint transforming the room into a clean, bright, modern space with a fresh white finish throughout. The project included walls, trim, and ceiling, carefully prepped and coated for a smooth, even application with crisp lines and no imperfections. The result is a noticeably lighter, more open feel that enhances natural light and gives the room a fresh, updated appearance that feels clean, simple, and brand new.',
    image: '/pics/1.jpg',
    location: 'Burr Ridge, CO',
    date: 'July 2023',
    duration: '2 days',
    hasBeforeAfter: true,
    beforeImage: '/pics/2.jpg',
    afterImage: '/pics/1.jpg'
  },
  
];

// ============================================
// MOBILE MENU
// ============================================


const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

function openMobileMenu() {
  if (!mobileMenu || !mobileMenuBtn) return;

  // store scroll position
  const scrollY = window.scrollY;
  document.body.dataset.scrollY = scrollY;

  mobileMenu.classList.add('active');
  mobileMenu.style.background = 'rgba(0,0,0,0.45)';
  // force menu to reset scroll + layout position
  mobileMenu.scrollTop = 0;
  mobileMenu.style.top = '0';
  mobileMenu.style.height = '100vh';
  mobileMenu.style.backdropFilter = 'blur(6px)';
  mobileMenuBtn.classList.add('hamburger-active');
  // FORCE visibility styles on links (strong override)
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.style.color = '#ffffff';
    link.style.textShadow = '0 8px 25px rgba(0,0,0,0.9)';
    link.style.fontWeight = '600';
    link.style.letterSpacing = '0.5px';
  });

  // simpler scroll lock (less buggy on mobile)
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (!mobileMenu || !mobileMenuBtn) return;

  mobileMenu.classList.remove('active');
  mobileMenu.style.background = '';
  mobileMenu.style.backdropFilter = '';
  mobileMenuBtn.classList.remove('hamburger-active');
  // remove glow when closing
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.style.color = '';
    link.style.textShadow = '';
    link.style.fontWeight = '';
    link.style.letterSpacing = '';
  });

  // restore scroll position
  const scrollY = document.body.dataset.scrollY || '0';

  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('active');

    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

// X button support
if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', closeMobileMenu);
}

// safety resets
window.addEventListener('pageshow', closeMobileMenu);
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMobileMenu();
});

// ============================================
// NAVBAR SCROLL BEHAVIOR
// ============================================
const navbar = document.getElementById('navbar');
let lastScrollY = 0;

function handleNavbarScroll() {
  const currentScrollY = window.scrollY;

  if (!navbar) return;

  if (currentScrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-up elements
function initFadeAnimations() {
  document.querySelectorAll('.fade-up').forEach(el => {
    fadeObserver.observe(el);
  });
}

// ============================================
// PORTFOLIO GRID (Full Portfolio Page)
// ============================================
const portfolioGrid = document.getElementById('portfolio-grid');

function createPortfolioCard(project, index) {
  const card = document.createElement('div');
  card.className = 'group relative rounded-2xl overflow-hidden cursor-pointer portfolio-card';
  card.dataset.category = project.category;
  card.dataset.project = project.id;
  card.style.transitionDelay = `${(index % 6) * 0.08}s`;

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy">
    <div class="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
      <div>
        <span class="text-gold text-xs uppercase tracking-wider font-medium">${project.categoryLabel}</span>
        <h3 class="text-white font-heading text-lg font-semibold mt-1">${project.title}</h3>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openLightbox(project.id));

  return card;
}

function renderPortfolioGrid(filter = 'all') {
  if (!portfolioGrid) return;

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  // Fade out existing cards
  const existingCards = portfolioGrid.querySelectorAll('.portfolio-card');
  existingCards.forEach(card => card.classList.add('hiding'));

  setTimeout(() => {
    portfolioGrid.innerHTML = '';

    if (filtered.length === 0) {
      const emptyState = document.getElementById('empty-state');
      if (emptyState) emptyState.classList.remove('hidden');
    } else {
      const emptyState = document.getElementById('empty-state');
      if (emptyState) emptyState.classList.add('hidden');

      filtered.forEach((project, index) => {
        const card = createPortfolioCard(project, index);
        portfolioGrid.appendChild(card);
      });
    }

    // Re-initialize animations for new cards
    requestAnimationFrame(() => {
      document.querySelectorAll('.portfolio-card').forEach(card => {
        fadeObserver.observe(card);
      });
      // Trigger visible state quickly for new cards
      setTimeout(() => {
        document.querySelectorAll('.portfolio-card:not(.visible)').forEach(card => {
          card.classList.add('visible');
        });
      }, 50);
    });
  }, 300);
}

// Filter tabs
const filterTabs = document.querySelectorAll('.filter-tab');
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderPortfolioGrid(tab.dataset.filter);
  });
});

// ============================================
// LIGHTBOX
// ============================================
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
let currentLightboxIndex = 0;
let currentLightboxList = projects;

function openLightbox(projectId) {
  // Determine which list we're using
  const activeFilter = document.querySelector('.filter-tab.active');
  const filter = activeFilter ? activeFilter.dataset.filter : 'all';
  currentLightboxList = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const projectIndex = currentLightboxList.findIndex(p => p.id === projectId);
  if (projectIndex === -1) {
    // Fallback to full list
    currentLightboxList = projects;
    currentLightboxIndex = projects.findIndex(p => p.id === projectId);
  } else {
    currentLightboxIndex = projectIndex;
  }

  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateLightboxContent() {
  const project = currentLightboxList[currentLightboxIndex];
  if (!project) return;

  document.getElementById('lightbox-image').src = project.image;
  document.getElementById('lightbox-image').alt = project.title;
  document.getElementById('lightbox-badge').textContent = project.categoryLabel;
  document.getElementById('lightbox-category').textContent = project.categoryLabel;
  document.getElementById('lightbox-title').textContent = project.title;
  document.getElementById('lightbox-description').textContent = project.description;
  document.getElementById('lightbox-location').textContent = project.location;
  document.getElementById('lightbox-date').textContent = project.date;
  document.getElementById('lightbox-duration').textContent = project.duration;

  // Before/After section
  const beforeAfterSection = document.getElementById('lightbox-beforeafter');
  if (project.hasBeforeAfter) {
    beforeAfterSection.classList.remove('hidden');

    const beforeImg = document.getElementById('lightbox-before');
    const afterImg = document.getElementById('lightbox-after');

    beforeImg.src = project.beforeImage;
    afterImg.src = project.afterImage;

    // make clickable zoom
    beforeImg.style.cursor = 'zoom-in';
    afterImg.style.cursor = 'zoom-in';

    beforeImg.onclick = () => openImageViewer(project.beforeImage);
    afterImg.onclick = () => openImageViewer(project.afterImage);
  } else {
    beforeAfterSection.classList.add('hidden');
  }

  // Update navigation visibility
  if (lightboxPrev) lightboxPrev.style.display = currentLightboxIndex > 0 ? 'flex' : 'none';
  if (lightboxNext) lightboxNext.style.display = currentLightboxIndex < currentLightboxList.length - 1 ? 'flex' : 'none';

  // Re-create icons for the lightbox
  lucide.createIcons();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentLightboxIndex > 0) {
      currentLightboxIndex--;
      updateLightboxContent();
    }
  });
}

if (lightboxNext) {
  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentLightboxIndex < currentLightboxList.length - 1) {
      currentLightboxIndex++;
      updateLightboxContent();
    }
  });
}

// Close lightbox on backdrop click
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
  if (!lightbox || !lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft' && currentLightboxIndex > 0) {
    currentLightboxIndex--;
    updateLightboxContent();
  }
  if (e.key === 'ArrowRight' && currentLightboxIndex < currentLightboxList.length - 1) {
    currentLightboxIndex++;
    updateLightboxContent();
  }
});


// ============================================
function openImageViewer(src) {
  // create overlay if it doesn't exist
  let viewer = document.getElementById('image-viewer-overlay');

  if (!viewer) {
    viewer = document.createElement('div');
    viewer.id = 'image-viewer-overlay';
    viewer.style.position = 'fixed';
    viewer.style.top = '0';
    viewer.style.left = '0';
    viewer.style.width = '100%';
    viewer.style.height = '100%';
    viewer.style.background = 'rgba(0,0,0,0.9)';
    viewer.style.display = 'flex';
    viewer.style.alignItems = 'center';
    viewer.style.justifyContent = 'center';
    viewer.style.zIndex = '9999';
    viewer.style.cursor = 'zoom-out';

    const img = document.createElement('img');
    img.id = 'image-viewer-img';
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '12px';
    img.style.boxShadow = '0 10px 40px rgba(0,0,0,0.5)';

    viewer.appendChild(img);

    viewer.addEventListener('click', () => {
      viewer.style.display = 'none';
    });

    document.body.appendChild(viewer);
  }

  const img = document.getElementById('image-viewer-img');
  img.src = src;
  viewer.style.display = 'flex';
}
// ============================================
// CONTACT FORM
// ============================================
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = contactForm.querySelector('#name').value.trim();
  const email = contactForm.querySelector('#email').value.trim();
  const phone = contactForm.querySelector('#phone')?.value?.trim() || null;
  const service = contactForm.querySelector('#service').value;
  const message = contactForm.querySelector('#message').value.trim();
  
  if (!name || !email || !service || !message) return;
  
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  try {
    const { error } = await supabase.from('messages').insert([
      {
        name,
        email,
        phone,
        service,
        message,
        read: false,
        archived: false
      }
    ]);
  
    if (error) throw error;
  
    contactForm.classList.add('hidden');
    formSuccess.classList.remove('hidden');
  
    setTimeout(() => {
      contactForm.classList.remove('hidden');
      formSuccess.classList.add('hidden');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message & Get Free Quote';
    }, 5000);
  
  } catch (err) {
    console.error(err);
    alert('Message failed to send.');
  
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message & Get Free Quote';
  }
});
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = navbar ? navbar.offsetHeight : 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// INITIALIZATION
// ============================================

  // Initialize animations
  initFadeAnimations();

  // Render portfolio grid if on portfolio page
  renderPortfolioGrid('all');

  // Handle hash links from other pages
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const navHeight = navbar ? navbar.offsetHeight : 80;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - navHeight,
          behavior: 'smooth'
        });
      }
    }, 500);
  }


// Re-init Lucide icons after any dynamic content change
const portfolioGridObserver = new MutationObserver(() => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});


if (portfolioGrid) {
  portfolioGridObserver.observe(portfolioGrid, { childList: true });
}

console.log("GRID CHECK:", portfolioGrid);
console.log("PROJECT COUNT:", projects?.length);
});