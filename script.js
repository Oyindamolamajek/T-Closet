
"use strict";

/* ==========================================
   T-CLOSET: PRODUCT CATALOGUE
   Sample products and prices in Nigerian naira.
   Replace these with verified store inventory.
========================================== */

const products = [
  {
    id: 1,
    name: "Elegant Satin Dress",
    category: "Women",
    price: 28500,
    color: "Burgundy",
    sizes: ["S", "M", "L", "XL"],
    style: ["Elegant", "Minimalist"],
    occasion: ["Party", "Date night"],
    fit: ["Relaxed", "Regular"],
    badge: "BESTSELLER",
    image: "photo-1595777457583-95e059d581b8",
    description: "An elegant satin-inspired dress for dinners, celebrations and special occasions."
  },
  {
    id: 2,
    name: "Classic White Shirt",
    category: "Men",
    price: 18000,
    color: "White",
    sizes: ["S", "M", "L", "XL", "XXL"],
    style: ["Minimalist", "Classic"],
    occasion: ["Work", "Casual"],
    fit: ["Regular", "Relaxed"],
    badge: "TIMELESS",
    image: "photo-1603252110481-7ba873bf42ab",
    description: "A versatile wardrobe essential that works for smart and casual outfits."
  },
  {
    id: 3,
    name: "Everyday Tote Bag",
    category: "Bags",
    price: 22000,
    color: "Brown",
    sizes: ["One size"],
    style: ["Minimalist", "Casual"],
    occasion: ["Work", "Casual"],
    fit: [],
    badge: "EVERYDAY PICK",
    image: "photo-1544816155-12df9643f363",
    description: "A practical tote-inspired accessory for everyday essentials."
  },
  {
    id: 4,
    name: "Statement Gold Earrings",
    category: "Jewelry",
    price: 8500,
    color: "Gold",
    sizes: ["One size"],
    style: ["Elegant", "Bold"],
    occasion: ["Party", "Date night"],
    fit: [],
    badge: "DETAILS MATTER",
    image: "photo-1535632066927-ab7c9ab60908",
    description: "Statement earrings to add a polished finishing touch to your look."
  },
  {
    id: 5,
    name: "Streetwear Sneakers",
    category: "Shoes",
    price: 32000,
    color: "White",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    style: ["Streetwear", "Casual"],
    occasion: ["Casual", "Travel"],
    fit: [],
    badge: "TRENDING",
    image: "photo-1542291026-7eec264c27ff",
    description: "Sport-inspired sneakers for everyday streetwear and casual styling."
  },
  {
    id: 6,
    name: "Relaxed Denim Jeans",
    category: "Women",
    price: 24500,
    color: "Blue",
    sizes: ["28", "30", "32", "34", "36"],
    style: ["Casual", "Streetwear"],
    occasion: ["Casual", "Travel"],
    fit: ["Relaxed", "Oversized"],
    badge: "",
    image: "photo-1541099649105-f69ad21f3246",
    description: "Relaxed denim for easy everyday outfits and effortless layering."
  },
  {
    id: 7,
    name: "Structured Handbag",
    category: "Bags",
    price: 35000,
    color: "Black",
    sizes: ["One size"],
    style: ["Elegant", "Classic"],
    occasion: ["Work", "Party"],
    fit: [],
    badge: "EDITOR'S PICK",
    image: "photo-1584917865442-de89df76afd3",
    description: "A structured handbag to complement polished and occasion-ready outfits."
  },
  {
    id: 8,
    name: "Minimalist Wristwatch",
    category: "Accessories",
    price: 19500,
    color: "Gold",
    sizes: ["One size"],
    style: ["Minimalist", "Classic"],
    occasion: ["Work", "Casual"],
    fit: [],
    badge: "",
    image: "photo-1524805444758-089113d48a6d",
    description: "A minimalist watch-inspired accessory for everyday styling."
  },
  {
    id: 9,
    name: "Two-Piece Lounge Set",
    category: "Women",
    price: 27500,
    color: "Cream",
    sizes: ["S", "M", "L", "XL"],
    style: ["Minimalist", "Casual"],
    occasion: ["Casual", "Travel"],
    fit: ["Relaxed", "Oversized"],
    badge: "COMFY CHIC",
    image: "photo-1483985988355-763728e1935b",
    description: "A coordinated two-piece look for comfortable, put-together dressing."
  },
  {
    id: 10,
    name: "Classic Leather Belt",
    category: "Accessories",
    price: 9500,
    color: "Brown",
    sizes: ["S", "M", "L", "XL"],
    style: ["Classic", "Minimalist"],
    occasion: ["Work", "Casual"],
    fit: [],
    badge: "",
    image: "photo-1624222247344-550fb8b50c2f",
    description: "A timeless belt-inspired accessory to complete casual and formal outfits."
  },
  {
    id: 11,
    name: "Floral Summer Dress",
    category: "Women",
    price: 23000,
    color: "Pink",
    sizes: ["S", "M", "L", "XL"],
    style: ["Elegant", "Casual"],
    occasion: ["Party", "Date night", "Casual"],
    fit: ["Regular", "Relaxed"],
    badge: "NEW ARRIVAL",
    image: "photo-1515372039744-b8f02a3ae446",
    description: "A floral-inspired dress for brunch, daytime events and sunny outings."
  },
  {
    id: 12,
    name: "Everyday Graphic Tee",
    category: "Men",
    price: 12000,
    color: "White",
    sizes: ["S", "M", "L", "XL", "XXL"],
    style: ["Streetwear", "Casual"],
    occasion: ["Casual", "Travel"],
    fit: ["Regular", "Oversized"],
    badge: "",
    image: "photo-1521572163474-6864f9cf17ab",
    description: "A versatile T-shirt for jeans, sneakers and relaxed everyday looks."
  },
  {
    id: 13,
    name: "Chic Shoulder Bag",
    category: "Bags",
    price: 26000,
    color: "Black",
    sizes: ["One size"],
    style: ["Elegant", "Classic"],
    occasion: ["Party", "Date night", "Casual"],
    fit: [],
    badge: "",
    image: "photo-1566150905458-1bf1fc113f0d",
    description: "A shoulder bag-inspired accessory for day-to-night styling."
  },
  {
    id: 14,
    name: "Layered Necklace",
    category: "Jewelry",
    price: 7500,
    color: "Gold",
    sizes: ["One size"],
    style: ["Elegant", "Minimalist"],
    occasion: ["Party", "Date night"],
    fit: [],
    badge: "",
    image: "photo-1611652022419-a9419f74343d",
    description: "A delicate layered necklace to add detail to simple outfits."
  },
  {
    id: 15,
    name: "Everyday Slide Sandals",
    category: "Shoes",
    price: 14500,
    color: "Black",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    style: ["Casual", "Minimalist"],
    occasion: ["Casual", "Travel"],
    fit: [],
    badge: "",
    image: "photo-1603487742131-4160ec999306",
    description: "Easy-to-style slides for relaxed days and casual outfits."
  },
  {
    id: 16,
    name: "Tailored Blazer",
    category: "Men",
    price: 42000,
    color: "Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    style: ["Classic", "Elegant"],
    occasion: ["Work", "Party"],
    fit: ["Regular", "Relaxed"],
    badge: "SMART STYLE",
    image: "photo-1591047139829-d91aecb6caea",
    description: "A blazer-inspired layer for smart occasions and elevated outfits."
  },
  {
    id: 17,
    name: "Fashion Sunglasses",
    category: "Accessories",
    price: 11000,
    color: "Black",
    sizes: ["One size"],
    style: ["Streetwear", "Bold", "Classic"],
    occasion: ["Casual", "Travel"],
    fit: [],
    badge: "",
    image: "photo-1511499767150-a48a237f0083",
    description: "Bold sunglasses-inspired styling for an effortlessly cool finish."
  },
  {
    id: 18,
    name: "Soft Knit Cardigan",
    category: "Women",
    price: 21500,
    color: "Cream",
    sizes: ["S", "M", "L", "XL"],
    style: ["Minimalist", "Casual"],
    occasion: ["Work", "Casual", "Travel"],
    fit: ["Relaxed", "Oversized"],
    badge: "",
    image: "photo-1434389677669-e08b4cac3105",
    description: "A soft layering piece for understated and comfortable outfits."
  },
  {
    id: 19,
    name: "Classic Loafers",
    category: "Shoes",
    price: 29000,
    color: "Brown",
    sizes: ["39", "40", "41", "42", "43", "44"],
    style: ["Classic", "Elegant"],
    occasion: ["Work", "Party"],
    fit: [],
    badge: "",
    image: "photo-1531310197839-ccf54634509e",
    description: "Classic loafer-inspired footwear for polished everyday dressing."
  },
  {
    id: 20,
    name: "Compact Evening Clutch",
    category: "Bags",
    price: 18000,
    color: "Gold",
    sizes: ["One size"],
    style: ["Elegant", "Bold"],
    occasion: ["Party", "Date night"],
    fit: [],
    badge: "OCCASION EDIT",
    image: "photo-1590874103328-eac38a683ce7",
    description: "A compact clutch-inspired bag for celebrations and evening events."
  },
  {
    id: 21,
    name: "Bold Statement Ring",
    category: "Jewelry",
    price: 6000,
    color: "Gold",
    sizes: ["S", "M", "L"],
    style: ["Bold", "Elegant"],
    occasion: ["Party", "Date night"],
    fit: [],
    badge: "",
    image: "photo-1605100804763-247f67b3557e",
    description: "A statement ring to bring personality to your accessories collection."
  },
  {
    id: 22,
    name: "Oversized Hoodie",
    category: "Men",
    price: 24500,
    color: "Grey",
    sizes: ["S", "M", "L", "XL", "XXL"],
    style: ["Streetwear", "Casual"],
    occasion: ["Casual", "Travel"],
    fit: ["Oversized", "Relaxed"],
    badge: "STREET EDIT",
    image: "photo-1556821840-3a63f95609a7",
    description: "An oversized hoodie-inspired piece for relaxed streetwear looks."
  },
  {
    id: 23,
    name: "Silk-Inspired Scarf",
    category: "Accessories",
    price: 8500,
    color: "Pink",
    sizes: ["One size"],
    style: ["Elegant", "Classic", "Bold"],
    occasion: ["Work", "Party", "Casual"],
    fit: [],
    badge: "",
    image: "photo-1601924994987-69e26d50dc26",
    description: "A scarf-inspired accessory to add colour and texture to your outfit."
  },
  {
    id: 24,
    name: "Elegant Heeled Sandals",
    category: "Shoes",
    price: 27000,
    color: "Nude",
    sizes: ["36", "37", "38", "39", "40", "41"],
    style: ["Elegant", "Bold"],
    occasion: ["Party", "Date night"],
    fit: [],
    badge: "GOING OUT",
    image: "photo-1515347619252-d6b4d9c6c5a9",
    description: "Dressy heel-inspired footwear for celebrations and special outings."
  },
  {
    id: 25,
    name: "Everyday Backpack",
    category: "Bags",
    price: 23500,
    color: "Black",
    sizes: ["One size"],
    style: ["Streetwear", "Casual", "Minimalist"],
    occasion: ["Work", "Casual", "Travel"],
    fit: [],
    badge: "",
    image: "photo-1553062407-98eeb64c6a62",
    description: "A practical backpack-inspired bag for commuting and everyday essentials."
  }
];

