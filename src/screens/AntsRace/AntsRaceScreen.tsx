import React from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import {antsRequests} from '../../api';
import {LikelihoodRanking} from '../../components/LikelihoodRanking';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {useAntsRace} from '../../hooks/useAntsRace';
import {useFetchData} from '../../hooks/useFetchData';
import {mapAntsToLikelihoodRankingItems} from '../../services/mapper/mapAntsToLikelihoodRankingItems';

export const AntsRaceScreen = () => {
  const {data, isLoading, hasError} = useFetchData({
    fetchFn: antsRequests.getAnts,
  });

  const {antsLikelihoodRankingItems, setAntsLikelihoodRankingItems, startRace} =
    useAntsRace();

  setAntsLikelihoodRankingItems(mapAntsToLikelihoodRankingItems(data?.ants));

  if (isLoading) return <ActivityIndicator size={'large'} />;
  if (hasError) return <Text>An error occurred. Please try again later.</Text>;

  return (
    <ScreenWrapper>
      <LikelihoodRanking
        antLikelihoodRankingItems={antsLikelihoodRankingItems}
      />
      <Button title="Start Race" onPress={startRace} />
    </ScreenWrapper>
  );
};
