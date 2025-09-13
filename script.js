let multipleChoice = document.getElementsByTagName("li")
let nextBtn = document.querySelector(".submit")
let answerArr = Array.from(multipleChoice)

answerArr.forEach(e => {
    e.addEventListener("click", () => {
        // if already selected, unselect it
        if (e.classList.contains("selected")) {
            e.classList.remove("selected");
            e.style.backgroundColor = "white";
            nextBtn.style.display = "none";
        } else {
            // remove selection from others then adds bg + class for clicked elem
            answerArr.forEach((elem) => {
                elem.classList.remove("selected");
                elem.style.backgroundColor = "white";
            })

            e.classList.add("selected")
            e.style.backgroundColor = "#98d4f1";
            nextBtn.style.display = "block";
        }
    })
})
