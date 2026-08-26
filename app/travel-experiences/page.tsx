import type { Metadata } from "next";
import ServicePage from "../components/service-page";

export const metadata: Metadata = {
  title: "Travel Experiences and Journeys | Neo Nova Innovations",
  description:
    "Travel stories, lessons, and moments from our own journeys—shared as a way to recharge beyond demanding work.",
  alternates: { canonical: "/travel-experiences/" },
};

export default function TravelExperiencesPage() {
  return (
    <ServicePage
      eyebrow="Travel Experiences"
      title="The journeys that help us reset and look farther."
      introduction="Cybersecurity and technical work can be demanding. Travel is how we step away, reconnect, and return with a wider perspective. This space shares our own journeys, memorable places, and lessons from the road."
      availability="Personal travel stories and inspiration—not travel-agent services"
      sections={[
        {
          title: "Why travel belongs here",
          paragraphs: [
            "Neo Nova Innovations is built around security, creativity, and exploration. Travel is the part that reminds us why balance matters and how new environments can restore curiosity after intense work.",
          ],
        },
        {
          title: "What we share",
          paragraphs: [
            "These stories are based on our own experiences and perspectives. They are intended to inspire exploration and offer an honest look at the moments that stayed with us.",
          ],
          items: [
            "Destination stories and memorable experiences",
            "Lessons learned while planning and traveling",
            "Nature, cities, food, and local discoveries",
            "The role of travel in recovering from demanding work",
          ],
        },
        {
          title: "A clear distinction",
          paragraphs: [
            "Neo Nova Innovations does not act as a travel agency, booking service, or professional travel advisor. Details can change, so readers should independently verify current costs, schedules, entry requirements, and safety information.",
          ],
        },
      ]}
      ctaTitle="Follow the journey."
      ctaCopy="Travel stories will grow as we continue exploring. If one of our journeys sparks a question or connection, we would enjoy hearing from you."
    />
  );
}
