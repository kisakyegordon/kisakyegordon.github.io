(function() {
    let blankPuzzle;
    $(function() {
        $("#puzzlearea div").each(initPuzzle);
    });

    function initPuzzle(index, e) {
        let x = (index % 4) * 100;
        let y = Math.floor(index / 4) * 100;
        $(e)
            .addClass("puzzlepiece")
            .attr("id", `square_${x / 100}_${y / 100}`)
            .css({
                "background-position": -x + "px " + -y + "px",
                top: y + "px",
                left: x + "px",
            })
            .click(movePuzzle);
        blankPuzzle = "square_3_3";
    }

    function movePuzzle() {
        console.log(this.id);
    }
})();