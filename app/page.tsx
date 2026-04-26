import Image from "next/image";
export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-green-400 font-semibold mb-3">
            24/7 Emergency Locksmith Edinburgh
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Locked Out? <br />
            Fast Help in Edinburgh
          </h1>

          <p className="text-slate-300 text-lg mt-6 max-w-xl">
            Emergency door opening, car unlocking, lock replacement and rapid
            response across Edinburgh and surrounding areas.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="tel:+447562760261"
              className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded-2xl font-semibold text-lg transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/447562760261?text=Hi%20I%20need%20help%20with%20a%20lock"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 px-6 py-4 rounded-2xl font-semibold text-lg transition"
            >
              💬 WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10 text-sm text-slate-300">
            <div>✓ Fast Arrival</div>
            <div>✓ Damage-Free Entry</div>
            <div>✓ Available 24/7</div>
            <div>✓ Fair Prices</div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">Need Urgent Help?</h2>
          <p className="text-slate-300 mb-6">
            Call now or send a WhatsApp message for immediate assistance.
          </p>

          <div className="space-y-3">
            <a
              href="tel:+447562760261"
              className="block text-center bg-red-600 hover:bg-red-700 px-6 py-4 rounded-2xl font-semibold transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/447000000000"
              target="_blank"
              className="block text-center bg-green-600 hover:bg-green-700 px-6 py-4 rounded-2xl font-semibold transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
      <main className="min-h-screen bg-slate-950 text-white p-10">
        {/* HERO */}
        <h1 className="text-4xl font-bold mb-10">Locksmith Edinburgh</h1>

        {/* 3 IMAGES SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Image
            src="/l.webp"
            alt="Locksmith opening car"
            width={300}
            height={300}
            className="rounded-2xl object-cover w-full h-[300px]"
          />

          <Image
            src="/l.webp"
            alt="Door opening service"
            width={300}
            height={300}
            className="rounded-2xl object-cover w-full h-[300px]"
          />

          <Image
            src="/l.webp"
            alt="Lock replacement service"
            width={300}
            height={300}
            className="rounded-2xl object-cover w-full h-[300px]"
          />
        </section>
      </main>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>

        <div className="grid md:grid-cols-2 gap-5 text-slate-300 text-lg">
          <div>✓ 24 Hour Emergency Service</div>
          <div>✓ Rapid Response Across Edinburgh</div>
          <div>✓ Professional Tools</div>
          <div>✓ Damage-Free Methods</div>
          <div>✓ Honest Pricing</div>
          <div>✓ Friendly Local Service</div>
        </div>
      </section>
      <footer className="border-t border-slate-800 py-10 text-center text-slate-400">
        Edinburgh Locksmith Service • Available 24/7
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-slate-950 border-t border-slate-800 p-3 grid grid-cols-2 gap-3">
        <a
          href="tel:+447000000000"
          className="bg-red-600 text-center py-3 rounded-2xl font-semibold"
        >
          📞 Call
        </a>

        <a
          href="https://wa.me/4407562760261"
          target="_blank"
          className="bg-green-600 text-center py-3 rounded-2xl font-semibold"
        >
          💬 WhatsApp
        </a>
      </div>
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-3xl">
              <h3 className="text-xl font-semibold mb-3">🚪 Door Opening</h3>
              <p className="text-slate-300">
                Locked out of your home or flat? Fast non-destructive entry.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-3xl">
              <h3 className="text-xl font-semibold mb-3">🚗 Car Unlocking</h3>
              <p className="text-slate-300">
                Keys locked inside your vehicle? Quick emergency access.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-3xl">
              <h3 className="text-xl font-semibold mb-3">🔐 Lock Change</h3>
              <p className="text-slate-300">
                Replace damaged, old or insecure locks at fair prices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
