let luukut = [];
luukut[0] = "Whisky Sour <br> valmistusaineet: <br> 4cl viskiä <br> 3cl sitruunamehu <br> \
             1cl sokerisiirappia <br> 2cl munanvalkuaista <br> jäitä <br> appelsiinin kuorta";
luukut[1] = "Gin tonic";
luukut[2] = "Mojito";
luukut[3] = "Manhattan";
luukut[4] = "Margarita";
luukut[5] = "Long Island Iced Tea";
luukut[6] = "Kir Royal";
luukut[7] = "Champagne Sour";
luukut[8] = "Mimosa";
luukut[9] = "Bellini";
luukut[10] = "Rommikola";
luukut[11] = "Pina Colada"
luukut[12] = "Caipiroska";
luukut[13] = "Mai-Tai";
luukut[14] = "Spicy Fifty";
luukut[15] = "Moscow Mule";
luukut[16] = "Daiquiri";
luukut[17] = "Negroni";
luukut[18] = "Cosmopolitan";
luukut[19] = "Irish Coffee";
luukut[20] = "Espresso Martini";
luukut[21] = "Hugo";
luukut[22] = "Limoncello spritz";
luukut[23] = "Valkovenäläinen";
luukut[24] = "Sex on the beach"

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
   
    document.getElementById("text").innerHTML = luukut[boxIdNumber];
    //avataan vain tämän päivän laatikko
    if (day == boxIdNumber) {
        //openBox-logiikka
    } else {
        //wrong box
    }
}

