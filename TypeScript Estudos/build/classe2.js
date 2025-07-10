"use strict";
// Para gerar o arquivo `classe.js` com a versão mais recente do JavaScript
// deve-se executar o comando `tsc classe2.ts --target ES2022`
// ou `tsc classe2.ts --target ESNext`
class Curso2 {
    canal;
    curso;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let aula2 = new Curso2("Curso em Vídeo", "TypeScript");
console.log(`Curso: ${aula2.curso}, Canal: ${aula2.canal}`);
