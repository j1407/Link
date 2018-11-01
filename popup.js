var isStarted = false;
var btn = document.getElementById('btn');
var txt = document.getElementById('txt');

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('btn').addEventListener('click', function(){
        txt.value = "AAAAAAAAA";
    });
}, false);
