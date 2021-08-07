import { ServiceConfig } from 'xstate';
import { IContext, IMachineEvents } from '../../types';
import { IRecord } from '../../types';
import store from 'store2';

const toCacheKey = (workflow_type: string, instance: string | number) =>
  `state:${workflow_type}-${instance}`;

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
  checkCache: ({ workflow_type, instance }) =>
    new Promise((res, rej) => {
      const cache_key = store.get(toCacheKey(workflow_type, instance));
      if (!cache_key) {
        rej(new Error('Cache does not exist'));
      }
      res(cache_key);
    }),
};

export default services;
