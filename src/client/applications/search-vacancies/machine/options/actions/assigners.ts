import { ActionFunctionMap, assign } from "xstate";
import { IContext, IMachineEvents } from "../../types";

const actions: ActionFunctionMap<IContext, IMachineEvents> = {
    assignQueryTermsToContext: assign({
        query: (_, { payload }) => payload,
    }),

    assignQueryResultsToContext: assign({
        query_results: ({ query_results }, { payload }) => {
            return [...query_results, ...payload.results];
        },
    }),
};

export default actions;
