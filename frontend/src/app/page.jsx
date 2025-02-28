"use client";
import ProfileDiv from "@/components/Index/ProfileDiv";
import AboutMeDiv from "@/components/Index/AboutMeDiv";
import ContactDiv from "@/components/Index/ContactDiv";
export default function Index() {
  return (
    <>
      <section>
        <ProfileDiv />
        <div>
          <AboutMeDiv />
          <ContactDiv />
        </div>
      </section>
    </>
  );
}
