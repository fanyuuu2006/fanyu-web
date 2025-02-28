"use client";
import ProfileDiv from "@/components/Index/ProfileDiv";
import AboutMeDiv from "@/components/Index/AboutMeDiv";
import ContactDiv from "@/components/Index/ContactDiv";
import SkillDiv from "@/components/Index/SkillDiv";
export default function Index() {
  return (
    <>
      <section>
        <ProfileDiv />
        <div>
          <AboutMeDiv />
          <ContactDiv />
          <SkillDiv />
        </div>
      </section>
    </>
  );
}
