import Header from "@/components/layout/Header.tsx";
import { H1, Body } from "@/components/ui/Typography.tsx";
import Button from "@/components/ui/ButtonPerso.tsx";
import SectionLabel from "@/components/ui/SectionLabel.tsx";
import Tag from "./components/ui/Tag.tsx";
import Footer from "./components/layout/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-[800px] mx-auto px-8 pt-32 pb-24 flex flex-col gap-6">
        <H1 className="relative z-0">
          Je construis des interfaces
          <br />
          qui durent.
        </H1>
        <Body>Frontend developer junior...</Body>
        <div>
          <Button variant="primary">Voir mes projets</Button>
        </div>
        <div>
          <Tag variant="default">React</Tag>
        </div>
        <SectionLabel>Projets</SectionLabel>
        <SectionLabel>Projets</SectionLabel>
        <SectionLabel>Projets</SectionLabel>
        <SectionLabel>Projets</SectionLabel>
        <SectionLabel>Projets</SectionLabel>
        <SectionLabel>Projets</SectionLabel>
        <SectionLabel>Projets</SectionLabel>
      </main>
      <Footer />
    </>
  );
}

export default App;
