import styled from "styled-components";

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100vh;
    .animated-frame{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 16px;
    }
`;

export const MainContainer = styled.div`
    height: 100%;
`;