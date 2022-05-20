import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.tertiary}; // props vem da styles/styled.d.ts
    border-right: 1px solid ${props => props.theme.colors.gray};
    padding-left: 20px;
    border-radius: 1px solid ${props => props.theme.colors.gray};

`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const LogImg = styled.img`
    height: 50px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const MenuItemLink = styled.a`
    margin: 5px 0;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }

    > svg {
        font-size: 18px;
    }

`; 
