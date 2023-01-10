const toggleBtn = document.getElementById('togglebtn')
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
}
else {
    console.log("error")
}

function clickEvent(str) {
    // alert("Who!! You have discovered");
    document.getElementById("KY").classList.remove("active")
    document.getElementById("votc").classList.remove("active")
    document.getElementById("MS").classList.remove("active")
    document.getElementById("COS").classList.remove("active")
    document.getElementById("PTRS").classList.remove("active")
    document.getElementById("OGL").classList.remove("active")
    document.getElementById(str).classList.add("active")
    console.log(" WOrking onclick")
}

function clickfxn(ID) {
    document.getElementById("6").classList.remove("activate")
    document.getElementById("2").classList.remove("activate")
    document.getElementById("3").classList.remove("activate")
    document.getElementById("4").classList.remove("activate")
    document.getElementById("5").classList.remove("activate")
    document.getElementById("1").classList.remove("activate")
    document.getElementById(ID).classList.add("activate")

    console.log("btn working")
}