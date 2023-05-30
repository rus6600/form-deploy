import React from 'react'
import styled, { css } from 'styled-components';
import { Logo } from './PageSelectPlan';
import Thanks from '../assets/images/icon-thank-you.svg';
import {PageLayout} from "../components/ui";

export const PageExit = () => {
  return (
    <PageLayout hideButtons>
        <Wrapper>
          <Logo src={Thanks}></Logo>
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com.
          </p>
        </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;
    ${Logo} {
      justify-self: center;
      width: 20%;
      aspect-ratio: 1;
    }
    & h1 {
      font-weight: 600;
      color: ${theme.colors.marineBlue};
    }

    & p {
      color: ${theme.colors.coolGray};
    }

    @media (max-width: 600px) {
    }
  `}
`;
