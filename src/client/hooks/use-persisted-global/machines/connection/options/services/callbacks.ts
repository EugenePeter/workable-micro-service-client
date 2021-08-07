import { ServiceConfig, AnyEventObject } from "xstate";
import store from "store2";
import { IContext, IMachineEvents } from "../../types";
import { IRecord } from "../../types";
import io from "socket.io-client";
import { connect } from "http2";

const toSessionKey = (workflow_type: string, instance: string | number) => `session:${workflow_type}-${instance}`;

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
    connectToSocketServer: (context) => (send, onEvent) => {
        const { workflow_type, instance, namespace = "/socket.io", session_token: replicated_session_token, socket_host = "" } = context;

        const session_token = replicated_session_token ? replicated_session_token : store.get(toSessionKey(workflow_type, instance));

        console.log(`replicated_session_token ${workflow_type}`, replicated_session_token);
        console.log(`SESSION TOKEN USED ${workflow_type}`, session_token);

        // const socket = io({
        //   query: {
        //     session_token,
        //   },
        // });

        const socket = io({
            host: socket_host ? socket_host : undefined,
            path: namespace,
            query: {
                session_token,
            },
        });

        const handleConnection = () => {
            console.log("SOCKET CONNECTED");
            send("CONNECTED");
        };
        const handleDisconnection = () => {
            console.log(`DISCONNECTED`);
            send("DISCONNECTED");
        };
        const handleMessage = (data: AnyEventObject) => {
            send(data);
        };

        socket.on("connect", handleConnection);
        socket.on("disconnect", handleDisconnection);
        socket.on("message", handleMessage);

        onEvent((event: AnyEventObject) => {
            console.log(`Event:`, event);
            socket.emit("message", event);
        });

        return () => {
            socket.removeListener("connect", handleConnection);
            socket.removeListener("disconnect", handleDisconnection);
            socket.removeListener("message", handleMessage);
        };
    },

    connectToSocketServer2: (context) => (send) => {},
};

export default services;
