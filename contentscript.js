

// Replace every word with anything else
for (tag of ["h1","h2","h3","h4","h5","p","li","td","caption","span","a"]){
    const text = document.querySelectorAll(tag)
    console.log(text)
    for (let i=0;i<text.length;i++) {
        // console.log(text[i].innerHTML + "A")
        text[i].innerHTML = text[i].innerHTML + "AAAA"
    }
}