const flowers = {

baby:[
{name:"Baby Bloom",img:"images/baby.webp",price:15,color:"Pink",size:"Small",qty:"6 stems",benefits:"Perfect newborn gift"},
{name:"Soft Baby Roses",img:"images/baby.webp",price:18,color:"Peach",size:"Small",qty:"8 stems",benefits:"Soft pastel roses"}
],

anniversary:[
{name:"Red Rose Bouquet",img:"images/anniversary.webp",price:40,color:"Red",size:"Large",qty:"20",benefits:"Romantic classic"},
{name:"Pink Roses Box",img:"images/anniversary.webp",price:45,color:"Pink",size:"Medium",qty:"18",benefits:"Love expression"},
{name:"Mixed Basket",img:"images/anniversary.webp",price:50,color:"Mixed",size:"Large",qty:"25",benefits:"Premium combo"}
],

birthday:[
{name:"Birthday Lilies",img:"images/birthday.webp",price:35,color:"Yellow",size:"Medium",qty:"15",benefits:"Bright happiness"},
{name:"Party Roses",img:"images/birthday.webp",price:38,color:"Mixed",size:"Medium",qty:"18",benefits:"Celebration flowers"}
],

roses:[
{name:"Classic Red Roses",img:"images/roses.webp",price:30,color:"Red",size:"Medium",qty:"15",benefits:"Pure romance"},
{name:"White Roses",img:"images/roses.webp",price:32,color:"White",size:"Medium",qty:"15",benefits:"Peace flowers"}
],

wedding:[
{name:"Wedding White Combo",img:"images/wedding.webp",price:60,color:"White",size:"Large",qty:"30",benefits:"Wedding elegance"},
{name:"Bride Pink Set",img:"images/wedding.webp",price:65,color:"Pink",size:"Large",qty:"28",benefits:"Bride special"}
]

};

let currentCategory="baby";
let index=0;

function loadFlowers(cat,btn){
currentCategory=cat;
index=0;
show();

document.querySelectorAll(".menu button").forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
}

function show(){
let f=flowers[currentCategory][index];

flowerImg.src=f.img;
name.innerText=f.name;
benefits.innerText=f.benefits;
color.innerText=f.color;
size.innerText=f.size;
qty.innerText=f.qty;
price.innerText="$"+f.price;
}

const categories = ["baby","anniversary","birthday","roses","wedding"];

function next(){

index++;

if(index >= flowers[currentCategory].length){

let catIndex = categories.indexOf(currentCategory);
catIndex = (catIndex + 1) % categories.length;

currentCategory = categories[catIndex];
index = 0;

document.querySelectorAll(".menu button").forEach(b=>b.classList.remove("active"));
document.querySelector(`[data-cat="${currentCategory}"]`).classList.add("active");
}

show();
}

function prev(){

index--;

if(index < 0){

let catIndex = categories.indexOf(currentCategory);
catIndex = (catIndex - 1 + categories.length) % categories.length;

currentCategory = categories[catIndex];
index = flowers[currentCategory].length-1;

document.querySelectorAll(".menu button").forEach(b=>b.classList.remove("active"));
document.querySelector(`[data-cat="${currentCategory}"]`).classList.add("active");
}

show();
}

function addToCart(){
let f = flowers[currentCategory][index];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(f);

localStorage.setItem("cart",JSON.stringify(cart));

document.getElementById("cartCount").innerText=cart.length;

document.getElementById("toast").classList.add("show");
setTimeout(()=>document.getElementById("toast").classList.remove("show"),2000);
}

window.onload=()=>{
document.querySelector(".menu button").classList.add("active");
show();
};

