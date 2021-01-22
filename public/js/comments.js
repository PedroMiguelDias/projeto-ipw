window.addEventListener("load", commentLikeCount, false);

function commentLikeCount() {
    document
        .querySelectorAll(".comment-like .far.fa-heart")
        .forEach(function (commentLikeButton) {
            commentLikeButton.addEventListener('click', function () {
                this.classList.toggle("fas");

                let number = this.parentNode.nextElementSibling.innerText;

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