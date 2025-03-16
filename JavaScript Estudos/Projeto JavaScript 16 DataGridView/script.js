
const configdvg = {
    endpoint: './produtos.json',
    idDestino:"dvgDados",
}
const dvg = (configdvg) => {
    const dvgDados = document.getElementById(configdvg.idDestino);
    dvgDados.innerHTML = "";
    fetch(configdvg.endpoint)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        // Agora você pode trabalhar com os dados JSON aqui
        response.forEach(element => {
            const dgvLinha = document.createElement('div');
            dgvLinha.setAttribute('class', 'dvgLinha');

            const c1 = document.createElement('div');
            c1.setAttribute('class', 'c1');
            c1.innerHTML = element.id;
            dgvLinha.appendChild(c1);

            const c2 = document.createElement('div');
            c2.setAttribute('class', 'c2');
            c2.innerHTML = element.produto;
            dgvLinha.appendChild(c2);

            const c3 = document.createElement('div');
            c3.setAttribute('class', 'c3');
            c3.innerHTML = element.marca;
            dgvLinha.appendChild(c3);

            const c4 = document.createElement('div');
            c4.setAttribute('class', 'c4');
            c4.innerHTML = element.modelo;
            dgvLinha.appendChild(c4);

            const c5 = document.createElement('div');
            c5.setAttribute('class', 'c5');
            dgvLinha.appendChild(c5);

            const imgVisibility = document.createElement('img');
            imgVisibility.setAttribute('class', 'dvgIcone');
            imgVisibility.setAttribute('src', 'img/visibility_black.png');
            c5.appendChild(imgVisibility);
            
            const imgEdit = document.createElement('img');
            imgEdit.setAttribute('class', 'dvgIcone');
            imgEdit.setAttribute('src', 'img/edit_black.png');
            c5.appendChild(imgEdit);

            const imgDelete = document.createElement('img');
            imgDelete.setAttribute('class', 'dvgIcone');
            imgDelete.setAttribute('src', 'img/delete_black.png');
            c5.appendChild(imgDelete);

            

            
            dvgDados.appendChild(dgvLinha);

        });
    })
    .catch(error => {
        console.error('Erro ao buscar o arquivo JSON:', error);
    });
}

dvg(configdvg);