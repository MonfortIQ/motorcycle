/**
 * APEX & IRON CO. — Master Interactive JavaScript
 * Production Ready: Dark/Light Mode, RTL, Before/After Slider,
 * Portfolio Filter, Lightbox, Blog Search, FormSubmit Handler, Counters
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initPageHeroImages();
  initStickyHeader();
  initScrollTop();
  initBeforeAfterSlider();
  initPortfolioFilter();
  initPortfolioLightbox();
  initBlogFilter();
  initStatsCounter();
  initCountdownTimer();
  initFormValidation();
  initFormSubmitHandler();
});

/* ===========================================================================
   PAGE HERO IMAGES
   Render the configured hero image as a real image element so it remains
   visible above the section background in both themes and on every page.
   ========================================================================== */
function initPageHeroImages() {
  document.querySelectorAll('.page-hero').forEach(hero => {
    if (hero.querySelector('.page-hero-media')) return;

    const inlineStyle = hero.getAttribute('style') || '';
    const imageMatch = inlineStyle.match(/--hero-image\s*:\s*url\(\s*(['"]?)(.*?)\1\s*\)/);
    if (!imageMatch || !imageMatch[2]) return;

    const media = document.createElement('div');
    media.className = 'page-hero-media';
    media.setAttribute('aria-hidden', 'true');

    const image = document.createElement('img');
    image.src = imageMatch[2];
    image.alt = '';
    image.loading = 'eager';
    image.decoding = 'async';

    media.appendChild(image);
    hero.prepend(media);
  });
}

/* ==========================================================================
   THEME TOGGLE (DARK / LIGHT) WITH LOCALSTORAGE PERSISTENCE
   ========================================================================== */
function initTheme() {
  let currentTheme = 'dark';
  try {
    currentTheme = localStorage.getItem('apex_theme') || 'dark';
  } catch (error) {
    // Keep the default theme when browser storage is unavailable.
  }
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcons(currentTheme);

  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      try {
        localStorage.setItem('apex_theme', newTheme);
      } catch (error) {
        // Theme switching still works for the current page without storage.
      }
      updateThemeIcons(newTheme);
    });
  });
}

function updateThemeIcons(theme) {
  const icons = document.querySelectorAll('.theme-toggle-btn i');
  icons.forEach(icon => {
    if (theme === 'dark') {
      icon.className = 'bi bi-sun-fill';
      icon.setAttribute('title', 'Switch to Light Mode');
    } else {
      icon.className = 'bi bi-moon-stars-fill';
      icon.setAttribute('title', 'Switch to Dark Mode');
    }
  });
}

/* ==========================================================================
   RTL TOGGLE WITH LOCALSTORAGE PERSISTENCE
   ========================================================================== */
function initRTL() {
  let currentRTL = document.documentElement.getAttribute('dir') || 'ltr';
  try {
    currentRTL = localStorage.getItem('apex_rtl') || localStorage.getItem('direction') || currentRTL;
  } catch (error) {
    // Keep the document direction when browser storage is unavailable.
  }
  currentRTL = currentRTL === 'rtl' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', currentRTL);
  updateRTLUI(currentRTL);

  const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');
  rtlToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = activeDir === 'ltr' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', newDir);
      try {
        localStorage.setItem('apex_rtl', newDir);
      } catch (error) {
        // Direction switching still works for the current page without storage.
      }
      updateRTLUI(newDir);
      window.dispatchEvent(new CustomEvent('directionchange', { detail: { direction: newDir } }));
    });
  });
}

function updateRTLUI(dir) {
  const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');
  rtlToggles.forEach(btn => {
    const rtlActive = dir === 'rtl';
    btn.textContent = rtlActive ? 'LTR' : 'RTL';
    btn.classList.toggle('active', rtlActive);
    btn.setAttribute('aria-pressed', String(rtlActive));
    btn.setAttribute('aria-label', rtlActive ? 'Switch to left-to-right layout' : 'Switch to right-to-left layout');
    btn.setAttribute('title', rtlActive ? 'Switch to LTR Mode' : 'Switch to RTL Mode');
  });
}

/* ==========================================================================
   STICKY HEADER WITH BLUR
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   SCROLL TO TOP BUTTON
   ========================================================================== */
