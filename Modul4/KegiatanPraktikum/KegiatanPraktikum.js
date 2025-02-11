var myText = document.getElementById("myText");
var styleList = document.getElementById("styleList");

styleList.addEventListener("change", function() {
    var selectedValue = styleList.value;
    switch(selectedValue) {
        case "normal":
            myText.style.fontWeight = "normal";
            myText.style.fontStyle = "normal";
            myText.style.textDecoration = "none";
            break;
        case "bold":
            myText.style.fontWeight = "bold";
            myText.style.fontStyle = "normal";
            myText.style.textDecoration = "none";
            break;
        case "italic":
            myText.style.fontWeight = "normal";
            myText.style.fontStyle = "italic";
            myText.style.textDecoration = "none";
            break;
        case "underline":
            myText.style.fontWeight = "normal";
            myText.style.fontStyle = "normal";
            myText.style.textDecoration = "underline";
            break;
        case "style":
            myText.style.fontWeight = "normal";
            myText.style.fontStyle = "normal";
            myText.style.textDecoration = "normal";
            myText.style.backgroundColor = "yellow";
            break;
    }
})