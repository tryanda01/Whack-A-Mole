const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.score');
const pop = document.querySelector('#pop');

let fBefore;
let done;
let skor;

function random(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const fRandom = tanah[t];
    if(fRandom == fBefore) {
        random(tanah);
    }
    fBefore = fRandom;
    return fRandom;
}

function timeRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function mouseCome() {
    const tRandom = random(tanah);
    const waktuRandom = timeRandom(300, 900);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!done) {
            mouseCome();
        }
    }, waktuRandom);
}

function mulai() {
    done = false;
    skor = 0;
    papanSkor.textContent = 0;
    mouseCome();
    setTimeout(() => {
        done = true;
    }, 10000);
}

function hit() {
    skor++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    papanSkor.textContent = skor;
}

tikus.forEach(t => {
    t.addEventListener('click', hit);
});
