
const configdvg = {
    endpoint: './produtos.json',
}
const dvg = (configdvg) => {
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Agora você pode trabalhar com os dados JSON aqui
    })
    .catch(error => {
        console.error('Erro ao buscar o arquivo JSON:', error);
    });
}
