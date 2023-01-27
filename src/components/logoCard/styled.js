import styled from "styled-components";

export const LogoCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:  ${props=> `${props.size}px`};
    height: ${props=> `${props.size}px`};
    padding: 25px 10px;
    transform: translateZ(0);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 2px 8px -1px #0000001a;

    ::before,
    ::after {
        content: '';
        position: absolute;
        z-index: -1;
    }
    ::before {
        animation: 6s rotate linear infinite;
        width: 200%;
        height: 200%;
        background: conic-gradient(
            #ffffff80,
            #ffffff40,
            #ffffff30,
            #ffffff20,
            #ffffff10,
            #ffffff10,
            #ffffff80
        );
    }
    ::after {
        inset: 0;
        padding: 1px;
        border-radius: 20px;
        background: linear-gradient(0deg, #1D1D1D 0%, #101010 100%);
        background-clip: content-box;
    }
    @keyframes rotate {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0deg);
        }
        }
`;

