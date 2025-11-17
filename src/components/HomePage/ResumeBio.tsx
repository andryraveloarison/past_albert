import "@/styles/HomePage/ResumeBio.css";
import photo from "@/assets/profile.png";

export default function ResumeBio() {
 

  return (
    <header className="resume-bio">
      <div className="resume-bio-content">
        <div className="resume-bio-title-block">
          <p className="verset-title">Heb 5-25</p>
          <p className="verset-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate esse voluptatibus deserunt eligendi, ad deleniti odit harum, cumque ratione sunt provident exercitationem mollitia incidunt quaerat! Quasi ipsam deserunt animi numquam.</p>
        </div>
      </div>
      <div className="overlay">
          <img src={photo} alt="photo" className="resume-bio-img" />
      </div>
    </header>
  );
}
