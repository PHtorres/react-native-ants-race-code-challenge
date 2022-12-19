import React from 'react';
import {ActivityIndicator, Button} from 'react-native';
import {LikelihoodRanking} from '../../components/LikelihoodRanking';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {useAntsLikelihood} from '../../hooks/useAntsLikelihood';

export const AntsRaceScreen = () => {
  const {antsLikelihoodRankingItems, startCalculations, isLoadingAnts} =
    useAntsLikelihood();

  if (isLoadingAnts) return <ActivityIndicator size={'large'} />;

  return (
    <ScreenWrapper>
      <LikelihoodRanking
        antLikelihoodRankingItems={antsLikelihoodRankingItems}
      />
      <Button title="Start calculations" onPress={startCalculations} />
    </ScreenWrapper>
  );
};
