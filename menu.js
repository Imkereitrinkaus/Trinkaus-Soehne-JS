document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  navbar.innerHTML = `
    <div class="nav-container">
      <div class="nav-logo">
        <img src="images/trinkaus-logo.png" alt="Imkerei Trinkaus Logo" class="logo-img" />
        <span class="nav-title">Trinkaus & Söhne</span>
      </div>
      <div class="nav-toggle" id="mobile-menu" tabindex="0" aria-label="Menü umschalten" role="button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div class="nav-menu" id="nav-menu">
        <a href="#home" class="nav-link">Startseite</a>
        <a href="#products" class="nav-link">Produkte</a>
        <a href="#about" class="nav-link">Über uns</a>
        <a href="#news" class="nav-link">Aktuelles</a>
        <a href="#archive" class="nav-link">Archiv</a>
        <a href="#bees" class="nav-link">Unsere Bienen</a>
        <a href="#contact" class="nav-link">Kontakt</a>
        <a href="#shop" class="nav-link nav-cta">Bestellen</a>
      </div>
    </div>
  `;

  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
});