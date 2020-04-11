import React from "react"
import { Grid, Cell, ALIGNMENT, BEHAVIOR } from 'baseui/layout-grid';
import AppBarMobile from "./AppBar/AppBarMobile";

export default function AppBar() {

    return (
        <div>
            <Grid behavior={BEHAVIOR.fluid}>
                <Cell span={[12, 0, 0]}>
                    <AppBarMobile/>
                </Cell>
                <Cell span={[0, 12, 0]}>
                    AppBar Tablet
                </Cell>
                <Cell span={[0, 0, 12]}>
                    AppBar Large
                </Cell>
            </Grid>
        </div>
    );

}