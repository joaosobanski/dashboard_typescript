import styled from "styled-components";
 
interface ITagProps {
    color: string
}

export const Container = styled.li`
    background-color: #313862;
    border-radius: 5px;
    margin: 10px;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;//tirar a bolinha do li

    transition: all .3s;

    position: relative;

    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }


`;

export const Tag = styled.div<ITagProps>`
    background-color: ${props => props.color};
    width: 10px;
    height: 60%;
    position: absolute;
    left: 0;
`;
