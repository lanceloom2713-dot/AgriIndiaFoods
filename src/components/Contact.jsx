import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ne3qu9",      // ✅ your service ID
        "template_mdkutr6",    // ✅ your template ID
        form.current,          // ✅ form reference
        "gJEcXJtT_I5heqA46"    // ✅ your public key
      )
      .then(
        (result) => {
          console.log("✅ Email sent successfully:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("❌ Email error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-white">
      <div className="bg-white py-16 lg:py-24 mx-auto max-w-[1300px]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4 ">
                <h2 className="text-4xl lg:text-5xl font-semibold textgreen">
                  Feel Free To Contact Us
                </h2>
              </div>

              {/* Contact Form */}
              <form ref={form} onSubmit={sendEmail} className="space-y-6 mt-5">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="user_name"   // ✅ must match EmailJS variable
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="user_email"  // ✅ must match EmailJS variable
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"       // ✅ must match EmailJS variable
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"      // ✅ must match EmailJS variable
                    placeholder="Message"
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Right Content - Google Map */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7117629721947!2d70.15596!3d23.107645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950bb4a94095469%3A0x69ebdd4c53c07b9a!2sAGRI%20INDIA%20FOODS!5e0!3m2!1sen!2sin!4v1755333390769!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