function initScrollTop() {
  const scrollBtn = document.querySelector('.scroll-top-btn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      scrollBtn.classList.add('active');
    } else {
      scrollBtn.classList.remove('active');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   BEFORE & AFTER RESTORATION COMPARISON SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const sliderWrappers = document.querySelectorAll('.before-after-wrapper');
  sliderWrappers.forEach(wrapper => {
    const container = wrapper.querySelector('.before-after-container');
    const afterWrap = wrapper.querySelector('.after-img-wrap');
    const handle = wrapper.querySelector('.ba-slider-handle');
    if (!container || !afterWrap || !handle) return;

    let isDragging = false;

    const setPosition = (x) => {
      const rect = container.getBoundingClientRect();
      const rtl = document.documentElement.getAttribute('dir') === 'rtl';
      let offsetX = rtl ? rect.right - x : x - rect.left;
      offsetX = Math.max(0, Math.min(offsetX, rect.width));
      const percentage = (offsetX / rect.width) * 100;

      afterWrap.style.width = `${percentage}%`;
      if (rtl) {
        afterWrap.style.left = 'auto';
        afterWrap.style.right = '0';
        handle.style.left = 'auto';
        handle.style.right = `${percentage}%`;
        handle.style.transform = 'translateX(50%)';
      } else {
        afterWrap.style.right = 'auto';
        afterWrap.style.left = '0';
        handle.style.right = 'auto';
        handle.style.left = `${percentage}%`;
        handle.style.transform = 'translateX(-50%)';
      }
    };

    const onStart = (e) => {
      isDragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setPosition(clientX);
    };

    const onMove = (e) => {
      if (!isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setPosition(clientX);
    };

    const onEnd = () => {
      isDragging = false;
    };

    window.addEventListener('directionchange', () => {
      const rect = container.getBoundingClientRect();
      const percentage = parseFloat(afterWrap.style.width) || 50;
      const rtl = document.documentElement.getAttribute('dir') === 'rtl';
      const x = rtl
        ? rect.right - (rect.width * percentage / 100)
        : rect.left + (rect.width * percentage / 100);
      setPosition(x);
    });

    handle.addEventListener('mousedown', onStart);
    container.addEventListener('mousedown', onStart);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);

    handle.addEventListener('touchstart', onStart, { passive: true });
    container.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);
  });
}

/* ==========================================================================
   PORTFOLIO FILTERING
   ========================================================================== */
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  if (!filterButtons.length || !portfolioItems.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 20);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   PORTFOLIO LIGHTBOX MODAL
   ========================================================================== */
function initPortfolioLightbox() {
  const triggerBtns = document.querySelectorAll('.lightbox-trigger');
  if (!triggerBtns.length) return;

  // Create lightbox markup dynamically if not in DOM
  let lightboxModal = document.getElementById('apexLightboxModal');
  if (!lightboxModal) {
    lightboxModal = document.createElement('div');
    lightboxModal.id = 'apexLightboxModal';
    lightboxModal.className = 'modal fade';
    lightboxModal.setAttribute('tabindex', '-1');
    lightboxModal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content bg-dark border-secondary">
          <div class="modal-header border-bottom border-secondary py-2 px-3">
            <h5 class="modal-title text-white font-mono fs-6" id="lightboxTitle">Project Preview</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-0 text-center bg-black">
            <img src="" id="lightboxImg" class="img-fluid" style="max-height: 80vh; width: 100%; object-fit: contain;" alt="Build Preview">
          </div>
          <div class="modal-footer border-top border-secondary py-2 px-3 justify-content-between">
            <span class="text-muted font-mono fs-7" id="lightboxCategory">Apex & Iron Atelier</span>
            <a href="portfolio-details.html" class="btn-apex btn-apex-sm">View Full Case Study</a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(lightboxModal);
  }

  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCategory = document.getElementById('lightboxCategory');

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectImage = btn.closest('.project-card')?.querySelector('.project-card-img');
      const imgSrc = projectImage?.getAttribute('src') || btn.getAttribute('data-img');
      if (!imgSrc) return;
      const title = btn.getAttribute('data-title') || 'Custom Motorcycle Build';
      const category = btn.getAttribute('data-category') || 'Bespoke Atelier';

      if (lightboxImg) lightboxImg.src = imgSrc;
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxCategory) lightboxCategory.textContent = category;

      const modalInstance = new bootstrap.Modal(lightboxModal);
      modalInstance.show();
    });
  });
}

/* ==========================================================================
   BLOG SEARCH & CATEGORY FILTERING
   ========================================================================== */
