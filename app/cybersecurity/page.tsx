import type { Metadata } from "next";
import ServicePage from "../components/service-page";

export const metadata: Metadata = {
  title: "Cybersecurity Consulting | Neo Nova Innovations",
  description:
    "Travel-ready cybersecurity consulting backed by 18 years of ISSM, ISSO, and ISSE experience in complex and regulated environments.",
  alternates: { canonical: "/cybersecurity/" },
};

export default function CybersecurityPage() {
  return (
    <ServicePage
      eyebrow="Cybersecurity"
      title="Security experience built for complex environments."
      introduction="Neo Nova Innovations provides practical cybersecurity strategy, architecture, monitoring, and risk guidance. Our approach is grounded in 18 years of hands-on experience across security management, operations, and engineering."
      availability="Available to travel wherever the engagement requires"
      sections={[
        {
          title: "What we help solve",
          paragraphs: [
            "Security programs work best when requirements, technology, and day-to-day operations support one another. We help turn complex security expectations into clear technical decisions and achievable next steps.",
          ],
          items: [
            "Security architecture and design reviews",
            "Risk, compliance, and control implementation guidance",
            "Security monitoring and logging strategy",
            "Vulnerability-management and assessment planning",
            "Technical documentation and security process improvement",
          ],
        },
        {
          title: "Experience you can evaluate",
          paragraphs: [
            "Our background includes service as an Information System Security Manager, Information System Security Officer, and Information Systems Security Engineer. That breadth provides perspective from governance through implementation.",
            "Credentials include CISSP, Splunk Certified Power User, Splunk Certified System Administrator, and Microsoft Azure Fundamentals.",
          ],
        },
        {
          title: "Why NeoNova",
          paragraphs: [
            "We focus on useful recommendations that fit the environment in front of us. The goal is not to add complexity—it is to make security decisions clearer, more defensible, and easier to operate.",
          ],
        },
      ]}
      ctaTitle="Need an experienced security perspective?"
      ctaCopy="Tell us about the environment, challenge, and outcome you are working toward. Travel can be arranged based on engagement needs."
    />
  );
}
