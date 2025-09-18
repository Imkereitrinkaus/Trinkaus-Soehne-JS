document.addEventListener('DOMContentLoaded', () => {
  // Zentraler Preis pro 500g Glas
  const pricePer500gGlass = 7.50;

  // Produktliste
  const products = [
    {
      id: 'fruehlingsbluete',
      name: 'Frühlingsblüte',
      price: pricePer500gGlass,
      size: '500g Glas',
      description: 'Feiner Honig von ersten Frühjahrsblüten bis zur Akazienblüte. Cremig gerührt und sehr schmackhaft',
      image: 'images/fruehlingsbluete.jpg',
    },
    {
      id: 'sommertracht',
      name: 'Sommertracht',
      price: pricePer500gGlass,
      size: '500g Glas',
      description: 'Fruchtiger Honig aus der Sommertracht.',
      image: 'images/sommertracht.jpg',
    },
  ];

  // Produkte im #products Bereich ausgeben
  const productsSection = document.getElementById('products');
  if (productsSection) {
    let productsHtml = '<h2>Unser Honig-Sortiment</h2><div class="products-grid">';
    products.forEach(product => {
      productsHtml += `
        <article class="product-card" tabindex="0" id="product-${product.id}">
          <img src="${product.image}" alt="${product.name}" class="product-img" />
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-details">
            <span class="price">€${product.price.toFixed(2)}</span>
            <span class="size">${product.size}</span>
          </div>
        </article>
      `;
    });
    productsHtml += '</div>';
    productsSection.innerHTML = productsHtml;
  }

  // Produkte im Shop-Bestellformular ausgeben
  const shopSection = document.getElementById('shop');
  if (shopSection) {
    let formHtml = `
      <h2>Honig bestellen</h2>
      <aside class="order-info" aria-label="Bestellinformationen">
        <h3><i class="fas fa-shopping-cart"></i> So einfach bestellen Sie:</h3>
        <ul class="order-steps">
          <li><i class="fas fa-check-circle"></i> Füllen Sie das Bestellformular aus</li>
          <li><i class="fas fa-check-circle"></i> Wir bestätigen Ihre Bestellung per E-Mail</li>
          <li><i class="fas fa-check-circle"></i> Sie erhalten eine Rechnung</li>
          <li><i class="fas fa-check-circle"></i> Nach Zahlungseingang versenden wir Ihren Honig</li>
        </ul>
        <div class="shipping-info">
          <h4><i class="fas fa-truck"></i> Versand & Lieferung</h4>
          <p><strong>Versandkosten:</strong> €4,90 (ab €30,- versandkostenfrei)</p>
          <p><strong>Lieferzeit:</strong> 2-3 Werktage</p>
          <p><strong>Zahlung:</strong> Rechnung, Überweisung</p>
        </div>
      </aside>

      <form id="orderForm" action="https://submit.w3forms.com/IHR-ACCESS-KEY-HIER" method="POST" novalidate class="order-form" aria-label="Bestellformular">
      <h3><i class="fas fa-clipboard-list"></i> Ihre Bestellung</h3>
      <div class="form-section">
        <h4><i class="fas fa-honey-pot"></i> Honig auswählen:</h4>
        <div class="product-selection">
    `;

    products.forEach(product => {
      formHtml += `
        <div class="product-option">
          <label class="product-label" for="product-${product.id}">
            <input type="checkbox" name="products" value="${product.id}" id="product-${product.id}" data-price="${product.price}" />
            <div class="product-info">
              <span class="product-name">${product.name}</span>
              <span class="product-price">€${product.price.toFixed(2)}</span>
            </div>
          </label>
          <div class="quantity-control">
            <label for="qty_${product.id}">Anzahl:</label>
            <input type="number" name="qty_${product.id}" id="qty_${product.id}" min="0" max="20" value="0" class="qty-input" />
          </div>
        </div>
      `;
    });

    formHtml += `
        </div>
      </div>
      <!-- Weitere Formularfelder wie Kontaktdaten, Adresse sollten in shop.js oder index.html ergänzt werden -->
      <button type="submit" class="btn btn-primary btn-large">
        <i class="fas fa-paper-plane"></i> Bestellung absenden
      </button>
      </form>
    `;

    shopSection.innerHTML = formHtml;
  }
});
