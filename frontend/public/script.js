window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

let qty = document.querySelector("input[name='age'],input[name='trestbps'],input[name='chol'],input[name='thalach'],input[name='oldpeak'],input[name='fbs']");
qty.addEventListener("change", function (event) {
    if (this.value < 1) this.value = 1; // minimum is 1
    else this.value = Math.floor(this.value); // only integers allowed

})

// let qty1 = document.querySelectorAll("");
// qty1.addEventListener("change", function (event) {
//     if (this.value < 1) this.value = 1; // minimum is 1
//     else this.value = Math.floor(this.value); // only integers allowed

// })