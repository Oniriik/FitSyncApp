import styled from "styled-components";

export const LayoutLeft = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(0deg, #1D1D1D 0%, #101010 100%), linear-gradient(0deg, #1D1D1D 0%, #101010 100%);
    z-index: 100;
    padding: 16px;
    .icon{
        filter: invert();
    }
`;