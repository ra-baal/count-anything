import Path from "@/common/path";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
    fetch("http://localhost:3000/test", {
      method: "POST",
      credentials: "include",
    });
  }, []);

  return (
    <div>
      <div>Home Page</div>
      <div>
        <Link to={Path.Counters}>Counters Page</Link>
      </div>
      <div>
        <Link to={Path.Login}>Login Page</Link>
      </div>
      <div>
        <Link to={Path.Register}>Register Page</Link>
      </div>
      <div>
        <Link to={Path.Account}>Account Page</Link>
      </div>
    </div>
  );
}
