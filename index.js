
const buttons = document.querySelectorAll(".btn");
const resultBarreH3 = document.getElementById("result");


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        resultBarreH3.textContent += event.target.id;
    });
});


equal.addEventListener('click', () => {
    //eval est une function intern a js qui calcule mathematiquement ce qui entre les parentheses
    resultBarreH3.textContent = eval(resultBarreH3.textContent);
});

clear.addEventListener('click', () => {
    resultBarreH3.textContent = " ";
})
