function startgame(){
    gameloop()
}
let count = 0
var personVis = false
let score = 0
function gameloop(){
    personVis = !personVis
    if(personVis == true){
        var classToset = "character visible"
    }
    else{
        var classToset = "character hidden"
    }
    var gamezone = document.getElementById("gamezone")

    for(i=0; i<8; i++){
        gamezone.children[i].className = classToset
        gamezone.children[i].onclick = function(){score -= 2}
    }
    var randomNum = Math.floor(Math.random()*8) +1
    gamezone.children[randomNum-1].className = classToset + " naruto"
    gamezone.children[randomNum-1].onclick = function(){score += 1}
    count++
    if (count < 12){
        setTimeout(gameloop, personVis ? 1000 : 3000)
    }
    else{
        alert("Игра закончена")
        document.getElementById("h1").textContent = "Твои очки: " + score
    }
}