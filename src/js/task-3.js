const text = document.querySelector("#text-click")
let clicks = 0
const clickerTexts = () => {
    clicks += 1;
    text.textContent = `Кількість натиснуто: ${clicks}`;
}
document.body.addEventListener("click", clickerTexts);

