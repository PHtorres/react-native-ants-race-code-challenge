import {LikelihoodCalculationState} from '../../enum/LikelihoodCalculationState';
import {IAntLikelihoodRankingItem} from '../../interfaces/IAntRankingItem';

export const sortRanking = (
  a: IAntLikelihoodRankingItem,
  b: IAntLikelihoodRankingItem,
) => {
  const notYetCalculatedState =
    a.calculationState ===
    (LikelihoodCalculationState.NOT_YET_RUN ||
      LikelihoodCalculationState.IN_PROGRESS);
  if (notYetCalculatedState) return -1;
  return b.likelihood - a.likelihood;
};
