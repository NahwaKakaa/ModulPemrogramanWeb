const commentBox = 
document.getElementById("commentBox");
const typingMessage = 
document.getElementById("typingMessage");
const output = 
document.getElementById("output");

function showComment() {
  const input = commentBox.value;
  if (input) {
    output.innerHTML = "<b>Rifky's </b>: " + input;
    typingMessage.innerHTML = "";
    commentBox.value = "";
  } else {
    output.innerHTML = "Komentar tidak boleh kosong!";
  }
}

function showTypingMessage() {
  const input = commentBox.value;
  if (input) {
    typingMessage.innerHTML = "Anda Sedang Mengetik...";
  } else {
    typingMessage.innerHTML = "";
  }
}
