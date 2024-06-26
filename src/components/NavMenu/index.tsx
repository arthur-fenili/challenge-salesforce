import '/src/components/NavMenu/styles.css';
import Image from 'next/image';
import im from './salesforce-logo.png';

export default function NavMenu() {
    return (
        <>
                
            <div className='header'>
                <nav className="navigation">
                    <Image src={im.src} alt="Logo" width={125} height={125} />
                            
                    <a href="."><b>HOME</b></a>
                    <a href="/integrantes"><b>INTEGRANTES</b></a>
                    <a href="/acessibilidade"><b>ACESSIBILIDADE</b></a>  
                </nav>

                <div className='canto-direito-nav-menu'>
                    <div className='contact-div-nav-menu'>
                        <p><b>Entre em contato:</b></p> 
                        <p><b>0800 891 1887</b></p>
                    </div>
                    <div className='cadastro-div-nav-menu'>
                        <a href="/cadastro">CADASTRE-SE</a>
                    </div>
                </div>
            </div>
        </>
    );
}