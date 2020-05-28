// const checkBoxValue = document.getElementById("lab-checkbox").value;
// console.log("brit", checkBoxValue);
const text_font = document.getElementById("big-text");


function wewe() {
    const text_font = document.getElementById("big-text");
    const textFont = window.getComputedStyle(text_font).getPropertyValue("font-size");
    const currentFont = parseInt(textFont)
    // document.getElementById("foo").style.fontSize = x + 1;
    console.log("mine", currentFont + 2 + "px");

    // text_font.style.fontSize = currentFont + 2 + "pt";
    function jumper() { text_font.style.fontSize = currentFont + 2 + "pt" }
    setInterval( jumper , 500)
    text_font.style.fontWeight= "bold";
}

function toggleAlert() {
    // alert("Ndi Wuwe");
    const checkBoxValue = document.getElementById("lab-checkbox").checked;
    const text_font = document.getElementById("big-text");



    if (checkBoxValue == false) {
        console.log("brit 2", !checkBoxValue);
        text_font.style.fontSize = "1em";
        text_font.style.fontWeight= "normal";
    } else {
        text_font.style.color = "green";
        text_font.style.textDecoration = "underline";
    }
}