let btnOn = document.querySelector('.btnOn');
btnOn.onclick = function(){
    alert('打打字嘿嘿嘿');
}
btnOn.onclick = function(){
    alert('打打字嘿嘿嘿part2');
}

let btnAdd =document.querySelector('.btnAdd');
btnAdd.addEventListener('click',function(e){
    alert('點擊一');
},false)
btnAdd.addEventListener('click',function(e){
    alert('點擊四');
},false)


let boxbtn =document.querySelector('.box');
boxbtn.addEventListener('click',function(){
    alert('點點點');
},false)

let boxbtn2 =document.querySelector('.box2');
boxbtn2.addEventListener('click',function(e){
    e.stopPropagation();
    alert('花市點點');
},false)

let southLink = document.querySelector('.link');
southLink.addEventListener('click',function(e){
    //取消預設事件
    e.preventDefault();
},false)