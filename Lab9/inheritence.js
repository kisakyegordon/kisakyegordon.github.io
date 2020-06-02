
(
    function() {
        "use script";
        var init = function() {
            document.getElementById('start').onclick = start;
        }

        var bicyclePrototype, mountainBikePrototype;

        var createBicyclePrototype = function() {
            return {
                speed: 0,
                speedUp: value => this.speed + value,
                applyBrake: value => this.speed - value
            }
        }

        var createMountainBikePrototype = function(proto) {
            var obj = Object.create(proto);
            obj.gear = 1;
            obj.setGear = function(newValue) {this.gear = newValue;}

            return obj;
        }

        var start = function() {
            bicyclePrototype = createBicyclePrototype();
            mountainBikePrototype = createMountainBikePrototype(bicyclePrototype);

            console.log(bicyclePrototype.speed);
            console.log(mountainBikePrototype.speed);
            bicyclePrototype.speedUp(5);
            console.log(bicyclePrototype.speed);
            console.log(mountainBikePrototype.speed);
            console.log(mountainBikePrototype.hasOwnProperty('speed'));
            mountainBikePrototype.speedUp(5);
            console.log(bicyclePrototype.speed);
            console.log(mountainBikePrototype.speed);
            console.log(mountainBikePrototype.hasOwnProperty('speed'));
        }
        window.onload = init;

    }
)();