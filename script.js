//.js koodit
function setCurrentDay() {
    const today = new Date();
    const day = today.getDate();
    const dayString = "luukku" + day.toString();
    
    document.getElementById(dayString).style.backgroundColor = "green";
}
setCurrentDay();