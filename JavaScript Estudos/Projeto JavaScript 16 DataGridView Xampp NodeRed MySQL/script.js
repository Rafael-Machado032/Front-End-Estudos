
const configdvg = {
    endpoint: 'http://localhost:1880/produtos',
    idDestino: "dvgDados",
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
                c1.innerHTML = element.n_id_produtos;
                dgvLinha.appendChild(c1);

                const c2 = document.createElement('div');
                c2.setAttribute('class', 'c2');
                c2.innerHTML = element.s_produto_produtos;
                dgvLinha.appendChild(c2);

                const c3 = document.createElement('div');
                c3.setAttribute('class', 'c3');
                c3.innerHTML = element.s_marca_produtos;
                dgvLinha.appendChild(c3);

                const c4 = document.createElement('div');
                c4.setAttribute('class', 'c4');
                c4.innerHTML = element.s_modelo_produtos;
                dgvLinha.appendChild(c4);

                const c5 = document.createElement('div');
                c5.setAttribute('class', 'c5');
                dgvLinha.appendChild(c5);

                const imgVisibility = document.createElement('img');
                imgVisibility.setAttribute('class', 'dvgIcone');
                imgVisibility.setAttribute('src', 'img/visibility_black.png');
                imgVisibility.addEventListener('click', (evt) => {
                    document.querySelector('.janelaView').classList.remove('ocultar');
                    const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                    const endpoint = `http://localhost:1880/produtos/${id}`;
                    fetch(endpoint)
                        .then(response => response.json())
                        .then(response => {
                            console.log(response);
                            document.querySelector('#f_id').value = response[0].n_id_produtos;
                            document.querySelector('#f_produto').value = response[0].s_produto_produtos;
                            document.querySelector('#f_marca').value = response[0].s_marca_produtos;
                            document.querySelector('#f_modelo').value = response[0].s_modelo_produtos;
                        })
                        .catch(error => {
                            console.error('Erro ao buscar o arquivo JSON:', error);
                        });
                    console.log('Clicou no visibility');
                });
                c5.appendChild(imgVisibility);

                const imgEdit = document.createElement('img');
                imgEdit.setAttribute('class', 'dvgIcone');
                imgEdit.setAttribute('src', 'img/edit_black.png');
                imgEdit.addEventListener('click', (evt) => {
                    document.querySelector('#janelaEditar').classList.remove('ocultar');
                    const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                    const endpoint = `http://localhost:1880/produtos/${id}`;
                    fetch(endpoint)
                        .then(response => response.json())
                        .then(response => {
                            console.log(response);
                            document.querySelector('#f_ideditar').value = response[0].n_id_produtos;
                            document.querySelector('#f_produtoeditar').value = response[0].s_produto_produtos;
                            document.querySelector('#f_marcaeditar').value = response[0].s_marca_produtos;
                            document.querySelector('#f_modeloeditar').value = response[0].s_modelo_produtos;
                        })
                        .catch(error => {
                            console.error('Erro ao buscar o arquivo JSON:', error);
                        });
                    console.log('Clicou no edit');
                });
                c5.appendChild(imgEdit);

                const imgDelete = document.createElement('img');
                imgDelete.setAttribute('class', 'dvgIcone');
                imgDelete.setAttribute('src', 'img/delete_black.png');
                imgDelete.addEventListener('click', (evt) => {
                    const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                    const linha = evt.target.parentNode.parentNode;

                    const endpoint = `http://localhost:1880/removeprodutos/${id}`;

                    fetch(endpoint)
                        .then(response => {
                            if (response.status == 200) {
                                alert('Produto removido com sucesso');
                                linha.remove();
                            } else {
                                alert('Erro ao remover o produto');
                            }
                            return response.json();
                        })


                    console.log('Clicou no delete');
                });
                c5.appendChild(imgDelete);

                dvgDados.appendChild(dgvLinha);

            });
        })
        .catch(error => {
            console.error('Erro ao buscar o arquivo JSON:', error);
        });
}

dvg(configdvg);

document.querySelector('.btn').addEventListener('click', (evt) => {
    document.querySelector('.janelaView').classList.add('ocultar');
});
document.querySelector('#btn_gravar').addEventListener('click', (evt) => {
    document.querySelector('#janelaEditar').classList.add('ocultar');
    const id = document.querySelector('#f_ideditar').value;
    const produto = document.querySelector('#f_produtoeditar').value;
    const marca = document.querySelector('#f_marcaeditar').value;
    const modelo = document.querySelector('#f_modeloeditar').value;
    const endpoint = `http://localhost:1880/updateprodutos/${id}/${produto}/${marca}/${modelo}`;
    fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            dvg(configdvg);
        })
        .catch(error => {
            console.error('Erro ao buscar o arquivo JSON:', error);
        });
    console.log('Clicou no gravar');
});
document.querySelector('#btn_cancelar').addEventListener('click', (evt) => {
    document.querySelector('#janelaEditar').classList.add('ocultar');
});