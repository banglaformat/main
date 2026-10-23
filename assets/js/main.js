/**
 * Bangla Format - Core Vanilla JavaScript
 * Lightweight, accessible, and SEO/Analytics ready.
 */

// Default GA4 Measurement ID (can also be set globally via window.GA_MEASUREMENT_ID)
const DEFAULT_GA_ID = 'G-GX09P20D4B';

document.addEventListener('DOMContentLoaded', function () {
  initGoogleAnalytics();
  initMobileNav();
  initCopyButtons();
  initShareButtons();
  initBackToTop();
});

/**
 * Google Analytics 4 (GA4) Integration
 * Automatically loads gtag.js across all pages when a valid Measurement ID is present.
 */
function initGoogleAnalytics() {
  const measurementId = window.GA_MEASUREMENT_ID || DEFAULT_GA_ID;
  if (!measurementId) return;

  // Prevent double injection if already loaded or scheduled
  if (document.getElementById('ga-gtag-script')) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      send_page_view: true
    });
  }

  var loaded = false;
  function loadGtagScript() {
    if (loaded || document.getElementById('ga-gtag-script')) return;
    loaded = true;
    const script = document.createElement('script');
    script.id = 'ga-gtag-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(script);
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadGtagScript, { timeout: 2500 });
  } else {
    window.addEventListener('load', function () {
      setTimeout(loadGtagScript, 1000);
    }, { once: true });
  }

  ['scroll', 'keydown', 'touchstart', 'click'].forEach(function (evt) {
    window.addEventListener(evt, loadGtagScript, { once: true, passive: true });
  });
}

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!toggleBtn || !mobileNav) return;
  if (toggleBtn.dataset.hasMobileListener === 'true') return;
  toggleBtn.dataset.hasMobileListener = 'true';

  toggleBtn.addEventListener('click', function () {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    mobileNav.classList.toggle('is-open');
    mobileNav.classList.toggle('active');
  });

  // Close when clicking outside
  document.addEventListener('click', function (event) {
    if (!toggleBtn.contains(event.target) && !mobileNav.contains(event.target)) {
      if (mobileNav.classList.contains('is-open') || mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('is-open');
        mobileNav.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && (mobileNav.classList.contains('is-open') || mobileNav.classList.contains('active'))) {
      mobileNav.classList.remove('is-open');
      mobileNav.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    }
  });
}

/**
 * Copy to Clipboard Functionality
 */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy-target], .copy-btn, .btn-copy');

  copyButtons.forEach(function (button) {
    if (button.id === 'shareBtn' || button.classList.contains('share-btn')) return;
    if (button.dataset.hasCopyListener === 'true') return;
    button.dataset.hasCopyListener = 'true';

    button.addEventListener('click', function () {
      const targetId = button.getAttribute('data-copy-target');
      let textToCopy = '';

      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          textToCopy = targetElement.innerText || targetElement.textContent;
        }
      }

      if (!textToCopy) {
        const container = button.closest('.template-card, .template-box, .template-container, .code-block-wrapper, .sample-box, .sample-card, .application-preview, .card');
        if (container) {
          const preOrCode = container.querySelector('pre, code, .draft-text, .template-body, .template-content, .letter-draft');
          if (preOrCode) {
            textToCopy = preOrCode.innerText || preOrCode.textContent;
          }
        }
      }

      if (!textToCopy) return;

      copyTextWithFeedback(textToCopy, button);
    });
  });
}

/**
 * Global helper for inline onclicks: copyToClipboard('id', button)
 */
window.copyToClipboard = function (targetId, button) {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;
  const textToCopy = targetElement.innerText || targetElement.textContent;
  copyTextWithFeedback(textToCopy, button || window.event?.target);
};

function copyTextWithFeedback(text, button) {
  function onCopySuccess() {
    if (button) showCopyFeedback(button);
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'template_copy', {
        event_category: 'engagement',
        event_label: document.title,
        page_location: window.location.href
      });
    }
  }

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(
      onCopySuccess,
      function () {
        if (button) fallbackCopyText(text, button);
      }
    );
  } else {
    if (button) fallbackCopyText(text, button);
  }
}

/**
 * Share URL button functionality
 */
function initShareButtons() {
  const shareButtons = document.querySelectorAll('#shareBtn, .share-btn, .btn-share');

  shareButtons.forEach(function (button) {
    if (button.dataset.hasShareListener === 'true') return;
    button.dataset.hasShareListener = 'true';

    button.addEventListener('click', function () {
      const url = window.location.href;
      function onShareSuccess() {
        showShareFeedback(button);
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'page_share', {
            event_category: 'engagement',
            page_location: url
          });
        }
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(onShareSuccess, function () {
          fallbackCopyText(url, button);
        });
      } else {
        fallbackCopyText(url, button);
      }
    });
  });
}

function showShareFeedback(button) {
  const originalHTML = button.innerHTML;
  button.classList.add('copied');
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px; vertical-align: middle;">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    লিঙ্ক কপি হয়েছে!
  `;

  setTimeout(function () {
    button.classList.remove('copied');
    button.innerHTML = originalHTML;
  }, 2000);
}

/**
 * Fallback copy method for older browsers or insecure contexts
 */
function fallbackCopyText(text, button) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful && button) {
      if (button.id === 'shareBtn' || button.classList.contains('share-btn')) {
        showShareFeedback(button);
      } else {
        showCopyFeedback(button);
      }
    }
  } catch (err) {
    console.error('Copy fallback failed', err);
  }

  document.body.removeChild(textArea);
}

/**
 * Visual feedback for copy button
 */
function showCopyFeedback(button) {
  const originalHTML = button.innerHTML;
  button.classList.add('copied');
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px; vertical-align: middle;">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    কপি হয়েছে!
  `;

  setTimeout(function () {
    button.classList.remove('copied');
    button.innerHTML = originalHTML;
  }, 2000);
}

/**
 * Back to Top Floating Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  const toggleVisibility = function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
