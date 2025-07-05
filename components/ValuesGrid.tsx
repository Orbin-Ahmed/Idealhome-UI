"use client";

const cards = [
  {
    number: 1,
    title: "Factory-Direct Advantage",
    description:
      "Work straight with the maker — honest pricing backed by proven quality and a local Emirati ownership you can trust.",
  },
  {
    number: 2,
    title: "Love It or Leave It",
    description:
      "Not 100% sure about the design? No problem — our fast and complimentary 3D visualization allows you to make changes or walk away without commitment.",
  },
  {
    number: 3,
    title: "Your Vision, Brought to Life",
    description:
      "Collaborate with our designers to create interiors that perfectly match your style, preferences, and budget.",
  },
  {
    number: 4,
    title: "One-Stop Solutions",
    description:
      "Simplify your project by combining Closets, Kitchen, doors, windows, and more under a single contract — saving time, money, and stress.",
  },
  {
    number: 5,
    title: "Clear, Predictable Process",
    description:
      "No vague promises. You'll get a clear timeline, transparent pricing, and consistent communication from day one.",
  },
  {
    number: 6,
    title: "Open-Door Policy",
    description:
      "You're always welcome to visit our Abu Dhabi facility and see your products being manufactured firsthand.",
  },
  {
    number: 7,
    title: "Premium Warranty",
    description:
      "Enjoy peace of mind with a 6-year warranty that protects you against manufacturing defects and guarantees quality.",
  },
];

const ValuesGrid = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center gap-3 justify-center text-center text-3xl font-semibold mb-12 text-black">
          <span className="w-1 h-6 bg-red-600 inline-block"></span>
          WHY CHOOSE IDEAL FACTORY?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.slice(0, 6).map((card) => (
            <div
              key={card.number}
              className="border border-gray-300 p-6 text-center shadow-sm"
            >
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {card.number}
              </div>
              <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Last Card Full-Width */}
        <div className="mt-8">
          <div className="border border-gray-300 p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {cards[6].number}
            </div>
            <h3 className="text-lg font-semibold mb-3">{cards[6].title}</h3>
            <p className="text-gray-700">{cards[6].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;
