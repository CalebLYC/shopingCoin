let previousAvis = document.querySelector('.previous');
let followAvis = document.querySelector('.follow');
let avisContainer = document.querySelectorAll('.avisContainer');
let step = 0;

followAvis.addEventListener('click', function () {
    follow(avisContainer);
})
previousAvis.addEventListener('click', function () {
    previous(avisContainer);
})

setInterval(() => followAvis.click(), 3000);

function follow(slide) {
    let followStep = step >= slide.length - 1 ? 0 : step + 1;
    slide[step].classList.remove('active');
    slide[followStep].classList.add('active');
    step = followStep;
}
function previous(slide) {
    let previousStep = step <= 0 ? 2 : step - 1;
    slide[step].classList.remove('active');
    slide[previousStep].classList.add('active');
    step = previousStep;
}
console.log(avisContainer);