import React from "react";
import Layout from "~/layout/Layout";

function GiftGuide() {
  return (
    <Layout>
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        Gift Guide
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Looking for a meaningful gift? Our handcrafted resin and candle creations
        are designed to celebrate love, milestones, and special moments—
        beautifully and timelessly.
      </p>

      {/* Gift by Occasion */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">Gift by Occasion</h2>

        <div className="space-y-8">
          {/* Valentine's Day */}
          <div>
            <h3 className="text-xl font-medium mb-2">Valentine’s Day</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Romantic resin jewelry</li>
              <li>Scented candle bouquets</li>
              <li>Preserved flower gift sets</li>
            </ul>
          </div>

          {/* Wedding Package */}
          <div>
            <h3 className="text-xl font-medium mb-2">Wedding Package</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Elegant engagement tray</li>
              <li>Decorative mirror</li>
              <li>Personalized Nikah Nama (name plate)</li>
              <li>Wedding pen</li>
              <li>Preserved wedding garland</li>
              <li>Candle keepsakes for return wedding gifts</li>
            </ul>
          </div>

          {/* Anniversary */}
          <div>
            <h3 className="text-xl font-medium mb-2">Anniversary Package</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Custom resin clocks</li>
              <li>Personalized photo frames with couple’s picture</li>
              <li>Anniversary date resin pieces</li>
              <li>Scented candle bouquets</li>
            </ul>
          </div>

          {/* Birthday */}
          <div>
            <h3 className="text-xl font-medium mb-2">Birthday</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Scented candles as return gifts</li>
              <li>Personalized décor items</li>
              <li>Personalized photo frames</li>
              <li>Scented candle bouquets</li>
            </ul>
          </div>

          {/* Home & Office */}
          <div>
            <h3 className="text-xl font-medium mb-2">Home & Office</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Artistic wall décor</li>
              <li>Premium resin clocks</li>
              <li>Corporate & office gifting</li>
              <li>Farewell gifts</li>
              <li>Candle gifts for office or corporate events</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Newborn Memory */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">
          Newborn Baby’s Memory Preservation
        </h2>

        <p className="text-gray-700 mb-4">
          We offer resin preservation for the following sentimental keepsakes:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Dried umbilical cord
            <span className="text-sm text-gray-500 italic">
              {" "}
              — must be completely dried and naturally detached
            </span>
          </li>
          <li>
            Newborn hand & leg prints (ink or clay impressions)
            <span className="text-sm text-gray-500 italic">
              {" "}
              — prints must be clear and fully dried
            </span>
          </li>
          <li>
            First haircut / baby hair lock
            <span className="text-sm text-gray-500 italic">
              {" "}
              — hair must be clean, dry, and oil-free
            </span>
          </li>
          <li>Used pregnancy test kit (fully dried)</li>
          <li>Baby’s birth details (name, date, time, height & weight)</li>
          <li>Hospital bands, tags, or written notes</li>
          <li>Any small personal item (after consultation)</li>
        </ul>

        <p className="mt-4 text-sm text-gray-500 italic">
          Items not listed may be accepted after prior discussion.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center border-t pt-8">
        <p className="text-lg font-medium mb-2">Preserve love. Gift art.</p>
        <p className="text-gray-600 mb-6">
          Need help choosing the perfect gift? Inbox us — we’re happy to assist.
        </p>

        <a
          href="https://www.facebook.com/radianceAva"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Inbox Us on Facebook
        </a>
      </div>
    </Layout>
  );
}

export default GiftGuide;
