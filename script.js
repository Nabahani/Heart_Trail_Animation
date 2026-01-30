const bodyEl = document.querySelector("body");


bodyEl.addEventListener("mousemove", event => {
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;

    const spanEl = document.createElement("span");
    spanEl.style.left = xPosition + "px";
    spanEl.style.top = yPosition + "px";

    let spanSize = Math.random() * 100 + "px";

    spanEl.style.width = spanSize;
    spanEl.style.height = spanSize;

    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000)
})