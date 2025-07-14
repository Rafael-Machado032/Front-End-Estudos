// Ao execultar o comando `tsc classe.ts` o arquivo `classe.js` será gerado



class Curso {
    canal: string;
    curso: string;
    constructor(canal: string, curso: string) {
        this.canal = canal;
        this.curso = curso;
    }
}
let aula = new Curso("Curso em Vídeo", "TypeScript");
console.log(`Curso: ${aula.curso}, Canal: ${aula.canal}`);