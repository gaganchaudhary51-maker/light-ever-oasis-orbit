import { createRouter, Link } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function NotFound() {
  return (
    <main className="mx-auto flex min-h-[50dvh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-4xl text-gold-bright">Page not found</h1>
      <p className="mt-3 text-muted">This route is not on the Regent Way site.</p>
      <Link to="/" className="mt-6 min-h-11 text-gold">
        Back to home
      </Link>
    </main>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
  });
}
