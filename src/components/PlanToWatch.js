import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WatchListCard from "./WatchListCard";

const PlanToWatch = () => {
  const { planToWatch } = useContext(GlobalContext);

  return (
    <div className="plantowatch-container">
      {planToWatch.length > 0 ? (
        planToWatch.map((movie) => {
          return (
            <WatchListCard key={movie.id} movie={movie} type={"planToWatch"} />
          );
        })
      ) : (
        <p>No movies</p>
      )}
    </div>
  );
};

export default PlanToWatch;
