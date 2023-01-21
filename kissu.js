// helpers
const hideElement = (id) => {
    const element = document.getElementById(id);
    element.style.visibility = "hidden";
    console.log(element.style)
}

const showElement = (id) => {
    const element = document.getElementById(id);
    console.log(element.style.visibility)
    element.style.visibility = "visible";
    console.log(element.style.visibility)
}

const changePic = (id, picpath) => {
    const element = document.getElementById(id);
    const aa = "<img src='" + picpath + "' alt='cat sleeping in bed' width='400'/>";
    element.innerHTML = aa
}

// main
const handleYes = () => {
    document.getElementById("kissukysymys").innerHTML = "Voitit pelin!";
    hideElement("choicebuttoncontainer");
    showElement("restartbuttoncontainer");
    changePic("kissukuva", "./cat/win.png");
}
const handleNo = () => {
    document.getElementById("kissukysymys").innerHTML = "Hävisit pelin!";
    hideElement("choicebuttoncontainer");
    showElement("restartbuttoncontainer");
    changePic("kissukuva", "./cat/lose.png");
}
const handleRestart = () => {
    location.reload();
}