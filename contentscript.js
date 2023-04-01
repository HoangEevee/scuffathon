//This add a gorilla pic and close button


makeGorilla = () => {
    setTimeout(() =>{
    const gorillaImg = document.createElement("img")
    gorillaImg.src="https://i.pinimg.com/originals/f8/a3/85/f8a3856d260df0d7166e2688d2154ec3.png"
    gorillaImg.style="width:30%;height:30%"

    const button = document.createElement("button")
    button.innerText="Close"
    button.onclick=function closeImg() { 
        console.log("hiii")   
        const gorilla = document.getElementById("gorilla")
        gorilla.remove()
        //Self-resurrection baby
        makeGorilla()
    }

    const gorilla = document.createElement("div")
    gorilla.id = "gorilla"
    gorilla.appendChild(button)
    gorilla.appendChild(gorillaImg)
    gorilla.style="position:fixed;z-index=1000;top:50%;left:50%;transform:translate(-50%,-50%)"

    insertPoint = document.querySelector("body")
    insertPoint.appendChild(gorilla)
    },10000)
}

makeGorilla()

// Replace every word with anything else
for (tag of ["h1","h2","h3","h4","h5","p","li","td","caption","span","a"]){
    const text = document.querySelectorAll(tag)
    console.log(text)
    for (let i=0;i<text.length;i++) {
        text[i].innerHTML = text[i].innerHTML + "AAAA"
    }
}