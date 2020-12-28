function beTouching(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("title-onscroll")) {
                entry.target.style.cssText = "opacity:1;transform: translateY(0);"
            }
            if (entry.target.classList.contains("rift-title")) {
                document.querySelector(".rift-title .over-text").style.color = "rgba(243, 175, 61, 0.8)";
            }
            if (entry.target.classList.contains("average-content")) {
                let actualValue = 0.00;
                let child = entry.target.querySelector("h3");
                let realValue = child.getAttribute("realvalue");
                let value = parseFloat(realValue);
                let numbers = setInterval(animatedNumbers, 10);

                function animatedNumbers() {
                    if (realValue < 0) {
                        actualValue += 0.01;
                        let correctNumber = actualValue.toFixed(2);
                        child.textContent = "-$" + correctNumber;
                        if ((-1 * parseFloat(correctNumber)) === value) {
                            clearInterval(numbers);
                        }
                    } else {
                        actualValue += 0.01;
                        let correctNumber = actualValue.toFixed(2);
                        child.textContent = "$" + correctNumber;
                        if ((parseFloat(correctNumber)) === value) {
                            clearInterval(numbers);
                        }
                    }
                }
            }
            observer.unobserve(entry.target);
        }
    });
}

let clickable = document.querySelectorAll(".average-content");
let resizedElement = document.querySelectorAll(".average-details");
let content = document.querySelectorAll(".average-details > div");
let closeButton = document.querySelectorAll(".close-average");

window.addEventListener("load",function (){
    let heightValue = content[1].getBoundingClientRect();
    resizedElement[1].style.height = heightValue.height + "px";
    clickable[1].classList.add("active-section");
})

function removeHeight(index) {
    resizedElement[index].style.height = "0";
    clickable[index].classList.remove("active-section");
}

for (let i = 0; i < clickable.length; i++) {
    clickable[i].addEventListener("click", function () {
        if (clickable[i].classList.contains("active-section")) {
            removeHeight(i);
        } else {
            let heightValue = content[i].getBoundingClientRect();
            resizedElement[i].style.height = heightValue.height + "px";
            clickable[i].classList.add("active-section");
        }
    });
}

for (let j = 0; j < closeButton.length; j++) {
    closeButton[j].addEventListener("click",function (){
        removeHeight(j);
    })
}
