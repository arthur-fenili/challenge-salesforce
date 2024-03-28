import Image from "next/image";
import ContentCard from "@/components/ContentCard";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main className="flex-auto">
        <div className="flex flex-col items-center justify-evenly p-10">
          <div className="flex flex-col items-center">
            <Link href="https://www.linkedin.com/in/arthur-fenili">
              <h1 className="font-bold text-4xl text-blue-500 pb-2">Experimente o Salesforce Starter Suite gratuitamente.</h1>
            </Link>

            <p className="text-xl">Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo.</p>
            <p className="text-xl">Não há nada para instalar. Não é necessário cartão de crédito.</p>
          </div>
          <div className=" pt-10">
            <Image src="/img-teste-gratis.webp" width={550} height={375} alt="Imagem teste grátis" />
          </div>
        </div>

        <br />
        
        <div className="flex flex-col items-center justify-evenly p-10">
          <h1 className="font-bold text-4xl text-blue-500 pb-2">O que é o Salesforce Starter Suite?</h1>
          <p className="text-xl">O Salesforce Starter Suite é um conjunto de aplicativos de CRM que ajuda pequenas empresas a gerenciar leads, oportunidades e clientes.</p>
          <p className="text-xl">Ele inclui aplicativos de vendas, marketing e atendimento ao cliente.</p>
        </div>

        <br />

        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl text-blue-500 pb-2">O que há de novo na Salesforce?</h1>
          <div className="flex flex-row items-center justify-evenly p-5 mt-9">
            <ContentCard
            image="/exemplo-novidade-1.jpg"
            title="Breve descrição sobre a novidade número 1." 
            link="https://www.linkedin.com/in/arthur-fenili"/>

            <ContentCard
            image="/exemplo-novidade-2.jpg"
            title="Outra breve descrição sobre a novidade número 2."
            link="https://www.linkedin.com/in/arthur-fenili"/>

            <ContentCard
            image="/exemplo-novidade-3.jpg"
            title="Insira aqui a novidade número 3 em uma descrição rápida."
            link="https://www.linkedin.com/in/arthur-fenili"/>
          </div>
        </div>
      </main>
    </>
  );
}
