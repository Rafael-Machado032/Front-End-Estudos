import React from "react";

export default function JogoDaVelha() {

    //Estilos
    const tabu = {
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "0",
        padding: "0"
    };
    const tabuLinha = {
        display: "flex",
        flexDirection: "row",
        margin: "0",
        padding: "0",
        height: "100px"
    };
    const casa = {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        border: "1px solid #000",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "50px",
        fontWeight: "bold",
        cursor: "pointer",
        margin: "0",
        padding: "0"
    };



    const jogoInicial = [
        ["", "", ""], // Linha 1 -> posição (0,0 a 0,2)
        ["", "", ""], // Linha 2 -> posição (1,0 a 1,2)
        ["", "", ""]  // Linha 3 -> posição (2,0 a 2,2)
    ];
    const [jogo, setJogo] = React.useState(jogoInicial);
    const [jogador, setJogador] = React.useState("X");
    const [jogando, setJogando] = React.useState(true);

    const tabuleiro = (jogo) => { // Cria o tabuleiro do jogo
        return (
            <div style={tabu}>
                <div style={tabuLinha}>
                    <div style={casa} data-pos="00" onClick={(e) => jogar(e)}>{jogo[0][0]}</div>
                    <div style={casa} data-pos="01" onClick={(e) => jogar(e)}>{jogo[0][1]}</div>
                    <div style={casa} data-pos="02" onClick={(e) => jogar(e)}>{jogo[0][2]}</div>
                </div>
                <div style={tabuLinha}>
                    <div style={casa} data-pos="10" onClick={(e) => jogar(e)}>{jogo[1][0]}</div>
                    <div style={casa} data-pos="11" onClick={(e) => jogar(e)}>{jogo[1][1]}</div>
                    <div style={casa} data-pos="12" onClick={(e) => jogar(e)}>{jogo[1][2]}</div>
                </div>
                <div style={tabuLinha}>
                    <div style={casa} data-pos="20" onClick={(e) => jogar(e)}>{jogo[2][0]}</div>
                    <div style={casa} data-pos="21" onClick={(e) => jogar(e)}>{jogo[2][1]}</div>
                    <div style={casa} data-pos="22" onClick={(e) => jogar(e)}>{jogo[2][2]}</div>
                </div>
            </div>
        )
    }

    const jogar = (e) => { // Função para jogar
        if (jogando && verificaEspacoVazio(e)) { //Aqui verifica se o jogo está ativo (jogando) e se o espaço clicado está vazio, usando a função verificaEspacoVazio(e)
            const [linha, coluna] = retPos(e); //Pega a posição do clique
            const novoJogo = [...jogo]; //Cria uma cópia do estado atual do jogo
            novoJogo[linha][coluna] = jogador; //Atualiza a posição clicada com o símbolo do jogador
            setJogo(novoJogo);  //Atualiza o estado do jogo
            setTimeout(() => { // Para dar tempo do simbolo aparecer antes de dar a vitoria
                //Verifica se o jogador atual venceu
                if (verificaVitoria()) {
                    alert(`Jogador ${jogador} venceu!`);
                    setJogando(false);
                } else {
                    if (jogoEmpatado()) {
                        alert(`Empate!`);
                        setJogando(false);
                    }
                    trocaJogador();
                }
            }, 100); // Pausa de 100ms antes de executar
        }
    }

    const verificaEspacoVazio = (e) => { // Verifica se a casa clicada está vazia
        const [linha, coluna] = retPos(e);
        if (jogo[linha][coluna] === "") {
            return true;
        }
        return false;
    }

    const retPos = (e) => { // Retorna a posição da casa clicada
        const pos = e.target.getAttribute("data-pos");
        const linha = parseInt(pos[0]);
        const coluna = parseInt(pos[1]);
        return [linha, coluna];
    }

    const trocaJogador = () => { // Troca o jogador
        setJogador(jogador === "X" ? "O" : "X");
    }

    const verificaVitoria = () => { // Verifica se o jogador atual venceu
        // Verifica linhas
        for (let i = 0; i < 3; i++) {
            if (jogo[i][0] === jogador && jogo[i][1] === jogador && jogo[i][2] === jogador) {
                return true;
            }
        }
        // Verifica colunas
        for (let i = 0; i < 3; i++) {
            if (jogo[0][i] === jogador && jogo[1][i] === jogador && jogo[2][i] === jogador) {
                return true;
            }
        }
        // Verifica diagonais
        if (jogo[0][0] === jogador && jogo[1][1] === jogador && jogo[2][2] === jogador) {
            return true;
        }
        if (jogo[0][2] === jogador && jogo[1][1] === jogador && jogo[2][0] === jogador) {
            return true;
        }
        return false;
    }

    const jogoEmpatado = () => { // Verifica se o jogo empatou
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (jogo[i][j] === "") {
                    return false;
                }
            }
        }
        return true;
    }

    const BtnJogarNovamente = () => { // Botão para jogar novamente
        if (!jogando) {
            return (
                <button onClick={reiniciar}>Jogar Novamente</button>
            );
        }
    }

    const reiniciar = () => { // Reinicia o jogo
        setJogo(jogoInicial);
        setJogador("X");
        setJogando(true);
    }


    return (
        <div>
            <h1>Jogo da Velha</h1>
            {tabuleiro(jogo)}
            <BtnJogarNovamente /> {/*quando a função retorna JSX pode usar essa expressão */}
            {/*JSX Quando retorna em HTML */}
        </div>
    );
};