import './styles.css';

export default function Integrantes() {
    return (
        <>
        <div className="integrantes-div">
            <h1 className='font-bold text-4xl text-blue-500 pb-2 pt-5'>INTEGRANTES</h1>
            <p className='text-xl'>Conheça os integrantes do grupo responsável pelo desenvolvimento do site.</p>
            <div className='integrantes-cards'>
                <div className='integrante'>
                    <img src='/arthur.jpg' alt='Arthur Fenili' width='200' height='200'/>
                    <h2 className='py-4'>Arthur Fenili</h2>
                    <p>RM: 552752</p>
                </div>

                <div className='integrante'>
                    <img src='/guilherme.jpg' alt='Guilherme Kiyoshi' width='200' height='200'/>
                    <h2 className='py-4'>Guilherme Kiyoshi</h2>
                    <p>RM: 553443</p>
                </div>
                <div className='integrante'>
                    <img src='/miguel.jpg' alt='Miguel de Dubiani' width='200' height='200'/>
                    <h2 className='py-4'>Miguel de Dubiani</h2>
                    <p>RM: 553593</p>
                </div>
            </div>        
        </div>
        </>
    );
}