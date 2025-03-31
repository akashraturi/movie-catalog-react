import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="flex justify-between align-center bg-black p-5 text-blue-700">
      <div>
        <Link to={"/"}>Movie App</Link>
      </div>
      <div className="flex justify-between gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/favorites"}>Favorites</Link>
      </div>
    </nav>
  );
};

export default NavBar;
