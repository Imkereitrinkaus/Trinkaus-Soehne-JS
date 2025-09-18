document.addEventListener('DOMContentLoaded', () => {
  const productCheckboxes = document.querySelectorAll('input[name="products"]');
  const qtyInputs = document.querySelectorAll('.qty-input');
  const subtotalEl = document.getElementById('subtotal');
  const shippingEl = document.getElementById('shipping');
  const totalEl = document.getElementById('total');

  const SHIPPING_COST = 6.90;
  const FREE_SHIPPING_FROM = 80.00;

  function normalizeKey(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '');
  }

  function updateOrderSummary() {
    let subtotal = 0;

    productCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const price = parseFloat(checkbox.dataset.price);
        const productKey = normalizeKey(checkbox.value);
        const qtyInput = document.querySelector(`input[name="qty_${productKey}"]`);
        const qty = qtyInput ? parseInt(qtyInput.value) || 0 : 0;
        subtotal += price * qty;
      }
    });

    const shippingCost = subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_COST;
    const total = subtotal + shippingCost;

    if (subtotalEl) subtotalEl.textContent = `€${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shippingCost === 0 ? 'kostenlos' : `€${shippingCost.toFixed(2)}`;
    if (totalEl) totalEl.innerHTML = `<strong>€${total.toFixed(2)}</strong>`;
  }

  productCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const productKey = normalizeKey(checkbox.value);
      const qtyInput = document.querySelector(`input[name="qty_${productKey}"]`);
      if (checkbox.checked && qtyInput && parseInt(qtyInput.value) === 0) {
        qtyInput.value = 1;
      } else if (!checkbox.checked && qtyInput) {
        qtyInput.value = 0;
      }
      updateOrderSummary();
    });
  });

  qtyInputs.forEach(input => {
    input.addEventListener('input', () => {
      const qty = parseInt(input.value) || 0;
      const productKey = normalizeKey(input.name.replace('qty_', ''));
      const checkbox = Array.from(productCheckboxes).find(cb => normalizeKey(cb.value) === productKey);
      if (checkbox) {
        checkbox.checked = qty > 0;
      }
      updateOrderSummary();
    });
  });

  updateOrderSummary();
});
