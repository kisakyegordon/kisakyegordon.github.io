"use script";
const textarea_ascii = document.getElementById("textarea-ascii");
const start_button = document.getElementById("start-button");
const stop_button = document.getElementById("stop-button");
const size_ascii = document.getElementById("size-ascii");
const exercise_ascii = document.getElementById("exercise-ascii");
const checkbox_ascii = document.getElementById("checkbox-ascii");

stop_button.disabled = true;

start_button.onclick = handleStartEvent;
stop_button.onclick = handleStopEvent;
size_ascii.onchange = handleSizeEvent;
exercise_ascii.onchange = handleExerciseEvent;
checkbox_ascii.onclick = handleTurboEvent;

speed = 250;
var index = 0;

function frameCallBack () {
    const generatedFrames = ANIMATIONS[exercise_ascii.options[exercise_ascii.selectedIndex].value].split("=====\n");
    textarea_ascii.value = generatedFrames[index];

    if(index === generatedFrames.length - 1) {
        index = 0;
    } else {
        index++;
    }
}

function handleStartEvent() {

    myVar = setInterval(
                frameCallBack,
                speed
            );
    start_button.disabled = true;
    exercise_ascii.disabled = true;
    stop_button.disabled = false;

}

function handleStopEvent() {
    checkbox_ascii.checked = false;
    window.clearInterval(myVar);
    window.clearInterval(myVar);

    textarea_ascii.value = textarea_ascii_prev !== undefined ? textarea_ascii_prev : "";
    stop_button.disabled = true;
    start_button.disabled = false;
    exercise_ascii.disabled = false;
}

function handleSizeEvent() {
    switch(size_ascii.options[size_ascii.selectedIndex].value) {
        case 'Tiny':
            textarea_ascii.style.fontSize = "7pt";
            break;
        case 'Small':
            textarea_ascii.style.fontSize = "10pt";
            break;
        case 'Medium':
            textarea_ascii.style.fontSize = "12pt";
            break;
        case 'Large':
            textarea_ascii.style.fontSize = "16pt";
            break;
        case 'Extra-Large':
            textarea_ascii.style.fontSize = "24pt";
            break;
        case 'XXL':
            textarea_ascii.style.fontSize = "32pt";
            break;
        default:
            break;
    }
}

function handleExerciseEvent() {
    textarea_ascii_prev = textarea_ascii.value;
    textarea_ascii.value = ANIMATIONS[exercise_ascii.options[exercise_ascii.selectedIndex].value];
}

function handleTurboEvent() {
    console.log("This is Turbo", checkbox_ascii.checked);
    if (checkbox_ascii.checked === true) {
        speed = 50;
        handleStartEvent();
        
    } else if(checkbox_ascii.checked === false) {
        speed = 250;
        handleStopEvent();
        handleStartEvent();
    }
}