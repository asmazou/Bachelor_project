document.querySelectorAll('[data-component="checklist"]').forEach((component) => {
    const checklistContainers = component.querySelectorAll(".checklist-container");


    checklistContainers.forEach((checklistContainer) => {
        const button = checklistContainer.querySelector(".btn");
        const elements = checklistContainer.querySelectorAll(".element");
        const title = button.innerText;

        button.addEventListener("click", ()=> {
            button.classList.toggle("open");
        });

        elements.forEach((element) => {
            element.addEventListener('click', () => {
                element.classList.toggle("checked");

                const checked = checklistContainer.querySelectorAll(".element.checked").length;
                const total = elements.length;
                const buttonText = button.querySelector(".text-btn");

                if (checked === 0) {
                    buttonText.innerText = title;
                }
                else {
                    buttonText.innerText = `${title}: ${checked} / ${total} Checked`;
                }
            });
        })
    });


    const slides = component.querySelector('.slides');

    const arrowRight = component.querySelector('.right');
    const arrowLeft = component.querySelector('.left');

    var indexSection = 0;

    arrowRight.addEventListener('click', function () {
        setSlide(1);
    });

    arrowLeft.addEventListener('click', function () {
        setSlide(-1);
    });





    const setSlide = (delta) => {
        let nextIndex = indexSection + delta;
        const maxIndex = slides.children.length - 1;
        if (nextIndex < 0) {
            nextIndex = maxIndex;
        }
        else if (nextIndex > maxIndex) {
            nextIndex = 0;
        }

        console.log(nextIndex, maxIndex);
        indexSection = nextIndex;
        slides.style = `--slide-index: ${indexSection}`;
    };

});