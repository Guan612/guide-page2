//获取元素
var txt = document.querySelector('#txt');
var btn = document.querySelector('#add');
var ul = document.querySelector('.notes');
var colors =['#ef9a9a','#F48FB1','#CE93D8','#B39DDB','#9FA8DA','#90CAF9','#81D4FA','#80DEEA','#80CBC4','#A5D6A7','#C5E1A5','#FFCC80','#FFAB91','#BCAAA4','#B0BEC5'];
//注册事件
btn.onclick = function(){
    txt.focus();
    if(ul.children.length < 8 && txt.value !='' ){

        //创建元素
        var li = document.createElement('li');

        li.style.backgroundColor = colors[parseInt(Math.random()*(colors.length-1))];
        //添加元素
        ul.appendChild(li);
        li.innerHTML = txt.value + "<p>"+h +":"+ m +" "+ampm+"</p>" + "<a href='javascript:;' style='background:"+ li.style.backgroundColor +"' >Delete</a>";
        txt.value = '';
        txt.focus();
        //删除元素
        var as = document.querySelectorAll('a');
        for(var i = 0; i < as.length; i++){
            as[i].onclick = function (){
                ul.removeChild(this.parentNode);
                txt.focus();
            }
        }

    }else if(ul.children.length == 8){
        txt.value ='';
        txt.setAttribute('placeholder','只能添加8个便签哦！');
        txt.focus();

    }
    else if(txt.value ==''){
        txt.setAttribute('placeholder','请输入内容...');
        txt.focus();
    }
}