// aqui vai um contador e um código para mudar as cores

// define um valor inicial de fichas
let count = 1;
// seleciona a quantidade de fichas, os botões e a div que contém toda a página
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const page = document.querySelector("body");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count *= 2; // Duplicar o valor ao invés de diminuir
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 10; //ao resetar o valor não se torna 10
    }

    if (count % 2 !== 0 && count !== 0) {
      value.style.color = "white";
      value.textContent = count;
      page.style.backgroundColor = "purple";
    }
    if (count % 2 === 0 && count !== 0) {
      value.style.color = "purple";
      value.textContent = count;
      page.style.backgroundColor = "white";
    }
    if (count === 0) {
      value.style.color = "black";
      value.textContent = count;
      page.style.backgroundColor = "white";
    }
    console.log(count);
  });
});
