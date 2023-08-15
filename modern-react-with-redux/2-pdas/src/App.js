import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                description="Alex was created by Amazon and helps you buy things"
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                description="Cortana was made by Microsoft. Who knows what it does"
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                description="Siri was made by Apple and is being phased out"
                title="Siri"
                handle="@siri01"
                image={SiriImage}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
