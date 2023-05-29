import React, { useContext } from 'react';
import { FormContext } from '../provider/context';
import { FormPageEnum } from '../interfaces';
import { PageSelectPlan } from '../pages/PageSelectPlan';
import { PageYourInfo } from '../pages/PageYourInfo';
import { PageAddOns } from '../pages/PageAddOns';
import { PageSummary } from '../pages/PageSummary';
import { PageExit } from '../pages/PageExit';

export const usePageSelect = (): React.FC => {
  const {
    formState: { activePage },
  } = useContext(FormContext);
  if (FormPageEnum.selectPlan === activePage) return PageSelectPlan;
  if (FormPageEnum.addOns === activePage) return PageAddOns;
  if (FormPageEnum.summary === activePage) return PageSummary;
  if (FormPageEnum.exit === activePage) return PageExit;

  return PageYourInfo;
};
