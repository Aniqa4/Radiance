import React from "react";
import Layout from "~/layout/Layout";

function customOrder() {
  return (
    <Layout>
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        Custom Order
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Every creation at <span className="font-medium">Radiance-আভা</span> is
        thoughtfully handcrafted to reflect your story.
      </p>

      {/* Intro */}
      <p className="text-lg text-center mb-12">
        We offer fully customizable resin art, decor, and candle pieces—
        designed with care, creativity, and premium materials.
      </p>

      {/* Customization Options */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What You Can Customize</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside text-gray-700">
          <li>Size & shape</li>
          <li>Color palette</li>
          <li>Floral elements (preserved / handcrafted)</li>
          <li>Name, date & initials</li>
          <li>Themes (lotus, sea, floral, minimal)</li>
          <li>
            Product type (wall decor, clock, jewelry, candle, gift box, photo
            frame)
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How Custom Orders Work</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Share your idea with us via inbox</li>
          <li>We finalize design, size & pricing</li>
          <li>Advance confirmation</li>
          <li>Handcrafting begins</li>
          <li>Delivery within the confirmed timeline</li>
        </ol>
      </section>

      {/* Production Time */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Production Time</h2>
        <p className="text-gray-700">
          Custom orders typically require <strong>5–10 working days</strong>,
          depending on design complexity.
        </p>
        <p className="mt-3 text-sm text-gray-500 italic">
          Please note: As each piece is handmade, slight variations are natural
          and add to its uniqueness.
        </p>
      </section>

      {/* Footer CTA */}
      <div className="text-center border-t pt-8">
        <p className="text-lg font-medium mb-2">Preserve love. Gift art.</p>
        <p className="mb-6 text-gray-600">
          Start your custom order today — inbox us to begin.
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

export default customOrder;
