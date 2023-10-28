import { Outlet, Router, Route, RouterContext } from "@tanstack/react-router";
import Home from "../views/home";
import PokemonListing from "../views/pokemon";
import { fetchPokemon } from "../api/pokemon";

const routerContext = new RouterContext<{
  fetchPokemon: typeof fetchPokemon;
}>();

const rootRoute = routerContext.createRootRoute({
  component: Home
});

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index
});

const pokemonRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/pokemon",
  loader: ({ context: { fetchPokemon } }) => fetchPokemon(),
  component: PokemonListing
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "about",
  component: () => <div>About us</div>
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, pokemonRoute]);
const router = new Router({
  routeTree,
  context: {
    fetchPokemon
  }
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