/* ==========================================
   STATE
========================================== */

const state = {
  category: "All",
  search: "",
  sort: "featured",
  favorites: new Set(),
  cart: new Map(),
  quizAnswers: {},
  quizStep: 0,
  favoritesOnly: false,
  selectedProduct: null,
  selectedSize: ""
};

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];

const money = amount =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);

const imageURL = (photo, width = 700) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=80`;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

let toastTimer;

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

/* ==========================================
   PRODUCT CARDS AND SHOP FILTERS
========================================== */

function getFilteredProducts() {
  let list = products.filter(product => {
    const matchesCategory =
      state.category === "All" ||
      product.category === state.category;

    const searchText = [
      product.name,
      product.category,
      product.color,
      product.description,
      ...product.style
    ].join(" ").toLowerCase();

    const matchesSearch =
      searchText.includes(state.search.toLowerCase());

    const matchesFavorites =
      !state.favoritesOnly ||
      state.favorites.has(product.id);

    return matchesCategory && matchesSearch && matchesFavorites;
  });

  if (state.sort === "price-low") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sort === "price-high") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  return list;
}

function renderProducts(target = "#productGrid", list = getFilteredProducts()) {
  const grid = $(target);
  if (!grid) return;

  grid.innerHTML = list.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${imageURL(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x750/f2dce5/762746?text=T-CLOSET'">

        ${product.badge ? `
          <span class="product-badge">${escapeHTML(product.badge)}</span>
        ` : ""}

        <button
          class="favorite-btn ${state.favorites.has(product.id) ? "is-favorite" : ""}"
          data-action="favorite"
          data-id="${product.id}"
          aria-label="${state.favorites.has(product.id) ? "Remove from" : "Add to"} favorites"
          aria-pressed="${state.favorites.has(product.id)}">
          ${state.favorites.has(product.id) ? "♥" : "♡"}
        </button>

        <button
          class="quick-add"
          data-action="quick-add"
          data-id="${product.id}">
          Quick add +
        </button>
      </div>

      <div class="product-info">
        <p class="product-category">${escapeHTML(product.category)}</p>
        <button
          class="product-name"
          data-action="details"
          data-id="${product.id}"
          style="border:0;background:none;text-align:left;">
          ${escapeHTML(product.name)}
        </button>
        <p class="product-price">${money(product.price)}</p>
      </div>
    </article>
  `).join("");

  if (target === "#productGrid") {
    $("#resultsCount").textContent =
      `${list.length} ${list.length === 1 ? "piece" : "pieces"} to explore`;

    $("#emptyState").hidden = list.length !== 0;
    grid.hidden = list.length === 0;
  }
}

