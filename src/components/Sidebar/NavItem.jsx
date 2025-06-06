import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const StyledNavItem = styled.div`
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 40px;
    transition: all 0.3s ease-in-out;
    position: relative;

    &:hover {
        background-color: ${({ theme }) => theme.hover};
        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 3px;
            background: ${({ theme }) => theme.active};
            transition: all 0.3s ease-in-out;
        }
    }

    span {
        margin-left: 10px;
        opacity: ${props => props.$isOpened ? '1' : '0'};
        visibility: ${props => props.$isOpened ? 'visible' : 'hidden'};
        transform: ${props => props.$isOpened ? 'translateX(0)' : 'translateX(-10px)'};
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out;
        white-space: nowrap;
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
        transition-delay: 0.1s;
    }
`;

export const NavItem = ({ icon, title, $isOpened, $isActive, onClick }) => (
    <StyledNavItem $isOpened={$isOpened} $isActive={$isActive} onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
        <span>{title}</span>
    </StyledNavItem>
);
