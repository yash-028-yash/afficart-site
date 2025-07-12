// Open Amazon product in new tab
function openProduct(url) {
  window.open(url, "_blank");
}

// Search products
function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categorySelect").value;
  const products = document.querySelectorAll(".product-card");

  products.forEach((card) => {
    const title = card.getAttribute("data-title").toLowerCase();
    const prodCategory = card.getAttribute("data-category");
    const matchText = title.includes(input);
    const matchCategory = category === "all" || prodCategory === category;

    card.style.display = matchText && matchCategory ? "block" : "none";
  });
}

// Filter by category only
function filterCategory(selectedCategory) {
  document.getElementById("categorySelect").value = selectedCategory;
  searchProducts();
}

// Trigger search on typing
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchInput").addEventListener("input", searchProducts);
});