function updateShop() {
  renderProducts();
  $$(".filter-btn").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === state.category
    );
  });
}

$("#categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  state.category = button.dataset.category;
  state.favoritesOnly = false;
  $("#favoritesToggle").setAttribute("aria-pressed", "false");
  updateShop();
});

$("#sortSelect").addEventListener("change", event => {
  state.sort = event.target.value;
  updateShop();
});

$("#searchToggle").addEventListener("click", () => {
  const panel = $("#searchPanel");
  panel.hidden = !panel.hidden;

  if (!panel.hidden) {
    $("#searchInput").focus();
  }
});

function performSearch() {
  state.search = $("#searchInput").value.trim();
  state.favoritesOnly = false;
  updateShop();
  $("#shop").scrollIntoView({ behavior: "smooth" });
}

$("#searchSubmit").addEventListener("click", performSearch);

$("#searchInput").addEventListener("keydown", event => {
  if (event.key === "Enter") performSearch();
});

$("#searchInput").addEventListener("input", event => {
  state.search = event.target.value.trim();
  updateShop();
});

$("#resetFilters").addEventListener("click", () => {
  state.category = "All";
  state.search = "";
  state.sort = "featured";
  state.favoritesOnly = false;

  $("#searchInput").value = "";
  $("#sortSelect").value = "featured";

  updateShop();
});

