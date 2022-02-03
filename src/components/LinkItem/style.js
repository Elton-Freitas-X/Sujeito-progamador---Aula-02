import styled from "styled-components";


export const Modal = styled.div`
   position: absolute;
    bottom: 18px;
    background-color: #fff;
    padding: 14px;
    width: 540px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    animation: slideY 1.5s;


    @keyframes slydeY{
        from{
            transform: translateY(90px);
        }to {
            transform: translateY(0);
        }
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div button{
        border: 0;
        background-color: transparent;
    }

    span{
      margin: 14px 0;
      color: #A7A7A7;
      font-size: 18px;
    }

    button{
        background-color: #172742;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 14px;
        height: 38px;
        border-radius: 4px;
        color: #fff;
    }

    @media (max-width: 590px){
       &{
           width: 90%;
       } 
    }
    
`

