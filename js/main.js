document.addEventListener('DOMContentLoaded', function() {
  initVersionTabs();
  initSmoothScroll();
});

function initVersionTabs() {
  const tabs = document.querySelectorAll('.version-tab');
  const panels = document.querySelectorAll('.version-panel');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const version = tab.getAttribute('data-version');
      
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      panels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `panel-${version}`) {
          panel.classList.add('active');
        }
      });
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        
        const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
          window.scrollTo(window.scrollX, targetPosition);
        } else {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
