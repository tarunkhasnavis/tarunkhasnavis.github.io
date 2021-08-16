import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#f5f5f5',
    text: '#333',
    toggleBorder: '1px solid rgb(223, 223, 223)',
    background: '#dfdfdfb5',
    border: '1px solid #f5f5f5',
    other_border: '1px solid #333',
}
export const darkTheme = {
    body: '#111',
    text: '#FAFAFA',
    toggleBorder: '1px solid #333',
    background: '#111',
    border: '1px solid #111',
    other_border: '1px solid #FAFAFA',
}

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.3s linear;
	}

    a {
        color: ${({ theme }) => theme.text};
    }

    .email-nav-link .lightbulb a {
        color: ${({ theme }) => theme.text};
    }

    .email-nav-link:before {
        background-color: ${({ theme }) => theme.text};
    }

    .social-nav-links i {
        color: ${({ theme }) => theme.text};
    }

    .social-nav-links ul:after {
        background-color: ${({ theme }) => theme.text};
    } 

    .card {
        border: ${({ theme }) => theme.border};
    }

    .card:hover{
        border: ${({ theme }) => theme.toggleBorder};
    }

    .footer__top{
        a {
            border: ${({ theme }) => theme.other_border};
        }
    }

    .toggle {
        color: ${({ theme }) => theme.text};
    }

    .header__container { 
        background-color: ${({ theme }) => theme.body};
    }

    .header__mobile {
        background-color: ${({ theme }) => theme.body};
    }

`;