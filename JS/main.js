document.body.onload = onLoad()

function createCard(array) {

    for (var index in array) {
        var holderDiv = document.createElement("div")
        document.body.appendChild(holderDiv)

        var updateText = document.createElement("h4")
        updateText.setAttribute("style", "font-weight: 900; margin-left: 90px; margin-top: 20px;")
        updateText.innerText = index
        holderDiv.appendChild(updateText)

        array[index].forEach(obj => {

            var spacerDiv = document.createElement("div")
            spacerDiv.setAttribute("style", "height:20px")
            holderDiv.appendChild(spacerDiv)
    
            var containerDiv = document.createElement("div")
            containerDiv.setAttribute("class", "w3-card")
            containerDiv.setAttribute("style", "width: 63%; margin-left: 10%; word-wrap: break-word;")
            holderDiv.appendChild(containerDiv)
    
            var dataDiv = document.createElement("div")
            dataDiv.setAttribute("style", "display: inline-block; padding-left: 0px; padding-top: 10px; width: 70%")
            containerDiv.appendChild(dataDiv)
    
            var nameText = document.createElement("p")
            nameText.innerText = obj.name
            nameText.setAttribute("style", "margin: 0px; padding-left: 20px; font-size: 18px; font-weight: 900; width: 70%")
            dataDiv.appendChild(nameText)
    
            var descriptionText = document.createElement("p")
            descriptionText.innerText = obj.description
            descriptionText.setAttribute("style", "margin: 0px; padding-left: 20px; font-size: 14px; padding-bottom: 10px; width: 70%; display: inline-block;")
            dataDiv.appendChild(descriptionText)
    
            var statusContainer = document.createElement("div")
            const stylepreset = "display: inline-block; padding-left: 75px; padding-right: 75px; margin: auto; text-align: center; margin-top: 40px; margin-bottom: 40px; border-radius: 25px;"
            if (obj.status == 0) {
                statusContainer.innerHTML = "<span style='color: White; font-weight: 900;'>Not Started</span>"
                statusContainer.setAttribute("style", `${stylepreset} background-color:rgb(224, 45, 45);`)
            } else if (obj.status == 1) {
                statusContainer.innerHTML = "<span style='color: White; font-weight: 900;'>In Progress</span>"
                statusContainer.setAttribute("style", `${stylepreset} background-color:rgb(235, 231, 40);`)
            } else if (obj.status == 2) {
                statusContainer.innerHTML = "<span style='color: White; font-weight: 900;'>Live</span>"
                statusContainer.setAttribute("style", `${stylepreset} background-color:rgb(42, 235, 68); padding-left: 103px; padding-right: 103px;`)
            }
            containerDiv.appendChild(statusContainer)
        })
    }

    var spacerDivTwo = document.createElement("div")
    spacerDivTwo.setAttribute("style", "padding-top: 20px;")
    document.body.appendChild(spacerDivTwo)
}

async function onLoad() {
    let url = 'https://v2roadmap-default-rtdb.firebaseio.com/Roadmap.json';

    fetch(url).then(res => res.json()).then((out) => {
        createCard(out)
    }).catch(err => { throw err });
}