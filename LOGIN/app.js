let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value

    let users = JSON.parse(localStorage.getItem("users"))
    console.log(users)
    if (!users) return alert("bunday user mavjud emas")
    let isUser = users.some(user => user.email === email && user.password === password)
    let link = document.createElement("a")
    form.appendChild(link)
    link.href = "../index.html"
    link.innerText = "можити ваяти"
    link.style = `
    text-decoration: none;
    margin-left: 50px;
    position: relative;
    top: 50px;
    border: 2px solid blue;
    color: white;
    font-size: 20px;
    padding: 15px 114px;
    margin-bottom:50px;
    `
})