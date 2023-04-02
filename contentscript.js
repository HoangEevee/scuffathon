let gorillaDetected=0

makeGorilla = () => {
    let spawnTime = Math.floor(Math.random()*25000)+5000
    setTimeout(() =>{
    const gorillaImg = document.createElement("img")
    gorillaImg.src=chrome.runtime.getURL("gorilla.gif")
    gorillaImg.style=`opacity:${100*(0.85**gorillaDetected)}%`
    gorillaImg.alt="totally inconspicuous gorilla. You may not think so but 8 out of 10 doctors fall for this trick"

    const button = document.createElement("button")
    button.innerText="x"
    button.style="cursor:pointer;border-color:transparent;background-color:transparent;color:grey;font-size:1.7rem;padding=0"

    button.onclick=function closeImg() {   
        const gorilla = document.getElementById("gorilla")
        gorilla.remove()
        clearInterval(ookTime)
        gorillaDetected+=1
        //Self-resurrection baby!
        makeGorilla()
    }
    //gorilla = gorilla image + close button
    const gorilla = document.createElement("div")
    gorilla.id = "gorilla"
    gorilla.appendChild(gorillaImg)
    gorilla.appendChild(button)
    let x = Math.floor(Math.random()*70)+10
    let y = Math.floor(Math.random()*70)+10
    gorilla.style=`display:flex;position:fixed;z-index:10000;top:${x}%;left:${y}%;transform:translate(-50%,-50%)`

    insertPoint = document.querySelector("body")
    insertPoint.appendChild(gorilla)

    //ramping ookinate text start every 3 seconds till every 1 second
    let ooks = 0
    let ookTime
    rampingOok = () => {
        ookinator()
        ookTime = setTimeout(rampingOok,ooks>6?1000:3000*(0.85**ooks))
        ooks += 1
    }
    rampingOok()

    },spawnTime)
}

// Replace every word with ook
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

makeGorilla()