 // Fade-up on scroll
  const fadeEls = document.querySelectorAll('.fade-up');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if(e.isIntersecting){
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.1});
  fadeEls.forEach(el => obs.observe(el));

  // Counter animation
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.querySelector('.plus') ? el.querySelector('.plus').outerHTML : '';
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if(start >= target){ start = target; clearInterval(timer); }
      el.innerHTML = start + suffix;
    }, 30);
  }
  const counters = document.querySelectorAll('.counter');
  const cObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ animateCounter(e.target); cObs.unobserve(e.target); } });
  }, {threshold: 0.5});
  counters.forEach(c => cObs.observe(c));

  // Back to top
  window.addEventListener('scroll', () => {
    document.getElementById('backTop').classList.toggle('show', window.scrollY > 400);
  });

  // Project filter (visual only)
  document.querySelectorAll('.project-filter .btn').forEach(btn => {
    btn.addEventListener('click', function(){
      document.querySelectorAll('.project-filter .btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });