export default function Projects() {
    return (
      <div className="bg-white text-black min-h-screen p-10">
        <h1 className="text-4xl font-bold text-center mb-10">My UX Projects</h1>
        <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold">48-Hour Game Jam UX Design</h2>
          <p className="text-gray-700 mt-2">
            Designed the UI and game flow for a Unity game in a 48-hour game jam, 
            focusing on player experience, accessibility, and intuitive interaction.
          </p>
          <a href="https://your-github-link-to-game-jam-project" className="text-blue-500 mt-4 block hover:underline">
            View Case Study →
          </a>
        </div>
      </div>
    );
  }
  