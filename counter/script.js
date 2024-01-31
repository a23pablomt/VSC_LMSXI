function incr(){
    let number = document.getElementById("number")
    number.innerText = parseInt(number.innerText)+ 1
}

function decr(){
    let number = document.getElementById("number")
    number.innerText = parseInt(number.innerText)- 1
}

function reset(){
    let number = document.getElementById("number")
    number.innerText = 0
}