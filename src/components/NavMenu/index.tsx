import '/src/components/NavMenu/styles.css';
import Image from 'next/image';
import im from './salesforce-logo.png';

export default function NavMenu() {
    return (
        <>
                
            <div className='header'>
                <nav className="navigation">
                    <Image src={im.src} alt="Logo" width={125} height={125} />
                            
                    <a href="#"><b>HOME</b></a>
                    <a href="#"><b>SOBRE</b></a>
                    <a href="#"><b>CONTATO</b></a>
                    <a href="#"><b>ACESSIBILIDADE</b></a>  
                </nav>

                <div className='canto-direito-nav-menu'>
                    <div className='contact-div-nav-menu'>
                        <p><b>Entre em contato:</b></p> 
                        <p><b>0800 891 1887</b></p>
                    </div>
                    <div className='cadastro-div-nav-menu'>
                        <a href="#">CADASTRE-SE/LOGIN</a>
                    </div>
                </div>
            </div>
        </>
    );
}