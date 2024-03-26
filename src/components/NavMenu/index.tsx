import '/src/components/NavMenu/styles.css';
import Image from 'next/image';
import im from './salesforce-logo.png';

export default function NavMenu() {
    return (
        <>
                
            <div>
                <nav className="navigation">
                    <Image src={im.src} alt="Logo" width={125} height={125} />
                            
                    <a href="#">HOME</a>

                    <a href="#">SOBRE</a>
                            
                    <a href="#">CONTATO</a>
                        
                    <a href="#">ACESSIBILIDADE</a>
                        
                </nav>
            </div>
        </>
    );
}