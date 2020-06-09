const Module = (function () {
    "use strict";
    let bicyclePrototype;
    let mountainBikePrototype;
  
    class BicyclePrototye {
      constructor() {
        this._speed = 0;
      }
  
      getSpeed() {
        return this._speed;
      }
      speedUp(speed) {
        this._speed += speed;
      }
  
      applyBrake(speed) {
        if (this._speed > 0) {
          this._speed -= speed;
        }
      }
    }
  
    class MountainBikePrototype extends BicyclePrototye {
      constructor() {
        super();
        this._gear = 1;
      }
      getGear() {
        return this._gear;
      }
  
      setGear(gear) {
        this._gear += gear;
      }
    }
  
    let start = function () {
      bicyclePrototype = new BicyclePrototye();
      mountainBikePrototype = new MountainBikePrototype();
  
      let bike = Object.create(bicyclePrototype);
      bike.speedUp(2);
      console.log(bike.getSpeed());
  
      let mountain = Object.create(mountainBikePrototype);
      mountain.setGear(5);
      console.log(mountain.getGear());
    };
  
    start();
  })();
  
  console.log("hello world");
  