function initBlogFilter() {
  const searchInput = document.getElementById('blogSearchInput');
  const searchForm = document.querySelector('.blog-search-form');
  const categoryLinks = document.querySelectorAll('.blog-filter-cat');
  const blogCards = document.querySelectorAll('.blog-card-item');
  const noResults = document.getElementById('blogNoResults');

  if (!searchInput && !categoryLinks.length) return;

  const initialQuery = new URLSearchParams(window.location.search).get('q');
  if (searchInput && initialQuery !== null) searchInput.value = initialQuery;

  const filterCards = () => {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activeCatEl = document.querySelector('.blog-filter-cat.active');
    const activeCat = activeCatEl ? activeCatEl.getAttribute('data-cat') : 'all';

    let visibleCount = 0;
    blogCards.forEach(card => {
      const title = card.querySelector('.blog-title') ? card.querySelector('.blog-title').textContent.toLowerCase() : '';
      const excerpt = card.querySelector('.blog-excerpt') ? card.querySelector('.blog-excerpt').textContent.toLowerCase() : '';
      const cat = card.getAttribute('data-cat') || '';
      const searchTerms = (card.getAttribute('data-search') || '').toLowerCase();

      const matchesSearch = !query || title.includes(query) || excerpt.includes(query) || cat.includes(query) || searchTerms.includes(query);
      const matchesCategory = activeCat === 'all' || cat.toLowerCase() === activeCat.toLowerCase();
      const hiddenAt1024 = card.classList.contains('blog-card-hide-1024') &&
        window.matchMedia('(min-width: 992px) and (max-width: 1024px)').matches;

      if (matchesSearch && matchesCategory && !hiddenAt1024) {
        card.style.removeProperty('display');
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResults) noResults.classList.toggle('d-none', visibleCount > 0);
  };

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }

  if (searchForm && blogCards.length) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      filterCards();
    });
  }

  if (categoryLinks.length) {
    categoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        categoryLinks.forEach((categoryLink) => {
          categoryLink.classList.remove('active', 'text-warning');
          categoryLink.classList.add('text-muted');
        });
        link.classList.add('active', 'text-warning');
        link.classList.remove('text-muted');
        filterCards();
      });
    });
  }

  if (blogCards.length) filterCards();
  if (blogCards.length) window.addEventListener('resize', filterCards);
}

/* ==========================================================================
   STATS COUNTER ANIMATION
   ========================================================================== */
function initStatsCounter() {
  const counters = document.querySelectorAll('.counter-value');
  if (!counters.length) return;

  let animated = false;

  const countUp = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1800;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.ceil(current);
        }
      }, stepTime);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        countUp();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-trigger');
  if (statsSection) {
    observer.observe(statsSection);
  } else {
    // Fallback if not inside specific trigger
    countUp();
  }
}

/* ==========================================================================
   COMING SOON COUNTDOWN TIMER
   ========================================================================== */
function initCountdownTimer() {
  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minutesEl = document.getElementById('countMinutes');
  const secondsEl = document.getElementById('countSeconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  // Set launch date 45 days from current date
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 45);

  const updateTimer = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  };

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   FORMSUBMIT CLIENT-SIDE VALIDATION & FEEDBACK
   ========================================================================== */
function getValidationControls(form) {
  return Array.from(form.querySelectorAll(
    'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]), select, textarea'
  ));
}

function getFieldValue(field) {
  return field.type === 'checkbox' || field.type === 'radio'
    ? field.checked
    : field.value.trim();
}

function sanitizeFieldInput(field) {
  if (field.name === 'phone' || field.id === 'clientPhone') {
    field.value = field.value.replace(/\D/g, '').slice(0, 15);
  }
}

function applyCustomFieldRules(field) {
  field.setCustomValidity('');
  const value = getFieldValue(field);
  if (!value) return;

  if (field.name === 'name' && String(value).length < 2) {
    field.setCustomValidity('Please enter your full name.');
  }

  if (field.name === 'year' || field.id === 'bikeYear') {
    const year = Number(value);
    const currentYear = new Date().getFullYear();
    if (!/^\d{4}$/.test(String(value)) || year < 1880 || year > currentYear + 1) {
      field.setCustomValidity(`Enter a valid model year between 1880 and ${currentYear + 1}.`);
    }
  }
}

function getFieldValidationMessage(field) {
  if (field.validity.valueMissing) {
    return field.type === 'checkbox'
      ? 'Please confirm this information before continuing.'
      : 'This field is required.';
  }
  if (field.validity.typeMismatch) {
    return field.type === 'email' ? 'Enter a valid email address.' : 'Enter a valid value.';
  }
  if (field.validity.patternMismatch) return 'Use the format shown in the example.';
  if (field.validity.tooShort) return `Enter at least ${field.minLength} characters.`;
  if (field.validity.tooLong) return `Use no more than ${field.maxLength} characters.`;
  if (field.validity.rangeUnderflow || field.validity.rangeOverflow) return 'Enter a value in the allowed range.';
  if (field.validity.customError) return field.validationMessage;
  return 'Please check this field.';
}

