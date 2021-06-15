function add(){
    var f = +(document.querySelector(".first_num").value);
    var s = +(document.querySelector(".second_num").value);
    console.log("pressed");
    let y = f + s;
    document.querySelector(".results").innerHTML=y;
}
function substract(){
    var f = document.querySelector(".first_num").value;
    var s = document.querySelector(".second_num").value;
    console.log("pressed");
    let y = f - s;
    document.querySelector(".results").innerHTML=y;
}
function multi(){
    var f = document.querySelector(".first_num").value;
    var s = document.querySelector(".second_num").value;
    console.log("pressed");
    let y = f * s;
    document.querySelector(".results").innerHTML=y;
}
function div(){
    var f = document.querySelector(".first_num").value;
    var s = document.querySelector(".second_num").value;
    console.log("pressed");
    let y = f / s;
    document.querySelector(".results").innerHTML=y;
}
document.querySelector(".but1").addEventListener("click",add);
document.querySelector(".but2").addEventListener("click",substract);
document.querySelector(".but3").addEventListener("click",multi);
document.querySelector(".but4").addEventListener("click",div);