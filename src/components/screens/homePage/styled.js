import styled from "styled-components";

export const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;

    padding-top: 16px;
    
`;

export const DailyWorkout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
    background: url(/assets/misc/card-workout.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #000000Ca;
    background-blend-mode: multiply;
    .header{
        display: flex;
        flex-direction: column;
        .title{
            font-size: 20px;
            font-weight: 500;
        }
        .program-name{

        }

    }
    .body{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .summary{
        display: flex;
        flex-direction: column;
        font-size: 10px;
        }
        .start-btn{
            font-weight: bold;
            color: #000000Ca;
            border-radius: 10px;
            padding: 10px;
            background: linear-gradient(0deg, #CA9256 0%, #BB6A13 100%);
            border: 1px solid #E47D0F;
            box-shadow: 0px 0px 9px 2px rgba(220, 157, 90, 0.2);
        }
    }
    
`;