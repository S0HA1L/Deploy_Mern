import logo from './logo.svg';
import './styles.css';

function App() {
  return (
    
<div>
	
    <section>
        <input type="checkbox" id="check"/>
        <header>
          <h2><a href="#" className="logo">Heart Disease</a></h2>
          <div className="navigation">
            <a href="#">Home</a>
            <a href="#about">About Digi Care</a>
            {/* <!-- <a href="#dashboard">Dashboard</a> --> */}
            <a href="#Develop">Developers</a>
            <a href="https://eyedesks.pythonanywhere.com/predicts" >Predictor</a>
          </div>
          <label for="check">
          <i className="fas fa-bars menu-btn"></i>
          <i className="fas fa-times close-btn"></i>
          </label>
        </header>
        <div className="content" style={{'margin-top': '8%'}}>
          <div className="info">
            <h2>Digi Care <br/><span>Checkup</span></h2>
            <p>Health Diseases are increasing day by day - Take a Step to prevent it.</p>
            <a href="#about" className="info-btn">More info</a>
          </div>
        </div>
      </section>
      <section id="about">
        <h2>About Digi Care</h2>
        <p className="about-content" style={{'text-align': 'center'}}>
          Digi Care  is a web app which has 
          a Machine Learning model running at the back. The purpose of developing this app is to 
          predict if the patient has severe heart diseases. This model is based on the Heart Disease dataset.
          The term “heart disease” refers to several types of heart conditions. The most common type of heart disease is coronary artery disease (CAD),
          which affects the blood flow to the heart. Decreased blood flow can cause a heart attack.
          Sometimes heart disease may be “silent” and not diagnosed until a person experiences signs or symptoms of a heart attack, heart failure, or an arrhythmia.
          High blood pressure, high blood cholesterol, and smoking are key risk factors for heart disease.
        </p>
      </section>
      <section id="about">
        <h2 id="Develop">Developers</h2>
        <p className="about-content" style={{'text-align': 'center'}}>
          We are the team of upto four members pursuing B.E in Computer Science from Anjuman Islam
            Kalsekar Technical Campus, Mumbai University. We have worked to make this one of the best project.
            We will develop some great projects in the future. Feel free to contact us.
        </p>
      </section>
      {/* <!-- <section id="info"> */}
        
    {/* </section> --> */}
	
</div>
  );
}

export default App;
