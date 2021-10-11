let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let b = document.getElementById("bt_b");
let c = document.getElementById("bt_c");
let h = document.getElementById("bt_h");
let k = document.getElementById("bt_k");
let o = document.getElementById("bt_o");
let r = document.getElementById("bt_r");
let s = document.getElementById("bt_s");
let t = document.getElementById("bt_t");
let fondo = document.querySelector(".general");

b.addEventListener("click", ()=>{
    boom.play();
    b.parentElement.style.animationPlayState = "running";
    fondo.style.backgroundColor = "#ff0000";
})
c.addEventListener("click", ()=>{
    clap.play();
    c.parentElement.style.animationPlayState = "running";
    fondo.style.backgroundColor = "#2600ff";
})
h.addEventListener("click", ()=>{
    hihat.play();
    h.parentElement.style.animationPlayState = "running";
    fondo.style.backgroundColor = "#bbb800";
})
k.addEventListener("click", ()=>{
    kick.play();
    k.parentElement.style.animationPlayState = "running";
    fondo.style.backgroundColor = "#288f00";
})
o.addEventListener("click", ()=>{
    openhat.play();
    o.parentElement.style.animationPlayState = "running";
    fondo.style.backgroundColor = "#a86e01";
})
r.addEventListener("click", ()=>{
    ride.play();
    r.parentElement.style.animationPlayState = "running";
    fondo.style.backgroundColor = "#039797";
})
s.addEventListener("click", ()=>{
    snare.play();
    s.parentElement.style.animationPlayState = "running";
    fondo.style.backgroundColor = "#ff00bf";
})
t.addEventListener("click", ()=>{
    tink.play();
    t.parentElement.style.animationPlayState = "running";
    fondo.style.backgroundColor = "#a200ff";
})