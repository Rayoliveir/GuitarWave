export const fadeInUp = (element, delay= 0) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(40px)';
  element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
  
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, delay);
};

export const slideInFromLeft = (element, delay= 0) => {
  element.style.opacity = '0';
  element.style.transform = 'translateX(-100px)';
  element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
  
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateX(0)';
  }, delay);
};

export const scaleIn = (element, delay= 0) => {
  element.style.opacity = '0';
  element.style.transform = 'scale(0.8)';
  element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'scale(1)';
  }, delay);
};

export const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });

  return observer;
};