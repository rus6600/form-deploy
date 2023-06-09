import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { FormContext } from '../provider/context';
import { Checkbox, PageLayout } from '../components/ui';
import { AddOnsData, addOnsType, FormPageEnum, timePlanEnum } from '../interfaces';
import { AlertText } from './PageSelectPlan';
import { removeKey } from '../helpers';

export const PageAddOns: React.FC = () => {
  const { setAddOnsData, formState } = useContext(FormContext);
  const addOns: addOnsType = [
    { name: 'online service', text: 'Access to multiplayer games', monthly: 1, yearly: 10 },
    { name: 'larger storage', text: 'Extra 1TB of cloud save', monthly: 2, yearly: 20 },
    { name: 'customizable profile', text: 'Custom theme on your profile', monthly: 2, yearly: 20 },
  ];

  const checkHandler = (item: AddOnsData) => {
    const key = (Object.keys(item) as Array<keyof AddOnsData>)[0];
    if (formState.addOnsData && key in formState.addOnsData) {
      setAddOnsData(removeKey(key, formState.addOnsData));
    } else {
      setAddOnsData({ ...formState.addOnsData, ...item });
    }
  };

  return (
    <PageLayout title="Pick add-ons" text="Add-ons help enhance your gaming experience">
      {formState.errors[FormPageEnum.addOns] && <AlertText>Please choose one of the following plans</AlertText>}
      <Addons>
        {addOns.map((addOn) => {
          const checked = formState?.addOnsData && !!formState?.addOnsData[addOn.name];
          return (
            <Addon
              key={addOn.name}
              checked={checked}
              onClick={() =>
                checkHandler({
                  [addOn.name]: formState.planData?.timePlan === timePlanEnum.monthly ? addOn.monthly : addOn.yearly,
                })
              }>
              <Checkbox checked={checked} />
              <Text>
                <h3>{addOn.name}</h3>
                <p>{addOn.text}</p>
              </Text>
              <p>
                {formState.planData?.timePlan === timePlanEnum.monthly ? `$${addOn.monthly}/mo` : `$${addOn.yearly}/yr`}
              </p>
            </Addon>
          );
        })}
      </Addons>
    </PageLayout>
  );
};

const Addons = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Addon = styled('div')<{ checked?: boolean }>`
  ${({ theme, checked }) => css`
    display: flex;
    padding: 1rem;
    border-radius: 6px;
    align-items: center;
    gap: 1rem;
    border: 1px solid white;
    ${checked &&
    css`
      border: 1px solid ${theme.colors.purplishBlue};
    `}

    & > *:last-child {
      margin-left: auto;
      font-weight: 600;
      color: ${theme.colors.purplishBlue};
    }

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 600px) {
      gap: 0.5rem;
    }
  `}
`;

const Text = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    & h3 {
      color: ${theme.colors.marineBlue};
      &:first-letter {
        text-transform: capitalize;
      }
    }
    & p {
      color: ${theme.colors.coolGray};
      &:first-letter {
        text-transform: capitalize;
      }
    }

    @media (max-width: 600px) {
      & h3 {
        font-size: 1rem;
      }
      & p {
        font-size: 14px;
        line-height: 1;
      }
    }
  `}
`;
