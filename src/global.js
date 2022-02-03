import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  background-color: #122742;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

button{
  cursor: pointer;
}`