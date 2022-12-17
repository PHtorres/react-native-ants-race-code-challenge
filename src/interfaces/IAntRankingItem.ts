import {LikelihoodState} from '../enum/LikelihoodState';
import {IAnt} from './IAnt';

export interface IAntLikelihoodRankingItem {
  id: string;
  likelihood: number;
  likelihoodState: LikelihoodState;
  ant: IAnt;
}
