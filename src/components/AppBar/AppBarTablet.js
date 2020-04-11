import React from "react"
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationItem,
    StyledNavigationList,
} from 'baseui/header-navigation';
import { StyledLink } from "baseui/link";
import { Button } from 'baseui/button';
import { Select } from "baseui/select";
import { menuItems } from "./MenuItems";

export default function AppBarTablet() {
    const [value, setValue] = React.useState([]);

    return (<HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
            <StyledNavigationItem>MyApp</StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center} />
        <StyledNavigationList $align={ALIGN.right}>
            {menuItems.map((item) => {
                return <StyledNavigationItem>
                    <StyledLink href={item.id}>
                        {item.label}
                    </StyledLink>
                </StyledNavigationItem>
            })}
        </StyledNavigationList>

    </HeaderNavigation>
    )
}