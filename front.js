const menu1 = document.getElementById("cl1");
const menu2 = document.getElementById("cl2");
let cl1_active = false;
let cl2_active = false;

menu1.addEventListener("click",(event) => {
    if(!cl1_active && !cl2_active) {
        cl1_active = true;
        cl2_active = false;
        menu1.style.width = `${85}%`;
        menu2.style.width = `${15}%`;
        menu2.style.backgroundColor = "black";
        menu1.style.backgroundColor = "red";
    }
    if(cl2_active) {
        cl1_active = true;
        cl2_active = false;
        menu1.style.width = `${85}%`;
        menu2.style.width = `${15}%`;
        menu2.style.backgroundColor = "black";
        menu1.style.backgroundColor = "red";
    }
})
menu2.addEventListener("click",(event) => {
    if(!cl1_active && !cl2_active) {
        cl2_active = true;
        cl1_active = false;
        menu1.style.width = `${15}%`;
        menu2.style.width = `${85}%`;
        menu1.style.backgroundColor = "black";
        menu2.style.backgroundColor = "red";
    }
    if(cl1_active) {
        cl2_active = true;
        cl1_active = false;
        menu1.style.width = `${15}%`;
        menu2.style.width = `${85}%`;
        menu1.style.backgroundColor = "black";
        menu2.style.backgroundColor = "red";
    }
})

const music_1 = document.querySelectorAll(".m1");
const music_2 = document.querySelectorAll(".m2");
const music_3 = document.querySelectorAll(".m3");
const music_4 = document.querySelectorAll(".m4");
const music_5 = document.querySelectorAll(".m5");
const music_6 = document.querySelectorAll(".m6");

let m1_active = false;
let m2_active = false;
let m3_active = false;
let m4_active = false;
let m5_active = false;
let m6_active = false;

function resetGenreColors() {
    music_1.forEach(element => element.style.backgroundColor = "gainsboro");
    music_2.forEach(element => element.style.backgroundColor = "gainsboro");
    music_3.forEach(element => element.style.backgroundColor = "gainsboro");
    music_4.forEach(element => element.style.backgroundColor = "gainsboro");
    music_5.forEach(element => element.style.backgroundColor = "gainsboro");
    music_6.forEach(element => element.style.backgroundColor = "gainsboro");
}

function activate() {
    m1_active = false;
    m2_active = false;
    m3_active = false;
    m4_active = false;
    m5_active = false;
    m6_active = false;
}

music_1.forEach(item => {
    item.addEventListener("click", event => {
        if (!m1_active) {
            activate()
            m1_active = true;
            resetGenreColors();
            item.style.backgroundColor = "gray";
        }
    });
});

// Repeat this pattern for music_2, music_3, music_4, music_5, and music_6

music_2.forEach(item => {
    item.addEventListener("click", event => {
        if (!m2_active) {
            activate()
            m2_active = true;
            resetGenreColors();
            item.style.backgroundColor = "gray";
        }
    });
});

// Repeat this for music_3, music_4, music_5, and music_6

music_3.forEach(item => {
    item.addEventListener("click", event => {
        if (!m3_active) {
            activate()
            m3_active = true;
            resetGenreColors();
            item.style.backgroundColor = "gray";
        }
    });
});
music_4.forEach(item => {
    item.addEventListener("click", event => {
        if (!m4_active) {
            activate()
            m4_active = true;
            resetGenreColors();
            item.style.backgroundColor = "gray";
        }
    });
});
music_5.forEach(item => {
    item.addEventListener("click", event => {
        if (!m5_active) {
            activate()
            m5_active = true;
            resetGenreColors();
            item.style.backgroundColor = "gray";
        }
    });
});
music_6.forEach(item => {
    item.addEventListener("click", event => {
        if (!m6_active) {
            activate()
            m6_active = true;
            resetGenreColors();
            item.style.backgroundColor = "gray";
        }
    });
});