import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "antd/dist/reset.css";
import "../public/globals.css";
import { TaskProvider } from "./feature/tasks/TaskProvider";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="view-transition" content="same-origin" />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          backgroundColor: "#e5e5e5",
          height: "100vh",
          padding: "2rem",
        }}
      >
        <TaskProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </TaskProvider>
      </body>
    </html>
  );
}
