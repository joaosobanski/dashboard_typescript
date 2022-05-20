import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    //color: $ {props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary}; // props vem da styles/styled.d.ts

    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white} //list emoji. html https://www.w3schools.com/charsets/ref_emoji_smileys.asp
    

    `;

export const Welcome = styled.h3`

`;

export const UserName = styled.h3`

`;
