const commentBox = document.getElementById("commentBox");
const typingMessage = document.getElementById("typingMessage");
const output = document.getElementById("output");

function showTypingMessage() {
    const input = commentBox.value;
    if (input) {
        typingMessage.innerHTML = "Anda Sedang Mengetik...";
    } else {
        typingMessage.innerHTML = "";
    }
}

function showComment() {
    const input = commentBox.value;
    if (input) {
        output.innerHTML = "<b>Javascript </b>: " + input;
        typingMessage.innerHTML = "";
        commentBox.value = "";
    } else {
        output.innerHTML = "Komentar tidak boleh kosong!";
    }
}