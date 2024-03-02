function enlargeImage(element) {
  element.getElementsByTagName("img")[0].style.transform = "scale(1.1)";
}

function resetImage(element) {
  element.getElementsByTagName("img")[0].style.transform = "scale(1)";
}
