import { ConditionPredicate } from 'xstate';
import { IContext, IMachineEvents } from '../types';
import { IRecord } from '../types';
const guards: IRecord<ConditionPredicate<IContext, IMachineEvents>> = {
  willWorkOffline: ({ work_offline }) => work_offline,
};

export default guards;
