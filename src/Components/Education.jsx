import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="py-24 px-6 " id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-primary"> Education & Certifications</span>
        </h2>

        <div className="mt-16 space-y-10">
          {/* University */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-primary transition">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">
                Bachelor of Computer & Communication Engineering
              </h3>
            </div>

            <p className="text-zinc-400">Mansoura University — 2025</p>

            <p className="mt-2 text-zinc-400">
              GPA: <span className="text-white font-medium">3.87</span>
            </p>
          </div>

          {/* Certifications */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-primary transition">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">
                Professional Training & Certifications
              </h3>
            </div>

            <ul className="space-y-3 text-zinc-400">
              <li>• ITI – React Frontend Development</li>
              <li>• DEPI – React & Node.js Track</li>
              <li>• AWS Cloud Foundations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
