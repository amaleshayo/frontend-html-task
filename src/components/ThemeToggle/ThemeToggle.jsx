import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 8px 16px;
    background: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
`;

export const ThemeToggle = ({ onClick }) => (
    <StyledButton onClick={onClick}>Toggle Theme</StyledButton>
);
