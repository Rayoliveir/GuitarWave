// Main utilities export file
export * from './animations';
export * from './carousel';
export * from './timeline';
export * from './guitarData';
export * from './interactions';

// Main initialization function
export const initializeGuideGuita = (): void => {
  // Initialize all interactive features
  import('./interactions').then(({ 
    initializePageInteractions, 
    initializeLazyLoading, 
    trackPerformance,
    addParallaxEffect,
    addHoverSoundEffect 
  }) => {
    initializePageInteractions();
    initializeLazyLoading();
    trackPerformance();
    addParallaxEffect();
    addHoverSoundEffect();
  });

  // Initialize scroll animations
  import('./animations').then(({ observeElements }) => {
    observeElements();
  });

  console.log('🎸 GuideGuita initialized successfully!');
};

// Theme utilities
export const toggleTheme = (): void => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
};

export const loadSavedTheme = (): void => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
};

// Accessibility utilities
export const enhanceAccessibility = (): void => {
  // Add skip to content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Pular para o conteúdo principal';
  skipLink.className = 'skip-link';
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Add ARIA labels to interactive elements
  document.querySelectorAll('.timeline-label').forEach((label, index) => {
    label.setAttribute('aria-label', `Evento da timeline ${index + 1}`);
  });

  document.querySelectorAll('.guitar-card').forEach((card, index) => {
    card.setAttribute('aria-label', `Tipo de guitarra ${index + 1}`);
  });
};