const codeInput = document.getElementById("code-input");
const lockButton = document.querySelector(".lock-button");

lockButton.addEventListener("click", toggleLock);
document.querySelector(".copy-button").addEventListener("click", copyCode);

let isLocked = false;

function toggleLock() {
    isLocked = !isLocked;
    lockButton.textContent = isLocked ? "Unlock" : "Lock";
    codeInput.disabled = isLocked;
    codeInput.classList.toggle("locked", isLocked);
}

function copyCode() {
    if (!isLocked) {
        codeInput.select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert("Code copied to clipboard");
    }
}