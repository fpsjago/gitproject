const slider = document.querySelector(`.slider`);
const dotindicators = document.querySelector(`.controls ul`);
const leftarrow = document.querySelector(`.left`);
const rightarrow = document.querySelector(`.right`);
let dotindex = Array.from(dotindicators.children);
let sInd = 0;

// dot controls start
dotindicators.addEventListener(`click`, e => {

    const targetDot = e.target.closest(`li`);
    if (!targetDot) return;
    let newdotindex = dotindex.findIndex(dot => dot === targetDot)
    
   
    document.querySelector(`.controls .selected`).classList.remove(`selected`)
    dotindicators.children[newdotindex].classList.add(`selected`);
    slider.style.transform = `translate(` +(newdotindex) * -25 + `%)`;
});
// dot controls end

// arrows controls start
leftarrow.addEventListener(`click`, function () {

    sInd-- 
    if (sInd < 0) {sInd = 3}
    document.querySelector(`.controls .selected`).classList.remove(`selected`)
    dotindicators.children[sInd].classList.add(`selected`);
    slider.style.transform = `translate(` + (sInd) * -25 + `%)`;
 
  });

rightarrow.addEventListener(`click`, function () { 

    sInd++ 
    if (sInd > 3) {sInd = 0}
    document.querySelector(`.controls .selected`).classList.remove(`selected`)
    dotindicators.children[sInd].classList.add(`selected`);
    slider.style.transform = `translate(` + (sInd) * -25 + `%)`;
});
// arrows controls end

// autoplay code
function startAutoplay(){
    setInterval(function(){ 
      
        sInd++ 
    if (sInd > 3) {sInd = 0}
    document.querySelector(`.controls .selected`).classList.remove(`selected`)
    dotindicators.children[sInd].classList.add(`selected`);
    slider.style.transform = `translate(` + (sInd) * -25 + `%)`;

   }, 5000);
  }