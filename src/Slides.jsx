import { Link, Outlet } from "react-router-dom";

export function Slides() {
  return (
    <div>
      <div>
        <Link to={"/slides/slide1"}>slide1</Link>
        <Link to={"/slides/slide2"}>slide2</Link>
      </div>

      <Outlet />
    </div>
  );
}
