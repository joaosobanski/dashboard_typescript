import React, { ReactNode } from 'react';
import { Aside } from '../Aside';
import { Content } from '../Content';
import { MainHeader } from '../MainHeader';
import { Grid } from './styles';
type Props = { children: ReactNode }

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </Grid>
    )
}