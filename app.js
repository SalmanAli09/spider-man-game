var image = document.getElementById('image')

var count = 0;


// USE SPACEBAR TO JUMP
window.onkeydown = function(e){
    if(e.keyCode === 32){
        image.src = "https://www.fightersgeneration.com/characters3/spider-sting.gif"
        setTimeout(() => {
            image.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif"

        }, 2400);
    }
// USE D TO MOVE LEFT 
    if(e.keyCode === 68){
        count = count + 10
        image.src = 'https://www.fightersgeneration.com/characters3/spidey-walk1.gif'
        console.log = ( count)
        image.style.marginLeft = count + "px"
    }
//  USE W TO JUMP   
    if(e.keyCode === 87){
        image.src = "https://www.fightersgeneration.com/characters3/spider-sting.gif"
        setTimeout(() => {
            image.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif"

        }, 2400);
    }
   
 // USE A TO MOVE RIGHT 
    if(e.keyCode === 65){
        count = count - 10
        image.src = 'https://www.fightersgeneration.com/characters3/spidey-walk1.gif'
        console.log = ( count)
        image.style.marginLeft = (count)-10 + "px"
 }
    if(e.keyCode === 83){
        image.src = "https://www.fightersgeneration.com/characters3/spidey-dashing.gif"
        setTimeout(() => {
            image.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif"

        }, 2400);
    }

    //  USE R TU THINK
    if(e.keyCode === 82){
        image.src = "https://www.fightersgeneration.com/characters3/spidey-scratchin.gif"
        setTimeout(() => {
            image.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif"

        }, 2400);
}

// USE C TO KICK
if(e.keyCode === 67){
    image.src = "https://www.fightersgeneration.com/characters3/spidet-spinkick-mk.gif"
    setTimeout(() => {
        image.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif"

    }, 2400);
}
}


 
console.log(window)