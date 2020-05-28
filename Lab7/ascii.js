// import "./animations";

function pageLoad() {
    const textarea_ascii = document.getElementById("textarea-ascii");
    const start_button = document.getElementById("start-button");
    const stop_button = document.getElementById("stop-button");
    const size_ascii = document.getElementById("size-ascii");
    const exercise_ascii = document.getElementById("exercise-ascii");
    const checkbox_ascii = document.getElementById("checkbox-ascii");

    start_button.onclick = handleStartEvent;
    stop_button.onclick = handleStopEvent;
    size_ascii.onchange = handleSizeEvent;
    exercise_ascii.onchange = handleExerciseEvent;
    checkbox_ascii.onclick = handleTurboEvent;

    function handleStartEvent() {
        console.log("This works");
        var data = "";
        var myVar = setInterval(frameCallBack, 1000);

        function myTimer() {
        var d = new Date();
        var t = d.toLocaleTimeString();
        document.getElementById("textarea-ascii").innerHTML = t;
}

        // frameCreator(ANIMATIONS[exercise_ascii.options[exercise_ascii.selectedIndex].value]);

        // const generatedFrames = ANIMATIONS[exercise_ascii.options[exercise_ascii.selectedIndex].value].split("=====\n");
        // console.log("Broken Frame: ", generatedFrames);
        // setInterval(frameCallBack , 500)


        function frameCallBack () {
            for (var i = 0; i < ANIMATIONS[exercise_ascii.options[exercise_ascii.selectedIndex].value].split("=====\n").length; i++) {
                data = ANIMATIONS[exercise_ascii.options[exercise_ascii.selectedIndex].value].split("=====\n")[i];
                document.getElementById("textarea-ascii").innerHTML = data;

            }

        }



    }

    function handleStopEvent() {
        console.log("This stops");
    }

    function handleSizeEvent() {
        console.log("This works", size_ascii.options[size_ascii.selectedIndex].value);
    }

    function handleExerciseEvent() {
        console.log("Pat: ", ANIMATIONS[exercise_ascii.options[exercise_ascii.selectedIndex].value])
        textarea_ascii.innerHTML = ANIMATIONS[exercise_ascii.options[exercise_ascii.selectedIndex].value];

    }

    function handleTurboEvent() {
        console.log("This is Turbo", checkbox_ascii.checked)
    }

    function frameCreator(subject) {
        const generatedFrames = subject.split("=====\n");
        console.log("Broken Frame: ", generatedFrames);

        function frameCallBack () {
            for (let i = 0; i < generatedFrames.length; i++) {
                document.getElementById("textarea-ascii").innerHTML = generatedFrames[i];
            }
            // textarea_ascii.innerHTML = "meme yange";
            // console.log("meme yange")

        }
        window.setInterval(frameCallBack , 500)
    }
}




window.onload = pageLoad;