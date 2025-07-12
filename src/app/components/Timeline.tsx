export default function Timeline() {
  const memories = [
    {
      title: "First Chat 💬",
      date: "Feb 12",
      desc: "The moment our story began."
    },
    {
      title: "First Date 🍕",
      date: "Mar 03",
      desc: "You looked stunning, and I couldn't stop smiling."
    },
    {
      title: "Late Night Talks 🌙",
      date: "Apr 09",
      desc: "Fell asleep talking to you."
    },
    {
      title: "5 Months 🥳",
      date: "Jul 12",
      desc: "Here we are, stronger than ever!"
    }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-semibold text-center text-pink-600 mb-10">
        Our Journey
      </h2>
      <div className="max-w-2xl mx-auto space-y-8">
        {memories.map((item, idx) => (
          <div key={idx} className="border-l-4 border-pink-500 pl-4">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="mt-1 text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
