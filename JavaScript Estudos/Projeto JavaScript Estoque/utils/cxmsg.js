class Cxmsg {
    // static config = {
    //     titulo: 'Título',
    //     texto: 'Texto',
    //     cor: 'cor',
    //     ok: null,
    //     sim: null,
    //     nao: null
    // }

    static config = null;

    static mostrar = (config) => {
        this.config = config;

        const cxmsg_fundo = document.createElement('div');
        cxmsg_fundo.id = 'cxmsg_fundo';
        cxmsg_fundo.className = 'cxmsg_fundo';
        document.body.appendChild(cxmsg_fundo);

        const cxmsg = document.createElement('div');
        cxmsg.id = 'cxmsg';
        cxmsg.className = 'cxmsg';
        cxmsg_fundo.appendChild(cxmsg);

        const titulo_cxmsg = document.createElement('div');
        titulo_cxmsg.id = 'titulo_cxmsg';
        titulo_cxmsg.className = 'titulo_cxmsg';
        if (config.cor) {
            titulo_cxmsg.style.backgroundColor = config.cor;
        } else {
            titulo_cxmsg.style.backgroundColor = '#007bff';
        }
        cxmsg.appendChild(titulo_cxmsg);

        const p_titulo = document.createElement('p');
        p_titulo.innerText = this.config.titulo;
        titulo_cxmsg.appendChild(p_titulo);

        const btn_fechar = document.createElement('img');
        btn_fechar.id = 'btn_fechar';
        btn_fechar.className = 'btn_fechar_cxmsg';
        btn_fechar.src = '../img/close.svg';
        btn_fechar.alt = 'X de fechar';
        btn_fechar.title = 'Fechar';
        titulo_cxmsg.appendChild(btn_fechar);

        const corpo_cxmsg = document.createElement('div');
        corpo_cxmsg.id = 'corpo_cxmsg';
        corpo_cxmsg.className = 'corpo_cxmsg';
        cxmsg.appendChild(corpo_cxmsg);

        const p_texto = document.createElement('p');
        p_texto.innerText = this.config.texto;
        corpo_cxmsg.appendChild(p_texto);

        const rodape_cxmsg = document.createElement('div');
        rodape_cxmsg.id = 'rodape_cxmsg';
        rodape_cxmsg.className = 'rodape_cxmsg';
        if (config.cor) {
            rodape_cxmsg.style.backgroundColor = config.cor;
        } else {
            rodape_cxmsg.style.backgroundColor = '#007bff';
        }
        cxmsg.appendChild(rodape_cxmsg);

        if (config.tipo == 'ok') {
            const btn_ok = document.createElement('button');
            btn_ok.id = 'btn_ok';
            btn_ok.className = 'btn_cxmsg';
            btn_ok.innerText = 'OK';
            rodape_cxmsg.appendChild(btn_ok);

            btn_ok.addEventListener('click', () => {
                if (this.config.ok) {
                    this.config.ok();
                }
                this.fechar();
            });
        } else if (config.tipo == 'sn') {
            const btn_sim = document.createElement('button');
            btn_sim.id = 'btn_sim';
            btn_sim.className = 'btn_cxmsg';
            btn_sim.innerText = 'Sim';
            rodape_cxmsg.appendChild(btn_sim);

            btn_sim.addEventListener('click', () => {
                if (this.config.sim) {
                    this.config.sim();
                }
                this.fechar();
            });

            const btn_nao = document.createElement('button');
            btn_nao.id = 'btn_nao';
            btn_nao.className = 'btn_cxmsg';
            btn_nao.innerText = 'Não';
            rodape_cxmsg.appendChild(btn_nao);

            btn_nao.addEventListener('click', () => {
                if (this.config.nao) {
                    this.config.nao();
                }
                this.fechar();
            });
        }

        btn_fechar.addEventListener('click', () => {
            this.fechar();
        });
    }

    static fechar = () => {
        const cxmsg_fundo = document.getElementById('cxmsg_fundo');
        if (cxmsg_fundo) {
            cxmsg_fundo.classList.add('ocultarpopup');
            setTimeout(() => {
                cxmsg_fundo.remove();
            }, 500);
        }
    }
}

export { Cxmsg }


/* <div id="cxmsg_fundo" class="cxmsg_fundo ocultarpopup">
    <div id="cxmsg" class="cxmsg">
        <div id="titulo_cxmsg" class="titulo_cxmsg">
            <p>Titulo</p>
            <img id="btn_fechar" class="btn_fechar_cxmsg" src="../img/close.svg" alt="X de fechar" title="Fechar"/>
        </div>

        <div id="corpo_cxmsg" class="corpo_cxmsg">
            <p>Mensagem</p>
        </div>

        <div id="rodape_cxmsg" class="rodape_cxmsg">
            <button id="btn_ok" class="btn_cxmsg">OK</button>
            <button id="btn_sim" class="btn_cxmsg">Sim</button>
            <button id="btn_nao" class="btn_cxmsg">Não</button>
        </div>
    </div>
</div> */
