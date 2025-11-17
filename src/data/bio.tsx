import photoFLMAnkatso from "@/assets/ankatso.jpg";
import photoFlmIvato from "@/assets/ivato.jpg";
import photoFlmTsarahonenana from "@/assets/tsarahonenana.jpg";
import photoFLM67ha from "@/assets/67ha.jpg";
import photoMorafeno from "@/assets/morafeno.jpg"

export const BIO = {
  nom: "RAVELOARISON Albert",
  titre: "Pasteur principal & enseignant biblique",
  photo: photoFLMAnkatso, // image principale
  famille:
    "Pastora Raveloarison Albert sy Ramatoa Fara vadiny dia nanomboka nanao ny asa Pastoraly nanomboka ny taona 1999 ka atramin'izao.",
  historiqueEglises: [
      { 
      annee: "1999-2003", 
      eglise: "FLM Morafeno Avaratra", 
      role: "Pastora",  
      description: "Tao amin'ny Fitandremana Morafeno Avaratra, Tsiroanomandidy izy ireo no nanomboko ny asa fanompoana amin'ny maha pastora.",
      photo: photoMorafeno
    },
    { 
      annee: "2028-2019", 
      eglise: "FLM Ambolokandrina", 
      role: "Pastora",  
      description: "Nanatanteraka ny asa fanompoana tao amin'ny FLM Ambolokandrina Ankatso.",
      photo: photoFLMAnkatso
    },
    { 
      annee: "2008-2012", 
      eglise: "Flm Ivato", 
      role: "Pastora",  
      description: "MPitondra fitandremana Ivato famonjena nanomboka ny... ",
      photo: photoFlmIvato
    },
    { 
      annee: "2013-2023", 
      eglise: "Flm Tsarahonenana", 
      role: "Mpitondra fileovana",  
      description: "Nitondra ny Fileovan'ny Tsarahonenana nanomboka ny taona...",
      photo: photoFlmTsarahonenana
    },
    { 
      annee: "okat 2023 - ", 
      eglise: "FLM 67ha", 
      role: "Mpitondra fileovana",  
      description: "Mpitondra ny fileovan'ny Fahamarinana 67ha izy ankehitriny.",
      photo: photoFLM67ha
    },
  ],
  vision: "Annoncer l'Évangile, former des disciples et bâtir des familles solides, empreintes d'amour, de foi et d'espérance.",
};
