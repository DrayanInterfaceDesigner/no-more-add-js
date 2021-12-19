class Utilities {

    constructor() {
        this.addEventListenerAll;
    }

    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false)

        });

    }

}