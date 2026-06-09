import Image from "next/image";
import Hero from "@/components/Hero"
import Descricao1 from "@/components/Descricao1";
import Descricao2 from "@/components/Descricao2";
import Descricao3 from "@/components/Descricao3";
import Portifolio from "@/components/Portifolio";
import Servico from "@/components/Servico";
import Formulario from "@/components/Formulario";


export default function Home() {
  return (
    <main>
      <Hero />
      <Descricao1 />
      <Descricao2/>
      <Descricao3/>
      <Portifolio/>
      <Servico/>
      <Formulario/>
    </main>
  );
}
