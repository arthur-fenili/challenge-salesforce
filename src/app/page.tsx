import Image from "next/image";
// import testegratis from ".../public/img-teste-gratis.jpg"

export default function Home() {
  return (
    <>
      <main className="flex-auto">
        <div className="flex flex-col items-center justify-evenly p-10">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl text-blue-500 pb-2">Experimente o Salesforce Starter Suite gratuitamente.</h1>

            <p className="text-xl">Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo.</p>
            <p className="text-xl">Não há nada para instalar. Não é necessário cartão de crédito.</p>
          </div>
          <div className=" pt-10">
            <Image src="/img-teste-gratis.webp" width={550} height={375} alt="Imagem teste grátis" />
          </div>
        </div>

      </main>
    </>
  );
}
