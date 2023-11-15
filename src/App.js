import Player from "./components/Player.js";
import TimerChallenge from "./components/TimerChallenge.js";
import index from "./index.css";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Peaceful" targetTime={1} />
        <TimerChallenge title="Easy walk" targetTime={2} />
        <TimerChallenge title="Medium rare" targetTime={3} />
        <TimerChallenge title="Finally some challenge" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Beast mode" targetTime={15} />
      </div>
    </>
  );
}

export default App;
