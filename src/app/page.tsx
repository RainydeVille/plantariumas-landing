import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pitch from "@/components/Pitch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pitch
          image="/images/pitch1.jpg"
          title="Visi augalai vienoje vietoje"
          text="Daugiau jokių spėlionų kokius augalus turi ir kaip jais rūpintis. Viską rasi savo asmeninėje augalų bibliotekoje. Reikia pridėti naują? Ieškok bendroje augalų bibliotekoje. Turi daugiau nei vieną tokį patį augalą? Duok jiems skirtingus vardus, kad atskirtum kuris yra kuris."
        />
        <Pitch
          reverse
          image="/images/pitch2.jpg"
          title="Priminimai palaistyti, patręšti, persodinti."
          text="Daugiau nebereikės galvoti kada rūpintis savo augalais. Galėsi matyti kada paskutinį kartą laistei, tręšei ar persodinai ir kada tai reikės dayti kitą kartą. Viską gali matyti ir koreguoti programėlės kalendoriuje ir užsiprenumeruoti priminimus, kad tikrai nepamirštum."
        />
        <Pitch
          image="/images/pitch3.jpg"
          title="Platforma visiems"
          text="Plantariumas, tai vieta visiems augalų mėgėjams. Nesvarbu ar namie vešlios džiunglės ar jauti jog gali palaikyti tik vieno augalėlio gyvybę (su šia platforma galbūt tai pakeisi?), čia ritmą sau ras kiekvienas. O jei matai jog kažko trūksta, visada gali pateikti rekomendaciją — tavo nuomonė čia vertinama ir labai svarbi."
        />
      </main>
      <Footer />
    </>
  );
}
