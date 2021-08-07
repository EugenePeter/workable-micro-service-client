import { ActionFunctionMap, assign } from 'xstate';
import { IContext, IMachineEvents } from '../../types';
import store from 'store2';

const toSessionKey = (workflow_type: string, instance: string | number) =>
  `session:${workflow_type}-${instance}`;

const toCacheKey = (workflow_type: string, instance: string | number) =>
  `state:${workflow_type}-${instance}`;

const actions: ActionFunctionMap<IContext, IMachineEvents> = {
  saveSessionToken: ({ workflow_type, instance }, { payload }) => {
    store.set(toSessionKey(workflow_type, instance), payload);
  },
  assignWorkflowState: assign({
    workflow_state: (_, { payload }) => {
      try {
        return payload;
      } catch (error) {
        return undefined;
      }
    },
  }),
  setWorkflowStateCache: async ({ workflow_type, instance }, { payload }) =>
    // return store.set(`cache:${workflow_type}:state`, payload);
    store.set(toCacheKey(workflow_type, instance), payload),
  applyCachedState: assign({
    workflow_state: (_, { data: cached_state }) => {
      try {
        return cached_state;
      } catch (error) {
        return undefined;
      }
    },
  }),
};

export default actions;
