import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-mist px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-ink">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-ink/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-mist px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-ink">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/60 bg-white/55 px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-white/80"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Meridian Health Pavilion — Paediatric & Gynaecology Care" },
      {
        name: "description",
        content:
          "Meridian Health Pavilion offers trusted paediatric and gynaecological care — from newborn NICU and childhood vaccinations to maternity, fertility, and women's health.",
      },
      { name: "author", content: "Meridian Health Pavilion" },
      {
        property: "og:title",
        content: "Meridian Health Pavilion — Paediatric & Gynaecology Care",
      },
      {
        property: "og:description",
        content:
          "Trusted paediatric and gynaecological care under one calm, friendly roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@MeridianHealth" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Sora:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen overflow-x-hidden bg-mist text-ink antialiased">
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-brand/25 blur-3xl" />
          <div className="absolute top-24 right-0 h-[460px] w-[460px] rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-rose/25 blur-3xl" />
        </div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
