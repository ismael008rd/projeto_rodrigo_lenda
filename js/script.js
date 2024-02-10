const button = document.querySelector('.btn')
const height = window.innerHeight - 50
const width = window.innerWidth - 50

button.addEventListener('mouseover', ()=>{
    button.style.position ='absolute'
    button.style.top= Math.random()*height+20+'px'
    button.style.left= Math.random()*width+20+'px'
})