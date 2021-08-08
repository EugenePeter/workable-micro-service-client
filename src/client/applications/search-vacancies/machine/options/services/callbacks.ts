import { ServiceConfig, AnyEventObject } from "xstate";
import store from "store2";
import { IContext, IMachineEvents } from "../../types";
import { IRecord } from "../../types";
import io from "socket.io-client";
import { connect } from "http2";

const toSessionKey = (workflow_type: string, instance: string | number) =>
    `session:${workflow_type}-${instance}`;

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
    connectToSocketServer: (context) => (send, onEvent) => {
        const { socket_host, query } = context;

        const socket = io(socket_host);
        console.log("IM AM RUNNING", socket);
        const socketConnected = () => {
            console.log("SOCKET CONNECTED");
            send("CONNECTED");
        };
        const socketDisonnected = () => {
            console.log("SOCKET DISCONNECTED");
            send("SOCKET DISCONNECTED");
        };
        const handleQueryResponse = (data: AnyEventObject) => {
            console.log("DATA:", data);
            send({
                type: "GOT_QUERY_RESULTS",
                payload: data,
            });
        };

        socket.on("connect", socketConnected);
        socket.on("disconnect", socketDisonnected);
        socket.on("query_response", handleQueryResponse);

        socket.emit("query", query);

        // onEvent((event: AnyEventObject) => {
        //     console.log("MESSAGE RECIEVED FROM OWN MACHINE:", event);
        //     socket.emit("query", event);
        // });

        // return () => {
        //     socket.removeListener("connect", socketConnected);
        //     socket.removeListener("disconnect", socketDisonnected);
        //     socket.removeListener("message", handleMessage);
        // };
    },

    // connectToSocketServer2: (context) => (send) => {},
};

export default services;
