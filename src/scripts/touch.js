/*export default (function () {
    if (!window.location.pathname.includes("index.html")) return // guard clause

    const DIV = document.querySelector(".articleContainer");

    DIV.addEventListener("touchstart", touchHandler)
    DIV.addEventListener("touchend", touchHandler)

    let x
    function touchHandler(event) {
        if (event.type === "touchstart") {
            x = event.changedTouches[0].clientX
        } else { // touchend
            let direction
            if (x + 50 < event.changedTouches[0].clientX) {
                direction = "Right"
            } else if (x - 50 > event.changedTouches[0].clientX) {
                direction = "Left"
            }

            if (direction) {
                DIV.lastElementChild.addEventListener("animationstart", function () {
                    DIV.removeEventListener("touchstart", touchHandler)
                    DIV.removeEventListener("touchend", touchHandler)
                })
                DIV.lastElementChild.addEventListener("animationend", function () {
                    DIV.removeChild(DIV.lastElementChild)
                    DIV.addEventListener("touchstart", touchHandler)
                    DIV.addEventListener("touchend", touchHandler)
                })

                DIV.lastElementChild.style.animation = `move${direction} 2s ease`;
                direction = null
            }
            x = null
        }
    }
})()
*/
