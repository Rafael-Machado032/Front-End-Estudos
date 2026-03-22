## Estrutura de Pasta
Nome da Pasta	O que colocar dentro?       Exemplo Real

app	            Rotas e Layouts	            layout.tsx, page.tsx
components	    Visual da interface	        Button.tsx, Aside.tsx
contexts	    Estado global / "Nuvem"	    ContextoNavegacao.tsx
services	    Conexão com Banco/API	    getDepoimentos.ts
hooks	        Funções de lógica React	    useAuth.ts
types	        Definições TypeScript	    AbaTypes.ts

(nomePasta)     Pasta com "()" serve para separar e é iguinorado pelo sistema de rota

## Contexto ou Context API
Serve para comunicação entre irmãos para mudança de estado.

*Todo arquivo de contexto profissional tem 3 partes obrigatórias:*
O createContext (O Tubo):           É onde você define o "espaço" na memória onde o dado vai morar.
O Provider (O Transmissor):         É o componente que "abraça" os outros. Ele tem o motor (useState) que faz o valor mudar.
O useContext (O Receptor/Hook):     É a ferramenta que os componentes filhos usam para "sugar" a informação do tubo.

*EX:*
'use client'; // Avisa ao Next que isso roda no navegador

import { createContext, useContext, useState, ReactNode } from 'react';

// 1. TIPAGEM: O contrato do que será compartilhado
type AbaId = "home" | "depoimento" | "mensagem";

interface NavegacaoProps {
  abaAtiva: AbaId;                   // O valor (ex: "home")
  setAbaAtiva: (aba: AbaId) => void; // A função de mudar o valor
}

// 2. CRIAÇÃO: O "tubo" de comunicação
const ContextoNavegacao = createContext<NavegacaoProps | undefined>(undefined);

// 3. PROVEDOR: O componente que gerencia a lógica
export function ProvedorNavegacao({ children }: { children: ReactNode }) {
  const [abaAtiva, setAbaAtiva] = useState<AbaId>("home");

  return (
    // Tudo que estiver dentro de 'children' terá acesso ao 'value'
    <ContextoNavegacao.Provider value={{ abaAtiva, setAbaAtiva }}>
      {children}
    </ContextoNavegacao.Provider>
  );
}

// 4. HOOK: O jeito fácil de usar o contexto
export const useNavegacao = () => {
  const context = useContext(ContextoNavegacao);
  if (!context) throw new Error("Esqueceu de colocar o Provedor no Layout!");
  return context;
};


