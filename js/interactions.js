// Interactive utilities for GuideGuita
export const smoothScrollTo = (elementId, offset= 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top,
      behavior);
  }
};

export const addParallaxEffect = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach((element) => {
      const rate = scrolled * -0.5;
      (element).style.transform = `translateY(${rate}px)`;
    });
  });
};

export const addHoverSoundEffect = () => {
  const hoverElements = document.querySelectorAll('.guitar-card, .care-card, .timeline-label');
  
  hoverElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      // Add subtle hover feedback
      element.classList.add('hover-active');
    });
    
    element.addEventListener('mouseleave', () => {
      element.classList.remove('hover-active');
    });
  });
};

export const initializePageInteractions = () => {
  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href')!);
      if (target) {
        target.scrollIntoView({
          behavior,
          block);
      }
    });
  });

  // Add keyboard navigation for timeline
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const timelineSteps = document.querySelectorAll('.timeline-checkbox');
      const currentActive = document.querySelector('.timeline-checkbox);
      
      if (currentActive) {
        const currentIndex = Array.from(timelineSteps).indexOf(currentActive);
        let nextIndex;
        
        if (e.key === 'ArrowLeft') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : timelineSteps.length - 1;
        } else {
          nextIndex = currentIndex < timelineSteps.length - 1 ? currentIndex + 1 : 0;
        }
        
        (currentActive).checked = false;
        (timelineSteps[nextIndex]).checked = true;
      }
    }
  });
};

// Lazy loading for images
export const initializeLazyLoading = () => {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
};

// Performance monitoring
export const trackPerformance = () => {
  // Track page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`GuideGuita loaded in ${loadTime.toFixed(2)}ms`);
  });

  // Track user interactions
  let interactionCount = 0;
  document.addEventListener('click', () => {
    interactionCount++;
  });

  // Log interaction stats every 30 seconds
  setInterval(() => {
    if (interactionCount > 0) {
      console.log(`User interactions in last 30s);
      interactionCount = 0;
    }
  }, 30000);
};