import { motion } from "motion/react";
import { Globe2, Clock, ShieldCheck, Layers } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Fragmented Tech Stacks Are Growing",
    stat: "1,000+",
    statLabel: "Avg. SaaS tools per enterprise",
    description:
      "Modern enterprises juggle hundreds of disconnected applications. Zyntegrate turns chaos into a unified data ecosystem without rip-and-replace migrations.",
  },
  {
    icon: Clock,
    title: "Speed Is the New Competitive Edge",
    stat: "10×",
    statLabel: "Faster time to integration",
    description:
      "Manual data pipelines take months. Agent powered automation shrinks deployment from quarters to minutes, letting teams focus on strategy instead of plumbing.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Can't Be an Afterthought",
    stat: "99.9%",
    statLabel: "Uptime SLA",
    description:
      "With regulations tightening globally, every data flow needs audit trails and encryption. Zyntegrate bakes security and compliance into every integration.",
  },
  {
    icon: Globe2,
    title: "AI Demands Connected Data",
    stat: "3×",
    statLabel: "Better AI model accuracy",
    description:
      "AI models are only as good as the data they consume. Unified, clean, real-time data pipelines are the foundation for every successful AI initiative.",
  },
];

const WhyItMatters = () => {
  return (
    <section
      id="why-it-matters"
      className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-7xl mx-auto mb-6"
        >
          <span className="text-slate-500 font-semibold text-sm tracking-widest uppercase mb-2 block">
            Why It Matters
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              today's reality
            </span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            The world runs on data. Here's why seamless integration is no longer optional
            it's the foundation of every modern enterprise.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group bg-white rounded-3xl shadow-md border border-slate-200 p-6 overflow-hidden"
            >
              {/* Hover border */}
              <span className="absolute inset-0 border-2 border-transparent rounded-3xl pointer-events-none group-hover:border-blue-400 transition-all duration-500"></span>

              {/* Stat */}
              <div className="absolute top-6 right-6 text-right z-10">
                <span className="block text-3xl font-bold text-blue-600">
                  {reason.stat}
                </span>
                <span className="text-slate-500 text-xs">
                  {reason.statLabel}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-6 relative z-10">
                <reason.icon className="w-6 h-6 text-blue-600" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-slate-900 relative z-10">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed relative z-10">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyItMatters;