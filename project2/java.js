function move() {
    const elem = document.getElementById("myBar");
    const label = document.getElementById("demo");

    const updates = document.querySelectorAll(".update");

    let current = parseInt(elem.style.width) || 0;
    let target = Math.min(current + 10, 100);
    let id = setInterval(frame, 10);

    function frame() {
        if (current >= target) {
            clearInterval(id);

            if (current === 100) {
                window.location.href = "destination.html";
            }

        } else {
            current++;

            elem.style.width = current + "%";
            label.innerHTML = current + "%";

            let index = Math.floor(current / 10);
            //optional chaining here 
            updates[index]?.classList.add("active");
        }
    }
}

window.onload = () => {
    document.querySelector("#u0").classList.add("active");
};
