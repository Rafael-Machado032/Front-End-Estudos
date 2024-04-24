//Verificar versão do node 
//Usando Powershell: node --version; npm --version
//Usando cmd: node --version && npm --version

//Resultado:
// v20.11.1
// 10.2.4

//Instalando NodeRed no CMD:
//C:\Users\rafin>npm install -g --unsafe-perm node-red

//E para executar
//C:\Users\rafin>node-red

//Para sair aperte "Ctrl + c"

//Por padrão ele roda na porta 1880 
//(http://127.0.0.1:1880/) mas para mudar entre com o comando:
//C:\Users\rafin>node-red -p 8080
//(http://127.0.0.1:8080/)
//Esse endereço localHost abre a plataforma para programação

//*Tipos de nós

//Inject    -> Nó de incio: Injeta uma mensagem porem não necessariamente precisa começar com ele.
//          Para alterar os parâmetros da injeção de um click dublo
//          Repetição configurada

//Debug     -> Nó de saída: Recebe o que foi injetado como se fosse um console
//          Escolhe um ou todos os recursos injetado

//Function  -> Nó de função: Pode fazer função em javascript
//          No inicio:
//          O código adicionado aqui será executado uma vez
//          sempre que o nó for iniciado.
//
//          Na mensagem:
//          Retorna uma mensagem
//
//          Na parada:
//          O código adicionado aqui será executado quando o nó
//          for interrompido ou reimplementado.
//
//          1 ou mais saídas e 1 ou mais entradas

//Switch    -> Nó de switch: Serve para dependendo da condição,
//           sair em um sada especifica

//Change    -> Nó de modificação: Serve para definir, mudar, mover ou apagar valores programados

//Template  -> Nó de apresentação: Serve para inserir um texto junto com o resultado


//*Funções Prontos
//Se não quiser usar programação nos nos de função existe nos ja pronto para baixar
//Menu > Gerenciar paleta > Instalar
//E procura o no com a função desejada ex: node-red-node-random

//*Variáveis Globais
//context é uma variável lido somente no nó criado invisível para outros nós
//ex:
var cont = context.get('contador') || 0;
cont++;
context.set('contador',cont);
msg.payload = cont;
return msg;

//flow é uma variável de fluxo lido somente por nós do mesmo fluxo
var cont = flow.get('contador') || 0;
cont++;
flow.set('contador',cont);
msg.payload = cont;
return msg;

//global é uma variável global lido por todos nós
var cont = global.get('contador') || 0;
cont++;
global.set('contador',cont);
msg.payload = cont;
return msg;

//Manipulando Mensagem
//ex:

var doc = {
    "nome":"Rafael",
    "sobrenome":"Machado",
    "curso":"Node RED",
    "Telefone":["9999-9999","8888-8888","7777-7777"]
}
msg.payload = doc
return msg;

//No debug podemos configurar para imprimir so uma variável do doc
//ex:
//Output | msg. | payload.nome         |

//Podemos imprimir também um índice do array
//Output | msg. | payload.telefone[1]  |





