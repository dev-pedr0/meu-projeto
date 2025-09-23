import Projects from "@/components/Projects";
import Title from "@/components/Title";
import UserTeacherSection from "@/components/UserTeacherSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <header className="mb-5">
        <h1 className="font-bold text-3xl text-center">ASSESSMENTS DA DISCIPLINA DE MOBILE FIRST</h1>
      </header>
      <section>
        <UserTeacherSection/>
      </section>
      <section>
        <Title title={"meus projetos"}/>
        <Projects/>
      </section>
    </div>
  );
}
