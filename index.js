var num1 = document.querySelector('#keypad-1')
var num2 = document.querySelector('#keypad-2')
var num3 = document.querySelector('#keypad-3')
var num4 = document.querySelector('#keypad-4')
var num5 = document.querySelector('#keypad-5')
var num6 = document.querySelector('#keypad-6')
var num7 = document.querySelector('#keypad-7')
var num8 = document.querySelector('#keypad-8')
var num9 = document.querySelector('#keypad-9')
var num0 = document.querySelector('#keypad-0')
var numbox = document.querySelector('.numbox')
var enter = document.querySelector('#keypad-enter')
var del = document.querySelector('#keypad-delete')

del.addEventListener('click',(e)=>{
    var input = numbox.querySelectorAll('.act')
    if(input.length == 0) return;
    input[input.length - 1].innerHTML = " ";
    input[input.length - 1].className = input[input.length - 1].className.replace( new RegExp( "(\\s|^)" + "act" + "(\\s|$)" ), " " );
    input[input.length - 1].className += "inact";

    var check = document.querySelectorAll('.act');
    if ((check.length == 11 &&  check[0].innerHTML == '0' && check[2].innerHTML == '0') || (check.length == 10 && check[0].innerHTML == '0')) {
        enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "unuse" + "(\\s|$)" ), " " );
        enter.className += "use";
        enter.disabled = false;
    } else {
        if (enter.classList.contains('use')) {
            enter.disable = true;
            enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "use" + "(\\s|$)" ), " " );
            enter.className += "unuse";
        }
    }
    
    
})

