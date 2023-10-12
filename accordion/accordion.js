const icon = document.getElementsByClassName("icon");

for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function handleClick(event) {
    icon[i].parentElement.classList.toggle("open");
  });
}
