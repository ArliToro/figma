document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loader").style.cssText = "opacity:0;pointer-events:none;";
    let options = {
        root: null,
        threshold: 0.7
    };
    let observer = new IntersectionObserver(beTouching, options);
    document.querySelectorAll(".animated-content").forEach(c => {
        observer.observe(c);
    });
});


