import "./App.css";
import MemberItem from "./components/MemberItem/MemberItem";

function App() {
  return (
    <div className="app-container">
      <h2 className="title">My dream team</h2>
      <div className="team-container">
        <MemberItem
          name="Yevhen"
          surname="Lys"
          position="Business analyst"
          photoUrl="./images/yevhen.jpg"
          color="green"
        />
        <MemberItem
          name="Dmytro"
          surname="Ivasikiv"
          position="Developer"
          photoUrl="./images/dmytro.jpg"
          color="blue"
        />
        <MemberItem
          name="Vasyl"
          surname="Komarnytskyi"
          position="Developer"
          photoUrl='./images/vasyl.png'
          color="orange"
        />
        <MemberItem
          name="Tania"
          surname="Zaiets"
          position="UI/UX Designer"
          photoUrl='./images/tania.jpg'
          color="pink"
        />
        <MemberItem
          name="Tania"
          surname="Zaiets"
          position="UI/UX Designer"
          photoUrl='./images/tania.jpg'
          color="pink"
        />
      </div>
    </div>
  );
}

export default App;
