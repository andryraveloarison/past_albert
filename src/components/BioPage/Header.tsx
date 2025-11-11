
import "@/styles/BioPage/Bio.css";

export default function Header() {
  return (
      <header className="bio-header">
        <div className="bio-header-top">
          <div className="bio-logo">Logo</div>
          <p className="bio-suffixe">Pastora</p>
        </div>

        <div className="bio-header-content">
          <p className="bio-title">Raveloarison</p>
          <div className="bio-hero" />
          <p className="bio-resume">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem corporis earum id ipsa eum adipisci ad ex laboriosam doloremque, laudantium quam accusantium culpa ratione veritatis illo eaque hic? Distinctio, beatae?
          </p>
        </div>
      </header>
  );
}
