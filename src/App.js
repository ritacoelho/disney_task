import './App.css';

//Components
import GlobalAsset from './Components/GlobalAsset';
import SocMedStat from './Components/SocMedStat';
import YellowBar from './Components/YellowBar';

//Assets
import Asset1 from './Assets/Global_assets/Asset_1.svg';
import Asset2 from './Assets/Global_assets/Asset_2.svg';
import Asset3 from './Assets/Global_assets/Asset_3.svg';
import Asset4 from './Assets/Global_assets/Asset_4.svg';
import Facebook from './Assets/social_media_icons/facebook.png';
import Instagram from './Assets/social_media_icons/instagram.png';
import Linkedin from './Assets/social_media_icons/linkedin.png';
import Tiktok from './Assets/social_media_icons/tiktok.png';
import Youtube from './Assets/social_media_icons/youtube.png';
import Twitter from './Assets/social_media_icons/twitter.png';

function App() {
  return (
    <div className="App">
      <header className='Banner'>
        <h1 style={{textAlign: "left"}}>Travel in focus</h1>
        <YellowBar/>
        <div className='banner-text'>Click to explore how the yellow border is a portal to inspiring travel content and impactful brand stories.</div>
      </header>
      <div className="Body">
       
        <h2> Global Multiplatform Reach </h2>
        <YellowBar/>

        <div className='assets-container'>
          <GlobalAsset
            name="tv"
            icon={Asset1}
            reach="494M"
            desc="households in 172 countries"
          />

          <GlobalAsset
            name="social"
            icon={Asset2}
            reach="515M"
            desc="followers"
          />

          <GlobalAsset
            name="digital"
            icon={Asset3}
            reach="36M"
            desc="monthly reach"
          />

          <GlobalAsset
            name="print"
            icon={Asset4}
            reach="43M"
            desc="readers"
          />
        </div>

        <div className='assets-container'>
          <SocMedStat
            icon={Facebook}
            reach="195.6 M+"
            desc="global fans"
          />

          <SocMedStat
            icon={Instagram}
            reach="224.1 M+"
            desc="followers"
          />

          <SocMedStat
            icon={Twitter}
            reach="46.2 M+"
            desc="followers"
          />

          <SocMedStat
            icon={Tiktok}
            reach="XX.X M+"
            desc="followers"
          />

          <SocMedStat
            icon={Youtube}
            reach="26.5 M+"
            desc="subscribers"
          />

          <SocMedStat
            icon={Linkedin}
            reach="2.8 M+"
            desc="followers"
          />

        </div>
        
      </div>
    </div>
  );
}

export default App;
