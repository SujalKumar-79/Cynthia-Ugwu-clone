const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


document.addEventListener("mousemove", function(dets) {
    document.querySelector("#mini-circle").style.opacity = 1;
    document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX - 5}px, ${dets.clientY - 5}px)`;
});