"use client";
import ProfileDiv from "@/components/Index/ProfileDiv";
import AboutMeDiv from "@/components/Index/AboutMeDiv";
import SkillDiv from "@/components/Index/SkillDiv";
import ProjectCarouselDiv from "@/components/Index/ProjectCarouselDiv";
import ContactDiv from "@/components/Index/ContactDiv";
export default function Index() {
  return (
    <>
      <section>
        <ProfileDiv />
        <div style={{width: "1000px"}}>
          <AboutMeDiv />
          <SkillDiv />
          <ProjectCarouselDiv />
        </div>
      </section>
      <section>
        <ContactDiv />
      </section>
    </>
  );
}