/* Collection cards link into the appropriate category. */

$$(".collection-card").forEach(card => {
  card.addEventListener("click", () => {
    state.category = card.dataset.category || "All";
    state.favoritesOnly = false;
    updateShop();
  });
});

/* ==========================================
   FAVORITES
========================================== */

function updateFavoriteCount() {
  $("#favoriteCount").textContent = state.favorites.size;
}

$("#favoritesToggle").addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;

  if (state.favoritesOnly) {
    state.category = "All";
    state.search = "";
    $("#searchInput").value = "";
    $("#favoritesToggle").setAttribute("aria-pressed", "true");
    showToast("Showing your saved favourites ♥");
  } else {
    $("#favoritesToggle").setAttribute("aria-pressed", "false");
  }

  updateShop();
  $("#shop").scrollIntoView({ behavior: "smooth" });
});

/* ==========================================
   CART
========================================== */

function addToCart(productId, size = "") {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  const chosenSize = size || product.sizes[0] || "One size";
  const key = `${productId}:${chosenSize}`;

  if (state.cart.has(key)) {
    state.cart.get(key).quantity += 1;
  } else {
    state.cart.set(key, {
      productId,
      size: chosenSize,
      quantity: 1
    });
  }

  renderCart();
  showToast(`${product.name} added to your bag!`);
}

function cartQuantity() {
  return [...state.cart.values()].reduce(
    (total, item) => total + item.quantity, 0
  );
}

function cartSubtotal() {
  return [...state.cart.values()].reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function renderCart() {
  $("#cartCount").textContent = cartQuantity();
  $("#cartSubtotal").textContent = money(cartSubtotal());

  const items = [...state.cart.entries()];

  if (!items.length) {
    $("#cartItems").innerHTML = `
      <div class="cart-empty">
        <p style="font-size:35px;">♡</p>
        <p>Your bag is waiting for something fabulous.</p>
        <p>Explore the collection and find your next favourite.</p>
      </div>
    `;
    return;
  }

  $("#cartItems").innerHTML = items.map(([key, item]) => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return "";

    return `
      <div class="cart-item">
        <img
          src="${imageURL(product.image, 220)}"
          alt="${escapeHTML(product.name)}"
          onerror="this.onerror=null;this.src='https://placehold.co/220x280/f2dce5/762746?text=T-CLOSET'">

        <div>
          <h3>${escapeHTML(product.name)}</h3>
          <p>${money(product.price)}</p>
          <small>Size: ${escapeHTML(item.size)}</small>

          <div class="quantity-controls">
            <button data-action="decrease" data-key="${escapeHTML(key)}" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button data-action="increase" data-key="${escapeHTML(key)}" aria-label="Increase quantity">+</button>
          </div>
        </div>

        <button class="remove-item"
          data-action="remove"
          data-key="${escapeHTML(key)}">Remove</button>
      </div>
    `;
  }).join("");
}

