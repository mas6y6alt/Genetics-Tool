document.addEventListener("DOMContentLoaded",() => {

    monohybrid_button = document.getElementById("monohybrid");
    monohybrid_button.addEventListener("click",() => {
        window.location.href = "/monohybrid.html"
    });

    monohybrid_button = document.getElementById("dihybrid");
    monohybrid_button.addEventListener("click",() => {
        window.location.href = "/dihybrid.html"
    });

});