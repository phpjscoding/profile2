import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/tailwind.css?url";

export const links = () => {
  return [
    { rel: "stylesheet", href: styles }
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <div className="et-hero-tabs-container fixed bottom-0 w-full">
          <a className="et-hero-tab" href="/blog">Blog</a>
          <a className="et-hero-tab" href="/">about</a>
          <a className="et-hero-tab" href="/projects">projects</a>

          <span className="et-hero-tab-slider"></span>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
