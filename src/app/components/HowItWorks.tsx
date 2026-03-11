import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    question: "When a new customer signs up, what does the agent do?",
    summary: "Turn natural language into automated workflows across your systems.",
    steps: [
      { icon: "⚡", label: "Trigger", text: "A new customer submits the signup form on your website." },
      { icon: "📋", label: "Pull Data", text: "The agent grabs the fields you care about name, email, city." },
      { icon: "🔗", label: "Sync", text: "It creates a contact in HubSpot and adds the lead to Salesforce automatically." },
      { icon: "🔔", label: "Notify", text: "Your team gets an instant Slack or email notification." },
      { icon: "✅", label: "Done", text: "All of this happens in seconds, with zero manual work." },
    ],
    closing: "No copy-pasting. No missed leads. Everything connected the moment it happens.",
  },
  {
    question: "What if it's going to rain tomorrow morning?",
    summary: "The agent wakes up on a schedule, checks the weather, and only acts when it needs to.",
    steps: [
      { icon: "⏰", label: "Trigger", text: "Every morning at 7AM, the agent automatically wakes up." },
      { icon: "🌐", label: "Fetch", text: "It calls the weather API and pulls just the forecast field for your city." },
      { icon: "🔍", label: "Check", text: "It reads the forecast — is it going to rain?" },
      { icon: "📱", label: "Act", text: 'If yes, it sends you a WhatsApp: "Hey, carry an umbrella today! 🌧️"' },
      { icon: "😴", label: "Skip", text: "If no rain, it does nothing and checks again tomorrow." },
    ],
    closing: "You only get notified when it actually matters. No noise, no spam.",
  },
  {
    question: "Can it notify my team when an order is placed?",
    summary: "The moment an order lands, the agent picks it up and gets everyone in the loop.",
    steps: [
      { icon: "🛒", label: "Trigger", text: "A customer places an order on your website." },
      { icon: "📦", label: "Pull Data", text: "The agent captures the Order ID and customer email." },
      { icon: "📬", label: "Queue", text: "It adds the order to your processing queue so nothing falls through." },
      { icon: "🔔", label: "Notify", text: "Your team is notified instantly via Slack or AWS SNS." },
      { icon: "📊", label: "Log", text: "The order is logged for tracking and follow-up scheduling." },
    ],
    closing: "Every order handled consistently — whether it's 1 a day or 1,000.",
  },
  {
    question: "What if a live chat message comes in at 2AM?",
    summary: "The agent never sleeps — it picks up every message so nothing gets missed.",
    steps: [
      { icon: "💬", label: "Trigger", text: "A customer sends a live chat message while your team is offline." },
      { icon: "📋", label: "Capture", text: "The agent pulls the customer name and message from the chat." },
      { icon: "🔗", label: "Update", text: "It updates HubSpot and Salesforce with the new customer info." },
      { icon: "⏰", label: "Schedule", text: "A follow-up reminder is scheduled for 9AM when your team is back." },
      { icon: "✅", label: "Zero Gaps", text: "Nothing slips through — every message is captured and actioned." },
    ],
    closing: "Your customers never feel ignored, even outside business hours.",
  },
];

export default function AgentExplainer() {
  const [active, setActive] = useState(0);
  const current = faqs[active];

  return (
    <section id="how-it-works" className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Background blobs — matches Agents section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-4">
            You Ask.
            <span className=" bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Our agent handles it.
            </span>
          </h2>
          <p className="text-blue-800 text-lg leading-relaxed max-w-1xl mx-auto">
            Zyntegrate agents connect your tools and automate your workflows without any code. Just tell it what you want, and it takes care of the rest.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — chips + 3-parts card */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-grey-500 font-medium mb-1">
              Common Questions
            </p>

            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left px-5 py-3 rounded-2xl border text-sm font-medium transition-all duration-200 ${
                  active === i
                    ? "bg-blue-900 border-blue-900 text-white shadow-lg shadow-blue-200"
                    : "bg-white border-blue-100 text-blue-800 hover:border-blue-300 hover:bg-blue-50 shadow-sm"
                }`}
              >
                {faq.question}
              </button>
            ))}

            {/* 3-parts explainer */}
            <div className="mt-3 p-5 rounded-2xl bg-white border border-blue-100 shadow-lg">
              <p className="text-xs uppercase tracking-widest text-blue-900 font-medium mb-4">
                Every agent has 3 parts
              </p>
              {[
                {  label: "1) Trigger", desc: "What starts it a signup, an order, a timer, a message." },
                {  label: "2) Data", desc: "The specific fields it pulls only what you need." },
                {  label: "3) Action", desc: "What it does notify, sync, queue, schedule." },
              ].map((item, i) => (
                <div key={i} className={`flex gap-3 items-start ${i > 0 ? "mt-4" : ""}`}>
                  {/* <span className="text-lg mt-0.5">{item.icon}</span> */}
                  <div>
                    <span className="text-sm font-semibold text-blue-900">{item.label}</span>
                    <p className="text-blue-700 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — animated answer panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="bg-white rounded-3xl border border-blue-100 shadow-2xl overflow-hidden"
            >
              {/* Panel header */}
              <div className="bg-blue-50 border-b border-blue-100 px-6 py-5">
                <span className="inline-block mb-2 text-xs uppercase tracking-widest bg-white text-blue-600 px-3 py-0.5 rounded-full border border-blue-200">
                  Agent Response
                </span>
                <p className="text-blue-900 font-semibold text-base leading-snug">
                  {current.summary}
                </p>
              </div>

              {/* Steps */}
              <div className="px-6 py-5">
                <p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-2">
                  Step by step
                </p>

                {current.steps.map((step, i) => (
                  <motion.div
                    key={`${active}-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
                    className="flex items-stretch"
                  >
                    {/* Timeline dot + line */}
                    <div className="flex flex-col items-center mr-4 flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-base shadow-sm flex-shrink-0">
                        {step.icon}
                      </div>
                      {i < current.steps.length - 1 && (
                        <div className="w-px flex-1 bg-gradient-to-b from-blue-200 to-blue-50 my-1" style={{ minHeight: 20 }} />
                      )}
                    </div>

                    {/* Text */}
                    <div className={`pt-1.5 ${i < current.steps.length - 1 ? "pb-5" : "pb-1"}`}>
                      <span className="inline-block text-xs uppercase tracking-widest bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-200 mb-1">
                        {step.label}
                      </span>
                      <p className="text-blue-900 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

             
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}