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

const toastBox = document.querySelector('.toastBox');

function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast', "success");
    toast.innerHTML = '<button class="close-btn">X</button>' + message;
    toastBox.appendChild(toast);

    const closeButton = toast.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
        toast.remove();
    });

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
