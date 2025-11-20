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
luukut[20] = "20.12 <br> <b>Espresso Martini</b> <br> ainekset: <br> 3cl vodkaa <br> 3cl kahvilikööriä <br> \
            3cl tuorettaa espressoa <br> (maun mukaan sokeria tai sokerisiirappia) <br> \
            koristeeksi kolme kahvipapua <br> <b>valmistusohjeet:</b> <br> 1. Mittaa cocktailshakeriin, <br> 3cl vodkaa, <br> 3cl kahvilikööriä ja 3cl tuoretta espressoa \
            <br> 2. Sekoita. <br> Halutessasi voit lisätä mukaan hieman <br> sokeria tai sokerisiirappia";
luukut[21] = "Hugo";
luukut[22] = "Limoncello spritz";
luukut[23] = "Valkovenäläinen";
luukut[24] = "Sex on the beach"

function playAudio(){
    let music = document.getElementById("jingle_Bells");
    music.play();
}

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
    const today = new Date();
    const day = today.getDate();
    const boxId = "box" + boxIdNumber;
    const box = document.getElementById(boxId);
   
    document.getElementById("text").innerHTML = luukut[boxIdNumber];
    //avataan vain tämän päivän laatikko
    if (day == boxIdNumber) {
        let sound = document.getElementById("openAudio");
        sound.play();
        //openBox-logiikka
    } else {
        //wrong box
        document.getElementById("text").innerHTML = "Väärä luukku"
    }
}

