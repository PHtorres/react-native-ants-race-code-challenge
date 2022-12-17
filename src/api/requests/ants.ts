import {antsApi} from '..';
import {IAnts} from '../../interfaces/IAnts';

const getAnts = async () => {
  const {data} = await antsApi.get<IAnts>('ants');
  return data;
};

export const antsRequests = {
  getAnts,
};
