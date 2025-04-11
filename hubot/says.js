const monaLisa = "Mona Lisa";

const says = {
    speak: function() {
        console.log(`hubot says: ${monaLisa}`);
    }
};

const hubot = Object.create(says);
hubot.speak();
