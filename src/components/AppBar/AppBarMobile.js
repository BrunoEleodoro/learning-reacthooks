import React from "react"
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationItem as NavigationItem,
    StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { StyledLink as Link } from 'baseui/link';
import { Button } from 'baseui/button';
import { Select } from "baseui/select";
import {menuItems} from "./MenuItems"

export default function AppBarMobile() {
    const [value, setValue] = React.useState([]);

    return (<HeaderNavigation>
        <NavigationList $align={ALIGN.left}>
            <NavigationItem>MyApp</NavigationItem>
        </NavigationList>
        <NavigationList $align={ALIGN.center} />
        <Select
                options={menuItems}
                value={value}
                placeholder="Menu"
                onChange={params => setValue(params.value)}
                
            />

    </HeaderNavigation>
    )
}