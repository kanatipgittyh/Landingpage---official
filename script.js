/**
 * Interactive Script for "ชวนคุยให้เป็น" Premium Editorial Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. MODAL CONTROLLER (SAMPLE & CHECKOUT)
  // ==========================================
  const sampleModal = document.getElementById('sampleModal');
  const checkoutModal = document.getElementById('checkoutModal');

  // Trigger buttons
  const openSampleBtn = document.getElementById('openSampleModalBtn');
  const triggerSampleFromPreview = document.getElementById('triggerSampleModalFromPreview');
  const previewLightboxBtns = document.querySelectorAll('.open-sample-lightbox');
  
  const closeSampleBtn = document.getElementById('closeSampleModalBtn');
  const closeCheckoutBtn = document.getElementById('closeCheckoutModalBtn');
  const openCheckoutBtns = document.querySelectorAll('.open-checkout-btn');

  // Hero Preview Modal logic (adapted for Table of Contents)
  const heroPreviewImg = document.getElementById('heroPreviewImg');
  const heroPreviewPagination = document.getElementById('heroPreviewPagination');
  const heroPreviewPrevBtn = document.getElementById('heroPreviewPrevBtn');
  const heroPreviewNextBtn = document.getElementById('heroPreviewNextBtn');
  const heroPreviewImageContainer = document.getElementById('heroPreviewImageContainer');
  
  let currentHeroPage = 1;

  const updateHeroPreviewModal = () => {
    if (!heroPreviewImg) return;
    heroPreviewImg.src = currentHeroPage === 1 ? 'assets/สารบัญ1.png' : 'assets/สารบัญ2.png';
    if (heroPreviewPagination) heroPreviewPagination.textContent = `${currentHeroPage} / 2`;
    if (heroPreviewPrevBtn) heroPreviewPrevBtn.disabled = currentHeroPage === 1;
    if (heroPreviewNextBtn) heroPreviewNextBtn.disabled = currentHeroPage === 2;
    if (heroPreviewImageContainer) {
      heroPreviewImageContainer.scrollLeft = 0;
      heroPreviewImageContainer.scrollTop = 0;
      heroPreviewImageContainer.classList.remove('zoomed');
    }
  };

  const openSampleFunc = (page = 1) => {
    if (sampleModal) {
      currentHeroPage = typeof page === 'number' ? page : 1;
      updateHeroPreviewModal();
      sampleModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  if (openSampleBtn) openSampleBtn.addEventListener('click', openSampleFunc);
  if (triggerSampleFromPreview) triggerSampleFromPreview.addEventListener('click', openSampleFunc);

  // Table of Contents triggers
  const tocImgWrapper1 = document.getElementById('tocImgWrapper1');
  const tocImgWrapper2 = document.getElementById('tocImgWrapper2');

  if (tocImgWrapper1) {
    tocImgWrapper1.addEventListener('click', () => {
      openSampleFunc(1);
    });
  }
  if (tocImgWrapper2) {
    tocImgWrapper2.addEventListener('click', () => {
      openSampleFunc(2);
    });
  }

  previewLightboxBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      openSampleFunc();
    });
  });

  const closeSampleFunc = () => {
    if (sampleModal) {
      sampleModal.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (heroPreviewImg) heroPreviewImg.src = '';
      }, 300);
    }
  };
  
  if (closeSampleBtn) closeSampleBtn.addEventListener('click', closeSampleFunc);

  if (heroPreviewPrevBtn) {
    heroPreviewPrevBtn.addEventListener('click', () => {
      if (currentHeroPage > 1) {
        currentHeroPage--;
        updateHeroPreviewModal();
      }
    });
  }

  if (heroPreviewNextBtn) {
    heroPreviewNextBtn.addEventListener('click', () => {
      if (currentHeroPage < 2) {
        currentHeroPage++;
        updateHeroPreviewModal();
      }
    });
  }

  if (heroPreviewImageContainer) {
    heroPreviewImageContainer.addEventListener('click', (e) => {
      if (e.target === heroPreviewImg || e.target === heroPreviewImageContainer) {
        heroPreviewImageContainer.classList.toggle('zoomed');
      }
    });
  }



  // Close Checkout Modal
  if (closeCheckoutBtn) {
    closeCheckoutBtn.addEventListener('click', () => {
      if (checkoutModal) {
        checkoutModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Close modal when clicking backdrop
  window.addEventListener('click', (e) => {
    if (e.target === sampleModal) closeSampleFunc();
    if (e.target === checkoutModal) {
      checkoutModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // ==========================================
  // 2. CHECKOUT FORM SIMULATION
  // ==========================================
  const paymentForm = document.getElementById('paymentForm');
  if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('userEmail').value;
      
      if (emailInput) {
        const displayEmail = document.getElementById('displayUserEmail');
        if (displayEmail) displayEmail.textContent = emailInput;

        document.getElementById('checkoutStep1').classList.add('hidden');
        document.getElementById('checkoutStep2').classList.remove('hidden');
      }
    });
  }

  // ==========================================
  // 3. ACCORDION (FAQ)
  // ==========================================
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('active');

      const parentAccordion = item.closest('.accordion');
      if (parentAccordion) {
        parentAccordion.querySelectorAll('.accordion-item').forEach(child => {
          child.classList.remove('active');
          const icon = child.querySelector('.accordion-icon');
          if (icon) icon.textContent = '+';
        });
      }

      if (!isOpen) {
        item.classList.add('active');
        const icon = header.querySelector('.accordion-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // ==========================================
  // 3.5 MOBILE MENU TOGGLE
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinksContainer = document.getElementById('navLinks');
  
  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navLinksContainer.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 4. NAVBAR SCROLL EFFECT
  // ==========================================
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 15) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ==========================================
  // 5. SCROLL FADE-UP ANIMATION
  // ==========================================
  const fadeElements = document.querySelectorAll('.scroll-fade-up');
  
  if ('IntersectionObserver' in window && fadeElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    fadeElements.forEach(el => observer.observe(el));
  } else {
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  // ==========================================
  // 6. IMAGE LIGHTBOX
  // ==========================================
  const polaroidTrigger = document.getElementById('polaroidImageTrigger');
  const imageLightboxOverlay = document.getElementById('imageLightboxOverlay');
  const imageLightboxImg = document.getElementById('imageLightboxImg');
  const imageLightboxClose = document.getElementById('imageLightboxClose');

  if (polaroidTrigger && imageLightboxOverlay) {
    const closeImageLightbox = () => {
      imageLightboxOverlay.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => { imageLightboxImg.src = ''; }, 300);
    };

    polaroidTrigger.addEventListener('click', () => {
      const img = polaroidTrigger.querySelector('img');
      if (img) {
        imageLightboxImg.src = img.src;
        imageLightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });

    imageLightboxOverlay.addEventListener('click', (e) => {
      if (e.target === imageLightboxOverlay) closeImageLightbox();
    });

    if (imageLightboxClose) {
      imageLightboxClose.addEventListener('click', closeImageLightbox);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && imageLightboxOverlay.classList.contains('active')) {
        closeImageLightbox();
      }
    });
  }

  // ==========================================
  // 7. BOOK PREVIEW LIGHTBOX CONTROLLER
  // ==========================================
  const bookPreviewModal = document.getElementById('bookPreviewModal');
  const previewImg = document.getElementById('previewImg');
  const previewModalTitle = document.getElementById('previewModalTitle');
  const previewPrevBtn = document.getElementById('previewPrevBtn');
  const previewNextBtn = document.getElementById('previewNextBtn');
  const previewPagination = document.getElementById('previewPagination');
  const closePreviewModalBtn = document.getElementById('closePreviewModalBtn');
  const previewImageContainer = document.getElementById('previewImageContainer');
  const stepPreviewBtns = document.querySelectorAll('.step-preview-btn');
  const previewAnnotation = document.getElementById('previewAnnotation');
  const previewAnnotationText = document.getElementById('previewAnnotationText');

  let currentStep = 1;
  let currentPage = 1; // 1 or 2

  const stepTitles = {
    1: 'STEP 01 — สร้างความประทับใจแรก',
    2: 'STEP 02 — ชวนคุยให้เป็น',
    3: 'STEP 03 — ชวนคุยให้เป็น',
    4: 'STEP 04 — คุยต่อให้ไหลลื่น'
  };

  const annotations = {
    1: {
      1: 'ทำไมสิ่งเล็ก ๆ ก่อนเริ่มคุยถึงมีผล',
      2: 'ก่อนสร้าง First Impression ที่ดี ต้องรู้ก่อนว่าสมองตัดสินเรายังไง'
    },
    2: {
      1: 'รู้ว่าจะพูดอะไร ยังไม่พอ ถ้าเราไม่เป็นฝ่ายเริ่ม',
      2: 'ผ่านช่วงลังเลก่อนที่สมองจะดึงเรากลับ'
    },
    3: {
      1: 'จำชื่อเขา แล้วใช้ชื่อให้เป็น',
      2: 'คิดอะไรไม่ออก? หยิบ 3 หัวข้อนี้มาชวนคุยได้เลย'
    },
    4: {
      1: 'อย่าแย่งไมค์ — ให้เขาเป็นนักร้องหลัก เราเป็น Featuring',
      2: 'จับ Keyword ให้เจอ แล้วพาบทสนทนาไปต่อ'
    }
  };

  const updatePreviewModal = () => {
    if (!previewImg || !previewModalTitle || !previewPagination) return;
    
    // Set title
    previewModalTitle.textContent = `ตัวอย่างจาก ${stepTitles[currentStep] || ''}`;
    
    // Set image source
    previewImg.src = `assets/guidebook-preview-step${currentStep}-0${currentPage}.webp`;
    
    // Set pagination text
    previewPagination.textContent = `${currentPage} / 2`;

    // Set Annotation
    if (previewAnnotation && previewAnnotationText) {
      const annotationText = annotations[currentStep] && annotations[currentStep][currentPage];
      if (annotationText) {
        previewAnnotationText.textContent = annotationText;
        previewAnnotation.style.opacity = '1';
      } else {
        previewAnnotation.style.opacity = '0';
      }
    }
    
    // Update button disabled states
    if (previewPrevBtn) previewPrevBtn.disabled = currentPage === 1;
    if (previewNextBtn) previewNextBtn.disabled = currentPage === 2;

    // Reset container scroll & zoom state
    if (previewImageContainer) {
      previewImageContainer.scrollLeft = 0;
      previewImageContainer.scrollTop = 0;
      previewImageContainer.classList.remove('zoomed');
    }
  };

  const openPreviewModal = (step) => {
    if (!bookPreviewModal) return;
    currentStep = parseInt(step) || 1;
    currentPage = 1;
    updatePreviewModal();
    
    bookPreviewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closePreviewModal = () => {
    if (!bookPreviewModal) return;
    bookPreviewModal.classList.remove('open');
    document.body.style.overflow = '';
    
    // Clear src after fade-out transition to save memory
    setTimeout(() => {
      if (previewImg) previewImg.src = '';
    }, 300);
  };

  // Event Listeners for trigger buttons
  stepPreviewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const step = btn.getAttribute('data-step');
      openPreviewModal(step);
    });
  });

  // Prev / Next actions
  const prevPage = () => {
    if (currentPage > 1) {
      currentPage--;
      updatePreviewModal();
    }
  };

  const nextPage = () => {
    if (currentPage < 2) {
      currentPage++;
      updatePreviewModal();
    }
  };

  if (previewPrevBtn) previewPrevBtn.addEventListener('click', prevPage);
  if (previewNextBtn) previewNextBtn.addEventListener('click', nextPage);
  if (closePreviewModalBtn) closePreviewModalBtn.addEventListener('click', closePreviewModal);

  // Close on backdrop click
  if (bookPreviewModal) {
    bookPreviewModal.addEventListener('click', (e) => {
      if (e.target === bookPreviewModal) {
        closePreviewModal();
      }
    });
  }

  // Click-to-zoom toggling
  if (previewImageContainer) {
    previewImageContainer.addEventListener('click', (e) => {
      // Toggle zoom if click is on the image or container itself (avoid nav click)
      if (e.target === previewImg || e.target === previewImageContainer) {
        previewImageContainer.classList.toggle('zoomed');
      }
    });
  }

  // Mobile swipe gestures
  if (previewImageContainer) {
    let touchStartX = 0;
    let touchEndX = 0;

    previewImageContainer.addEventListener('touchstart', (e) => {
      // Only process swipe if not zoomed
      if (previewImageContainer.classList.contains('zoomed')) return;
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    previewImageContainer.addEventListener('touchend', (e) => {
      if (previewImageContainer.classList.contains('zoomed')) return;
      touchEndX = e.changedTouches[0].screenX;
      
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swiped left -> next page
        nextPage();
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swiped right -> prev page
        prevPage();
      }
    }, { passive: true });
  }

  // Keyboard navigation (ESC, Arrow keys)
  document.addEventListener('keydown', (e) => {
    if (!bookPreviewModal || !bookPreviewModal.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closePreviewModal();
    } else if (e.key === 'ArrowLeft') {
      prevPage();
    } else if (e.key === 'ArrowRight') {
      nextPage();
    }
  });

  // ==========================================
  // 8. GUIDEMAP PREVIEW LIGHTBOX
  // ==========================================
  const guidemapPreviews = document.querySelectorAll('.guidemap-preview-window');
  const guidemapPreviewModal = document.getElementById('guidemapPreviewModal');
  const guidemapModalImg = document.getElementById('guidemapModalImg');
  const closeGuidemapModalBtn = document.getElementById('closeGuidemapModalBtn');
  
  if (guidemapPreviews.length > 0 && guidemapPreviewModal) {
    const closeGuidemapModal = () => {
      guidemapPreviewModal.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (guidemapModalImg) guidemapModalImg.src = '';
      }, 300);
    };

    guidemapPreviews.forEach(preview => {
      preview.addEventListener('click', () => {
        const src = preview.getAttribute('data-src');
        if (src && guidemapModalImg) {
          guidemapModalImg.src = src;
          guidemapPreviewModal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    if (closeGuidemapModalBtn) {
      closeGuidemapModalBtn.addEventListener('click', closeGuidemapModal);
    }

    guidemapPreviewModal.addEventListener('click', (e) => {
      if (e.target === guidemapPreviewModal) {
        closeGuidemapModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && guidemapPreviewModal.classList.contains('open')) {
        closeGuidemapModal();
      }
    });
  }

  // ==========================================
  // 9. MOBILE STICKY CTA CONTROLLER
  // ==========================================
  const mobileStickyCta = document.getElementById('mobileStickyCta');
  const finalCloseSection = document.getElementById('pricing');
  const footer = document.querySelector('.footer');

  if (mobileStickyCta && finalCloseSection) {
    let isPricingVisible = false;
    let isFooterVisible = false;

    const updateStickyCtaVisibility = () => {
      if (isPricingVisible || isFooterVisible) {
        mobileStickyCta.classList.add('hide-cta');
      } else {
        mobileStickyCta.classList.remove('hide-cta');
      }
    };

    const visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === finalCloseSection) {
          isPricingVisible = entry.isIntersecting;
        }
        if (entry.target === footer) {
          isFooterVisible = entry.isIntersecting;
        }
      });
      updateStickyCtaVisibility();
    }, {
      root: null,
      threshold: 0.05
    });

    visibilityObserver.observe(finalCloseSection);
    if (footer) visibilityObserver.observe(footer);
  }

});
