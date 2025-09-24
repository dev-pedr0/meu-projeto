import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Title from "@/components/Title";
import UserTeacherSection from "@/components/UserTeacherSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header/>
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
