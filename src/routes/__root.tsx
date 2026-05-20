import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Francis Galo — Workflow Automation Specialist | GAL.automates" },
      {
        name: "description",
        content:
          "I help teams work smarter by automating repetitive work with n8n, Make, Zapier, and AI. Custom workflow automation, AI agents, and CRM systems.",
      },
      { name: "author", content: "Francis Galo" },
      { property: "og:title", content: "Francis Galo — Workflow Automation Specialist | GAL.automates" },
      {
        property: "og:description",
        content: "Custom AI automation, workflow design, and CRM systems by Francis Galo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Francis Galo — Workflow Automation Specialist | GAL.automates" },
      { name: "description", content: "Most businesses have the same problem: too many manual steps connecting their tools, their data, and their team. Things fall through the cracks, someone always" },
      { property: "og:description", content: "Most businesses have the same problem: too many manual steps connecting their tools, their data, and their team. Things fall through the cracks, someone always" },
      { name: "twitter:description", content: "Most businesses have the same problem: too many manual steps connecting their tools, their data, and their team. Things fall through the cracks, someone always" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f4ee6bd6-d382-4159-b03d-e32abfdcb4d6/id-preview-718d3717--936d13b8-db25-4c7b-9e6f-5178a052310d.lovable.app-1776801079529.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f4ee6bd6-d382-4159-b03d-e32abfdcb4d6/id-preview-718d3717--936d13b8-db25-4c7b-9e6f-5178a052310d.lovable.app-1776801079529.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
