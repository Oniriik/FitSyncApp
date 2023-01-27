import styled from "styled-components";

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    .loader{
        z-index: 99;
    }
    .animated-frame{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
v    }
`;

export const MainContainer = styled.div`
    height: 100%;
`;