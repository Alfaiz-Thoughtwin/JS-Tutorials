// onclick :
function displayTime(){
    document.getElementById('date_time').innerHTML = Date();
}

function onclickFunc_02() {
    document.getElementById('click_me').innerHTML = "You Clicked Me !!! GREAT";
}

function onclickFunc_03() {
    document.getElementById('click_me_03').style.color = "red";
}

function onclickFunc_04() {
    document.getElementById('field_02').value = document.getElementById('field_01').value;
}

// onfocus :
function onfocusFunc() {
    document.getElementById('input_02').style.background = "yellow";
}

function onblurFunc_02() {
    document.getElementById('input_02').style.background = "red";
}


// onblur :
function onblurFunc() {
    let x = document.getElementById('input_01')
    console.log(`Value From Input_01 : ${x.value}`);
    x.value = x.value.toUpperCase();

}


// onbeforeunload :
// function onbeforeunloadFunc() {
//     return "Seriously ???";
// }

// window.onbeforeunload = function (event) {
//     event.returnValue = "Again Seriously ?";
// }


// onchange :
function onchangeFunc() {
    let car_value = document.getElementById('select_car').value;
    document.getElementById('select_car_01').innerHTML = `You Select car : ${car_value}`;
}


function onchangeFunc_03(val){
    alert("The input value has changed. The new value is: "+val);
    console.log(val);
}

function oncopyFunc(){
    document.getElementById('input_oncopy').innerHTML="You Copied Text !";
    // alert("You copied text !");
}

function oncutFunc(){
    document.getElementById('input_oncut').innerHTML="You Cut Text !"
}

function ondblclickFunc(){
    alert("Double Clicked Not Allowed !");
}