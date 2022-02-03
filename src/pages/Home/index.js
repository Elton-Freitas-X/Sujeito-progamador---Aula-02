import React from "react";
import { FiLink} from "react-icons/fi"
import { Logo, H1, Span, Label, Input, Button} from './home'

 const Home = () => {
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
                        placeholder="Cole seu link aqui..."
                    />
                </div>

               <Button>Encurtar Link</Button>
            </Label>
        </>
    )
}

export default Home;