function calc(){
    p1 = document.getElementById("onePoint")
    p2 = document.getElementById("twoPoint")
    p3 = document.getElementById("threePoint")
    result = p1 + 2*p2 + 3*p3

    document.getElementById("par").innerText = result
}

function reset(){
    let name = document.getElementById("par")
    name = ""
    document.getElementById("par").innerText = ""
}