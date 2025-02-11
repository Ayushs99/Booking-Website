document.querySelector(".loginregister span").addEventListener("click", back);
function back() {
    window.location.href = "register.html";
}
document.querySelector(".btn").addEventListener("click", prevent)
function prevent(event) {
    event.preventDefault();
    var email = document.querySelector("#email").value.trim();
    var password = document.querySelector("#password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }
    window.location.href = "main.html";
}