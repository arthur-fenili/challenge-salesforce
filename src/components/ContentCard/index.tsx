import "./styles.css"
import Image from "next/image";
import Link from "next/link";
import { ContentCardProps } from "@/interfaces/interfaces";

export default function ContentCard(props: ContentCardProps) {
    return (
        <>
            <div className="card-div">
                <Image src={props.image} width={400} height={150} alt="Imagem de novidades"/>
                <h1>{props.title}</h1>
                <Link href={props.link} 
                className="border-dashed border-blue-600 border-2 p-1 rounded-lg hover:bg-slate-400" target="blank">
                    Conheça aqui
                </Link>
            </div>
        </>
    );
}