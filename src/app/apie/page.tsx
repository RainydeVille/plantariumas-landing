import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Content from "@/components/Content";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Content
          image="/images/aboutPitch1.jpg"
          title="Labas, mano vardas Eglė"
          text="Ir aš esu Plantariumo įkūrėja. Kiek save atsimenu, galėjau palaikyti vieno vienintelio augalėlio gyvybę. Ir visada pavydėjau tiems kurie turi talentą augalams. Pavydėjau kol vieną dieną ir mane aplankė augalų fėja... ar turėčiau sakyti fėjus su kiemu kuriame daugiau nei vienas augalas. Ir daug žemės. Ir namais kuriuose trūko žalumos. Juk namai ne namai be katinų ir augalų. Ir kiemas ne kiemas be jų. O ką daryt, jei... sunku su augalėliais? Na potencialo lyg ir turiu, bet jau ta atmintis... Kuo daugiau augalėlių, tuo daugiau klausimų... kada ten laisčiau, kuo ir kada ten tręšt, kada ten skaičiau persodint reikia ir kas kiek metų... jau tas klausimas KADA. Kažkur esantys užrašai namuose apie augalus, skaičiau, bet pamiršau užsirašyt et cetera et cetera... ir dar sąrašas ko norėčiau naujo šiais metais. Pamišimas. Kaip norėčiau gauti priminimą į telefoną ar el. paštą... o juk turėtų būti? Juk jei yra problema, turėtų būti ir sprendimas. Juk negaliu aš viena tokia būti. ⬅️ Va taip ir gimė Plantariumo idėja. Nes pasirodo gero lietuviško sprendimo nėra. Ir jei galiu tą sprendimą sukurti, tai vadinasi, ir turėčiau taip padaryti. O jei galiu ne tik sau, bet ir kitiems? Tai dar geriau. Tad Plantariumas - vieta visiems. Visiems kurie myli augalus ir kuriems Plantariumas padeda jais rūpintis paprasčiau."
        />
      </main>
      <Footer />
    </>
  );
}
