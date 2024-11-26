// Globals
const loginButton = document.getElementById('login');
const formWindow = document.getElementById('form-window');
const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        this.scrollPosition = window.scrollY;
        document.body.style.cssText = `
            overflow: hidden;
            position: fixed;
            top: -${this.scrollPosition}px;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px
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
    overlay.style.cssText = `
    padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `
    scrollController.disabledScroll();
}
