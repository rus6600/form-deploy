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

  const routeHash = {
    [FormPageEnum.yourInfo]: PageYourInfo,
    [FormPageEnum.selectPlan]:PageSelectPlan,
    [FormPageEnum.addOns]:PageAddOns,
    [FormPageEnum.summary]:PageSummary,
    [FormPageEnum.exit]:PageExit,
  }

  return routeHash[activePage];
};
