// import { Machine, createMachine, interpret, AnyEventObject } from "xstate";

// import { IContext, IMachineType } from "./types";
// // import config from "./config";
// import options from "./options";
// import { getConfig } from "../../";

// const initial_context: any = {
//     machine_type: "",
//     test: "hey",
//     hello: {
//         message: "this is a message",
//     },
//     message: "",
// };

// export const spawn = async (context: IContext, machine_type: string) => {
//     console.log("YOOOOOO");
//     const config = await getConfig(machine_type);
//     if (config) {
//         console.log("CONFIG:", config);
//         const machine = await startMachine(context, config);
//         console.log("MACHINE:", machine);
//         return machine;
//     }
//     // alert(machine);
//     // return machine;
//     // return createMachine(
//     //     {
//     //         ...config,
//     //         context: {
//     //             ...initial_context,
//     //             ...context,
//     //         },
//     //     },
//     //     options
//     // );
// };

// const startMachine = async (context: IContext, config) => {
//     console.log("I AM RUNNING");
//     if (config.initial) {
//         console.log("HAS INITIAL VALUE");
//         return createMachine(
//             {
//                 ...config,
//                 context: {
//                     ...initial_context,
//                     ...context,
//                 },
//             },
//             options
//         );
//     }

//     // return createMachine(
//     //     {
//     //         ...config,
//     //         context: {
//     //             ...initial_context,
//     //             ...context,
//     //         },
//     //     },
//     //     options
//     // );
// };

// export const peek = (context: IContext, machine_type: IMachineType) => {
//     const config = getConfig(machine_type);
//     return createMachine(
//         {
//             ...config,
//             context: {
//                 ...initial_context,
//                 ...context,
//             },
//         },

//         options
//     );
// };

// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// // export const Interpret = (context: IContext) => {
// //     const machine = spawn(context);
// //     const service = interpret(machine);
// //     return service;
// // };

// export * from "./types";
