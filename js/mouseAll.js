let mouseSystem = [
    {
        mouseName:'Lv.0死老鼠',
        mouseVariety:'已滅絕',
        number:0,

    },
    {
        mouseName:'Lv.1國王',
        mouseVariety:'胡蒂亞鼠(世界上數量最少的鼠)',
        number:3,
    },
    {
        mouseName:'Lv.2皇后',
        mouseVariety:'食蛇鼠(最凶猛齧齒類動物)',
        number:5,
    },
    {
        mouseName:'Lv.3城堡',
        mouseVariety:'黑鼠(啊我就家鼠)',
        number:8,
    },
    {
        mouseName:'Lv.4主教',
        mouseVariety:'象鼩(速度比獵豹快三倍)',
        number:4,
    },
    {
        mouseName:'Lv.5騎士',
        mouseVariety:'艾力根鼠(又名紳士鼠)',
        number:5,
    },
    {
        mouseName:'Lv.6八兵',
        mouseVariety:'黃胸鼠、水家鼠、巢鼠、田鼠、沙鼠、倉鼠、麝鼠、鼢鼠...等等等',
        number:10,
    },
    {
        mouseName:'Lv.7砲灰',
        mouseVariety:'褐家鼠(名褐鼠、大鼠、挪威鼠、大家鼠、白尾吊、耗子、糞鼠、溝鼠)',
        number:20,
    }
];

let mouseAll = document.querySelector('.list');
let mouseLength = mouseSystem.length;
let mouseTitle = '';
for(i=0;i<mouseLength;i++){
    if(mouseSystem[i].number>4){
        let content = '<li>'+ mouseSystem[i].mouseName +'</li>';
        mouseTitle +=content;
    }
}
mouseAll.innerHTML = mouseTitle;


let mouseAll2 = document.querySelector('.list2');
let mouseLength2 = mouseSystem.length;
for(i=0;i<mouseLength2;i++){
        let content2 = document.createElement('li');
        content2.textContent = mouseSystem[i].mouseName;
        mouseAll2.appendChild(content2);
}
