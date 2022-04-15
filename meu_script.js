//manipulação das variaveis//
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

//variaveis do relógio//
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
