import styled from "styled-components";

export const UserCard = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 16px;
    border-radius: 5px;
    background-image: radial-gradient(circle farthest-corner at 0 0,hsla(0,0%,100%,.2),hsla(0,0%,100%,0));

    hr{
        opacity: 0.1;
    }
    .avatar{
        border-radius: 50%;
    }
    .user-infos{
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 100px;
        
        .user-alt{
            font-weight: 600;
        }
        .user-bio{
            font-size: 12px;
        }
        .stats{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        gap: 16px;
        align-self: center;
    }
    }
   
`;

export const BestResult = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    background-image: radial-gradient(circle farthest-corner at 0 0,hsla(0,0%,100%,.2),hsla(0,0%,100%,0));
    border-radius: 5px;
    padding: 10px;
    gap: 5px;
    .trophy{
        filter: invert(75%) sepia(90%) saturate(780%) hue-rotate(351deg) brightness(102%) contrast(98%);;
    }
    .exo,.weight,.rep{
        font-size: 12px;
        font-weight: 700;
    }
`;