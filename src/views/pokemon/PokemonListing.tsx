import {
  Link,
  Outlet,
  useLoader,
  UseLoaderResult
} from "@tanstack/react-router";
import { fetchPokemon } from "../../api/pokemon";

type Props = {
  useLoader: ReturnType<typeof useLoader>;
};
export default ({}) => {
  const pokemon = useLoader({ from: "/pokemon" }) as UseLoaderResult<
    Awaited<ReturnType<typeof fetchPokemon>>
  >;
  console.log(pokemon);
  return (
    <>
      <div>Pokemon</div>
      <Outlet />
    </>
  );
};
