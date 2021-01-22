window.addEventListener("load", postLikeCount, false);


function postLikeCount() {
    // Grab the like icon
    document
        .querySelectorAll(".post-like .far.fa-heart")
        .forEach(function (postLikeButton) {
            postLikeButton.addEventListener('click', function () {
                this.classList.toggle("fas");

                // Find where the like number is situated in the DOM and change its inner text.
                // We look up by properties and not by elements ID so it doesn't take action on all like buttons, only those where we clicked.
                let number = this.parentNode.nextElementSibling.innerText;

                // Finally, check if the like button has/hasn't been toggled yet and increment accordingly.
                if (this.classList.contains("fas")) {
                    number++;
                    this.parentNode.nextElementSibling.innerText = number;
                }
                else {
                    number--;
                    this.parentNode.nextElementSibling.innerText = number;
                }
            });
        });
}