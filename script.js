const products = [
  //  Bedding
  { id: 1, name: "duvetcovers", price: 2000, image: "images/duvetcovers.jpg" },
  { id: 2, name: "bedsheets", price: 1700, image: "images/bedsheets.jpg" },
  { id: 3, name: "pillowcases", price: 600, image: "images/pillowcases.jpg" },
  { id: 4, name: "throwblankets", price: 1800, image: "images/throwblankets.jpg" },
  { id: 5, name: "decorativecushions", price: 1200, image: "images/decorativecushions.jpg" },
  { id: 6, name: "europillows", price: 1500, image: "images/europillows.jpg" },
  { id: 7, name: "mattress_topper", price: 3500, image: "images/mattress_topper.jpg" },
  { id: 8, name: "bedskirts", price: 900, image: "images/bedskirts.jpg" },
  { id: 9, name: "quilts", price: 2800, image: "images/quilts.jpg" },
  { id: 10, name: "Weighted_blankets", price: 4500, image: "images/Weighted_blankets.jpg" },

  //  Furniture & Storage
  { id: 11, name: "bed_frames", price: 15000, image: "images/bed_frames.jpg" },
  { id: 12, name: "night_stand", price: 3500, image: "images/night_stand.jpg" },
  { id: 13, name: "dresser", price: 8000, image: "images/dresser.jpg" },
  { id: 14, name: "vanity_tables", price: 6500, image: "images/vanity_tables.jpg" },
  { id: 15, name: "ottoman_benches", price: 4200, image: "images/ottoman_benches.jpg" },
  { id: 16, name: "floating_shelves", price: 1800, image: "images/floating_shelves.jpg" },
  { id: 17, name: "underbed_storage_boxes", price: 1200, image: "images/underbed_storage_boxes.jpg" },
  { id: 18, name: "wooven_baskets", price: 900, image: "images/wooven_baskets.jpg" },
  { id: 19, name: "shoeracks", price: 3000, image: "images/shoeracks.jpg" },
  { id: 20, name: "laundryhampers", price: 1500, image: "images/laundryhampers.jpg" },

  //  Lighting
  { id: 21, name: "bedside_lamp", price: 2000, image: "images/bedside_lamp.jpg" },
  { id: 22, name: "floorlamps", price: 3200, image: "images/floorlamps.jpg" },
  { id: 23, name: "pendantlights", price: 4800, image: "images/pendantlights.jpg" },
  { id: 24, name: "fairylights", price: 700, image: "images/fairylights.jpg" },
  { id: 25, name: "led_strip_lights", price: 1200, image: "images/led_strip_lights.jpg" },

  //  Wall Decor
  { id: 26, name: "canvas_art_prints", price: 2500, image: "images/canvas_art_prints.jpg" },
  { id: 27, name: "wallmirrors", price: 3500, image: "images/wallmirrors.jpg" },
  { id: 28, name: "wallclocks", price: 1500, image: "images/wallclocks.jpg" },
  { id: 29, name: "tapestries", price: 2800, image: "images/tapestries.jpg" },
  { id: 30, name: "wallstickers", price: 900, image: "images/wallstickers.jpg" },

  //  Window Treatments
  { id: 31, name: "blackout_curtains", price: 3500, image: "images/blackout_curtains.jpg" },
  { id: 32, name: "sheercurtains", price: 2500, image: "images/sheercurtains.jpg" },
  { id: 33, name: "curtain_rods", price: 1800, image: "images/curtain_rods.jpg" },
  { id: 34, name: "tiebacks", price: 600, image: "images/tiebacks.jpg" },
  { id: 35, name: "roman_blinds", price: 4000, image: "images/roman_blinds.jpg" },

  //  Accents & Accessories
  { id: 36, name: "artificialplants", price: 1200, image: "images/artificialplants.jpg" },
  { id: 37, name: "vases", price: 900, image: "images/vases.jpg" },
  { id: 38, name: "candle_holders", price: 750, image: "images/candle_holders.jpg" },
  { id: 39, name: "essential_oil_diffuser", price: 2200, image: "images/essential_oil_diffuser.jpg" },
  { id: 40, name: "beds_trays", price: 1800, image: "images/bed_trays.jpg" },

  // Wellness & Mood Enhancers
  { id: 41, name: "himalayan_salt_lamps", price: 2500, image: "images/himalayan_salt_lamps.jpg" },
  { id: 42, name: "sound_machines", price: 4800, image: "images/sound_machines.jpg" },
  { id: 43, name: "scented_candles", price: 1000, image: "images/scented_candles.jpg" },
  { id: 44, name: "sleep_masks", price: 700, image: "images/sleep_masks.jpg" },
  { id: 45, name: "aromatherapy_kits", price: 3200, image: "images/aromatherapy_kits.jpg" },

  //  Kids & Teens Decor
  { id: 46, name: "glowinthedark_walltickers", price: 800, image: "images/glowinthedark_wallstickers.jpg" },
  { id: 47, name: "cartoonthemed_bedding", price: 2500, image: "images/cartoonthemed_bedding.jpg" },
  { id: 48, name: "toyorganisers", price: 1800, image: "images/toyorganisers.jpg" },
  { id: 49, name: "studydesks", price: 4500, image: "images/studydesks.jpg" },
  { id: 50, name: "beanbag_chairs", price: 3200, image: "images/beanbag_chairs.jpg" }
];



function displayProducts() {
  const container = document.getElementById('product-list');
  container.innerHTML = products.map(p => `
    <div class="product">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>KSh ${p.price}</p>
      <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById('checkout-btn').style.display = "none";
    return;
  }

  container.innerHTML = "<ul>" + cart.map(item =>
    `<li>${item.name} x ${item.qty} - KSh ${item.price * item.qty}</li>`
  ).join('') + "</ul>";

  document.getElementById('cart-total').innerText = `Total: KSh ${total}`;
  
  document.getElementById('checkout-btn').onclick = function() {
    const orderId = "ORD" + Math.floor(Math.random() * 90000 + 10000);
    const order = {
      id: orderId,
      items: cart,
      total: total,
      status: "Order Confirmed",
      date: new Date().toLocaleString()
    };
    localStorage.setItem('order', JSON.stringify(order));
    localStorage.removeItem('cart');
    document.getElementById('order-message').innerText =
      `Order placed successfully! Your Order ID is ${orderId}`;
  };
}

function trackOrder() {
  const form = document.getElementById('track-form');
  const resultDiv = document.getElementById('track-result');

  form.onsubmit = function(e) {
    e.preventDefault();
    const enteredId = document.getElementById('order-id').value.trim();
    const order = JSON.parse(localStorage.getItem('order'));

    if (order && order.id === enteredId) {
      resultDiv.innerHTML = `
        <h3>Order ${order.id}</h3>
        <p>Status: ${order.status}</p>
        <p>Total: KSh ${order.total}</p>
        <p>Date: ${order.date}</p>
      `;
    } else {
      resultDiv.innerHTML = `<p>No order found with ID ${enteredId}</p>`;
    }
  };
}





