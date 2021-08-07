/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyEventObject } from "xstate";

export interface IContext {
    machine_type: string;
    test?: string;
    message: any;
    hello?: {} | any;
}

export type IMachineEvents = AnyEventObject;

export interface IRecord<TEntry> {
    [key: string]: TEntry;
}

export interface IMachineType {
    machine_type: string;
}
