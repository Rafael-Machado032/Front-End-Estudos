**use cliente**
Se usar qualquer tipo de interatividade é obrigatorio usar 'use cliente'

useState() (para guardar dados que mudam).
useEffect() (para rodar código quando a página carrega e gerar algum evento no parametro fina).
useContext(), useReducer(), etc.

onClick={...}
onChange={...}
onSubmit={...}

**useState**
const [estado, setEstado] = useState(ValorInicial)
estado ->                   Variavel do valor atual
setEstado ->                Função para modificar o valor do estado
Obs:Se usar uma função nele voce consegue pegar o valor do estado usado parametro na função
Ex:setEstado((estadoatual)=>{
    const proximo = estadoatual + 1;
    return proximo; 
})
useState(ValorInicial) ->   Como va começar nada ou algum valor

Ex:
const [pagina, setPagina] = useState(0);
-> Uso setPagina para setar o valor
<button onClick={() => setPagina(1)}> Ir para página 2 </button>
-> Uso da pagina para pegar o valor
<div style={{ transform: `translateX(-${pagina * 100}%)` }}>

**useEffect**
É um função que execulta sozinho sem intervesão de ninguem
Tem um ciclo de vida onde nasce execulta e morre(limpa)

useEffect(() => {
  Carrega a pagina execulta e aqui
  return () => {
    O return guarda na memoria e so execulta quando termina (morre)
  }
}, [variavel])

Com variavel Ao modificar esse parametro morre o anterior com o return e comeca tudo de novo
Sem variavel So execulta um unica vez e depois de sair da pagina execulta o return e morre

**Construção de Elemento**
 Ele percorre um array e, para cada item, ele devolve algo novo (geralmente um componente HTML)
lista.map((item, index, array) => { ... })
item     -> conteudo do array
index    -> Posição do array opcional mais bastante usado Sempre começa no "0"
array    -> é lista em si opcional usado se quiser pegar o array.length
map(_,i) -> Pegarso o index

{lista.map((item) => (
    // O QUE ESTIVER AQUI DENTRO SERÁ CRIADO PARA CADA ITEM
    <div key={item.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <p className="text-gray-600 italic">"{item.texto}"</p>
        <h4 className="font-bold mt-2 text-blue-600">{item.nome}</h4>
    </div>
))}

O Elemento criado precisa do key e precisa de um id para o react não se confudir
pode usar o index do map em ultimo caso

**Transformar variavel em array**
{ length: variavel }             -> Assim vira um objeto
Array.from({ length: variavel }) -> Essa função transforma o objeto em um array