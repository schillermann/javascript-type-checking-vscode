'use strict';

class DogInterface {

    /**
     * @returns {void}
     */
    run() {
        throw new Error('Method not implemented');
    };

    /**
     * @param {number} height
     * @returns {void}
     */
    jump(height) {
        throw new Error('Method not implemented');
    };

    /**
     * @returns {boolean} 
     */
    hungry() {
        throw new Error('Method not implemented');
    };
}

class GermanShepherd extends DogInterface {

}

class FakeDog {}

class DogSchool {
    /**
     * @param {DogInterface} dog 
     */
    constructor(dog) {
        
    }
}

let myDog = new GermanShepherd();
myDog.jump(2);

let dogSchool = new DogSchool(myDog);
