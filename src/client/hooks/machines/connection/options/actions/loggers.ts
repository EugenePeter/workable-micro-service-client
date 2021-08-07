import { ActionFunctionMap } from 'xstate';
import { IContext, IMachineEvents } from '../../types';

const actions: ActionFunctionMap<IContext, IMachineEvents> = {
  logGotCache: () => console.log('Got cache'),
};

export default actions;
