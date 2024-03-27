
const button = document.querySelector(".btn"),
    elements = document.querySelectorAll(".element");

button.addEventListener("click", ()=> {
    button.classList.toggle("open");
});

    elements.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("checked");

            let checked = document.querySelectorAll(".checked");
            let buttonText = document.querySelector(".text-btn");

            if (checked && checked.length > 0) {
                buttonText.innerText = '1.1 Text Alternative';
            } else {
                buttonText.innerText = "1.1 Text Alternative";
            }

        });
    });














