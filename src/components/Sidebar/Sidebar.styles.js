import styled from 'styled-components';

export const SidebarContainer = styled.div`
    width: ${props => props.$isOpened ? '250px' : '60px'};
    height: 100vh;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    transition: all 0.3s ease;
`;

export const LogoImg = styled.img`
    height: 40px;
    width: auto;
`;

export const LogoText = styled.span`
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    opacity: ${props => props.$isOpened ? 1 : 0};
    visibility: ${props => props.$isOpened ? 'visible' : 'hidden'};
    transform: ${props => props.$isOpened ? 'translateX(0)' : 'translateX(-10px)'};
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
    white-space: nowrap;
`;
