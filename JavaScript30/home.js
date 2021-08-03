const body = document.querySelector("body");
const homeDiv = document.createElement("div");

homeDiv.classList.add("return-home");
homeDiv.innerHTML = '<a href="../../index.html"><i class="fas fa-arrow-alt-circle-left"></i></a>';
body.prepend(homeDiv);
