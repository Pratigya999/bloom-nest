let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showCart(){

  let box = document.getElementById("cartItems");
  let total = 0;
  box.innerHTML = "";

  cart.forEach((item,index)=>{

    total += parseInt(item.price.replace("$",""));

    box.innerHTML += `
      <div style="display:flex;align-items:center;gap:20px;margin:20px;padding:15px;background:white;border-radius:15px">

        <img src="${item.img}" width="80">

        <div style="flex:1">
          <h3>${item.name}</h3>
          <p>${item.price}</p>
        </div>

        <button onclick="removeItem(${index})"
        style="background:red;color:white;border:none;padding:8px 15px;border-radius:10px">
        Remove
        </button>

      </div>
    `;
  });

  document.getElementById("cartTotal").innerHTML =
   "Total: $" + total;
}

function removeItem(i){
  cart.splice(i,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  showCart();
  if(cart.length === 0){
  document.getElementById("emptyMsg").style.display = "block";
}else{
  document.getElementById("emptyMsg").style.display = "none";
}
}
