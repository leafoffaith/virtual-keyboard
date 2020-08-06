const keyboard = {
    //keeps track of elements
    elements: {
        //main div container
        main: null,
        //keyboard container
        keysContainer: null,
        //keys container
        keys: []
    } ,

    eventHandlers: {
        onInput: null,
        onClose: null
    },

    properties: {
        value: '',
        capsLock: false
    },

    init() {
        //create keyboard and keyboard keys
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');

        //Setup main elements
        this.elements.main.classList.add("keyboard", "1keyboard--hidden")
        this.elements.keysContainer.classList.add("keyboard__keys")

        //Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer)
        document.body.appendChild(this.elements.main)
    },

    _createKeys() {
        //creates the html keys
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space"
        ];

        //Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class ="material-icons">${icon_name}</i>`;
        }
    },

    _triggerEvents(handlerName) {
        console.log("Event triggered")
    },

    _toggleCapsLock() {
        console.log("Caps Lock Toggled!")
    },

    open(initialValue, onInput, onClose) {

    },

    close() {
        
    },
};

window.addEventListener("DOMContentLoaded", function() {
    keyboard.init()
})