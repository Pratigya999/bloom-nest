const flowers = {

baby: [
  {
    name:"Baby Bloom",
    img:"images/baby.webp",
    price:15,
    color:"Pink",
    size:"Small",
    qty:"6 stems",
    benefits:"Gentle and fresh"
  },
  {
    name:"Soft Baby Roses",
    img:"images/baby.webp",
    price:18,
    color:"Peach",
    size:"Small",
    qty:"8 stems",
    benefits:"Soft pastel roses"
  }
],

anniversary: [
  {
    name:"Red Rose Bouquet",
    img:"images/anniversary.webp",
    price:40,
    color:"Red",
    size:"Large",
    qty:"20 stems",
    benefits:"Romantic classic"
  },
  {
    name:"Pink Roses Box",
    img:"images/anniversary.webp",
    price:45,
    color:"Pink",
    size:"Medium",
    qty:"18 stems",
    benefits:"Love expression"
  }
],

birthday: [
  {
    name:"Birthday Lilies",
    img:"images/birthday.webp",
    price:35,
    color:"Yellow",
    size:"Medium",
    qty:"15 stems",
    benefits:"Bright happiness"
  },
  {
    name:"Party Roses",
    img:"images/birthday.webp",
    price:38,
    color:"Mixed",
    size:"Medium",
    qty:"18 stems",
    benefits:"Celebration flowers"
  }
],

roses: [
  {
    name:"Classic Red Roses",
    img:"images/roses.webp",
    price:30,
    color:"Red",
    size:"Medium",
    qty:"15 stems",
    benefits:"Pure romance"
  },
  {
    name:"White Roses",
    img:"images/roses.webp",
    price:32,
    color:"White",
    size:"Medium",
    qty:"15 stems",
    benefits:"Peace flowers"
  }
],

wedding: [
  {
    name:"Wedding White Combo",
    img:"images/wedding.webp",
    price:60,
    color:"White",
    size:"Large",
    qty:"30 stems",
    benefits:"Wedding elegance"
  },
  {
    name:"Bride Pink Set",
    img:"images/wedding.webp",
    price:65,
    color:"Pink",
    size:"Large",
    qty:"28 stems",
    benefits:"Bride special"
  }
]

};

let currentCategory = "baby";
let index = 0;

/* LOAD CATEGORY */
function loadFlowers(cat, btn){
  currentCategory = cat;
  index = 0;

  document.querySelectorAll(".menu button")
    .forEach(b=>b.classList.remove("active"));

  if(btn) btn.classList.add("active");

  show();
}

/* SHOW FLOWER */
function show(){
  const f = flowers[currentCategory][index];

  document.getElementById("flowerImg").src = f.img;
  document.getElementById("name").innerText = f.name;
  document.getElementById("benefits").innerText = f.benefits;
  document.getElementById("color").innerText = f.color;
  document.getElementById("size").innerText = f.size;
  document.getElementById("qty").innerText = f.qty;
  document.getElementById("price").innerText = "$" + f.price;
}

/* NEXT */
function next(){
  index++;

  if(index >= flowers[currentCategory].length){
    index = 0;
  }

  show();
}

/* PREVIOUS */
function prev(){
  index--;

  if(index < 0){
    index = flowers[currentCategory].length - 1;
  }

  show();
}

/* AUTO LOAD BABY */
window.onload = ()=>{
  loadFlowers("baby");
};
