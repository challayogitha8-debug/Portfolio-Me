/**
 * MAIN INTERACTION & APPLICATION SCRIPT
 * Yogitha Challa Personal Portfolio
 * 
 * Features:
 * - Theme Switcher (Light/Dark with localStorage & OS preference detection)
 * - Sticky Header & Active ScrollSpy Navigation
 * - Accessible Mobile Drawer Menu
 * - IntersectionObserver Scroll Reveal Animations
 * - Interactive UI/UX Playground Tabs
 * - Project Interactive Preview Modals
 * - Contact Form Validation & Friendly Recruiter Feedback
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. THEME SWITCHER (Light / Dark Mode)
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlRoot = document.documentElement;

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem('yogitha_portfolio_theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('yogitha_portfolio_theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#0B1120' : '#6366F1');
    }
  }

  // Initialize theme
  applyTheme(getPreferredTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // Listen to OS theme changes if user hasn't explicitly set localStorage
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('yogitha_portfolio_theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 2. STICKY NAVBAR & SCROLL SPY
  // -------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // ScrollSpy with IntersectionObserver
  const scrollSpyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          updateActiveNavLink(id);
        }
      });
    },
    {
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    }
  );

  sections.forEach((section) => scrollSpyObserver.observe(section));

  function updateActiveNavLink(activeId) {
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileNavLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 3. MOBILE NAVIGATION MENU
  // -------------------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');

  if (hamburgerBtn && mobileNavMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileNavMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (
        mobileNavMenu.classList.contains('open') &&
        !mobileNavMenu.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    mobileNavMenu.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    mobileNavMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  // -------------------------------------------------------------------------
  // 4. SCROLL REVEAL ANIMATIONS
  // -------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: reveal all immediately
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  // -------------------------------------------------------------------------
  // 5. UI/UX PLAYGROUND TAB SWITCHER
  // -------------------------------------------------------------------------
  const playgroundTabs = document.querySelectorAll('.playground-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  playgroundTabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      playgroundTabs.forEach((b) => b.classList.remove('active'));
      tabPanes.forEach((p) => {
        p.style.display = 'none';
        p.classList.remove('active');
      });

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.style.display = 'block';
        targetPane.classList.add('active');
      }
    });
  });

  // -------------------------------------------------------------------------
  // 6. INTERACTIVE PROJECT PREVIEW MODAL
  // -------------------------------------------------------------------------
  const demoModal = document.getElementById('demo-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCloseFooterBtn = document.getElementById('modal-close-footer-btn');
  const modalTitle = document.getElementById('modal-dialog-title');
  const modalContent = document.getElementById('modal-dialog-content');
  const demoButtons = document.querySelectorAll('.open-demo-btn');

  let lastActiveElement = null;

  const demoTemplates = {
    login: {
      title: "Interactive Preview: Login Page UI Design",
      content: `
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <span class="badge" style="margin-bottom: 0.5rem;">HTML + CSS Responsive UI</span>
          <p style="font-size: 0.875rem; color: var(--text-secondary); max-width: 500px; margin: 0 auto;">
            This interactive preview demonstrates the login component with Flexbox alignment, box-shadow elevation, and multiple authentication options.
          </p>
        </div>
        <div style="max-width: 380px; margin: 0 auto; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 1.75rem; box-shadow: var(--shadow-md);">
          <div style="text-align: center; margin-bottom: 1.25rem;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--bg-accent-soft); color: var(--accent-primary); display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; margin-bottom: 0.5rem;">YC</div>
            <h4 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 0.25rem;">Welcome Back</h4>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0;">Sign in to access your dashboard</p>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
            <button type="button" class="btn btn-secondary btn-sm" style="width: 100%; justify-content: center;" onclick="alert('Google Authentication Option Triggered')">
              <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
              <span>Continue with Google</span>
            </button>
            <button type="button" class="btn btn-secondary btn-sm" style="width: 100%; justify-content: center;" onclick="alert('Apple Authentication Option Triggered')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.4c.66-.82 1.11-1.96.99-3.1-.96.04-2.11.64-2.79 1.44-.59.69-1.12 1.83-.98 2.94 1.07.08 2.15-.55 2.78-1.28z"/></svg>
              <span>Continue with Apple</span>
            </button>
            <button type="button" class="btn btn-secondary btn-sm" style="width: 100%; justify-content: center;" onclick="alert('Phone Authentication Option Triggered')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Continue with Phone</span>
            </button>
          </div>

          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
            <div style="flex: 1; height: 1px; background: var(--border-subtle);"></div>
            <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">or email</span>
            <div style="flex: 1; height: 1px; background: var(--border-subtle);"></div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem;">
            <div>
              <label style="display: block; font-size: 0.75rem; font-weight: 600; margin-bottom: 4px;">Email</label>
              <input type="email" placeholder="name@company.com" style="width: 100%; padding: 0.6rem 0.8rem; border: 1px solid var(--border-subtle); border-radius: 6px; font-size: 0.85rem; background: var(--bg-subtle);">
            </div>
            <div>
              <label style="display: block; font-size: 0.75rem; font-weight: 600; margin-bottom: 4px;">Password</label>
              <input type="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" style="width: 100%; padding: 0.6rem 0.8rem; border: 1px solid var(--border-subtle); border-radius: 6px; font-size: 0.85rem; background: var(--bg-subtle);">
            </div>
          </div>

          <button type="button" class="btn btn-primary" style="width: 100%; justify-content: center;" onclick="alert('Login Form Submitted (Demo UI)')">
            Sign In
          </button>
        </div>
      `
    },
    landing: {
      title: "Interactive Preview: Modern Landing Page UI Design",
      content: `
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <span class="badge" style="margin-bottom: 0.5rem;">HTML + CSS Dark-Themed Landing</span>
          <p style="font-size: 0.875rem; color: var(--text-secondary); max-width: 550px; margin: 0 auto;">
            Structured layout featuring a sticky header, hero showcase, responsive feature cards, and conversion call-to-actions.
          </p>
        </div>
        <div style="background: #0B1120; color: #F8FAFC; border-radius: var(--radius-xl); padding: 1.5rem; border: 1px solid #1E293B;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1E293B; padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
            <div style="font-weight: 800; font-size: 1rem; color: #818CF8;">AURA &bull; CLOUD</div>
            <div style="display: flex; gap: 1rem; font-size: 0.75rem; color: #94A3B8;">
              <span>Features</span>
              <span>Overview</span>
              <span>Docs</span>
            </div>
            <span style="font-size: 0.75rem; background: #6366F1; color: white; padding: 0.3rem 0.75rem; border-radius: 4px;">Explore</span>
          </div>

          <div style="text-align: center; padding: 1.5rem 0;">
            <span style="font-size: 0.7rem; font-weight: 700; color: #A5B4FC; text-transform: uppercase; letter-spacing: 0.08em; background: rgba(129, 140, 248, 0.15); padding: 0.25rem 0.65rem; border-radius: 99px;">Dark Themed Interface</span>
            <h3 style="font-size: 1.5rem; font-weight: 800; margin: 0.75rem 0 0.5rem; color: #F8FAFC;">Build Faster with Clean Architecture</h3>
            <p style="font-size: 0.85rem; color: #94A3B8; max-width: 480px; margin: 0 auto 1.25rem;">
              Engineered with clean typography, balanced spacing, and modular CSS cards.
            </p>
            <div style="display: flex; gap: 0.75rem; justify-content: center;">
              <button class="btn btn-primary btn-sm" onclick="alert('Primary CTA Clicked (Demo)')">Get Started</button>
              <button class="btn btn-outline btn-sm" style="color: #F8FAFC; border-color: #334155;" onclick="alert('Documentation Clicked (Demo)')">Learn More</button>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-top: 1rem;">
            <div style="background: #111827; padding: 1rem; border-radius: 8px; border: 1px solid #1F2937;">
              <div style="color: #818CF8; font-weight: 700; font-size: 0.8rem; margin-bottom: 4px;">Responsive Flexbox</div>
              <div style="font-size: 0.7rem; color: #94A3B8;">Automatic adaptive layout.</div>
            </div>
            <div style="background: #111827; padding: 1rem; border-radius: 8px; border: 1px solid #1F2937;">
              <div style="color: #818CF8; font-weight: 700; font-size: 0.8rem; margin-bottom: 4px;">Modern Aesthetics</div>
              <div style="font-size: 0.7rem; color: #94A3B8;">Sleek dark color tokens.</div>
            </div>
            <div style="background: #111827; padding: 1rem; border-radius: 8px; border: 1px solid #1F2937;">
              <div style="color: #818CF8; font-weight: 700; font-size: 0.8rem; margin-bottom: 4px;">High Performance</div>
              <div style="font-size: 0.7rem; color: #94A3B8;">Pure lightweight CSS.</div>
            </div>
          </div>
        </div>
      `
    }
  };

  demoButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const demoKey = btn.getAttribute('data-demo');
      const data = demoTemplates[demoKey];
      if (data && demoModal) {
        lastActiveElement = btn;
        modalTitle.textContent = data.title;
        modalContent.innerHTML = data.content;
        demoModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (!demoModal) return;
    demoModal.classList.remove('open');
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalCloseFooterBtn) modalCloseFooterBtn.addEventListener('click', closeModal);

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModal && demoModal.classList.contains('open')) {
      closeModal();
    }
  });

  // -------------------------------------------------------------------------
  // 7. CONTACT FORM VALIDATION & DIRECT EMAIL COUPLING
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatusMsg = document.getElementById('form-status-msg');

  if (contactForm && formStatusMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const msgInput = document.getElementById('contact-message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = msgInput.value.trim();

      if (!name || !email || !message) {
        showFormStatus('Please complete all required fields before sending.', 'error');
        return;
      }

      // Friendly Recruiter Experience:
      // Since no backend service is deployed yet, construct a mailto link
      // and notify the user with actionable options.
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Hi Yogitha,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent via Portfolio Contact Form`
      );
      const mailtoUrl = `mailto:challayogitha8@gmail.com?subject=${subject}&body=${body}`;

      showFormStatus(
        `Thank you, ${name}! Click below to dispatch your message directly via your email client to challayogitha8@gmail.com, or reach out directly at challayogitha8@gmail.com.`,
        'success'
      );

      // Append convenient direct email trigger button inside status message
      const sendDirectLink = document.createElement('a');
      sendDirectLink.href = mailtoUrl;
      sendDirectLink.className = 'btn btn-primary btn-sm';
      sendDirectLink.style.marginTop = '0.5rem';
      sendDirectLink.textContent = 'Open in Email Client';
      formStatusMsg.appendChild(sendDirectLink);

      contactForm.reset();
    });
  }

  function showFormStatus(text, type) {
    if (!formStatusMsg) return;
    formStatusMsg.textContent = text;
    formStatusMsg.className = `form-status ${type}`;
    formStatusMsg.style.display = 'block';
  }

  // -------------------------------------------------------------------------
  // 8. LOG READY NOTICE
  // -------------------------------------------------------------------------
  console.log(
    '%c Yogitha Challa Portfolio Loaded %c Production Ready ',
    'background: #111827; color: #818CF8; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
    'background: #6366F1; color: #FFFFFF; font-weight: bold; padding: 4px 8px; border-radius: 4px;'
  );
})();
