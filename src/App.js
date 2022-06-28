import "./App.css";

import MynavBar from "./profile/MynavBar";
import Greet from "./profile/Profile";
import Saidbar from "./profile/Saidbar";
import Contenu from "./profile/Contenu";


const persons = [
  {
    name: "Superman ",
    profession: " Journalist",
    bio: " Sent as a baby to Earth from the dying planet Krypton, Kal-El was adopted ",
    img: "./img/hero2.svg",
  },
  {
    name: "Iron Man",
    profession: "businessman",
    bio: "genius with a brilliant mind for technology and inventions",
    img: "./img/hero5.svg",
  },
  {
    name: "Robotman",
    profession: "superhero",
    bio: "Cliff Steele became Robotman after a race car accident destroyed his body ",
    img: "./img/hero4.svg",
  },
  {
    name: "Shazam",
    profession: " child ",
    bio: "he has superhuman strength, speed, stamina and can fly. He has unlimited control over lightning meaning that he can project it ",
    img: "./img/hero1.svg",
  },
  {
    name: "Hellboy",
    profession: " evil mystic",
    bio: " He is the devil who fights for the government of the United States and is himself against the forces of darkness ",
    img: "./img/hero3.svg",
  },
];

function App() {
  // the alert message with the name of the profile user.

  return (
    <div className="App">
      <MynavBar />
      <Saidbar />
      <div className="cardPos">
        {persons.map((person, i) => (
          <Contenu key={i} person={person} />
        ))}
      </div>
      
        <div className="footer">
          
          <span>&copy; 2021 creativeLabs.</span>
        </div>
       
       
      
    </div>
  );
}

export default App;
