   score = 0;
   cross = true;
   
    audio = new Audio('image/356-8-bit-chiptune-game-music-357518.mp3');
   audiogo = new Audio('image/mixkit-sci-fi-game-over-1951.wav');
   setTimeout(() => {
    audio.play()
   }, 1000);
  
  document.onkeydown = function(e){
    console.log("key code is:", e.keyCode);
    if(e.keyCode==38){
    dino = document.querySelector('.dino');
    dino.classList.add('animateDino');
    setTimeout(() => {
        dino.classList.remove('animateDino')
    }, 700);
    }

     if(e.keyCode==39){
    dino = document.querySelector('.dino');
    dinoX   =  parseInt (window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dinoX + 112 + "px"   
    }

     if(e.keyCode==37){
    dino = document.querySelector('.dino');
    dinoX   =  parseInt (window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = (dinoX + - 112) + "px"   
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt (window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt (window.getComputedStyle(dino, null).getPropertyValue('top'));

     ox = parseInt (window.getComputedStyle(obstacle, null).getPropertyValue('left'));
     oy = parseInt (window.getComputedStyle(obstacle, null).getPropertyValue('left'));

     offsetX = Math.abs(dx-ox);
      offsetY = Math.abs(dy-oy);

    //   console.log(offsetX, offsetY);

      if(offsetX< 113 && offsetY<52){
        gameOver.innerHTML ="Game Over - Reload to play Again";
        obstacle.classList.remove('obstacleAni');

        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
      }
      else if(offsetX< 145 && cross){
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        
        setTimeout(() => {
             aniDur = parseFloat (window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log('New animation duration: ' , newDur);
        }, 500);
       

      }

 }, 10);

 function updateScore(score){
  scoreCont.innerHTML = "your score: " + score; 
}