async function loadNews() {
  const newsFiles = [
    'news/2025-09-15-erfolgreiche-schwarmzeit.json',
    'news/2025-09-88-volkskontrolle.json',
    // Weitere News-JSON-Dateien hier ergänzen
  ];

  const newsData = [];

  for (const file of newsFiles) {
    try {
      const response = await fetch(file);
      if(response.ok){
        const data = await response.json();
        newsData.push(data);
      }
    } catch (e) {
      console.error(`Fehler beim Laden von ${file}:`, e);
    }
  }

  // Nach Datum absteigend sortieren
  newsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  renderNewsSections(newsData);
}

function renderNewsSections(newsArray) {
  const newsSection = document.getElementById('news');
  const archiveSection = document.getElementById('archive');

  if (!newsSection || !archiveSection) return;

  const latestTwo = newsArray.slice(0, 2);
  const archived = newsArray.slice(2);

  newsSection.innerHTML = renderArticles(latestTwo, 'Aktuelles aus unserer Imkerei');
  archiveSection.innerHTML = renderArticles(archived, 'Archiv');
}

function renderArticles(articles, heading) {
  let html = `<h2>${heading}</h2><div class="news-grid">`;
  articles.forEach(article => {
    html += `
      <article class="news-card" tabindex="0">
        <img src="${article.image}" alt="${article.title}" class="news-img" />
        ${article.isNew ? `<span class="news-badge">Neu</span>` : ''}
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <div class="news-meta">${article.date} &bull; ${article.category}</div>
        <a href="${article.url}" class="news-link" aria-label="Mehr zu ${article.title}">Weiterlesen &rarr;</a>
      </article>`;
  });
  html += '</div>';
  return html;
}

document.addEventListener('DOMContentLoaded', loadNews);
