**Arrow Function**
Tradicional:
()=>{
    return
}
Execulta a função e retorna no return

Simplificado:
()=>()
Execulta e retorna o valor sem o return pois ja ta embutido

**.length**
Conta apartir do 1

**Transformar variavel em array**
{ length: variavel }             -> Assim vira um objeto para valores numericos
Array.from({ length: variavel }) -> Essa função transforma o objeto em um array
Ex: 
O Array.from aceita um segundo parâmetro: uma função que decide o que vai dentro de cada "caixa".
// Criar um array de 1 a 5 para os seus "Pontinhos" ou Estrelas de avaliação
const estrelas = Array.from({ length: 5 }, (_, i) => i + 1);
// Resultado: [1, 2, 3, 4, 5]

const nome = "BOLD";
const letras = Array.from(nome); 
// Resultado: ["B", "O", "L", "D"]


**Corta um array**
Corta parte de um array
array.slice(onde começa , onde termina)
ex: nomes.slice(0, 3)


