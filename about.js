function beTouching(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("title-onscroll")) {
                entry.target.style.cssText = "opacity:1;transform: translateY(0);"
            }
            if (entry.target.classList.contains("rift-circle-animation")) {
                let allCircles = document.querySelectorAll("svg .rift-circle");
                for (let i = 0; i < allCircles.length; i++) {
                    allCircles[i].style.opacity = "1";
                }
            }

            observer.unobserve(entry.target);
        }
    });
}
