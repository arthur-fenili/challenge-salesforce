import './styles.css'


export default function Acessibilidade() {
    return (
        <>
            <div className="intro-div">
                <h1 className='font-bold text-4xl text-blue-500 pb-2 pt-5'>PÁGINA DE ACESSIBILDADE</h1>
                <p className='text-xl'>Esta página tem como objetivo apresentar as funcionalidades de acessibilidade para daltonismo disponíveis no site.</p>
                <h2 className='font-bold text-2xl text-blue-500 pb-2 pt-5'>Acessibilidade para daltônicos</h2>
                <p className='text-l mx-7 text-center' >O site Salesforce foi desenvolvido com o intuito de ser acessível a todos os usuários, incluindo aqueles que possuem daltonismo.
                    Para isso, foram utilizadas cores que possuem um bom contraste, facilitando a leitura e a identificação de elementos na página.</p>
            </div>

            <div className='intro-div'>
                <h2 className='font-bold text-2xl text-blue-500 pb-2 pt-5'>Simulador de daltonismo</h2>
                <p className='text-l mx-7 text-center'>Para simular como o site é visualizado por pessoas com daltonismo, você pode utilizar o simulador abaixo.
                    Basta selecionar o tipo de daltonismo desejado e a página será exibida com as cores alteradas de acordo com o tipo selecionado.</p>
            </div>
            <div>
                <div className='intro-div'>
                    <h3 className='font-bold text-2xl text-blue-500 pb-2 pt-5'>Selecione o tipo de daltonismo:</h3>
                    <select>
                        <option value="deuteranopia">Deuteranopia</option>
                        <option value="protanopia">Protanopia</option>
                        <option value="tritanopia">Tritanopia</option>
                    </select>
                </div>
                <div className='daltonism-types'>
                    <div className='type-div'>
                        <h2 className='font-bold text-xl text-blue-500 pb-5'>Deuteranopia</h2>
                        <p>Deuteranopia é cegueira verde, uma deficiência genética de visão de cores. Os afetados não podem perceber a cor verde.
                            É uma forma de cegueira vermelho-verde. Se, por outro lado, houver apenas uma fraqueza na percepção verde, isso é chamado de deuteranomalia</p>
                    </div>

                    <div className='type-div mx-12'>
                        <h2 className='font-bold text-xl text-blue-500 pb-5'>Protanopia</h2>
                        <p>Protanopia é cegueira vermelha, uma deficiência genética de visão de cores. Os afetados não podem perceber a cor vermelha.
                            É uma forma de cegueira vermelho-verde. Se, por outro lado, houver apenas uma fraqueza na percepção vermelha, isso é chamado de protanomalia</p>
                    </div>

                    <div className='type-div'>
                        <h2 className='font-bold text-xl text-blue-500 pb-5'>Tritanopia</h2>
                        <p>Tritanopia é cegueira azul, uma deficiência genética de visão de cores. Os afetados não podem perceber a cor azul.
                            É uma forma de cegueira azul-amarelo. Se, por outro lado, houver apenas uma fraqueza na percepção azul, isso é chamado de tritanomalia</p>
                    </div>
                </div>
            </div>
        </>
    );
}