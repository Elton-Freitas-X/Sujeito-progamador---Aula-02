import React from "react";
import { FiLink} from "react-icons/fi";
import { Logo, H1, Span, Label, Input, Button} from './home';

import { useState } from "react";
import LinkItem from './../../components/LinkItem';

import api from '../../services/api';
import {saveLink} from '../../services/storeLinks'

 const Home = () => {
    const [pega, setPega] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data,setData] = useState({})

    function pegaLink(e){
        return setPega(e.target.value)
    }

    async function handlerShorLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: pega
            })
            
            setData(response.data);
            setShowModal(true);

            //funcionalidade criada no storeLinks
            saveLink('@encurtaLink', response.data)

            setPega('');
        }catch{
            alert("oPS PARECE QUE ALGO DEU ERRADO")
            setPega('');
        }
    }

    return(
        <>
            <Logo>
                <img src="./logo.png" alt="Sujeito Link"/>
                <H1>SujeitoLink</H1>
                <Span>Cole seu link para encurtar 👇</Span>
            </Logo>

            <Label>
                <div>
                    <FiLink size={24} color="#fff"/>
                    <Input
                        value={pega} 
                        onChange={pegaLink}
                        placeholder="Cole seu link aqui..."
                    />
                </div>

               <Button onClick={handlerShorLink}>Encurtar Link</Button>
            </Label>

            {showModal && (
                <LinkItem 
                    closeModal={ () => setShowModal(false)}
                    content={data}
                />
            )}
        </>
    )
}

export default Home;