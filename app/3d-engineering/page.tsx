import type { Metadata } from "next";
import ServicePage from "../components/service-page";

export const metadata: Metadata = {
  title: "Hobbyist 3D Printing and Design | Neo Nova Innovations",
  description:
    "Hobbyist-focused 3D printing, functional prototypes, custom enclosures, and design refinement available across the United States.",
  alternates: { canonical: "/3d-engineering/" },
};

export default function ThreeDEngineeringPage() {
  return (
    <ServicePage
      eyebrow="3D Printing & Design"
      title="Helping hobbyist ideas take physical form."
      introduction="Neo Nova Innovations supports hobbyists who want to turn an idea, replacement part, organizer, enclosure, or personal project into a practical 3D-printed object."
      availability="Hobbyist projects available throughout the United States"
      sections={[
        {
          title: "What we can explore",
          paragraphs: [
            "Some projects begin with a sketch, some with an existing part, and others with a problem that needs a custom fit. We collaborate on the intended use before refining the design for printing.",
          ],
          items: [
            "Functional hobbyist prototypes",
            "Custom organizers, mounts, and holders",
            "Project boxes and simple enclosures",
            "Existing-model refinement",
            "Small personal and creative print projects",
          ],
        },
        {
          title: "A straightforward process",
          paragraphs: [
            "We review the idea, dimensions, intended use, material considerations, and desired finish. Feasibility and expectations are discussed before a project moves forward.",
            "This service is intended for hobbyist and non-safety-critical uses. It is not a substitute for licensed professional engineering or certified manufacturing.",
          ],
        },
        {
          title: "Why NeoNova",
          paragraphs: [
            "We enjoy solving the small physical problems that mass-produced products overlook. The focus is a useful result, clear communication, and honest expectations about what desktop 3D printing can achieve.",
          ],
        },
      ]}
      ctaTitle="Have a hobbyist project in mind?"
      ctaCopy="Send the idea, approximate dimensions, and how you expect to use it. We will let you know whether it is a good fit for 3D printing."
    />
  );
}
