
    function display(){
for(let i=0;i<=5;i++){

setTimeout(function(){
var cards=document.getElementsByClassName("cards");
        cards[i].innerHTML=`<h1>Shirt</h1><div id="items_in"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgglZC-3XvM24OHKvpGmJpOBPWxBrSiuYa4ub4AX_NKZNDxQoN9p-RN9WaN3PAWxcB9g&usqp=CAU" alt=""> <button style="display:block">Buy Now</button><div>`
console.log(i);

    }
,i*2000)
    }

}

