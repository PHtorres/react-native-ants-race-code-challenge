import React from 'react';
import {Image, Text, View} from 'react-native';
import {IAntLikelihoodRankingItem} from '../../interfaces/IAntRankingItem';

import {getStyles} from './styles';

const antImageSource = require('../../assets/images/ant.png');

interface Props {
  position: number;
  item: IAntLikelihoodRankingItem;
}

export const AntLikelihoodRankingItem = ({item, position}: Props) => {
  const {
    container,
    mainContent,
    antImage,
    antNameContainer,
    row,
    likelihoodRow,
    positionText,
    nameText,
    labelText,
    valueText,
  } = getStyles({
    ant: item.ant,
  });
  return (
    <View style={container}>
      <View style={row}>
        <View style={mainContent}>
          <View style={row}>
            <Text style={positionText}>{position}</Text>
            <View style={antNameContainer}>
              <Text style={nameText}>{item.ant.name}</Text>
            </View>
          </View>
          <View style={row}>
            <View style={likelihoodRow}>
              <Text style={labelText}>Likelihood: </Text>
              <Text style={valueText}>{item.likelihood.toFixed(4)}</Text>
            </View>
          </View>
          <View style={row}>
            <View style={likelihoodRow}>
              <Text style={labelText}>Status: </Text>
              <Text style={valueText}>{item.calculationState}</Text>
            </View>
          </View>
        </View>
        <Image source={antImageSource} style={antImage} />
      </View>
    </View>
  );
};
