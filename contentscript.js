//This add a dancing gorilla at first paragraph "p"
const gorillaImg = document.createElement("img")
gorillaImg.src="https://i.pinimg.com/originals/f8/a3/85/f8a3856d260df0d7166e2688d2154ec3.png"
gorillaImg.style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:30%;height:30%"

insertPoint = document.querySelector("body")
insertPoint.appendChild(gorillaImg)


// Replace every word with anything else
for (tag of ["h1","h2","h3","h4","h5","p","li","td","caption","span","a"]){
    const text = document.querySelectorAll(tag)
    console.log(text)
    for (let i=0;i<text.length;i++) {
        text[i].innerHTML = text[i].innerHTML + "AAAA"
    }
}