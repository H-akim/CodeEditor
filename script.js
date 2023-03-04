var codes = document.getElementsByClassName("codes")[0];
var play = document.getElementsByClassName("play")[0];
var remove = document.getElementsByClassName("remove")[0];
var result = document.getElementsByClassName("result")[0];

play.addEventListener("click", ()=>{
    result.innerHTML = codes.value;
    localStorage.setItem("result", codes.value);
});

remove.addEventListener("click", ()=>{
    result.innerHTML = "";
})
onload = ()=>{
    codes.value = localStorage.getItem("result");
    result.innerHTML = codes.value;
}