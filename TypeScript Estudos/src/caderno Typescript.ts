/*Para compilar automaticamente deve-se executar
o comando `tsc --watch` no terminal, na pasta do projeto.*/
// Para compilar uma vez, basta executar o comando `tsc`

// Quando crio uma varialvel, o TypeScript já infere o tipo dela
let nome_teste = "João"; // string
let idade_teste = 30; // number
let ativo_teste = true; // boolean
// No JavaScript, não é necessário declarar o tipo da variável.
// pois posso atribuir qualquer valor a ela depois, sendo string, number ou boolean.

// No TypeScript, é possível declarar o tipo da variável explicitamente.
let nome_teste2: string = "João";
let idade_teste2: number = 30;
let ativo_teste2: boolean = true;
// Se eu tentar atribuir um valor de tipo diferente, o TypeScript irá gerar um erro.
// nome_teste2 = 30; // Erro: Type 'number' is not assignable to type 'string'.
// No TypeScript não é possivel declarar uma variável com o mesmo nome de uma variável já declarada em outro arquivo.