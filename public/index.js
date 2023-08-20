
const kemikImg1 = document.getElementsByClassName("kemik-img")[0];
const kemikImg2 = document.getElementsByClassName("kemik-img")[1];
const cardMenu = document.getElementsByClassName("card-menu")[0];
const cards = document.getElementsByClassName("card");
function shake() {
    var time = 0
    for (let i = 0; i < 56; i++){
        var angle  = 0
        var chance = 0.5
        
        setTimeout(() => {
            if (angle < -3) {
                chance = 0.5
            }
            if (angle > 3 ){
                chance = -0.5
            }
            time += 5
            angle = angle + chance
            kemikImg1.style.transform= 'rotate('  + 40 + angle + 'deg)' ;
            kemikImg2.style.transform= 'rotate('  + angle + 'deg)' ;
        }, i**1.7/2)
    }
}

function refresh() {
    let width = cardMenu.clientWidth;
    let leftx = cardMenu.scrollLeft;

    for (let i=0; i<cards.length; i++) {
        if ((i+1)*250 > width + leftx){
            cards[i].style.opacity = 1 - (((i+1)*250 - width - leftx) / 100);
        }
        else if ((i+1)*200 - 150 < leftx) {
            cards[i].style.opacity = ((((i+1)*250 - 100) - leftx )/ 100);
        }
        else {
            cards[i].style.opacity = 1;
        }
    }
}

kemikImg1.addEventListener("click", shake);
kemikImg2.addEventListener("click", shake);


document.getElementById("arrow-right").addEventListener("click", ()=> {
    cardMenu.scroll(cardMenu.scrollLeft + 250, 0);
})

document.getElementById("arrow-left").addEventListener("click", ()=> {cardMenu.scroll(cardMenu.scrollLeft - 250, 0)});

cardMenu.addEventListener("scroll", refresh);
window.addEventListener("resize", refresh);

const button = document.getElementById("scroll")
button.addEventListener("click", function() {
    cardMenu.scroll(cardMenu.scrollLeft + 300, 0);  
})





