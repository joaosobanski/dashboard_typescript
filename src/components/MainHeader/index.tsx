import React, { useMemo } from 'react';
import {
    Container,
    Profile,
    Welcome,
    UserName
} from './styles';
import emojis from '../../utils/emojis';
import { Toggle } from '../Toggle';

export const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);


    return (
        <Container>
            <Toggle />

            <Profile>
                <Welcome>
                    Olá,
                    {emoji}
                </Welcome>
                <UserName>
                    João Vitor Sobanski
                </UserName>
            </Profile>
        </Container>
    )
}