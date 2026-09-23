import "@/styles/HomePage/ResumeBio.css";
import photo from "@/assets/profile.png";

export default function ResumeBio() {
 

  return (
    <header className="resume-bio">
      <div className="resume-bio-content">
        <div className="resume-bio-title-block">
          <p className="verset-title">2 Timothée 4:2</p>
          <p className="verset-content">« Prêche la parole, insiste en toute occasion, favorable ou non, reprends, censure, exhorte, avec toute douceur et en instruisant. »</p>
        </div>
      </div>
      <div className="overlay">
          <img src={photo} alt="photo" className="resume-bio-img" />
      </div>
    </header>
  );
}
