import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 16px;

    

    .btn{
        background: none;
        border: none;
        width: 40px;
        filter: invert();
    }
`;