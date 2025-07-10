"use strict";
// Ao execultar o comando `tsc classe.ts` o arquivo `classe.js` será gerado
// porem o arquivo gerado sera uma versão mais antiga do JavaScript
class Curso {
    canal;
    curso;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let aula = new Curso("Curso em Vídeo", "TypeScript");
console.log(`Curso: ${aula.curso}, Canal: ${aula.canal}`);