function changeQuantity(key, change) {
  const item = state.cart.get(key);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    state.cart.delete(key);
  }

  renderCart();
}

function removeCartItem(key) {
  state.cart.delete(key);
  renderCart();
}

function openCart() {
  $("#cartOverlay").hidden = false;
  $("#cartDrawer").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCart() {
  $("#cartOverlay").hidden = true;
  $("#cartDrawer").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");

  if (!$$("#productModal, #quizModal").some(
    modal => !modal.hidden
  )) {
    document.body.classList.remove("modal-open");
  }
}

$("#cartToggle").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#cartOverlay").addEventListener("click", closeCart);
$("#continueShopping").addEventListener("click", closeCart);

$("#cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const key = button.dataset.key;

  if (action === "increase") changeQuantity(key, 1);
  if (action === "decrease") changeQuantity(key, -1);
  if (action === "remove") removeCartItem(key);
});

/* ==========================================
   PRODUCT DETAILS
========================================== */

function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  state.selectedProduct = product;
  state.selectedSize = product.sizes[0] || "One size";

  $("#productModalContent").innerHTML = `
    <div class="product-modal-content">
      <img
        src="${imageURL(product.image, 800)}"
        alt="${escapeHTML(product.name)}"
        onerror="this.onerror=null;this.src='https://placehold.co/600x750/f2dce5/762746?text=T-CLOSET'">

      <div class="product-modal-details">
        <p class="eyebrow">${escapeHTML(product.category)} / T-CLOSET EDIT</p>
        <h2 id="modalProductName">${escapeHTML(product.name)}</h2>
        <p class="modal-price">${money(product.price)}</p>
        <p>${escapeHTML(product.description)}</p>
        <p><strong>Colour:</strong> ${escapeHTML(product.color)}</p>

        <label class="field-label" for="productSize">Choose your size</label>
        <select class="field-select" id="productSize">
          ${product.sizes.map(size => `
            <option value="${escapeHTML(size)}">${escapeHTML(size)}</option>
          `).join("")}
        </select>

        <p style="font-size:10px;">
          Please confirm the actual size chart and availability with T-CLOSET.
        </p>

        <button class="btn btn-dark modal-add" id="modalAddToCart">
          Add to bag — ${money(product.price)}
        </button>
      </div>
    </div>
  `;

  $("#productModal").hidden = false;
  document.body.classList.add("modal-open");

  $("#modalAddToCart").addEventListener("click", () => {
    const size = $("#productSize").value;
    addToCart(product.id, size);
    closeModal("productModal");
    openCart();
  });
}

$("#productGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);

  if (button.dataset.action === "favorite") {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast("Removed from favourites");
    } else {
      state.favorites.add(id);
      showToast("Added to favourites ♥");
    }

    updateFavoriteCount();
    updateShop();
  }

  if (button.dataset.action === "quick-add") {
    const product = products.find(p => p.id === id);
    if (!product) return;

    if (product.sizes.length > 1) {
      openProductModal(id);
    } else {
      addToCart(id, product.sizes[0]);
    }
  }

  if (button.dataset.action === "details") {
    openProductModal(id);
  }
});

/* ==========================================
   MODAL HELPERS
========================================== */

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.hidden = true;

  if ($$("#productModal, #quizModal").every(m => m.hidden)) {
    document.body.classList.remove("modal-open");
  }
}

$$("[data-close-modal]").forEach(button => {
  button.addEventListener("click", () => {
    closeModal("productModal");
    closeModal("quizModal");
  });
});

$$(".modal-backdrop").forEach(backdrop => {
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) {
      closeModal(backdrop.id);
    }
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal("productModal");
    closeModal("quizModal");
    closeCart();
  }
});

/* ==========================================
   PERSONAL STYLE FINDER
========================================== */

