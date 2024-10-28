var gamestatus=0;
const statusmsg = document.getElementById('status');
const start = document.getElementById("start");
const end = document.getElementById("end");
const boundaries = document.querySelectorAll('.boundary');

start.addEventListener('mouseenter',()=>{
    statusmsg.textContent = "Game Started, reach E to win";
    gamestatus=1;
});
boundaries.forEach(boundary => {
    boundary.addEventListener('mouseenter', () => {
        if(gamestatus===1){
            statusmsg.textContent = "You Lose! Go to S to start again";
            gamestatus=0;
        }
    });
  });
  end.addEventListener('mouseenter',()=>{
    if(gamestatus===1){
    statusmsg.textContent = "You Won!Go to S to play again";
    gamestatus=0;
    }
});

