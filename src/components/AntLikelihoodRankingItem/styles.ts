import {StyleSheet} from 'react-native';
import {mapAntColorToHexColor} from '../../helpers/mapper/mapAntColorToHexColor';
import {IAnt} from '../../interfaces/IAnt';

interface Props {
  ant: IAnt;
}

export const getStyles = ({ant}: Props) =>
  StyleSheet.create({
    container: {
      padding: 10,
      borderWidth: 0.3,
      borderRadius: 10,
      borderColor: '#666',
    },
    mainContent: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
    },
    antImage: {
      width: ant.length * 2,
      height: ant.length * 2,
      tintColor: mapAntColorToHexColor(ant.color),
    },
    antNameContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginLeft: 5,
    },
    likelihoodRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    nameText: {
      fontSize: 16,
      fontWeight: '700',
      color: '#666'
    },
    positionText: {
      fontSize: 16,
      color: '#666',
      fontWeight: '700',
    },
    labelText: {
      fontSize: 14,
      color: '#666',
    },
    valueText: {
      fontSize: 14,
      fontWeight: '700',
    },
  });
