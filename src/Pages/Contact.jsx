import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SEO from '../Components/SEO';

const Contact = () => {
  const heroRef = useRef(null);
  const [formState, setFormState] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Email is invalid';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormState({ name: '', company: '', email: '', phone: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'transparent',
    border: `1px solid ${hasError ? '#ef4444' : 'var(--border)'}`,
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    cursor: 'text',
  });

  return (
    <div
      className="min-h-screen pt-32 pb-20"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'background-color 0.4s ease, color 0.4s ease' }}
    >
      <SEO
        title="Contact Us | Sunrise Crest | Tokyo, Japan"
        description="Get in touch with Sunrise Crest in Tokyo. Contact us for import/export inquiries, product information, or partnership opportunities."
        keywords="contact food trader, Tokyo food trading, import export contact, Sunrise Crest contact"
      />
      {/* Hero */}
      <section className="px-4 mb-20">
        <div ref={heroRef} className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Ready to start trading? Have questions? We're here to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                {[
                  { title: 'Office Address', content: '1-1-2 Oshiage, Sumida City\n131-0045, Tokyo, Japan' },
                  { title: 'Email', content: 'poorvang.shukls@gmail.com', isLink: true, href: 'mailto:poorvang.shukls@gmail.com' },
                  { title: 'Phone', content: null, isPhone: true },
                  { title: 'Business Hours', content: 'Monday - Friday: 9:00 AM - 6:00 PM JST\nSaturday: 10:00 AM - 4:00 PM JST\nSunday: Closed' },
                ].map(({ title, content, isLink, href, isPhone }) => (
                  <div key={title}>
                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                    {isPhone ? (
                      <p style={{ color: 'var(--text-muted)' }}>
                        General: <a href="tel:+917016302635" className="transition-colors" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>+91 7016302635</a><br />
                        Appointments: <a href="tel:+917016302635" className="transition-colors" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>+91 7016302635</a>
                      </p>
                    ) : isLink ? (
                      <a href={href} className="transition-colors" style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                      >{content}</a>
                    ) : (
                      <p style={{ color: 'var(--text-muted)', whiteSpace: 'pre-line' }}>{content}</p>
                    )}
                  </div>
                ))}
                <div>
                  <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    {['Instagram', 'Facebook', 'Twitter'].map(s => (
                      <a key={s} href="#" className="transition-colors" style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                      >{s}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8" style={{ border: '1px solid var(--border)', transition: 'border-color 0.4s ease' }}>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 border border-green-500 bg-green-500/10 text-green-400">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 border border-red-500 bg-red-500/10 text-red-400">
                  ✗ Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'name', label: 'Name', required: true, type: 'text' },
                  { id: 'company', label: 'Company Name', required: false, type: 'text' },
                  { id: 'email', label: 'Email', required: true, type: 'email' },
                  { id: 'phone', label: 'Phone', required: false, type: 'tel' },
                ].map(({ id, label, required, type }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block mb-2 text-sm">
                      {label} {required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formState[id]}
                      onChange={handleChange}
                      style={inputStyle(errors[id])}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = errors[id] ? '#ef4444' : 'var(--border)'}
                    />
                    {errors[id] && <p className="mt-1 text-sm text-red-500">{errors[id]}</p>}
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="5"
                    style={{ ...inputStyle(errors.message), resize: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border)'}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 font-bold transition-all duration-300 disabled:opacity-50"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-text)',
                    border: '1px solid var(--accent)',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; } }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent-text)'; }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;