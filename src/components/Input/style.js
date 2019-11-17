import styled from 'styled-components';

export const InputWrapper = styled.div`
    border: 1px solid #eee;
    border-radius: 3px;
    padding: 2.5rem;
    width: 50rem;

    label {
        flex-direction: column;
        width: 60%;

        &, > span {
            display: flex;
        }

        
        > span {
            font-size: 1.8rem;
            margin-bottom: 3rem;
        }
    }


    input {
        border: none;
        border-bottom: 1px solid #eee;
        outline: none;
        transition: border-color .3s;

        :focus {
            border-width: 2px;
            border-color: #666;
        }
    }

    .red, .warning {
        color: red;
    }

    .red {
        display: inline-block;
        font-size: 1rem;
        margin-left: 5px;
    }

    .warning {
        margin-top: 1rem;
    }

    ${({ isWarning }) => isWarning && `
      &, * {
            border-color: red !important; 
        }
    `}

`;
