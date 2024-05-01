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

//#Comum
//Inject        -> Nó de incio: Injeta uma mensagem porem não necessariamente precisa começar com ele.
//              Para alterar os parâmetros da injeção de um click dublo
//              Repetição configurada
//Debug         -> Nó de saída: Recebe o que foi injetado como se fosse um console
//              Escolhe um ou todos os recursos injetado

//#Função
//Function      -> Nó de função: Pode fazer função em javascript
//              No inicio:
//              O código adicionado aqui será executado uma vez
//              sempre que o nó for iniciado.
//
//              Na mensagem:
//              Retorna uma mensagem
//
//              Na parada:
//              O código adicionado aqui será executado quando o nó
//              for interrompido ou reimplementado.
//
//              1 ou mais saídas e 1 ou mais entradas
//Switch        -> Nó de switch: Serve para dependendo da condição,
//              sair em um sada especifica
//Change        -> Nó de modificação: Serve para definir, mudar, mover ou apagar valores programados
//Template      -> Nó de apresentação: Insere um texto junto com o resultado
//Range         -> Nó de mapeamento: Correlaciona valores entre 2 faixas 
//              ex:
//              Mapeie o intervalo de entrada:
//              de: 0 para: 10
//              para o intervalo alvo:
//              de: 0 para: 100
//
//              O valor coletado va ser entre 0 a 10
//              A função vai fazer tipo uma regra de 3 para correlacionar com outra faixa de valor
//              Exemplo insere o valor 4
//         
//              10 - 100        10x = 4 * 100
//              4 - x           x = 400 / 10
//                          x = 40
//              Outro exemplo é uma saída de um sensor de 0 a 12v
//              sendo 0v e igual -10° e 12v é igual 40° e ao receber 6v seria igual á 25°
//Delay         -> Nó de intervalo: Atrasa o evento por tempo programado
//Trigger       -> Nó de Gatilho: Ao ativar o gatilho fica disparando mensagem programada
//              podemos parar de dispara ao receber um valor especifico

//#Rede
//HTTP          -> Nó de web: Pode fazer chamadas via browser como API
//              EX: Na configuração do no HTTP setamos "aluno" no URL
//              http://127.0.0.1:1880/aluno?curso=Javascript Nesse exemplo passamos um parâmetro
//
//              Outra forma de passar o parâmetro é pela requisição prevista
//              EX: Na configuração do no HTTP setamos "/api/:nome" no URL prevendo o campo nome
//              http://127.0.0.1:1880/api/Rafael
//              Mais parâmetros
//              "/api/:nome/:idade/:profissão"
//              http://127.0.0.1:1880/api/Rafael/34/Tecnico
//HTTP Request  -> Nó de requisição http: Permite consultar url configurada nela

//#Sequencia
//Split         -> Nó de divisão: Divide a mensagem a partir do carácter definido e cria um array
//Join          -> Nó de junção: Junta as mensagem enviadas separadas setando no manual e 
//              a quantidade de mensagem

//#Analisador sintático
//HTML          -> Nó de seleção: Seleciona qualquer elemento dentro do HTML

//#Armazenamento
//File          -> No de armazenamento: Permite selecionar um arquivo para leitura
//mysql         -> Nó de Banco de Dados: As query é inserido no msg.topic e sai msg.payload

//#Dashboard
//                  Aba do dashboard
//
//  Layout: Organização de elementos do dashboard
//      tab: Pagina onde colocar elementos (Adiciona no menu sandwich)
//          group: Onde associamos os elementos
//          Todos os elementos são obrigados a associar no group
//  Site: Configuração geral da pagina do dashboard
//  Theme: Configuração visual da pagina do dashboard
//
//  Endereço do dashboard http://127.0.0.1:1880/ui/

//Button        -> Nó de botão: Manda a carga pra quem estiver o botão associado
//              A mensagem manda para msg.payload
//Text          -> Nó de texto de exibição: Exibe um texto que for mandado pra ele 
//Text Input    -> Nó de texto de envio: Envia o texto inserido nele
//              No delay vem configurado 300ms para envio auto mas se zeramos fica manual ou seja 
//              sera necessário um elemento para disparo
//Gauge         -> Nó gráfico de giro: Existe 4 tipos de gráficos gauge, donut, compass, level
//Slider        -> Nó de slide: Uma barra com uma bolinha de arrastar            


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





