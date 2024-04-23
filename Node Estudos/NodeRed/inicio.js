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
//          






