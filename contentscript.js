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
        clearInterval(ookTime)
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

    const ookTime = setInterval(ookinator,1000)
    },30000)
}
//all elements with text


makeGorilla()

// Replace every word with anything else
text = document.querySelectorAll("h1,h2,h3,h4,h5,p,li,td,caption,span,a")
ookinator = () => {
    while(true) {
        i = Math.floor(Math.random()*text.length)

        if (text[i].innerText && text[i].innerText != "Ook!") {
            // All this just to change text without deleting childNodes. CANNOT set innerText directly
            for (node of text[i].childNodes) {
                console.log(node)
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = "Ook!"
                }
            }
            break
        }
    }
}
// for (let i = 0; i<10;i++) {
//     ookinator()
// }