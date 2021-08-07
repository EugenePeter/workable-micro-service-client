/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyEventObject } from "xstate";

export interface IContext {
    namespace?: string;
    workflow_type: string;
    workflow_state?: string;
    component_token?: string;
    component_key?: number;
    instance: number | string;
    sessions?: any;
    work_offline: boolean;
    params?: any;
    persist?: boolean;
    session_token?: string;
    socket_host?: string;
}

export type IMachineEvents = AnyEventObject;

export interface IRecord<TEntry> {
    [key: string]: TEntry;
}
