// helpers
const hide = (classname) => {
    const elements = document.getElementsByClassName(classname);
    for(var i = 0; i < elements.length; i++){
        elements[i].remove()
    }
}

const changePic = (id, picpath) => {
    const element = document.getElementById(id);
    const aa = "<img src='" + picpath + "' alt='cat sleeping in bed' width='400'/>";
    element.innerHTML = aa
}

// main
const handleYes = () => {
    document.getElementById("kissukysymys").innerHTML="Voitit pelin!";
    hide("choicebuttons");
    changePic("kissukuva", "./cat/win.png");
}
const handleNo = () => {
    document.getElementById("kissukysymys").innerHTML="Hävisit pelin!";
    hide("choicebuttons");
    changePic("kissukuva", "./cat/lose.png");
}
const handleRestart = () => {
    location.reload();
}