"use client";

const CommunityPage = () => {
  const communities = [
    { 
      name: "Eco Warriors", 
      description: "Join a group of eco-conscious individuals making a difference.", 
      image: "https://img.freepik.com/premium-photo/blur-businessman-little-boy-holding-wind-turbine-together-symbolize-eco-friendly-business-investing-esg-environmental-protection-by-alternative-energy-sustainable-future-reliance_31965-254131.jpg?ga=GA1.1.944648832.1742602162"
    },
    { 
      name: "Green Innovators", 
      description: "Collaborate on innovative solutions for a sustainable future.", 
      image:"https://img.freepik.com/premium-photo/green-business-esg-management-tool-save-world-lca-future-better-day_31965-324180.jpg?ga=GA1.1.944648832.1742602162"
    },
    { 
      name: "Sustainability Enthusiasts", 
      description: "Share and learn about sustainable living practices.", 
      image:"https://img.freepik.com/free-photo/sustainable-development-goals-still-life_23-2150196642.jpg?ga=GA1.1.944648832.1742602162"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">Our Communities</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {communities.map((community) => (
          <div
            key={community.name}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <img 
              src={community.image}
              alt={community.name} 
              className="w-full h-40 object-cover rounded-md mb-4" 
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{community.name}</h2>
            <p className="text-gray-600 mb-4">{community.description}</p>
            <div className="flex justify-center gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Explore
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CommunityPage;
