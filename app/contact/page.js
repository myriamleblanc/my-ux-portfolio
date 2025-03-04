export default function Contact() {
    return (
      <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-5xl font-bold">Let's Connect</h1>
        <p className="text-lg text-gray-600 mt-4">Feel free to reach out!</p>
        <div className="mt-6 space-y-4">
          <a href="mailto:your-email@example.com" className="text-blue-500 text-lg hover:underline">
            📧 Email Me
          </a>
          <a href="https://linkedin.com/in/your-profile" className="text-blue-500 text-lg hover:underline">
            💼 LinkedIn
          </a>
          <a href="https://github.com/myriamleblanc" className="text-blue-500 text-lg hover:underline">
            🖥️ GitHub
          </a>
        </div>
      </div>
    );
  }
  