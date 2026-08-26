import type { Metadata } from "next";
import ServicePage from "../components/service-page";

export const metadata: Metadata = {
  title: "Technology Consulting in Brevard County | Neo Nova Innovations",
  description:
    "Practical technology consulting for Melbourne, Florida, the Space Coast, and Brevard County.",
  alternates: { canonical: "/technology-consulting/" },
};

export default function TechnologyConsultingPage() {
  return (
    <ServicePage
      eyebrow="Technology Consulting"
      title="Clear technology guidance for the Space Coast."
      introduction="Neo Nova Innovations helps people and organizations make practical technology decisions without unnecessary complexity. We translate goals and constraints into solutions that can be understood, maintained, and improved."
      availability="Serving Melbourne, the Space Coast, and Brevard County"
      sections={[
        {
          title: "Local, practical support",
          paragraphs: [
            "Technology choices can become expensive when the problem is not clearly defined. We begin by understanding what needs to work, what is already in place, and what a successful result looks like.",
          ],
          items: [
            "Solution planning and technical decision support",
            "Infrastructure and system guidance",
            "Technology modernization planning",
            "Troubleshooting and problem isolation",
            "Security-minded technology recommendations",
          ],
        },
        {
          title: "Built around your needs",
          paragraphs: [
            "Our recommendations are shaped by budget, maintainability, security, and actual use. We explain the tradeoffs plainly so you can make informed decisions instead of buying technology you do not need.",
          ],
        },
        {
          title: "Why work with NeoNova",
          paragraphs: [
            "Our combination of technical depth, cybersecurity experience, and local Space Coast availability provides a steady partner for projects that need thoughtful planning and direct communication.",
          ],
        },
      ]}
      ctaTitle="Have a technology problem to untangle?"
      ctaCopy="Share what is not working—or what you want to build—and we will help identify a practical path forward in Brevard County."
    />
  );
}
