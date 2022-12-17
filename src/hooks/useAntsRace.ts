import create from 'zustand';
import {LikelihoodState} from '../enum/LikelihoodState';
import {IAntLikelihoodRankingItem} from '../interfaces/IAntRankingItem';

interface AntsRaceStateProps {
  antsLikelihoodRankingItems: IAntLikelihoodRankingItem[];
  setAntsLikelihoodRankingItems(value: IAntLikelihoodRankingItem[]): void;
  setLikelihood(rankingItemId: string, likelihood: number): void;
  setLikelihoodState(rankingItemId: string, state: LikelihoodState): void;
}

const setLikelihoodStateResult = (
  antsLikelihoodRankingItems: IAntLikelihoodRankingItem[],
  rankingItemId: string,
  state: LikelihoodState,
): IAntLikelihoodRankingItem[] => {
  const itemIndex = antsLikelihoodRankingItems.findIndex(
    item => item.id === rankingItemId,
  );
  antsLikelihoodRankingItems[itemIndex].likelihoodState = state;
  return antsLikelihoodRankingItems;
};

const setLikelihoodResult = (
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

const useAntsRaceState = create<AntsRaceStateProps>((set, props) => ({
  antsLikelihoodRankingItems: [],
  setAntsLikelihoodRankingItems: value => {
    set(() => ({antsLikelihoodRankingItems: value}));
  },
  setLikelihoodState: (rankingItemId: string, state: LikelihoodState) => {
    set(() => ({
      antsLikelihoodRankingItems: setLikelihoodStateResult(
        props().antsLikelihoodRankingItems,
        rankingItemId,
        state,
      ),
    }));
  },
  setLikelihood: (rankingItemId: string, likelihood: number) => {
    set(() => ({
      antsLikelihoodRankingItems: setLikelihoodResult(
        props().antsLikelihoodRankingItems,
        rankingItemId,
        likelihood,
      ),
    }));
  },
}));

const generateAntWinLikelihoodCalculator = () => {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return (callback: (likelihoodOfAntWinning: number) => void) => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
};

export const useAntsRace = () => {
  const {
    antsLikelihoodRankingItems,
    setAntsLikelihoodRankingItems,
    setLikelihood,
    setLikelihoodState,
  } = useAntsRaceState();

  const startRace = () => {
    const antWinLikelihoodCalculator = async (
      item: IAntLikelihoodRankingItem,
    ) => {
      setLikelihoodState(item.id, LikelihoodState.IN_PROGRESS);
      const generateResult = generateAntWinLikelihoodCalculator();
      generateResult(likelihoodOfAntWinning => {
        setLikelihoodState(item.id, LikelihoodState.CALCULATED);
        setLikelihood(item.id, likelihoodOfAntWinning);
      });
    };
    antsLikelihoodRankingItems.forEach(item =>
      antWinLikelihoodCalculator(item),
    );
  };

  return {
    antsLikelihoodRankingItems,
    setAntsLikelihoodRankingItems,
    startRace,
  };
};
