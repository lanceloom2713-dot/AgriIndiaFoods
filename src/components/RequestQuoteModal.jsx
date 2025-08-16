import { X, ChevronDown } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function RequestQuoteModal({ onClose }) {
  const form = useRef();

  const sendQuoteRequest = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ne3qu9",    // ✅ your service ID
        "template_mdkutr6",  // ✅ your template ID
        form.current,
        "gJEcXJtT_I5heqA46"  // ✅ your public key
      )
      .then(
        (result) => {
          console.log("✅ Quote Request Sent:", result.text);
          alert("Your quote request has been sent successfully!");
          form.current.reset();
          if (onClose) onClose(); // close modal if provided
        },
        (error) => {
          console.log("❌ Error:", error.text);
          alert("Failed to send request. Please try again.");
        }
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Request a Quote
          </h2>
          <button
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            onClick={onClose}
          >
            <X className="w-5 h-5 text-gray-500 cursor-pointer" />
          </button>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendQuoteRequest} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              name="user_name"   // ✅ must match EmailJS template variable
              placeholder="Enter your full name"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone_number"   // ✅ must match EmailJS template variable
              placeholder="Enter your phone number"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          {/* Rice Variety Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rice Variety *
            </label>
            <div className="relative">
              <select
                name="rice_variety"   // ✅ must match EmailJS template variable
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-gray-400"
                required
              >
                <option value="">Select rice variety</option>
                <option>1121 Basmati Rice</option>
                <option>1509 Basmati Rice</option>
                <option>1401 Basmati Rice</option>
                <option>Pusa Basmati Rice</option>
                <option>Sharbati Basmati Rice</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Package Type Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Package Type *
            </label>
            <div className="relative">
              <select
                name="package_type"   // ✅ must match EmailJS template variable
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-gray-400"
                required
              >
                <option value="">Select package type</option>
                <option>Bulk Packaging</option>
                <option>Retail Packaging</option>
                <option>Custom Packaging</option>
                <option>Export Packaging</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Additional Requirements Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Requirements
            </label>
            <textarea
              name="requirements"   // ✅ must match EmailJS template variable
              placeholder="Any special requests or details..."
              rows="4"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-[#65BA34] cursor-pointer text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
