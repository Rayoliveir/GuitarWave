export const smoothScrollTo = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
export const addParallaxEffect = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach((element) => {
      const rate = scrolled * -0.5;
      element.style.transform = `translateY(${rate}px)`;
    });
  });
};


export const addHoverSoundEffect = () => {
  const hoverElements = document.querySelectorAll('.guitar-card, .care-card, .timeline-label');
  
  hoverElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('hover-active');
    });
    
    element.addEventListener('mouseleave', () => {
      element.classList.remove('hover-active');
    });
  });
};
export const initializePageInteractions = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const timelineSteps = document.querySelectorAll('.timeline-checkbox');
      const currentActive = document.querySelector('.timeline-checkbox:checked');
      
      if (currentActive) {
        const currentIndex = Array.from(timelineSteps).indexOf(currentActive);
        let nextIndex;
        
        if (e.key === 'ArrowLeft') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : timelineSteps.length - 1;
        } else {
          nextIndex = currentIndex < timelineSteps.length - 1 ? currentIndex + 1 : 0;
        }
        
        currentActive.checked = false;
        timelineSteps[nextIndex].checked = true;
      }
    }
  });
};


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
export const trackPerformance = () => {
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`GuideGuitar loaded in ${loadTime.toFixed(2)}ms`);
  });

  let interactionCount = 0;
  document.addEventListener('click', () => {
    interactionCount++;
  });

  setInterval(() => {
    if (interactionCount > 0) {
      console.log(`User interactions in last 30s: ${interactionCount}`);
      interactionCount = 0;
    }
  }, 30000);
};  