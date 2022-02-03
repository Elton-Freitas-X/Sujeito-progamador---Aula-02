import styled from "styled-components";

//export const containerHome = styled.main`
//    width: 100%;
//    height: 100vh;
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    flex-direction: column;
//`

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 615px){
        img{
            width: 95px;
        }

        h1{
            font-size: 40px;
        }

        span{
           font-size: 16px;
        }
        
    }
`


export const H1 = styled.h1`
    font-size: 60px;
    color: #fff;
`

export const Span = styled.span`
    color: #fff;
    margin-top: 14px;
    margin-bottom: 34px;
    font-size: 19px;
`
//**************** *//

export const Label = styled.label`
    width: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: slideY 2s;

    div {
    width: 100%;
    height: 46px;
    background-color: rgb(255,255,255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    }
 
    input::placeholder{
        color: rgb(255,255,255, 0.8);
    }

    @keyframes slideY{
        from{
            transform: translateY(90px);
        }to{
            transform: translateY(0px);
        }
    }
`

export const Input = styled.input`
    width: 100%;
    background: transparent;
    border: 0;
    outline: none;
    color: #fff;
    height: 46px;
    font-size: 18px;

`

export const Button = styled.button`
    width: 100%;
    height: 46px;
    border-radius: 4px;
    border: 0;
    font-size: 16px;
    color: #000;
    font-weight: bold;
    margin-top: 8px;
    transition: transform 0.7s;

    &:hover{
        transform: scale(1.05);
    }
`