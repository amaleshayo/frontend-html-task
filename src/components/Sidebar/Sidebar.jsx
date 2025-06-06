import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "../../design/designTokens";
import { SidebarContainer, LogoContainer, LogoImg, LogoText } from './Sidebar.styles';
import { NavItem } from './NavItem';
import { ThemeToggle } from '../ThemeToggle';
import logo from '../../assets/logo.png';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [activeRoute, setActiveRoute] = useState('/');
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    const goToRoute = (path) => {
        setActiveRoute(path);
        console.log(`Navigating to "${path}"`);
    };

    return (
        <ThemeProvider theme={theme}>
            <SidebarContainer
                $isOpened={isOpened}
                onMouseEnter={() => setIsOpened(true)}
                onMouseLeave={() => setIsOpened(false)}
            >
                <LogoContainer>
                    <LogoImg src={logo} alt="Logo" />
                    <LogoText $isOpened={isOpened}>TensorFlow</LogoText>
                </LogoContainer>
                <div>
                    {routes.map(route => (
                        <NavItem
                            key={route.path}
                            icon={route.icon}
                            title={route.title}
                            $isOpened={isOpened}
                            $isActive={activeRoute === route.path}
                            onClick={() => goToRoute(route.path)}
                        />
                    ))}
                </div>
                <div style={{ marginTop: 'auto' }}>
                    {bottomRoutes.map(route => (
                        <NavItem
                            key={route.path}
                            icon={route.icon}
                            title={route.title}
                            $isOpened={isOpened}
                            $isActive={activeRoute === route.path}
                            onClick={() => goToRoute(route.path)}
                        />
                    ))}
                </div>
            </SidebarContainer>
            <ThemeToggle onClick={toggleTheme} />
        </ThemeProvider>
    );
};

export default Sidebar;
