import React from 'react';
import styled, { css } from 'styled-components';
import {inputEnum, inputsType} from '../../interfaces';

interface InputProps extends React.ComponentProps<'input'> {
  error: boolean;
}

export const Input: React.FC<InputProps> = ({ name, onChange, type, value, error }) => {
  const getPlaceholder = (getName = false) => {

    const placeHolderHash = {
      [inputEnum.name ]:['e.g Stephen King', "Name"],
      [inputEnum.email ]:['e.g stephenking@lorem.com', "Email Address" ],
      [inputEnum.number ]:['e.g + 1 234 567 890', "Phone Number"],
    }

    return getName ? placeHolderHash[name as inputsType][1] : placeHolderHash[name as inputsType][0]


  };

  const test = () => {
    if (name === inputEnum.name) {
      return {
        pattern: 'd*',
        inputMode: 'decimal',
      };
    }
  };

  return (
    <Label>
      <p>
        {getPlaceholder(true)}
        {error && <span>This field is required</span>}
      </p>
      <StyledInput
        type={type}
        onChange={onChange}
        value={value}
        placeholder={getPlaceholder()}
        error={error}
        {...test}
      />
    </Label>
  );
};

const StyledInput = styled('input')<{ error: boolean }>`
  ${({ theme, error }) => css`
    padding: 10px 15px;
    position: relative;
    border-radius: 10px;
    border: 1px solid ${theme.colors.lightGray};
    color: ${theme.colors.marineBlue};
    font-weight: 600;

    ${error &&
    css`
      border: 1px solid ${theme.colors.strawberryRed};

      &:after {
        position: absolute;
        right: 10px;
        left: 10px;
        top: -10px;
        font-size: 3rem;
        content: 'dsad';
        color: ${theme.colors.strawberryRed};
      }
    `}

    &:focus {
      outline: 1px solid ${theme.colors.pastelBlue};
    }

    ::placeholder {
      color: ${theme.colors.lightGray};
      font-weight: 600;
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${theme.colors.lightGray};
    }

    ::-ms-input-placeholder {
      color: ${theme.colors.lightGray};
    }

    @media (max-width: 600px) {
      padding: 0.5rem;
    }
  `}
`;

const Label = styled('label')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    color: ${theme.colors.marineBlue};

    & p {
      display: flex;
      font-weight: 500;
      justify-content: space-between;
      color: ${theme.colors.marineBlue};
    }

    & span {
      color: ${theme.colors.strawberryRed};
    }
  `}
`;
