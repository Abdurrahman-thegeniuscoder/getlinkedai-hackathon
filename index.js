function show() {
    const modal = document.getElementsByClassName("modal")[0]
    // if (modal.classList.contains("show")) {
    //     modal.classList.remove("show")
    // } else {
    //     modal.classList.add("show")
    //     modal.classList.remove("hide")
    // }
    modal.classList.add("show")
    modal.classList.remove("hide")
}

function hide() {
    const cancel = document.getElementsByClassName("modal")[0]
    // if (cancel.classList.contains("hide")) {
    //     cancel.classList.remove("hide")
    // } else {
    //     cancel.classList.add("hide")
    //     cancel.classList.remove("show")
    // }
    cancel.classList.add("hide")
    cancel.classList.remove("show")

}