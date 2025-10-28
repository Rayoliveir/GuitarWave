export * from './animations';
export * from './carousel';
export * from './timeline';
export * from './guitarData';
export * from './interactions';

export const initializeGuideGuita = () => {
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

  import('./animations').then(({ observeElements }) => {
    observeElements();
  });

  console.log('🎸 GuideGuita initialized successfully!');
};

export const toggleTheme = () => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
};

export const loadSavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
};

export const enhanceAccessibility = () => {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Pular para o conteúdo principal';
  skipLink.className = 'skip-link';
  document.body.insertBefore(skipLink, document.body.firstChild);

  document.querySelectorAll('.timeline-label').forEach((label, index) => {
    label.setAttribute('aria-label', `Evento da timeline ${index + 1}`);
  });

  document.querySelectorAll('.guitar-card').forEach((card, index) => {
    card.setAttribute('aria-label', `Tipo de guitarra ${index + 1}`);
  });
};

