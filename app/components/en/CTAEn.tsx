'use client';

import { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  note: string;
}

export default function CTAEn() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080';
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Submit failed');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', note: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-5 bg-[#1a1f2e]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to transform with DeepX?
          </h2>

          <p className="text-xl text-gray-400 mb-10">
            Leave your information and we will reach out within 24 hours
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-[rgba(26,31,46,0.8)] backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/10">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Contact form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f1218] border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-gray-200 placeholder-gray-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f1218] border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-gray-200 placeholder-gray-500 transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f1218] border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-gray-200 placeholder-gray-500 transition-colors"
                  placeholder="0901234567"
                />
              </div>

              {/* Note Field */}
              <div>
                <label htmlFor="note" className="block text-sm font-medium text-gray-300 mb-2">
                  Note
                </label>
                <textarea
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0f1218] border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-gray-200 placeholder-gray-500 transition-colors resize-none"
                  placeholder="Briefly describe your needs"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: isSubmitting 
                    ? 'linear-gradient(135deg, #00A3CC 0%, #004D99 100%)' 
                    : 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
                }}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-green-400 text-sm text-center">
                  ✓ Thank you! We will contact you within 24h.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 text-sm text-center">
                  ✗ Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[rgba(26,31,46,0.8)] backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/10">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Contact information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <p className="text-gray-400">contact@deepx.vn</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Hotline</p>
                    <p className="text-gray-400">1900 xxxx</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Address</p>
                    <p className="text-gray-400">Hanoi, Vietnam</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(26,31,46,0.8)] backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/10">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Our commitments</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  100% free consultation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Response within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Absolute confidentiality
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

