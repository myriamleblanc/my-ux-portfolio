export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        Myriam Leblanc
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mt-4">
        UX Designer | Frontend Developer | Innovator
      </p>
      <a
        href="/projects"
        className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition"
      >
        View My Work
      </a>
    </div>
  );
}
