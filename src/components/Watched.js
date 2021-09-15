import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WatchListCard from "./WatchListCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="watched-container">
      {watched.length > 0 ? (
        watched.map((movie) => {
          return (
            <WatchListCard key={movie.id} movie={movie} type={"watched"} />
          );
        })
      ) : (
        <p>No movies</p>
      )}
    </div>
  );
};

export default Watched;