const quizQuestions = [
  {
    key: "style",
    title: "Which style feels most like you?",
    subtitle: "Pick the aesthetic you naturally gravitate towards.",
    options: [
      "Minimalist",
      "Streetwear",
      "Elegant",
      "Casual",
      "Classic",
      "Bold"
    ]
  },
  {
    key: "occasion",
    title: "What are you dressing for?",
    subtitle: "We'll use this to narrow down your recommendations.",
    options: [
      "Casual",
      "Work",
      "Party",
      "Date night",
      "Travel"
    ]
  },
  {
    key: "fit",
    title: "What kind of fit do you prefer?",
    subtitle: "Choose a comfortable fit, not a body ideal.",
    options: [
      "Relaxed",
      "Regular",
      "Oversized",
      "No preference"
    ]
  },
  {
    key: "color",
    title: "What colours do you love?",
    subtitle: "Choose a colour family you'd enjoy wearing.",
    options: [
      "Black & white",
      "Neutrals",
      "Bright colours",
      "Pastels",
      "Jewel tones",
      "No preference"
    ]
  }
];

$("#openQuiz").addEventListener("click", () => {
  state.quizStep = 0;
  state.quizAnswers = {};
  renderQuiz();
  $("#quizModal").hidden = false;
  document.body.classList.add("modal-open");
});

function renderQuiz() {
  const question = quizQuestions[state.quizStep];

  $("#quizContent").innerHTML = `
    <div class="quiz-intro">
      <p class="eyebrow">T-CLOSET STYLE FINDER</p>
      <p style="font-size:10px;color:var(--muted);">
        STEP ${state.quizStep + 1} OF ${quizQuestions.length}
      </p>
      <h2 id="quizTitle">${question.title}</h2>
      <p>${question.subtitle}</p>

      <div class="quiz-question">
        <h3>Choose your preference</h3>

        <div class="quiz-options">
          ${question.options.map(option => `
            <button
              class="quiz-option ${state.quizAnswers[question.key] === option ? "selected" : ""}"
              data-quiz-option="${escapeHTML(option)}">
              ${escapeHTML(option)}
            </button>
          `).join("")}
        </div>
      </div>

      <div class="quiz-actions">
        ${state.quizStep > 0 ? `
          <button class="btn btn-light" id="quizBack">← Back</button>
        ` : ""}

        <button class="btn btn-dark" id="quizNext">
          ${state.quizStep === quizQuestions.length - 1
            ? "Find my style ↗"
            : "Next question →"}
        </button>
      </div>
    </div>
  `;

  $("#quizContent").addEventListener("click", handleQuizClick);
}

function handleQuizClick(event) {
  const optionButton = event.target.closest("[data-quiz-option]");

  if (optionButton) {
    const question = quizQuestions[state.quizStep];
    state.quizAnswers[question.key] = optionButton.dataset.quizOption;
    renderQuiz();
    return;
  }

  if (event.target.closest("#quizBack")) {
    state.quizStep--;
    renderQuiz();
    return;
  }

  if (event.target.closest("#quizNext")) {
    const question = quizQuestions[state.quizStep];

    if (!state.quizAnswers[question.key]) {
      showToast("Choose an option to continue.");
      return;
    }

    if (state.quizStep < quizQuestions.length - 1) {
      state.quizStep++;
      renderQuiz();
    } else {
      showQuizResults();
    }
  }
}

function getRecommendedProducts() {
  const answers = state.quizAnswers;

  let ranked = products.map(product => {
    let score = 0;

    if (
      answers.style &&
      product.style.includes(answers.style)
    ) {
      score += 4;
    }

    if (
      answers.occasion &&
      product.occasion.includes(answers.occasion)
    ) {
      score += 3;
    }

    if (
      answers.fit &&
      answers.fit !== "No preference" &&
      product.fit.includes(answers.fit)
    ) {
      score += 2;
    }

    const color = answers.color;

    if (color === "Black & white" &&
        ["Black", "White"].includes(product.color)) {
      score += 2;
    }

    if (color === "Neutrals" &&
        ["Cream", "Brown", "Nude", "Black", "White"].includes(product.color)) {
      score += 2;
    }

    if (color === "Bright colours" &&
        ["Pink", "Blue"].includes(product.color)) {
      score += 2;
    }

    if (color === "Pastels" &&
        ["Pink", "Cream"].includes(product.color)) {
      score += 2;
    }

    if (color === "Jewel tones" &&
        ["Burgundy", "Gold"].includes(product.color)) {
      score += 2;
    }

    return { product, score };
  });

  ranked.sort((a, b) => b.score - a.score);

  return ranked.slice(0, 6).map(item => item.product);
}

