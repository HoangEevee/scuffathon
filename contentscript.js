const text = document.querySelectorAll("h1","h2","h3","h4","h5","p","li","td","caption","span","a")
// console.log("Hi")
for (let i=0;i<text.length;i++) {
    // console.log(text[i].innerHTML + "A")
    text[i].innerHTML = text[i].innerHTML + "AAAA"
}