export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Shiv Kumar</h2>
          <p className="text-sm text-gray-400">
            MCA student & full-stack developer. Passionate about scalable platforms, smart networking, and real-world tech impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Explore</h2>
          <ul className="space-y-2 text-sm text-gray-300">
           
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="/Components/Contact/Contact.jsx" className="hover:text-white">Contact</a></li>
            <li><a href="#resume" className="hover:text-white">Resume</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Connect</h2>
          <div className="flex space-x-4 text-sm text-gray-300">
            <a href="#" target="_blank" className="hover:text-white">GitHub</a>
            <a href="#" target="_blank" className="hover:text-white">LinkedIn</a>
            <a href="#" target="_blank" className="hover:text-white">Email</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Shiv Kumar. Built with ❤️ profile!
      </div>
    </footer>
  );
}