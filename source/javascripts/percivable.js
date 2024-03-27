const checklistContainers = document.querySelectorAll(".checklist-container");

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
