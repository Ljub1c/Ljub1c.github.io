function toggleCheck() {
    document.querySelector('.custom-checkbox').classList.toggle('checked');
}
function toggleCheck1() {
    document.querySelector('.custom-checkbox1').classList.toggle('checked');
}

const passwordInput = document.getElementById("password")
const passwordToggle = document.getElementById("password-toggle")

passwordToggle.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    passwordToggle.classList.toggle("off")
    passwordToggle.classList.toggle("on")
})
