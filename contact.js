const contactData = {
  address: 'Am Stämmisch Busch 32',
  postalCode: '58455',
  city: 'Witten',
  phone: '+49 (0) 176 21712753',
  email: 'info@imkerei-trinkaus.de',
  openingHours: 'Mo-Fr: ab 17:00 Uhr, Sa: 9:00-14:00 Uhr'
};

document.addEventListener('DOMContentLoaded', () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.innerHTML = `
      <h2>Kontakt</h2>
      <p><strong>Adresse:</strong> ${contactData.address}<br />
         ${contactData.postalCode} ${contactData.city}</p>
      <p><strong>Telefon:</strong> <a href="tel:${contactData.phone}">${contactData.phone}</a></p>
      <p><strong>E-Mail:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
      <p><strong>Öffnungszeiten:</strong> ${contactData.openingHours}</p>
    `;
  }
});