num1.addEventListener('click',(e)=>{
    var input = numbox.querySelector('.inact')
    if (!input) return;
    var str = e.target.id;
    str = str[str.length - 1];
    input.innerHTML = str;
    var check = document.querySelectorAll('.act');
    if ((input.id == "21" &&  check[0].innerHTML == '0' && check[2].innerHTML == '0') || (input.id == "20"&& check[0].innerHTML == '0')) {
        enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "unuse" + "(\\s|$)" ), " " );
        enter.className += "use";
        enter.disabled = false;
    } else {
        if (enter.classList.contains('use')) {
            enter.disable = true;
            enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "use" + "(\\s|$)" ), " " );
            enter.className += "unuse";
        }
    }
    input.className = input.className.replace( new RegExp( "(\\s|^)" + "inact" + "(\\s|$)" ), " " );
    input.className += "act"
})
num2.addEventListener('click',(e)=>{

    var input = numbox.querySelector('.inact')
    if (!input) return;
    var check = document.querySelectorAll('.act');
    if ((input.id == "21" &&  check[0].innerHTML == 0 && check[2].innerHTML == 0) || (input.id == "20"&& check[0].innerHTML == '0')) {
        enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "unuse" + "(\\s|$)" ), " " );
        enter.className += "use";
        enter.disabled = false;
    }else {
        if (enter.classList.contains('use')) {
            enter.disable = true;
            enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "use" + "(\\s|$)" ), " " );
            enter.className += "unuse";
        }
    }
    var str = e.target.id;
    str = str[str.length - 1];
    input.innerHTML = str;
    input.className = input.className.replace( new RegExp( "(\\s|^)" + "inact" + "(\\s|$)" ), " " );
    input.className += "act"
})
num3.addEventListener('click',(e)=>{

    var input = numbox.querySelector('.inact')
    if (!input) return;
    input.removeAttribute("inact")

    var check = document.querySelectorAll('.act');
    if ((input.id == "21" &&  check[0].innerHTML == '0' && check[2].innerHTML == '0') || (input.id == "20"&& check[0].innerHTML == '0')) {
        enter.className = "use";
        enter.disabled = false;
    }else {
        if (enter.classList.contains('use')) {
            enter.disable = true;
            enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "use" + "(\\s|$)" ), " " );
            enter.className += "unuse";
        }
    }
    var str = e.target.id;
    str = str[str.length - 1];
    input.innerHTML = str;
    input.className = input.className.replace( new RegExp( "(\\s|^)" + "inact" + "(\\s|$)" ), " " );
    input.className += "act"
})
num4.addEventListener('click',(e)=>{

    var input = numbox.querySelector('.inact')
    if (!input) return;
    input.removeAttribute("inact")
    var check = document.querySelectorAll('.act');
    if ((input.id == "21" &&  check[0].innerHTML == '0' && check[2].innerHTML == '0') || (input.id == "20"&& check[0].innerHTML == '0')) {
        enter.className = "use";
        enter.disabled = false;
    }else {
        if (enter.classList.contains('use')) {
            enter.disable = true;
            enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "use" + "(\\s|$)" ), " " );
            enter.className += "unuse";
        }
    }
    var str = e.target.id;
    str = str[str.length - 1];
    input.innerHTML = str;
    input.className = input.className.replace( new RegExp( "(\\s|^)" + "inact" + "(\\s|$)" ), " " );
    input.className += "act"
})
num5.addEventListener('click',(e)=>{

    var input = numbox.querySelector('.inact')
    if (!input) return;
    input.removeAttribute("inact")
    var check = document.querySelectorAll('.act');
    if ((input.id == "21" &&  check[0].innerHTML == '0' && check[2].innerHTML == '0') || (input.id == "20"&& check[0].innerHTML == '0')) {
        enter.className = "use";
        enter.disabled = false;
    }else {
        if (enter.classList.contains('use')) {
            enter.disable = true;
            enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "use" + "(\\s|$)" ), " " );
            enter.className += "unuse";
        }
    }
    var str = e.target.id;
    str = str[str.length - 1];
    input.innerHTML = str;
    input.className = input.className.replace( new RegExp( "(\\s|^)" + "inact" + "(\\s|$)" ), " " );
    input.className += "act"
})
num6.addEventListener('click',(e)=>{
    
    var input = numbox.querySelector('.inact')
    if (!input) return;
    input.removeAttribute("inact")
    var check = document.querySelectorAll('.act');
    if ((input.id == "21" &&  check[0].innerHTML == '0' && check[2].innerHTML =='0') || (input.id == "20"&& check[0].innerHTML == '0')) {
        enter.className = "use";
        enter.disabled = false;
    }else {
        if (enter.classList.contains('use')) {
            enter.disable = true;
            enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "use" + "(\\s|$)" ), " " );
            enter.className += "unuse";
        }
    }
    var str = e.target.id;
    str = str[str.length - 1];
    input.innerHTML = str;
    input.className = input.className.replace( new RegExp( "(\\s|^)" + "inact" + "(\\s|$)" ), " " );
    input.className += "act"
})
num7.addEventListener('click',(e)=>{
    
    var input = numbox.querySelector('.inact')
    if (!input) return;
    input.removeAttribute("inact")
    var check = document.querySelectorAll('.act');
    if ((input.id == "21" &&  check[0].innerHTML == '0' && check[2].innerHTML == '0') || (input.id == "20"&& check[0].innerHTML == '0')) {
        enter.className = "use";
        enter.disabled = false;
    }else {
        if (enter.classList.contains('use')) {
            enter.disable = true;
            enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "use" + "(\\s|$)" ), " " );
            enter.className += "unuse";
        }
    }
    var str = e.target.id;
    str = str[str.length - 1];
    input.innerHTML = str;
    input.className = input.className.replace( new RegExp( "(\\s|^)" + "inact" + "(\\s|$)" ), " " );
    input.className += "act"
})
num8.addEventListener('click',(e)=>{

    var input = numbox.querySelector('.inact')
    if (!input) return;
    
    var check = document.querySelectorAll('.act');
    if ((input.id == "21" &&  check[0].innerHTML == '0' && check[2].innerHTML == '0') || (input.id == "20"&& check[0].innerHTML == '0')) {
        enter.className = "use";
        enter.disabled = false;
    }else {
        if (enter.classList.contains('use')) {
            enter.disable = true;
            enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "use" + "(\\s|$)" ), " " );
            enter.className += "unuse";
        }
    }
    var str = e.target.id;
    str = str[str.length - 1];
    input.innerHTML = str;
    input.className = input.className.replace( new RegExp( "(\\s|^)" + "inact" + "(\\s|$)" ), " " );
    input.className += "act"
})
num9.addEventListener('click',(e)=>{
    
    var input = numbox.querySelector('.inact')
    if (!input) return;
    input.removeAttribute("inact")
    var check = document.querySelectorAll('.act');
    console.log(check);
    if ((input.id == "21" &&  check[0].innerHTML == '0' && check[2].innerHTML == '0') || (input.id == "20"&& check[0].innerHTML == '0')) {
        enter.className = "use";
        enter.disabled = false;
    }else {
        if (enter.classList.contains('use')) {
            enter.disable = true;
            enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "use" + "(\\s|$)" ), " " );
            enter.className += "unuse";
        }
    }
    var str = e.target.id;
    str = str[str.length - 1];
    input.innerHTML = str;
    input.className = input.className.replace( new RegExp( "(\\s|^)" + "inact" + "(\\s|$)" ), " " );
    input.className += "act"
})
num0.addEventListener('click',(e)=>{
  
    var input = numbox.querySelector('.inact')
    if (!input) return;
    input.removeAttribute("inact")
    var check = document.querySelectorAll('.act');
    if ((input.id == "21" &&  check[0].innerHTML == '0' && check[2].innerHTML == '0') || (input.id == "20"&& check[0].innerHTML == '0')) {
        enter.className = "use";
        enter.disabled = false;
    }else {
        if (enter.classList.contains('use')) {
            enter.disable = true;
            enter.className = enter.className.replace( new RegExp( "(\\s|^)" + "use" + "(\\s|$)" ), " " );
            enter.className += "unuse";
        }
    }
    var str = e.target.id;
    str = str[str.length - 1];
    input.innerHTML = str;
    input.className = input.className.replace( new RegExp( "(\\s|^)" + "inact" + "(\\s|$)" ), " " );
    input.className += "act"
})
