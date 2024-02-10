const startRandomColor = document.querySelector("button[data-start]"); 
const stopRandomColor = document.querySelector("button[data-stop]"); 

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 
let randomColorInterval; 

startRandomColor.addEventListener('click', () => {  
    startRandomColor.disabled = true;  
    stopRandomColor.disabled = false; 

    randomColorInterval = setInterval(() => { 
        document.body.style.background = getRandomHexColor();
    }, 1000);
}); 

stopRandomColor.addEventListener('click', () => { 
    startRandomColor.disabled = false; 
    stopRandomColor.disabled = true; 
     
    clearInterval(randomColorInterval);
});