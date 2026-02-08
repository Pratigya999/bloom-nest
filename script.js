// Flower data
const categories = ["baby","anniversary","birthday","roses","wedding"];
const flowers = {
  baby: [
    {
      name: "Baby Bloom",
      benefits: "Gentle and fresh, perfect for new beginnings.",
      color: "Pink",
      size: "Small",
      qty: "6 stems",
      price: "$15",
      img: "images/baby.webp"
    }
  ],

  anniversary: [
    {
      name: "Anniversary Special",
      benefits: "Celebrate love with elegance.",
      color: "Red & White",
      size: "Medium",
      qty: "12 stems",
      price: "$30",
      img: "images/anniversary.webp"
    }
  ],

  birthday: [
    {
      name: "Birthday Bouquet",
      benefits: "Bright and cheerful for celebrations.",
      color: "Mixed",
      size: "Large",
      qty: "18 stems",
      price: "$40",
      img: "images/birthday.webp"
    }
  ],

  roses: [
    {
      name: "Classic Roses",
      benefits: "Symbol of love and passion.",
      color: "Red",
      size: "Large",
      qty: "24 stems",
      price: "$50",
      img: "images/roses.webp"
    }
  ],

  wedding: [
    {
      name: "Wedding Elegance",
      benefits: "Perfect for the big day.",
      color: "White",
      size: "Extra Large",
      qty: "30 stems",
      price: "$70",
      img: "images/wedding.webp"
    }
  ]
};

let currentCategory = null;
let currentIndex = 0;

// Load flowers by category
function loadFlowers(category, btn) {

  if(btn){
    document.querySelectorAll(".menu button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  currentCategory = category;
  currentIndex = 0;
  showFlower();
}
// Show current flower
function showFlower() {
    document.querySelector(".card").classList.remove("fade");
  if (!currentCategory) return;

  const flower = flowers[currentCategory][currentIndex];

  document.getElementById("flowerImg").src = flower.img;
  document.getElementById("name").textContent = flower.name;
  document.getElementById("benefits").textContent = flower.benefits;
  document.getElementById("color").textContent = flower.color;
  document.getElementById("size").textContent = flower.size;
  document.getElementById("qty").textContent = flower.qty;
  document.getElementById("price").textContent = flower.price;
  setTimeout(() => {
  document.querySelector(".card").classList.add("fade");
}, 10);
}

// Next / Previous
function next(){
  let i = categories.indexOf(currentCategory);
  i = (i + 1) % categories.length;
  currentCategory = categories[i];
  currentIndex = 0;
  showFlower();
}

function prev(){
  let i = categories.indexOf(currentCategory);
  i = (i - 1 + categories.length) % categories.length;
  currentCategory = categories[i];
  currentIndex = 0;
  showFlower();
}
// CART INIT
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = cart.reduce((sum, item) => sum + parseInt(item.price.replace("$","")), 0);

updateCartCount();

/* ---------------- CART SYSTEM ---------------- */

function addToCart(){
  const flower = flowers[currentCategory][currentIndex];
  cart.push(flower);

  localStorage.setItem("cart", JSON.stringify(cart));

  total += parseInt(flower.price.replace("$",""));
  document.getElementById("total").textContent = total;

  updateCartCount();
  showToast();
}

function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (el) el.textContent = cart.length;
}

function showToast(){
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(()=>{
    toast.classList.remove("show");
  },2000);
}

// REMOVE ALL ITEMS (optional clear cart)
function clearCart(){
  cart = [];
  total = 0;
  localStorage.removeItem("cart");
  updateCartCount();
}
loadFlowers("baby");
function checkout(){
  alert("Order placed successfully 🌸");
  localStorage.removeItem("cart");
  window.location.href = "thankyou.html";
}
let startX = 0;

const card = document.querySelector(".card");

card.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

card.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if(startX - endX > 50){
    next();   // swipe LEFT → next flower
  }

  if(endX - startX > 50){
    prev();   // swipe RIGHT → previous flower
  }
});
function zoomImage(img){
  let overlay = document.createElement("div");
  overlay.className="zoom-overlay";

  let zoomed = document.createElement("img");
  zoomed.src = img.src;

  overlay.appendChild(zoomed);
  document.body.appendChild(overlay);

  overlay.onclick = ()=> overlay.remove();
}
function openZoom(){
  let src = document.getElementById("flowerImg").src;

  let div = document.createElement("div");
  div.className = "zoomBox";

  div.innerHTML = `<img src="${src}">`;

  document.body.appendChild(div);

  div.onclick = function(){
    div.remove();
  }
}