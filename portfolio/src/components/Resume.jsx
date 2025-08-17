export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-muted/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">My Resume</h2>
        <iframe
          src="/resume.pdf" // place your resume in public/
          className="w-full h-[600px] border rounded-lg shadow"
          title="Resume Preview"
        />
        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block px-5 py-2 bg-primary text-white rounded-lg shadow hover:scale-105 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
