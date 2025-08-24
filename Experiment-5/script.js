const filterDropdown = document.getElementById('categoryFilter');
const products = document.querySelectorAll('#productList li');

filterDropdown.addEventListener('change', () => {
  const selectedCategory = filterDropdown.value;

  products.forEach(product => {
    if (selectedCategory === 'all' || product.dataset.category === selectedCategory) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
