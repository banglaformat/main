/**
 * Bangla Format - Core Vanilla JavaScript
 * Lightweight, accessible, no trackers.
 */

document.addEventListener('DOMContentLoaded', function () {
  initMobileNav();
  initCopyButtons();
  initShareButtons();
  initBackToTop();
});

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
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(
      function () {
        if (button) showCopyFeedback(button);
      },
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
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(function () {
          showShareFeedback(button);
        }, function () {
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
