import FirstImage from "../assets/pfp1.jpg";
import SecondImage from "../assets/pfp2.jpg";

export type TestimonialData = {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
};

export const TESTIMONIALS_DATA: TestimonialData[] = [
  {
    id: 1,
    name: "Parry Hotter",
    location: "Belgrade",
    image: FirstImage,
    text: "We bought a car from this dealership and had an amazing experience! The process was easy and the prices were very competitive. The sales team was professional and helped us find exactly what we were looking for.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ron Rizzly",
    location: "Tashkent",
    image: SecondImage,
    text: "The car was in excellent condition and exceeded our expectations. Highly recommend this dealership for your next car purchase! The financing options made it easy to get the car we wanted.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "New York",
    image: FirstImage,
    text: "Outstanding service from start to finish! The team was knowledgeable, patient, and helped us navigate the entire car buying process. We couldn't be happier with our new vehicle.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    location: "Los Angeles",
    image: SecondImage,
    text: "Best car buying experience I've ever had. The inventory was impressive, and the staff went above and beyond to ensure we found the perfect car. The after-sales service is also excellent.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Davis",
    location: "Chicago",
    image: FirstImage,
    text: "I was impressed by the transparency and honesty of the sales team. No pressure tactics, just genuine help finding the right car. The car has been running perfectly since day one.",
    rating: 5,
  },
  {
    id: 6,
    name: "David Wilson",
    location: "Miami",
    image: SecondImage,
    text: "Great selection of vehicles and competitive pricing. The test drive process was smooth, and the paperwork was handled efficiently. Highly satisfied with my purchase!",
    rating: 5,
  },
  {
    id: 7,
    name: "Jessica Martinez",
    location: "Houston",
    image: FirstImage,
    text: "Absolutely love my new car! The dealership made the entire process stress-free. They were patient with all my questions and helped me find the perfect vehicle within my budget. Couldn't be happier!",
    rating: 5,
  },
  {
    id: 8,
    name: "Robert Thompson",
    location: "Seattle",
    image: SecondImage,
    text: "Professional service from the moment I walked in. The sales representative understood exactly what I needed and showed me several great options. The car I purchased has been flawless.",
    rating: 5,
  },
  {
    id: 9,
    name: "Amanda White",
    location: "Boston",
    image: FirstImage,
    text: "This is my second car purchase from this dealership, and they continue to exceed expectations. Great prices, excellent customer service, and quality vehicles. Highly recommend!",
    rating: 5,
  },
  {
    id: 10,
    name: "James Anderson",
    location: "Denver",
    image: SecondImage,
    text: "The best car buying experience I've ever had. The team was knowledgeable, friendly, and never pushy. They helped me find exactly what I was looking for at a great price.",
    rating: 5,
  },
  {
    id: 11,
    name: "Lisa Brown",
    location: "Atlanta",
    image: FirstImage,
    text: "I was nervous about buying a car, but the staff made me feel comfortable throughout the entire process. They answered all my questions and helped me make an informed decision.",
    rating: 5,
  },
  {
    id: 12,
    name: "Christopher Lee",
    location: "Phoenix",
    image: SecondImage,
    text: "Outstanding dealership! The inventory is impressive, the prices are fair, and the service is top-notch. My new car is everything I hoped for and more. Thank you!",
    rating: 5,
  },
];

