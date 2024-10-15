//select the popup,ovrelay,inner-container
var popup = document.getElementById("pop-up")
var ovrelaybox = document.querySelector(".overlay")
var innercontainer = document.querySelector(".inner-container")
popup.addEventListener("click", function () {
    ovrelaybox.style.display = "block"
    innercontainer.style.display = "block"
})

//cancel button
var cancelbook = document.getElementById("cancel-book")
cancelbook.addEventListener("click", function (event) {
    event.preventDefault()
    ovrelaybox.style.display = "none"
    innercontainer.style.display = "none"
})

//cretaing box
//select box,add-book,book-title-input,book-name-input,book-description-input
var box = document.querySelector(".box")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var booknameinput = document.getElementById("book-name-input")
var bookdescriptioninput = document.getElementById("book-description-input")
addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "box-one")
    div.innerHTML = `<h1 style="font-size: 30px;color:red">${booktitleinput.value}</h1>
                <h3>${booknameinput.value}</h3>
                <p style="color: white;">${bookdescriptioninput.value}</p>
                <button onclick="deleteup(event)">delete</button>`
    box.append(div)
    ovrelaybox.style.display = "none"
    innercontainer.style.display = "none"
})
//delete dutton
function deleteup(event){
    event.target.parentElement.remove()
}




