import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export const Home = () => {
//const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p>Wall-et</p>
        <div>
          <Link to="/balance">
            <button>Balance</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
 