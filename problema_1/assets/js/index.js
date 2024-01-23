const img = document.querySelector('.img');
let imgClickado = true;

img.addEventListener('click', function() {
    if (imgClickado==true) {
        img.style.border = 'solid 2px red'
        imgClickado = false;
    }else{
        img.style.border ='none'
        imgClickado = true
    }
})