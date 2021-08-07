import express, { Express, Request, Response } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../client/App";
import serialize from "serialize-javascript";
const { APP_NAME = "Eugene Peter Portal", PLATFORM_SOCKET_HOST = "http://localhost:4401" } = process.env;

const runtimeConfig =
    typeof window !== "undefined"
        ? {
              // client
              PLATFORM_SOCKET_HOST,
          }
        : {
              // server
              PLATFORM_SOCKET_HOST,
          };
const razzle: (server: Express) => void = (server: Express) => {
    let assets: any;

    const syncLoadAssets = () => {
        assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
    };
    syncLoadAssets();

    const serveIndex = (req: Request, res: Response) => {
        const context = {};
        const markup = renderToString(
            <StaticRouter context={context} location={req.url}>
                <App />
            </StaticRouter>
        );
        res.send(
            `<!doctype html>
      <html lang="">
      <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet='utf-8' />
          <title>${APP_NAME}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ""}
            ${
                process.env.NODE_ENV === "production"
                    ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${assets.client.js}" defer crossorigin></script>`
            }
      </head>
      <body>
          <div id="root">${markup}</div>
          <script>window.env = ${serialize(runtimeConfig)};</script>
  
      </body>
  </html>`
        );
    };

    server.use("/static", express.static("build/public/static"));

    server.get("/*", serveIndex);

    server.disable("x-powered-by");
};

export default razzle;
