import { Link, Outlet } from "@tanstack/react-router";
import { flushSync } from "react-dom";

type Props = {};

export default () => {
  return (
    <>
      <div>
        <Link
          to="/"
          onClick={() => {
            flushSync(() => {
              //@ts-ignore
              document.startViewTransition();
            });
          }}
        >
          Home
        </Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
};
