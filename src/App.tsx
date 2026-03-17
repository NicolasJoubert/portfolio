import Header from "@/components/layout/Header.tsx";
import { H1, Body } from "@/components/ui/Typography";
import Button from "@/components/ui/ButtonPerso.tsx";
import Tag from "@/components/ui/Tag";
import SectionLabel from "@/components/ui/SectionLabel";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-[800px] mx-auto px-8 pt-32 pb-24 flex flex-col gap-6">
        <H1>
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
      </main>
    </>
  );
}

export default App;
