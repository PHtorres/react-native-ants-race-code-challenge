import {antsRequests} from '../api';
import {LikelihoodCalculationState} from '../enum/LikelihoodCalculationState';
import {mapAntsToLikelihoodRankingItems} from '../helpers/mapper/mapAntsToLikelihoodRankingItems';
import {useAntsLikelihoodState} from './useAntsLikelihoodState';
import {useFetchData} from './useFetchData';

const generateAntWinLikelihoodCalculator = () => {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return (callback: (likelihoodOfAntWinning: number) => void) => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
};

export const useAntsLikelihood = () => {
  const {
    antsLikelihoodRankingItems,
    setAntsLikelihoodRankingItems,
    setItemLikelihood,
    setItemLikelihoodCalculationState,
  } = useAntsLikelihoodState();

  const {isLoading: isLoadingAnts} = useFetchData({
    fetchFn: antsRequests.getAnts,
    onSuccess: data =>
      setAntsLikelihoodRankingItems(mapAntsToLikelihoodRankingItems(data.ants)),
  });

  const startCalculations = async () => {
    const calculations = antsLikelihoodRankingItems.map(async item => {
      const likelihoodOfAntWinningResult = await new Promise(resolve => {
        setItemLikelihoodCalculationState(
          item.id,
          LikelihoodCalculationState.IN_PROGRESS,
        );
        const generate = generateAntWinLikelihoodCalculator();
        generate(likelihoodOfAntWinning => resolve(likelihoodOfAntWinning));
      });
      setItemLikelihoodCalculationState(
        item.id,
        LikelihoodCalculationState.CALCULATED,
      );
      setItemLikelihood(item.id, likelihoodOfAntWinningResult as number);
    });
    Promise.all(calculations);
  };

  return {
    antsLikelihoodRankingItems,
    startCalculations,
    isLoadingAnts,
  };
};
