import * as Snow from '/scripts/snow.js'

window.onload = function () {
    //create new snow
    var snow = new Snow.default({
        id: 'snow',
        theme: 'white',
        min_size: 1,
        max_size: 5
    });
    snow.start();

    var snow2 = new Snow.default({
        id: 'snow',
        theme: 'white',
        min_size: 1,
        max_size: 5
    }, 1);
    snow2.start();

    document.querySelector("body").onload = function () {
        snow.toggle();
    }

}
