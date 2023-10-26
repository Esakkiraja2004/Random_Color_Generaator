const btn = document.querySelector('button');
const col = document.querySelector('h1');


btn.addEventListener("click", function() {
    
    const gene = colorgen();
    document.body.style.backgroundColor = gene;
    col.innerText = gene;


});

const colorgen = () =>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r}, ${g}, ${b})`;


}