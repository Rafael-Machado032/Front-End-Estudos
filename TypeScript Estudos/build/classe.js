"use strict";
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
