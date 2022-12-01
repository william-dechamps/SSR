import "./App.css";
import { useEffect, useState } from "react";

function User(props) {
  const { user } = props;
  return <p>{user}</p>;
}

function App() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getGroups();
  }, []);


  const getGroups = () => {
    fetch("http://localhost:8501/groupes", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then(setGroups)
      .catch((err) => alert("a problem has occured"));
  };

  return (
    <>
      <div>
        {groups.length > 0 &&
          groups.map((group, i) => {
            return (
              <div key={'groupe_' + i}>
                <h1> {"Groupe " + ++i}</h1>
                {group.map((user, key) => (
                  <User key={'person_' + i + '_' + key} user={user} />
                ))}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;