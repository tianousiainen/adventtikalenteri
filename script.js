//sivuston lataamisen yhteydessä ajettavat funktiot kerätty tämän funktion sisään
function setCurrentDay() {
    const today = new Date();
    const day = today.getDate();

    colourCurrentDayBox(day);
    openOldBoxes(day);
}

//Värittää nykyisen päivän luukun vihreäksi
function colourCurrentDayBox(day) {
    const dayString = "box" + day.toString();

    document.getElementById(dayString).style.backgroundColor = "green";
}

//Avaa menneiden päivien luukut (Nyt vasta tosin muuttaa niiden väriä, TBD)
function openOldBoxes(day) {
    for (let i = 1; i < day; i++) {
        const dayString = "box" + i.toString();
        document.getElementById(dayString).style.backgroundColor = "lightgreen";
        //openBox(boxIdNumber); tai logiikka suoraan tähän
    }
    if (day <= 24 && day >= 1) {
        document.getElementById("box30").style.backgroundColor = "lightgreen";
        //openBox("30"); tai logiikka suoraan tähän
    }
}

//Laatikon avauslogiikka tänne. Kutsutaan laatikon onClickillä
function openBox(boxIdNumber) {
    const boxId = "box" + boxIdNumber;
    const box = document.getElementById(boxId);
    const today = new Date();
    const day = today.getDate();

    //avataan vain tämän päivän laatikko
    if (day == boxIdNumber) {
        //openBox-logiikka
    } else {
        //wrong box
    }
}

