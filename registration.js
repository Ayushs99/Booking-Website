document.querySelector(".loginregister span").addEventListener("click", back);
function back() {
    window.location.href = "index.html";
}
document.querySelector(".btn").addEventListener("click", prevent)
function prevent(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value.trim();
    let number = document.querySelector("#number").value.trim();
    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#password").value.trim();

    if (name === "" || number === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }
    window.location.href = "main.html";
}  
