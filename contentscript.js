//This add a dancing gorilla at first paragraph "p"
const gorillaImg = document.createElement("iframe")
gorillaImg.src="https://giphy.com/embed/j65kA9WAUGdDwfPLBp"

insertPoint = document.querySelector("p")
insertPoint.appendChild(gorillaImg)

// Replace every word with anything else
for (tag of ["h1","h2","h3","h4","h5","p","li","td","caption","span","a"]){
    const text = document.querySelectorAll(tag)
    console.log(text)
    for (let i=0;i<text.length;i++) {
        text[i].innerHTML = text[i].innerHTML + "AAAA"
    }
}