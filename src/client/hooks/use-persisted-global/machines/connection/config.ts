import { MachineConfig, AnyStateNodeDefinition } from 'xstate';
import { IContext, IMachineEvents } from './types';

const config: MachineConfig<
  IContext,
  AnyStateNodeDefinition,
  IMachineEvents
> = {
  invoke: [
    {
      id: 'socketConnectionService',
      src: 'connectToSocketServer',
    },
  ],
  initial: 'boot',
  states: {
    boot: {
      invoke: {
        src: 'checkCache',
        onDone: [
          {
            cond: 'willWorkOffline',
            actions: ['logGotCache', 'applyCachedState'],
            target: 'disconnected',
          },
          {
            target: 'disconnected',
          },
        ],
        onError: 'disconnected',
      },
    },
    disconnected: {
      on: {
        CONNECTED: {
          target: 'connected',
        },
      },
      entry: [],
      exit: [],
    },
    connected: {
      on: {
        SESSION: {
          target: 'active',
          actions: 'saveSessionToken',
        },
        DISCONNECTED: {
          target: 'disconnected',
        },
      },
      entry: [],
      exit: [],
    },
    active: {
      on: {
        UNAUTHORIZED: {
          actions: 'logUnauthorizedError',
        },
        DISCONNECTED: {
          target: 'disconnected',
        },
        WORKFLOW_UPDATE: {
          actions: ['assignWorkflowState', 'setWorkflowStateCache'],
        },
        '*': {
          actions: ['sendToSocketService'],
        },
      },
      entry: ['invokeWorkflow'],
      exit: [],
    },
  },
};

export default config;