function getFieldFeedback(field) {
  const wrapper = field.closest('.form-check') || field.parentElement;
  if (!wrapper) return null;

  let feedback = wrapper.querySelector('.form-validation-message');
  if (!feedback) {
    feedback = wrapper.querySelector('.invalid-feedback');
  }
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.className = 'form-validation-message';
    if (field.type === 'checkbox' || field.type === 'radio') {
      wrapper.appendChild(feedback);
    } else {
      field.insertAdjacentElement('afterend', feedback);
    }
  }
  feedback.classList.add('form-validation-message');
  feedback.setAttribute('aria-live', 'polite');
  if (!feedback.id) {
    const formIndex = Array.from(document.forms).indexOf(field.form);
    feedback.id = `${field.name || field.id || 'field'}-validation-message-${formIndex}`;
  }
  field.setAttribute('aria-describedby', feedback.id);
  return feedback;
}

function validateField(field, showMessage = false) {
  applyCustomFieldRules(field);
  const valid = field.checkValidity();
  const hasValue = Boolean(getFieldValue(field));

  if (showMessage) {
    field.classList.toggle('is-invalid', !valid);
    field.classList.toggle('is-valid', valid && hasValue);
    field.setAttribute('aria-invalid', String(!valid));

    const feedback = getFieldFeedback(field);
    if (feedback) {
      feedback.hidden = valid;
      feedback.textContent = valid ? '' : getFieldValidationMessage(field);
    }
  }

  return valid;
}

function validateForm(form) {
  const controls = getValidationControls(form);
  let firstInvalid = null;
  controls.forEach(field => {
    if (!validateField(field, true) && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    form.classList.add('was-validated');
    firstInvalid.focus({ preventScroll: true });
    firstInvalid.scrollIntoView({ block: 'center', behavior: 'smooth' });
    return false;
  }

  return true;
}

function resetFormValidation(form) {
  getValidationControls(form).forEach(field => {
    field.setCustomValidity('');
    field.classList.remove('is-invalid', 'is-valid');
    field.removeAttribute('aria-invalid');
    const feedback = getFieldFeedback(field);
    if (feedback) {
      feedback.hidden = true;
      feedback.textContent = '';
    }
  });
}

function initFormValidation() {
  document.querySelectorAll('form').forEach(form => {
    const controls = getValidationControls(form);
    if (!controls.length) return;

    form.noValidate = true;
    controls.forEach(field => {
      field.addEventListener('beforeinput', event => {
        if ((field.name === 'phone' || field.id === 'clientPhone') && event.data && /\D/.test(event.data)) {
          event.preventDefault();
        }
      });
      field.addEventListener('blur', () => validateField(field, true));
      field.addEventListener('input', () => {
        sanitizeFieldInput(field);
        if (form.classList.contains('was-validated') || field.classList.contains('is-invalid')) {
          validateField(field, true);
        }
      });
      field.addEventListener('change', () => validateField(field, form.classList.contains('was-validated')));
    });

    form.addEventListener('submit', event => {
      if (!validateForm(form)) event.preventDefault();
    });
  });
}

function initFormSubmitHandler() {
  document.querySelectorAll('.formsubmit-ajax').forEach(form => {
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (form.dataset.submitting === 'true') return;
      if (!validateForm(form)) return;

      const submitButton = form.querySelector('[type="submit"]');
      const feedback = form.querySelector('[data-form-feedback]');
      const originalButton = submitButton?.innerHTML;
      const formAction = form.getAttribute('action') || '';
      const ajaxAction = formAction.replace('https://formsubmit.co/', 'https://formsubmit.co/ajax/');
      if (!ajaxAction.startsWith('https://formsubmit.co/ajax/')) {
        if (feedback) {
          feedback.hidden = false;
          feedback.className = 'form-feedback mt-3 is-error';
          feedback.textContent = 'This form is not configured yet. Please contact the workshop directly.';
        }
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute('aria-busy', 'true');
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> Sending…';
      }
      form.dataset.submitting = 'true';
      if (feedback) {
        feedback.hidden = true;
        feedback.textContent = '';
      }

      try {
        const payload = Object.fromEntries(new FormData(form).entries());
        const response = await fetch(ajaxAction, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (!response.ok || result.success === false || result.success === 'false') {
          throw new Error(result.message || 'The form service did not accept the submission.');
        }

        form.reset();
        form.classList.remove('was-validated');
        resetFormValidation(form);
        if (feedback) {
          feedback.hidden = false;
          feedback.className = 'form-feedback mt-3 is-success';
          feedback.textContent = form.classList.contains('contact-dossier')
            ? 'Your project enquiry was sent successfully. We’ll review the details and get back to you.'
            : 'You’re subscribed. Your email was sent successfully.';
          feedback.focus();
        }
      } catch (error) {
        if (feedback) {
          feedback.hidden = false;
          feedback.className = 'form-feedback mt-3 is-error';
          feedback.textContent = 'We couldn’t send this right now. Please check your connection and try again.';
          feedback.focus();
        }
      } finally {
        delete form.dataset.submitting;
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.removeAttribute('aria-busy');
          submitButton.innerHTML = originalButton;
        }
      }
    });
  });
}
