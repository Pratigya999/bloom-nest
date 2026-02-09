let cart = [];
let total = 0;

const flowers = {

baby:[
{name:"Baby Pink Roses",img:"baby.webp",price:25,color:"Pink",size:"Small",qty:"12",benefits:"Perfect newborn gift"},
{name:"Soft Tulips",img:"baby.webp",price:30,color:"White",size:"Medium",qty:"10",benefits:"Gentle baby blooms"}
],

anniversary:[
{name:"Red Rose Bouquet",img:"anniversary.webp",price:40,color:"Red",size:"Large",qty:"20",benefits:"Romantic classic"},
{name:"Pink Roses Box",img:"anniversary.webp",price:45,color:"Pink",size:"Medium",qty:"18",benefits:"Love expression"},
{name:"Mixed Basket",img:"anniversary.webp",price:50,color:"Mixed",size:"Large",qty:"25",benefits:"Premium combo"}
],

birthday:[
{name:"Birthday Lilies",img:"birthday.webp",price:35,color:"Yellow",size:"Medium",qty:"15",benefits:"Bright happiness"},
{name:"Party Roses",img:"birthday.webp",price:38,color:"Mixed",size:"Medium",qty:"18",benefits:"Celebration flowers"}
],

roses:[
{name:"Classic Red Roses",img:"roses.webp",price:30,color:"Red",size:"Medium",qty:"15",benefits:"Pure romance"},
{name:"White Roses",img:"roses.webp",price:32,color:"White",size:"Medium",qty:"15",benefits:"Peace flowers"}
],

wedding:[
{name:"Wedding White Combo",img:"wedding.webp",price:60,color:"White",size:"Large",qty:"30",benefits:"Wedding elegance"},
{name:"Bride Pink Set",img:"wedding.webp",price:65,color:"Pink",size:"Large",qty:"28",benefits:"Bride special"}
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

function next(){
index=(index+1)%flowers[currentCategory].length;
show();
}

function prev(){
index=(index-1+flowers[currentCategory].length)%flowers[currentCategory].length;
show();
}

function addToCart(){
let f=flowers[currentCategory][index];
cart.push(f);
total+=f.price;
cartCount.innerText=cart.length;
document.getElementById("total").innerText=total;
}

show();

