var counter=1;
var max_counter = 4;
document.documentElement.style.setProperty('--slides', max_counter);
setInterval(function(){
    document.getElementById('radio-' + counter).checked = true;
    counter++;
    if(counter>max_counter){
        counter=1;
    }
}, 5000)