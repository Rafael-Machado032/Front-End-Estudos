"use strict";
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
