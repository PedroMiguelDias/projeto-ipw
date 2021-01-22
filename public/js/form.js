let showRemainingCharacters = (function () {
    let textareaBox = document.getElementById('descriptionBody');

    // We use a closure with a Self Invoked Function to avoid defining a DOM element in the global scope.
    return function () {
        let insertedCharacters = textareaBox.value.length;
        let counter = 1000 - insertedCharacters;
        let countRemaining = document.getElementById('charactersRemaining');
        countRemaining.innerHTML = "Caracteres restantes: " + counter;

        // Listen for events when the user presses and releases the keyboard keys so the browser knows when to increment or decrement the characters.
        textareaBox.addEventListener('keyup', showRemainingCharacters, false);
        textareaBox.addEventListener('keydown', showRemainingCharacters, false);
    }
})();

window.addEventListener("load", showRemainingCharacters, false);
