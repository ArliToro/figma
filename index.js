function beTouching(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("title-onscroll")) {
                entry.target.style.cssText = "opacity:1;transform: translateY(0);"
            }
            if (entry.target.classList.contains("triple-circle")) {
                document.querySelector(".triple-circle > div:nth-child(1)").style.opacity = "1";
                document.querySelector(".triple-circle > div:nth-child(2)").style.cssText = "opacity:1;transform: translateX(-50px) scale(1)";
                document.querySelector(".triple-circle > div:nth-child(3)").style.cssText = "opacity:1;transform: translateX(-150px) scale(1)";
                if (screen.width <= 767) {
                    document.querySelector(".triple-circle > div:nth-child(2)").style.cssText = "opacity:1;transform: translateX(-20px) scale(1)";
                    document.querySelector(".triple-circle > div:nth-child(3)").style.cssText = "opacity:1;transform: translateX(-50px) scale(1)";
                }
                if (screen.width > 767 && screen.width <= 1200) {
                    document.querySelector(".triple-circle > div:nth-child(2)").style.cssText = "opacity:1;transform: translateX(-20px) scale(1)";
                    document.querySelector(".triple-circle > div:nth-child(3)").style.cssText = "opacity:1;transform: translateX(-40px) scale(1)";
                }
            }
            if (entry.target.classList.contains("real-impact-animation")) {
                let rc = document.querySelectorAll(".rch-animated");
                for (let i = 0; i < rc.length; i++) {
                    rc[i].style.cssText = "transition-delay:" + i * 0.5 + "s;opacity:1;transform: scale(1);";
                }
                document.querySelector(".rch-main-animated").style.cssText = "opacity:1;";
                let arrowPulse = document.querySelectorAll(".rch-main-animated polygon");
                for (let j = 0; j < arrowPulse.length; j++) {
                    arrowPulse[j].classList.add("arrow-real-impact");
                    arrowPulse[j].style.animationDelay = (2.15 + (j * 0.4)) + "s";
                }
            }
            if (entry.target.classList.contains("different-ambitious-animation")) {
                let impulseDots = document.querySelectorAll(".different-ambitious-animation svg .fade-in");
                document.querySelector(".different-ambitious-animation svg").style.opacity = "1";
                for (let m = 0; m < impulseDots.length; m++) {
                    impulseDots[m].style.cssText = "transition-delay:" + (0.65 + (m * 0.2)) + "s;transform: scale(1);";
                }
            }
            if (entry.target.classList.contains("focus-animation-content")) {
                let focusSquares = document.querySelectorAll(".l-r-animation");
                for (let n = 0; n < focusSquares.length; n++) {
                    focusSquares[n].style.cssText = "transition-delay:" + (n * 0.5) + "s;opacity: 1;transform: translateX(0);";
                }
            }
            observer.unobserve(entry.target);
        }
    });
}
