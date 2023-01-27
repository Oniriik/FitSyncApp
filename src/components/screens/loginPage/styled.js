import styled from "styled-components";

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 16px;
    h2{
        font-size: 1.5em;
        font-weight: 600;
    }
    .login-form{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    form{
        display: flex;
        justify-content: center;
        align-items: center;

        button{
        width: 50%;
    }
    }
   
`;