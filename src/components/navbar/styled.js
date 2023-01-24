import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 75px;
    width: 100%;
    background: white;
    color: black;
    z-index: 1;
    ul{
        position: relative;
        display: flex;
        justify-content: center;
        width: 90%;

        li{
            position: relative;
            width: 70px;
            height: 70px;
            z-index: 1;
            list-style: none;
            .link{
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 100%;
                .icon{
                    position: relative;
                    line-height: 70px;
                    font-size: 1.5em;
                    transition: 0.5s;
                }
                span{
                    position: absolute;
                    font-weight: 400;
                    font-size: 0.75em;
                    letter-spacing: 0.05em;
                    transition: 0.5s;
                    opacity: 0;
                }
            }

            &.active{
                a {
                    .icon{
                        transform: translateY(-32px);
                    }
                    span{
                        opacity: 1;
                        transform: translateY(10px);
                        font-weight: 600;
                    }

                }
                
            }

            &:nth-child(1).active.indicator{
                transform: translateX(calc(70*1));
            }
            &:nth-child(2).active.indicator{
                transform: translateX(calc(70*2));
            }
            &:nth-child(3).active.indicator{
                transform: translateX(calc(70*3));
            }
            &:nth-child(4).active.indicator{
                transform: translateX(calc(70*4));
            }
            &:nth-child(5).active.indicator{
                transform: translateX(calc(70*5));
            }
        }
        .indicator{
            position: absolute;
            top: -50%;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: var(--primary-color);
            border: 6px solid black;

            ::before{
                content: '';
                position: absolute;
                top: 50%;
                left: -20px;
                width: 20px;
                height: 20px;
                border-top-right-radius: 20px;
                box-shadow: 0px -10px 0 0 black;
            }
            ::after{
                content: '';
                position: absolute;
                top: 50%;
                right: -20px;
                width: 20px;
                height: 20px;
                border-top-left-radius: 20px;
                box-shadow: 0px -10px 0 0 black;
            }
        }
    }

`;