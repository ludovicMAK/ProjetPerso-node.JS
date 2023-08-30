import React from "react";
import Navigation from "../components/Navigation";
import { useHistory } from 'react-router-dom';
const Home = () => {
  const [data, setData] = React.useState(null);
  const history = useHistory();
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
};

export default Home;
