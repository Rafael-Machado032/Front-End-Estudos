import Topo from "@/components/Topo";
import Card from "@/components/Card";
import CardInterface from "@/components/CardInterface";
import CardFuncao from "@/components/CardFuncao";

function calcularDesconto(preco: number, desconto?: number): number {
    if (desconto) {
        return preco - (preco * desconto) / 100;
    }
    return preco;
}

export default function Componentes() {
    return (
        <div>
            <Topo />
            <div>
                <Card produto={{ id: 1, nome: "Mouse" }} preco={100} />
                <CardInterface produto={{ id: 2, nome: "Teclado" }} preco={200}  />
                <CardFuncao produto={{ id: 3, nome: "Monitor" }} preco={300} desconto={50} funcao={calcularDesconto} />
            </div>
            <p>Esta é a página de componentes.</p>
        </div>
    );
}
