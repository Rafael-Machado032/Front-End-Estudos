//Função para obter o maior z-index de um elemento
const maiorzindex = (element) => {
    return Math.max(
        ...Array.from(
            document.querySelectorAll('*')).map(el => parseInt(getComputedStyle(el).zIndex) || 0),
        parseInt(getComputedStyle(element).zIndex)
    );
}