function showQuizResults() {
  const answers = state.quizAnswers;
  const recommendations = getRecommendedProducts();

  $("#quizContent").innerHTML = `
    <div class="quiz-result">
      <p class="eyebrow">YOUR PERSONAL STYLE EDIT</p>
      <h2 id="quizTitle">Your vibe, your rules. ✨</h2>

      <p>
        Your style preference is <strong>${escapeHTML(answers.style)}</strong>,
        for <strong>${escapeHTML(answers.occasion)}</strong> occasions,
        with a <strong>${escapeHTML(answers.fit)}</strong> fit preference.
      </p>

      <p style="margin-top:10px;">
        Here are some pieces selected using your answers.
        These are suggestions, not rules — wear what makes you feel good.
      </p>

      <div class="product-grid" id="quizRecommendations"></div>

      <div class="quiz-actions">
        <button class="btn btn-light" id="restartQuiz">Start again</button>
        <button class="btn btn-dark" id="finishQuiz">Explore the shop ↗</button>
      </div>
    </div>
  `;

  renderProducts("#quizRecommendations", recommendations);

  $("#restartQuiz").addEventListener("click", () => {
    state.quizStep = 0;
    state.quizAnswers = {};
    renderQuiz();
  });

  $("#finishQuiz").addEventListener("click", () => {
    closeModal("quizModal");
    state.category = "All";
    state.search = "";
    state.favoritesOnly = false;
    $("#searchInput").value = "";
    updateShop();
    $("#shop").scrollIntoView({ behavior: "smooth" });
  });
}

/* ==========================================
   MOBILE NAVIGATION
========================================== */

$("#menuToggle").addEventListener("click", () => {
  const nav = $("#navigation");
  const isOpen = nav.classList.toggle("open");

  $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  $("#menuToggle").textContent = isOpen ? "×" : "☰";
});

$$(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    $("#navigation").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $("#menuToggle").textContent = "☰";
  });
});

/* ==========================================
   NEWSLETTER DEMO
========================================== */

$("#newsletterForm").addEventListener("submit", event => {
  event.preventDefault();

  const email = $("#newsletterEmail").value.trim();

  if (!email) return;

  $("#newsletterMessage").textContent =
    "Thanks for your interest! Newsletter sign-up needs to be connected to a mailing service before launch.";

  $("#newsletterEmail").value = "";
});

/* ==========================================
   CHECKOUT DEMO
========================================== */

$("#checkoutButton").addEventListener("click", () => {
  if (state.cart.size === 0) {
    $("#checkoutMessage").textContent =
      "Your bag is empty. Add a piece before continuing.";
    return;
  }

  $("#checkoutMessage").textContent =
    "Your bag is ready! Connect a secure payment provider and order backend to enable checkout. No order or payment has been placed.";
});

/* ==========================================
   INITIALIZE
========================================== */

$("#currentYear").textContent = new Date().getFullYear();

updateShop();
renderCart();
updateFavoriteCount();



/* ==========================================
   T-CLOSET AUTH SCREEN NAVIGATION
   Authentication provider integration is
   required before registration/login is live.
========================================== */

const authScreen = document.getElementById("authScreen");
const mainContent = document.querySelector("main");
const footer = document.querySelector(".footer");
const accountToggle = document.getElementById("accountToggle");

let currentAuthView = "login";
let isGuest = true;

function showAuthView(view) {
  currentAuthView = view;

  const views = {
    login: document.getElementById("loginForm"),
    register: document.getElementById("registerForm"),
    verify: document.getElementById("verifyPanel"),
    account: document.getElementById("accountPanel")
  };

  Object.entries(views).forEach(([key, element]) => {
    element.hidden = key !== view;
  });

  if (view === "login") {
    document.getElementById("loginMessage").textContent = "";
  }

  if (view === "register") {
    document.getElementById("registerMessage").textContent = "";
  }
}

