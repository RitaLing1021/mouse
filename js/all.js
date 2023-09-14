let mouseFamily = {
  mouseName:['Lv.0死老鼠','Lv.1國王','Lv.2皇后','Lv.3城堡','Lv.4主教','Lv.5騎士','Lv.6八兵','Lv.7砲灰'],
  author:['宜玲','小薰'],
  mouseCash:[10,30,40,50,60,70,80,90,100],
  myCash:37000,
  todayWork: function(){
    console.log( mouseFamily.author[0] + '今天有上班喔！');
    console.log( mouseFamily.author[1] + '今天有上班喔！');
  },
  mouseTotal: function(){
    let cash =  mouseFamily.myCash - mouseFamily.mouseCash[0];
    console.log( cash + '元');
  }
};
mouseFamily.todayWork();
mouseFamily.mouseTotal();


mouseFamilyTotal = mouseFamily.mouseName.length;

document.getElementById('mouseNum').textContent = mouseFamilyTotal;
document.getElementById('lv0').textContent = mouseFamily.mouseName[0];
document.getElementById('lv1').textContent = mouseFamily.mouseName[1];
document.getElementById('lv2').textContent = mouseFamily.mouseName[2];
document.getElementById('lv3').textContent = mouseFamily.mouseName[3];
document.getElementById('lv4').textContent = mouseFamily.mouseName[4];
document.getElementById('lv5').textContent = mouseFamily.mouseName[5];
document.getElementById('lv6').textContent = mouseFamily.mouseName[6];
document.getElementById('lv7').textContent = mouseFamily.mouseName[7];

let house = [
  { family:'立言'
},
  { family:'宜玲'
}
]

console.log(house[1].family);

$(document).ready(function() {

    $('.top a').click(function(event) {
     event.preventDefault();
     $('html,body').animate({
       scrollTop: 0
     }, 1000);
    });
   
   });

let guestAge = 24;
    guestGender = true;
    guestClothes = true;

let past = guestAge >= 18 && guestGender == true && guestClothes == true ;

console.log(past);

let titleH1 = document.querySelector('.title a');
titleH1.setAttribute('href','http://google.com');

let titleH1id = document.querySelector('.title');
let titleH1text = "<h1 class='titleH1'>族譜非官方文件</h1>"
titleH1id.innerHTML = titleH1text;

let titleLi = document.querySelector('.list');
let link = 'http://www.yahoo.com.tw';
let titleslogan = '老鼠老虎傻傻分不清楚';
titleLi.innerHTML ='<li><a href="'+link+'">'+titleslogan+'</a></li>';
