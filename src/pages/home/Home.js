import React, { useState } from 'react'
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, DarkTheme, BaseProvider, styled } from 'baseui';
import { StatefulInput } from 'baseui/input';
import { Button } from "baseui/button";
import { Grid, Cell, BEHAVIOR, ALIGNMENT } from "baseui/layout-grid"
import { H1, H2, H3, H4, H5, H6 } from 'baseui/typography';

export default function HomePage() {

    return (
        <div>
            <Grid behavior={BEHAVIOR.fluid}>
                <Cell span={[12, 4, 6]}>
                    <H1>Fatec Pocket</H1>

                    <H6>Aplicativo para estudantes da Fatec, venha conhecer</H6>

                    <Button onClick={() => alert("click")}>Baixar</Button>
                </Cell>
                <Cell span={[12, 1, 3]}></Cell>
                <Cell span={[12, 3, 3]} align={ALIGNMENT.start} >
                    <img src="https://raw.githubusercontent.com/BrunoEleodoro/fatec_pocket_landing_page/master/images/Login.png" width="100%"/>
                </Cell>
            </Grid>
        </div>

    );
}