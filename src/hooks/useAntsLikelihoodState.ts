import create from 'zustand';
import {IAntLikelihoodRankingItem} from '../interfaces/IAntRankingItem';
import {LikelihoodCalculationState} from '../enum/LikelihoodCalculationState';

interface AntsRaceLikelihoodProps {
  antsLikelihoodRankingItems: IAntLikelihoodRankingItem[];
  setAntsLikelihoodRankingItems(value: IAntLikelihoodRankingItem[]): void;
  setItemLikelihood(rankingItemId: string, likelihood: number): void;
  setItemLikelihoodCalculationState(
    rankingItemId: string,
    calculationState: LikelihoodCalculationState,
  ): void;
}

const getCalculationStateUpdatedResult = (
  antsLikelihoodRankingItems: IAntLikelihoodRankingItem[],
  rankingItemId: string,
  calculationState: LikelihoodCalculationState,
): IAntLikelihoodRankingItem[] => {
  const itemIndex = antsLikelihoodRankingItems.findIndex(
    item => item.id === rankingItemId,
  );
  antsLikelihoodRankingItems[itemIndex].calculationState = calculationState;
  return antsLikelihoodRankingItems;
};

const getLikelihoodUpdatedResult = (
  antsLikelihoodRankingItems: IAntLikelihoodRankingItem[],
  rankingItemId: string,
  likelihood: number,
): IAntLikelihoodRankingItem[] => {
  const itemIndex = antsLikelihoodRankingItems.findIndex(
    item => item.id === rankingItemId,
  );
  antsLikelihoodRankingItems[itemIndex].likelihood = likelihood;
  return antsLikelihoodRankingItems;
};

export const useAntsLikelihoodState = create<AntsRaceLikelihoodProps>(
  (set, props) => ({
    antsLikelihoodRankingItems: [],
    setAntsLikelihoodRankingItems: value => {
      set(() => ({antsLikelihoodRankingItems: value}));
    },
    setItemLikelihoodCalculationState: (
      rankingItemId: string,
      calculationState: LikelihoodCalculationState,
    ) => {
      set(() => ({
        antsLikelihoodRankingItems: getCalculationStateUpdatedResult(
          props().antsLikelihoodRankingItems,
          rankingItemId,
          calculationState,
        ),
      }));
    },
    setItemLikelihood: (rankingItemId: string, likelihood: number) => {
      set(() => ({
        antsLikelihoodRankingItems: getLikelihoodUpdatedResult(
          props().antsLikelihoodRankingItems,
          rankingItemId,
          likelihood,
        ),
      }));
    },
  }),
);
