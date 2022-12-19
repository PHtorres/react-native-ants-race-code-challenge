import uuid from 'react-native-uuid';
import {LikelihoodCalculationState} from '../../enum/LikelihoodCalculationState';

import {IAnt} from '../../interfaces/IAnt';
import {IAntLikelihoodRankingItem} from '../../interfaces/IAntRankingItem';

export const mapAntsToLikelihoodRankingItems = (
  ants?: IAnt[],
): IAntLikelihoodRankingItem[] => {
  return ants
    ? ants?.map(ant => ({
        ant,
        id: uuid.v4().toString(),
        likelihood: 0,
        calculationState: LikelihoodCalculationState.NOT_YET_RUN,
      }))
    : [];
};
