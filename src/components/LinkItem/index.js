import React from "react";
import {FiX, FiClipboard} from 'react-icons/fi'
import {Modal} from './style'

export default function LinkItem({closeModal, content}){
    async function copyLink() {
        await navigator.clipboard.writeText(content.link)
        alert("URL Copiada com sucesso!")
    }

    return(
        <Modal>
           <div>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="#000" />
                </button>
           </div>

           <span>{content.long_url}</span>

           <button onClick={copyLink}>
               {content.link}
               <FiClipboard size={20} color="#fff" />
           </button>
        </Modal>
    )
}