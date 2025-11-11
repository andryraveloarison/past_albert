import NavMenu from "@/components/Layout/NavMenu";
import { SERMONS } from "../data/sermons";
import "@/styles/SermonsPage/Sermon.css";

export function SermonsPage() {
  return (
    <>
        <NavMenu color="dark" />
        <h3 className="sermon-title">Toriteny</h3>

        <div className="sermons-card-container">
          {SERMONS.map((s) => (
            <div key={s.id} className="sermons-card">
              <img
                src={s.couverture}
                alt={s.titre}
              />
              <h3>
                {s.titre}
              </h3>
            </div>
          ))}
        </div>
    </>
  );
}