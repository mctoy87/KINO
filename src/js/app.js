// Globals
const loginButton = document.getElementById('login');
const formWindow = document.getElementById('form-window');
const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        this.scrollPosition = window.scrollY;
        document.body.style.cssText = `
            overflow: hidden;
            padding-right: ${window.innerWidth - document.body.offsetWidth - 1}px
        `;
        document.documentElement.style.scrollBehavior = 'unset';
    },
    enabledScroll() {
        document.body.style.cssText = '';
        window.scroll({top: scrollController.scrollPosition})
        document.documentElement.style.scrollBehavior = '';
    }
}
loginButton.addEventListener('click', handleLogin);

// Init Logic

// Event Logic
function handleLogin(event) {
    overlay.classList.remove('hide');
    scrollController.disabledScroll();
}

// function handleScroll(event) {
//     // event.preventDefault();
//     window.scrollTo(0, 0);
//     console.log(event);
// }