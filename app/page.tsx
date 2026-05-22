export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Independent Gym Owners
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict Which Members Will Cancel{" "}
          <span className="text-[#58a6ff]">Next Month</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          GymRetain analyzes check-in frequency, class attendance, and payment patterns to flag at-risk members 30 days before they quit — so you can act first.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Retaining Members — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["30 days", "Early warning before cancellation"],
            ["CSV & API", "Works with your existing gym software"],
            ["Automated", "Alerts sent directly to your inbox"]
          ].map(([stat, label]) => (
            <div key={stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff] mb-1">{stat}</div>
              <div className="text-xs text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited member risk scoring",
              "CSV upload & API integration",
              "Automated at-risk email alerts",
              "Retention dashboard & reports",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Free for 14 Days
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does GymRetain connect to my gym software?",
              "You can upload a CSV export from any gym management system, or use our REST API to sync data automatically. We support Mindbody, Glofox, and most CSV formats."
            ],
            [
              "How accurate is the cancellation prediction?",
              "Our model achieves over 80% accuracy in identifying members who cancel within 30 days, trained on behavioral signals like visit frequency drops, missed classes, and late payments."
            ],
            [
              "Can I cancel my subscription anytime?",
              "Yes. There are no long-term contracts. Cancel from your account dashboard at any time and you won't be charged again."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GymRetain. All rights reserved.
      </footer>
    </main>
  );
}
