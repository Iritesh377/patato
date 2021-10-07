$(document).ready(function () {

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');


    hamberger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });

    // MOveToTup

    var MovetoTop = document.querySelector(".MovetoTop")
    var rootElement = document.documentElement

    function handleScroll() {
        // Do something on scroll
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
        if ((rootElement.scrollTop / scrollTotal) > 0.80) {
            // Show button
            MovetoTop.classList.add("showBtn")
        } else {
            // Hide button
            MovetoTop.classList.remove("showBtn")
        }
    }

    function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    MovetoTop.addEventListener("click", scrollToTop)
    document.addEventListener("scroll", handleScroll);
    document.addEventListener('contextmenu', event => event.preventDefault());

});