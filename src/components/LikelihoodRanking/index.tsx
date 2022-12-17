import React, {useCallback, useId} from 'react';
import {View, Text, FlatList, ListRenderItemInfo} from 'react-native';
import {IAntLikelihoodRankingItem} from '../../interfaces/IAntRankingItem';

// import { Container } from './styles';

const RANKING_ITEMS_SEPARATOR_HEIGHT = 10;

interface Props {
  antLikelihoodRankingItems: IAntLikelihoodRankingItem[];
}

export const LikelihoodRanking = ({antLikelihoodRankingItems}: Props) => {
  const renderAntRankingItem = useCallback(
    ({item, index}: ListRenderItemInfo<IAntLikelihoodRankingItem>) => (
      <View>
        <Text>{index + 1}</Text>
        <Text>{item.ant.name}</Text>
        <Text>{item.likelihood}</Text>
        <Text>{item.likelihoodState.toString()}</Text>
      </View>
    ),
    [],
  );
  return (
    <FlatList
      data={antLikelihoodRankingItems}
      keyExtractor={item => item.id}
      renderItem={renderAntRankingItem}
      ItemSeparatorComponent={() => (
        <View style={{height: RANKING_ITEMS_SEPARATOR_HEIGHT}} />
      )}
    />
  );
};
