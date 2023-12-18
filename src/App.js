import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import RigthBar from "./RigthBar";
import SaiderBar from "./SaiderBar";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, duspatch] = useStateValue();

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app__body">
            <SaiderBar />
            <Feed />
            <RigthBar />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
