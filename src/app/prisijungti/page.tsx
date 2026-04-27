import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignIn from "@/components/SignIn";

export default function SignInForm() {
  return (
    <>
      <Navbar />
      <main id="main">
        <SignIn />
      </main>
      <Footer />
    </>
  );
}
