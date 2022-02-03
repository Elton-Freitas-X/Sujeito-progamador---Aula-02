import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        max-width: 300px;
        margin: 14px 0;
        animation: shake 1.5s;
    }

    /**Animation */
    @keyframes shake{
        10%, 90%{
            transform: translate3d(-1px, 0, 0);
        }
        20%, 80%{
            transform: translate3d(2px, 0 ,0);
        }

        30%, 50%, 70%{
            transform: translate3d(-4px, 0 ,0);
        }
        40%, 60%{
            transform: translate3d(44px, 0 ,0);
        }
    }

    h1{
        color: #fff;
    }

    a{
        color: #132742;
        background-color: #fff;
        text-decoration: none;
        padding: 12px 18px;
        border-radius: 4px;
        margin: 14px 0;
        font-weight: bold;
    }
`