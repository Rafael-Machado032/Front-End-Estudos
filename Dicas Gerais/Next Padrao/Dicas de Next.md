**Pasta Raiz**
Cria pasta componets la fica os componestes e pode separa por pasta exemplo nome de pasta site, admin, common-> onde vai botão input etc 

**Paginas com barra**
Dentro do app cria a pasta com o nome que vai depois da barra e o arquivo page.tsx

**Thema Padrão**
global.css
O thema aplica de acordo do sistema caso quera mudar troque ou copia o conteudo do root:{} que é ligth dentro do @media (prefers-color-scheme: dark) {} que é dark

**Imagens**
Vai na pasta public com a pasta img pode separar por pasta tambem

**image-backgroud de div e Tag img**
Não precisa colocar todo caminho começa automaticamente pelo public ex: "bg-[url(/img/bg.jpg)]" " <img src="/img/img1.jpg" alt="img1" className='w-full' />"

**Impote de arquivos**
Se so a barra vai para o public para pasta rais vai pelo @/ 
ex: import  { Header }  from "@/components/Header";
detalhe: sem chaves do import so se for export defaut

**Atalhos da Extenção React**
rfc:    Cria um componente funcional padrão (com import React).
rfce:   Cria o componente e já coloca o export default no final do arquivo.
rafce:  (O favorito) Cria um componente usando Arrow Function com export default. É o padrão mais moderno.
tsrfc:  Versão para TypeScript (já tipa o componente).

useState:   Cria a estrutura completa do estado: const [state, setState] = useState(initialState).
useEffect:  Cria o esqueleto do useEffect com a lista de dependências.
useContext: Cria a estrutura para consumir um contexto.

imr:    Importa o React (import React from 'react').
clg:    Atalho rápido para console.log(object).
imp:    Importação padrão (import moduleName from 'module').

## Execultar o servidor
npm run dev

## Limpar cache
rmdir /s /q .next

## Estrutura
layout.tsx  -> Moudura da pagina o que não muda
page.tsx    -> Parte principal que muda sem precisar sair da pagina