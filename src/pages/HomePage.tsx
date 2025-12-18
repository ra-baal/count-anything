import Path from "@/common/path";
import { Link } from "react-router-dom";

export default function HomePage() {
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
    </div>
  );
}