function openAuthScreen(view = "login") {
  authScreen.hidden = false;
  mainContent.hidden = true;
  footer.hidden = true;

  showAuthView(view);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeAuthScreen() {
  authScreen.hidden = true;
  mainContent.hidden = false;
  footer.hidden = false;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

accountToggle.addEventListener("click", () => {
  openAuthScreen("login");
});

document.getElementById("authBack").addEventListener("click", () => {
  closeAuthScreen();
});

document.querySelectorAll("[data-auth-view]").forEach(button => {
  button.addEventListener("click", () => {
    showAuthView(button.dataset.authView);
  });
});

document.getElementById("guestEntry").addEventListener("click", () => {
  isGuest = true;

  accountToggle.innerHTML = '♙ <span>Guest</span>';

  closeAuthScreen();

  showToast("Welcome! Enjoy exploring T-CLOSET.");
});

/*
  These forms are intentionally not connected to a fake
  login system. Connect them to Supabase Auth before
  accepting registration or login credentials.
*/

document.getElementById("registerForm").addEventListener("submit", event => {
  event.preventDefault();

  document.getElementById("registerMessage").textContent =
    "Account registration is not connected yet. Connect the authentication service to enable secure registration and email verification.";
});

document.getElementById("loginForm").addEventListener("submit", event => {
  event.preventDefault();

  document.getElementById("loginMessage").textContent =
    "Login is not connected yet. Connect the authentication service to enable secure username and password login.";
});

document.getElementById("resendVerification").addEventListener("click", () => {
  document.getElementById("verifyMessage").textContent =
    "Email verification must be connected to the authentication service before a verification email can be sent.";
});

document.getElementById("enterShop").addEventListener("click", () => {
  closeAuthScreen();
});

document.getElementById("logoutButton").addEventListener("click", () => {
  isGuest = true;
  accountToggle.innerHTML = '♙ <span>Login</span>';

  closeAuthScreen();
  showAuthView("login");
  showToast("You have returned to guest shopping.");
});


/* ==========================================
   T-CLOSET CHECKOUT FLOW
   Front-end demo only — no real orders/payments
========================================== */

(() => {
  const checkoutButton = document.getElementById("checkoutButton");
  const checkoutModal = document.getElementById("checkoutModal");
  const closeCheckout = document.getElementById("closeCheckout");
  const checkoutForm = document.getElementById("checkoutForm");
  const checkoutItems = document.getElementById("checkoutItems");
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutError = document.getElementById("checkoutError");
  const checkoutSuccess = document.getElementById("checkoutSuccess");
  const checkoutSuccessMessage =
    document.getElementById("checkoutSuccessMessage");
  const finishCheckout = document.getElementById("finishCheckout");

  if (
    !checkoutButton ||
    !checkoutModal ||
    !checkoutForm ||
    !checkoutItems ||
    !checkoutSubtotal
  ) {
    console.error(
      "T-CLOSET checkout: Check that the checkout HTML IDs are present."
    );
    return;
  }

  function getCartTotal() {
    // Supports either subtotal ID used in the existing versions.
    const subtotalElement =
      document.getElementById("cartSubtotal") ||
      document.getElementById("subtotal");

    if (!subtotalElement) return 0;

    // Read the displayed amount, e.g. ₦25,000.
    const amount = subtotalElement.textContent.replace(/[^\d.]/g, "");
    return Number(amount) || 0;
  }

  function getCartItemsForCheckout() {
    const cartElement = document.getElementById("cartItems");

    if (!cartElement) return [];

    // Read the existing cart display without changing the cart.
    return Array.from(cartElement.children)
      .filter((item) => item.textContent.trim())
      .map((item) => item.textContent.trim());
  }

  function openCheckout() {
    const cartLines = getCartItemsForCheckout();
    const total = getCartTotal();

    if (!cartLines.length || total <= 0) {
      alert("Your shopping bag is empty. Add an item before checking out.");
      return;
    }

    checkoutItems.innerHTML = "";

    cartLines.forEach((line) => {
      const item = document.createElement("div");
      item.className = "checkout-item";
      item.textContent = line;
      checkoutItems.appendChild(item);
    });

    checkoutSubtotal.textContent = `₦${total.toLocaleString("en-NG")}`;

    checkoutForm.hidden = false;
    checkoutSuccess.hidden = true;
    checkoutError.textContent = "";

    checkoutModal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeCheckoutModal() {
    checkoutModal.hidden = true;
    document.body.style.overflow = "";
  }

  checkoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    openCheckout();
  });

  closeCheckout?.addEventListener("click", closeCheckoutModal);

  checkoutModal.addEventListener("click", (event) => {
    if (event.target === checkoutModal) {
      closeCheckoutModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !checkoutModal.hidden) {
      closeCheckoutModal();
    }
  });

  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    checkoutError.textContent = "";

    if (!checkoutForm.reportValidity()) return;

    const formData = new FormData(checkoutForm);
    const paymentMethod = formData.get("payment");

    if (paymentMethod === "online") {
      checkoutError.textContent =
        "Online payment is not connected yet. Please choose another option for this demo.";
      return;
    }

    const customerName = String(formData.get("name") || "").trim();

    // Demo confirmation only. No customer data is saved or transmitted.
    checkoutForm.hidden = true;
    checkoutSuccess.hidden = false;

    checkoutSuccessMessage.textContent =
      `Thank you, ${customerName}! Your checkout demo is complete. ` +
      "No real order has been placed and no payment has been taken. " +
      "Connect an order backend before accepting real customer orders.";
  });

  finishCheckout?.addEventListener("click", () => {
    closeCheckoutModal();
  });
})();
