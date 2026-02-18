import { getContactData } from "@/lib/content";
import { TbMail, TbFileCv, TbExternalLink } from "react-icons/tb";

export default function ContactPage() {
  const contact = getContactData();

  if (!contact) {
    return (
      <div className="px-4 md:px-10 lg:px-16 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">Contact</h1>
        <p className="text-gray-400 text-lg">Contact information coming soon...</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 lg:px-16 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact</h1>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl">
        Get in touch! I&apos;m always open to discussing new projects, creative ideas, 
        or opportunities to be part of your vision.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Email */}
        <a
          href={`mailto:${contact.email}`}
          className="group p-6 border border-border hover:border-accent transition-colors"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-accent/10 rounded-lg">
              <TbMail className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-xl font-medium text-white">Email</h2>
          </div>
          <p className="text-accent group-hover:underline">{contact.email}</p>
        </a>

        {/* CV */}
        <a
          href={contact.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 border border-border hover:border-accent transition-colors"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-accent/10 rounded-lg">
              <TbFileCv className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-xl font-medium text-white">Resume</h2>
          </div>
          <p className="text-gray-400 group-hover:text-accent transition-colors flex items-center gap-2">
            View CV <TbExternalLink className="w-4 h-4" />
          </p>
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-12">
        <h2 className="text-xl font-medium text-white mb-6">Connect</h2>
        <div className="flex flex-wrap gap-4">
          {contact.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-gray-400 hover:text-accent hover:border-accent transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
