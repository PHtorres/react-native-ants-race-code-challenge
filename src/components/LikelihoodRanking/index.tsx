import React, {useCallback} from 'react';
import {View, FlatList, ListRenderItemInfo} from 'react-native';
import {IAntLikelihoodRankingItem} from '../../interfaces/IAntRankingItem';
import {AntLikelihoodRankingItem} from '../AntLikelihoodRankingItem';
import {sortRanking} from './utils';

const RANKING_ITEMS_SEPARATOR_HEIGHT = 10;

interface Props {
  antLikelihoodRankingItems: IAntLikelihoodRankingItem[];
}

export const LikelihoodRanking = ({antLikelihoodRankingItems}: Props) => {
  const renderAntRankingItem = useCallback(
    ({item, index}: ListRenderItemInfo<IAntLikelihoodRankingItem>) => (
      <AntLikelihoodRankingItem item={item} position={index + 1} />
    ),
    [],
  );

  return (
    <FlatList
      data={antLikelihoodRankingItems.sort(sortRanking)}
      keyExtractor={item => item.id}
      renderItem={renderAntRankingItem}
      ItemSeparatorComponent={() => (
        <View style={{height: RANKING_ITEMS_SEPARATOR_HEIGHT}} />
      )}
    />
  );
};
