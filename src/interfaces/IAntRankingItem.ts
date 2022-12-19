import {LikelihoodCalculationState} from '../enum/LikelihoodCalculationState';
import {IAnt} from './IAnt';

export interface IAntLikelihoodRankingItem {
  id: string;
  likelihood: number;
  calculationState: LikelihoodCalculationState;
  ant: IAnt;
}
