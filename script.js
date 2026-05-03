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
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrbGNyY2huaGxsbGN3cHhqb3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4MTI2MTQsImV4cCI6MjA5MzM4ODYxNH0.PcEii2gprJqeG7cg6qbVQtK-cRPXA5pHAiUEziMxUMg')
// ============================================
// PROJECT DATA
// ============================================
const projects = [
  {
    id: 0,
    title: 'Modern Living Room Refresh',
    category: 'residential-interior',
    categoryLabel: 'Residential Interior',
    description: 'A complete living room transformation using warm neutral tones. We painted the walls, trim, and ceiling, creating a cohesive, modern feel that perfectly complements the homeowner\'s contemporary furniture.',
    image: 'http://static.photos/minimal/640x360/10',
    location: 'Oak Park, CO',
    date: 'March 2024',
    duration: '3 days',
    hasBeforeAfter: true,
    beforeImage: 'http://static.photos/vintage/320x240/10',
    afterImage: 'http://static.photos/minimal/320x240/10'
  },
  {
    id: 1,
    title: 'Corporate Office Renovation',
    category: 'commercial',
    categoryLabel: 'Commercial',
    description: 'Full interior repaint of a 5,000 sq ft corporate office. We worked nights and weekends to minimize business disruption, delivering a fresh, professional look that employees and clients love.',
    image: 'http://static.photos/education/640x360/25',
    location: 'Downtown Chicago, CO',
    date: 'January 2024',
    duration: '7 days',
    hasBeforeAfter: true,
    beforeImage: 'http://static.photos/vintage/320x240/25',
    afterImage: 'http://static.photos/education/320x240/25'
  },
  {
    id: 2,
    title: 'Kitchen Cabinet Makeover',
    category: 'cabinet',
    categoryLabel: 'Cabinet Refinishing',
    description: 'Transformed outdated oak cabinets into a sleek, modern espresso finish. Saved the homeowners 60% compared to replacement while achieving a brand-new kitchen look.',
    image: 'http://static.photos/white/640x360/55',
    location: 'River Forest, CO',
    date: 'February 2024',
    duration: '4 days',
    hasBeforeAfter: true,
    beforeImage: 'http://static.photos/vintage/320x240/55',
    afterImage: 'http://static.photos/white/320x240/55'
  },
  {
    id: 3,
    title: 'Complete Exterior Makeover',
    category: 'residential-exterior',
    categoryLabel: 'Residential Exterior',
    description: 'A dramatic exterior transformation that boosted curb appeal and property value. We used premium Sherwin-Williams Duration paint for maximum durability against Midwest weather.',
    image: 'http://static.photos/blue/640x360/80',
    location: 'Elmhurst, CO',
    date: 'September 2023',
    duration: '5 days',
    hasBeforeAfter: true,
    beforeImage: 'http://static.photos/vintage/320x240/80',
    afterImage: 'http://static.photos/blue/320x240/80'
  },
  {
    id: 4,
    title: 'Upscale Restaurant Refresh',
    category: 'commercial',
    categoryLabel: 'Commercial',
    description: 'Revitalized a popular local restaurant with rich, warm tones that enhance the dining atmosphere. We completed the work during off-hours to keep the restaurant open for business.',
    image: 'http://static.photos/restaurant/640x360/33',
    location: 'Naperville, CO',
    date: 'November 2023',
    duration: '4 nights',
    hasBeforeAfter: false
  },
  {
    id: 5,
    title: 'Luxury Master Bedroom',
    category: 'residential-interior',
    categoryLabel: 'Residential Interior',
    description: 'Created a serene retreat with sophisticated gray-blue walls and crisp white trim. The color consultation helped the homeowners find the perfect shade for their peaceful getaway.',
    image: 'http://static.photos/estate/640x360/15',
    location: 'Hinsdale, CO',
    date: 'April 2024',
    duration: '2 days',
    hasBeforeAfter: true,
    beforeImage: 'http://static.photos/vintage/320x240/15',
    afterImage: 'http://static.photos/estate/320x240/15'
  },
  {
    id: 6,
    title: 'Victorian Home Restoration',
    category: 'residential-exterior',
    categoryLabel: 'Residential Exterior',
    description: 'Restored the original grandeur of this 1890s Victorian with a historically-accurate color scheme. We repaired damaged wood, prepped thoroughly, and applied three coats for lasting beauty.',
    image: 'http://static.photos/vintage/640x360/60',
    location: 'Oak Park, CO',
    date: 'August 2023',
    duration: '10 days',
    hasBeforeAfter: true,
    beforeImage: 'http://static.photos/vintage/320x240/60',
    afterImage: 'http://static.photos/aerial/320x240/60'
  },
  {
    id: 7,
    title: 'Retail Store Grand Opening',
    category: 'commercial',
    categoryLabel: 'Commercial',
    description: 'Brand-new retail space painted on a tight timeline for grand opening. We coordinated with contractors and delivered flawless results in just 3 days.',
    image: 'http://static.photos/retail/640x360/40',
    location: 'Schaumburg, CO',
    date: 'June 2023',
    duration: '3 days',
    hasBeforeAfter: false
  },
  {
    id: 8,
    title: 'Whole Home Color Makeover',
    category: 'consultation',
    categoryLabel: 'Color Consultation + Interior',
    description: 'Our color consultant worked with the homeowners to create a cohesive palette flowing through every room. Then our team executed the vision flawlessly across 3,200 sq ft.',
    image: 'http://static.photos/indoor/640x360/28',
    location: 'La Grange, CO',
    date: 'May 2024',
    duration: '5 days',
    hasBeforeAfter: true,
    beforeImage: 'http://static.photos/vintage/320x240/28',
    afterImage: 'http://static.photos/indoor/320x240/28'
  },
  {
    id: 9,
    title: 'Bathroom Cabinet Refinishing',
    category: 'cabinet',
    categoryLabel: 'Cabinet Refinishing',
    description: 'Updated three bathrooms by refinishing vanities from dated honey oak to a crisp, modern white. The result feels like a complete bathroom remodel at a fraction of the cost.',
    image: 'http://static.photos/wellness/640x360/50',
    location: 'Burr Ridge, CO',
    date: 'July 2023',
    duration: '2 days',
    hasBeforeAfter: true,
    beforeImage: 'http://static.photos/vintage/320x240/50',
    afterImage: 'http://static.photos/wellness/320x240/50'
  },
  {
    id: 10,
    title: 'Modern Condo Transformation',
    category: 'residential-interior',
    categoryLabel: 'Residential Interior',
    description: 'Converted a builder-grade condo into a personalized haven with accent walls, ceiling treatments, and custom color blocking. The owner couldn\'t believe the difference.',
    image: 'http://static.photos/abstract/640x360/70',
    location: 'West Loop, Chicago, CO',
    date: 'October 2023',
    duration: '4 days',
    hasBeforeAfter: true,
    beforeImage: 'http://static.photos/vintage/320x240/70',
    afterImage: 'http://static.photos/abstract/320x240/70'
  },
  {
    id: 11,
    title: 'Office Building Exterior',
    category: 'commercial',
    categoryLabel: 'Commercial Exterior',
    description: 'Repainted the exterior of a three-story office building, including trim, accent walls, and entrance way. Enhanced the building\'s professional presence on a busy street.',
    image: 'http://static.photos/industry/640x360/45',
    location: 'Addison, CO',
    date: 'July 2024',
    duration: '8 days',
    hasBeforeAfter: false
  }
];

// ============================================
// MOBILE MENU
// ============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isActive = mobileMenu.classList.contains('active');
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('hamburger-active');
    document.body.style.overflow = isActive ? '' : 'hidden';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('hamburger-active');
      document.body.style.overflow = '';
    });
  });
}

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
    document.getElementById('lightbox-before').src = project.beforeImage;
    document.getElementById('lightbox-after').src = project.afterImage;
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
// CONTACT FORM
// ============================================
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = contactForm.querySelector('#name').value.trim();
  const email = contactForm.querySelector('#email').value.trim();
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
        service,
        message,
        status: 'new',
        source: 'website'
      }
    ]);

    if (error) throw error;

    contactForm.classList.add('hidden');
    formSuccess.classList.remove('hidden');

    lucide.createIcons();

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
});

// Re-init Lucide icons after any dynamic content change
const portfolioGridObserver = new MutationObserver(() => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

if (portfolioGrid) {
  portfolioGridObserver.observe(portfolioGrid, { childList: true });
}

