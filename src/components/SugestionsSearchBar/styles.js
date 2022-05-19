import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    background-color: var(--grey);
    margin: 0 auto;
`
export const Content = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 200px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 2px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px var(--beige);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--orange);
        border-radius: 10px;
    }

    li{
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid var(--orange);
        width: 80%;
        background-color: var(--fullblack);
        margin-top: 8px;
        cursor: pointer;

        img{
            border-radius: 100%;
            width: 40px;
            height: 40px;
        }

        p{
            font-size: 0.6rem;
            font-weight: 700;
        }

        span{
            font-size: 0.6rem;
            color: var(--beige);
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: center;

            svg{
                color: var(--orange);
            }

            label{
                display: none;
                font-size: 0.4rem;
            }

        }




        :hover{
            background-color: var(--orange);
            border: 1px solid var(--fullblack);

            p, span, svg, label{
                color: var(--fullblack);
            }

            div{
                label{
                    display: block;
                }
            }
        }
    }

`