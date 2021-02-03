let button = document.getElementsByTagName('button')
var screenvalue='';
Array.from(button).forEach(function(element){
    element.addEventListener('click',e=>{
        let screen=document.getElementById('screen')
        let value=element.innerHTML
        if(value=='='){
            a=eval(screenvalue)
            screen.innerHTML=a

        }else if(value=='X'){
            screenvalue=screenvalue.slice(0,-1)
            screen.innerHTML=screen.innerHTML.slice(0,-1)

        }else if(value=='c'){
            screenvalue=''
            screen.innerHTML='0'
        }
        else{
        screenvalue=screenvalue+value
        
        screen.innerHTML=screenvalue
        }
        
    })
});





