function enter(e){
    if(e.key === 'Enter') check()
}

function check(){
    let name = document.getElementById("guess")
    if (name.value == "Squirrel") document.getElementById("par").innerText = "S.I.M.P.! Squirrels In My Pants!"
    else document.getElementById("par").innerText = "You joker, you clown, you utter fool"
}

function reset(){
    let name = document.getElementById("guess")
    name = ""
    document.getElementById("par").innerText = ""
}