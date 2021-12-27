document.body.onload = onLoad()

function createCard(array) {
    array.forEach(obj => {
        var newDiv = document.createElement("div")
        newDiv.setAttribute("class", "w3-card")
        newDiv.setAttribute("style", "width: 63%; margin: auto;")
        document.body.appendChild(newDiv)

        var nameP = document.createElement("p")
        nameP.innerText = obj.name
        nameP.setAttribute("style", "padding-left: 40px; font-size: 18px; padding-top: 10px; padding-bottom: 10px;")
        newDiv.appendChild(nameP)

    })
}

async function onLoad() {
    let url = 'https://v2roadmap-default-rtdb.firebaseio.com/Roadmap.json';

    fetch(url).then(res => res.json()).then((out) => {
        createCard(out)
    }).catch(err => { throw err });
}