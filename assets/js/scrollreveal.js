const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 500,
    reset: true
});

//NAV
sr.reveal('.nav-logo', { delay: 100 })
sr.reveal('.nav-links', { delay: 100 })
sr.reveal('.nav-link', { delay: 200, interval: 100 });
sr.reveal('.scheduling-link', { delay: 1000 })