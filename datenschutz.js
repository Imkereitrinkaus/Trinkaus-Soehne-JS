document.addEventListener('DOMContentLoaded', () => {
  const datenschutzSection = document.getElementById('datenschutz');
  if (datenschutzSection) {
    datenschutzSection.innerHTML = `
      <h2>Datenschutzerklärung</h2>
      <p>Wir nehmen den Schutz Ihrer persönlichen Daten ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.</p>
      <p>Weitere Informationen zur Datenerhebung, Verarbeitung und Nutzung erhalten Sie auf dieser Seite und mit der Bestellung.</p>
      <!-- Ergänzen Sie hier Ihre vollständige Datenschutzerklärung -->
    `;
  }
});
