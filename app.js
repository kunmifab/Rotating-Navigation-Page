const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const contents = document.querySelector('.content');

open.addEventListener('click', function(){
    container.classList.add('show-nav');
    open.style.display = 'none';
    close.style.display = "block";
    container.style.position = "fixed";
    contents.style.opacity = "0.3";
    contents.style.transition = "opacity 0.3s ease-in";
    container.style.borderBottomLeftRadius = "50%";  
})

close.addEventListener('click', function(){
    container.classList.remove('show-nav');
    open.style.display = 'initial';
    close.style.display = "none";
    container.style.position = "initial";
    contents.style.opacity = "initial";
    container.style.borderBottomLeftRadius = "initial";
});

