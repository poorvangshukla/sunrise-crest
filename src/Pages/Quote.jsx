import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../data/productsData';
import SEO from '../components/SEO';

const Quote = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    product: location.state?.selectedProduct || '',
    quantity: '',
    unit: 'kg',
    destination: '',
    shippingMethod: 'Sea Freight',
    name: '',
    company: '',
    email: '',
    phone: '',
    additionalRequirements: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const totalSteps = 4;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.product) newErrors.product = 'Please select a product';
      if (!formData.quantity || formData.quantity <= 0) newErrors.quantity = 'Please enter a valid quantity';
    }
    if (step === 2) {
      if (!formData.destination) newErrors.destination = 'Please enter destination country';
    }
    if (step === 3) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };
  const handlePrevious = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const quoteId = 'QUOTE-' + Date.now();
      setSubmitStatus('success');
      setCurrentStep(4);
      formData.quoteId = quoteId;
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d < 0 ? 300 : -300, opacity: 0 }),
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'transparent',
    border: `1px solid ${hasError ? '#ef4444' : 'var(--border)'}`,
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  });

  const selectStyle = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    outline: 'none',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease, background-color 0.4s ease',
  };

  return (
    <div
      className="min-h-screen pt-32 pb-20 px-4"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'background-color 0.4s ease, color 0.4s ease' }}
    >
      <SEO
        title="Request a Quote | Sunrise Crest"
        description="Get a competitive quote for premium food products. Easy multi-step form for spices, grains, nuts, and specialty items with global shipping."
        keywords="request quote, food trading quote, import export quote, bulk food order"
      />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Request a Quote</h1>
          <p style={{ color: 'var(--text-muted)' }}>Get a competitive quote for your requirements</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300"
                  style={{
                    border: `2px solid ${currentStep >= step ? 'var(--accent)' : 'var(--border)'}`,
                    backgroundColor: currentStep >= step ? 'var(--accent)' : 'transparent',
                    color: currentStep >= step ? 'var(--accent-text)' : 'var(--text-muted)',
                  }}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className="flex-1 h-[2px] mx-2 transition-all duration-300"
                    style={{ backgroundColor: currentStep > step ? 'var(--accent)' : 'var(--border)' }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            {['Product', 'Shipping', 'Details', 'Review'].map((label, i) => (
              <span key={label} style={{ color: currentStep >= i + 1 ? 'var(--accent)' : 'var(--text-muted)' }}>{label}</span>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div
          className="p-8 md:p-12 min-h-[500px] relative overflow-hidden"
          style={{ border: '1px solid var(--border)', transition: 'border-color 0.4s ease' }}
        >
          <AnimatePresence mode="wait" custom={currentStep}>
            {/* Step 1 */}
            {currentStep === 1 && (
              <motion.div key="step1" custom={currentStep} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-bold mb-8">Select Product & Quantity</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="product" className="block mb-2">Product <span className="text-red-500">*</span></label>
                    <select id="product" name="product" value={formData.product} onChange={handleChange}
                      style={{ ...selectStyle, border: `1px solid ${errors.product ? '#ef4444' : 'var(--border)'}` }}>
                      <option value="" style={{ backgroundColor: 'var(--bg-card)' }}>Select a product</option>
                      {productsData.map(p => (
                        <option key={p.id} value={p.name} style={{ backgroundColor: 'var(--bg-card)' }}>
                          {p.name} ({p.origin})
                        </option>
                      ))}
                    </select>
                    {errors.product && <p className="mt-1 text-sm text-red-500">{errors.product}</p>}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quantity" className="block mb-2">Quantity <span className="text-red-500">*</span></label>
                      <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} min="1"
                        style={inputStyle(errors.quantity)}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = errors.quantity ? '#ef4444' : 'var(--border)'} />
                      {errors.quantity && <p className="mt-1 text-sm text-red-500">{errors.quantity}</p>}
                    </div>
                    <div>
                      <label htmlFor="unit" className="block mb-2">Unit</label>
                      <select id="unit" name="unit" value={formData.unit} onChange={handleChange} style={selectStyle}>
                        <option value="kg" style={{ backgroundColor: 'var(--bg-card)' }}>Kilograms (kg)</option>
                        <option value="tons" style={{ backgroundColor: 'var(--bg-card)' }}>Tons</option>
                        <option value="lbs" style={{ backgroundColor: 'var(--bg-card)' }}>Pounds (lbs)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <motion.div key="step2" custom={currentStep} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-bold mb-8">Shipping Information</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="destination" className="block mb-2">Destination Country <span className="text-red-500">*</span></label>
                    <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleChange}
                      placeholder="e.g., United States"
                      style={inputStyle(errors.destination)}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = errors.destination ? '#ef4444' : 'var(--border)'} />
                    {errors.destination && <p className="mt-1 text-sm text-red-500">{errors.destination}</p>}
                  </div>
                  <div>
                    <label htmlFor="shippingMethod" className="block mb-2">Shipping Method</label>
                    <select id="shippingMethod" name="shippingMethod" value={formData.shippingMethod} onChange={handleChange} style={selectStyle}>
                      {['Sea Freight (Most Economical)', 'Air Freight (Fastest)', 'Express Courier', 'Land Transport'].map(m => (
                        <option key={m} value={m.split(' (')[0]} style={{ backgroundColor: 'var(--bg-card)' }}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <motion.div key="step3" custom={currentStep} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-bold mb-8">Your Contact Information</h2>
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 border border-red-500 bg-red-500/10 text-red-400">
                    ✗ Something went wrong. Please try again.
                  </div>
                )}
                <div className="space-y-6">
                  {[
                    { id: 'name', label: 'Full Name', required: true, type: 'text' },
                    { id: 'company', label: 'Company Name', required: false, type: 'text' },
                  ].map(({ id, label, required, type }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block mb-2">{label} {required && <span className="text-red-500">*</span>}</label>
                      <input type={type} id={id} name={id} value={formData[id]} onChange={handleChange}
                        style={inputStyle(errors[id])}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = errors[id] ? '#ef4444' : 'var(--border)'} />
                      {errors[id] && <p className="mt-1 text-sm text-red-500">{errors[id]}</p>}
                    </div>
                  ))}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block mb-2">Email <span className="text-red-500">*</span></label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                        style={inputStyle(errors.email)}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border)'} />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2">Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                        style={inputStyle(false)}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="additionalRequirements" className="block mb-2">Additional Requirements</label>
                    <textarea id="additionalRequirements" name="additionalRequirements" value={formData.additionalRequirements}
                      onChange={handleChange} rows="4"
                      placeholder="Any specific requirements, certifications needed, delivery timeline, etc."
                      style={{ ...inputStyle(false), resize: 'none' }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4 — Confirmation */}
            {currentStep === 4 && (
              <motion.div key="step4" custom={currentStep} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="text-center">
                <div className="text-6xl mb-6" style={{ color: 'var(--accent)' }}>✓</div>
                <h2 className="text-3xl font-bold mb-4">Quote Request Submitted!</h2>
                <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
                  Thank you for your quote request. We've received your information and will get back to you within 24 hours.
                </p>
                <div className="p-8 mb-8 text-left" style={{ backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.4s ease' }}>
                  <h3 className="text-xl font-bold mb-4">Quote Summary</h3>
                  <div className="space-y-3" style={{ color: 'var(--text-muted)' }}>
                    {[
                      ['Quote ID', formData.quoteId],
                      ['Product', formData.product],
                      ['Quantity', `${formData.quantity} ${formData.unit}`],
                      ['Destination', formData.destination],
                      ['Shipping', formData.shippingMethod],
                      ['Contact', formData.email],
                    ].map(([key, val]) => (
                      <p key={key}><strong style={{ color: 'var(--text-primary)' }}>{key}:</strong> {val}</p>
                    ))}
                  </div>
                </div>
                <Link
                  to="/"
                  className="inline-block px-10 py-4 font-bold transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)', border: '1px solid var(--accent)' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent-text)'; }}
                >
                  Return to Home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        {currentStep < 4 && (
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="px-8 py-3 transition-all duration-300 disabled:opacity-30"
              style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              onMouseEnter={e => { if (currentStep !== 1) e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              ← Previous
            </button>
            {currentStep < 3 ? (
              <button
                onClick={handleNext}
                className="px-8 py-3 font-medium transition-all duration-300"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)', border: '1px solid var(--accent)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent-text)'; }}
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-3 font-medium transition-all duration-300 disabled:opacity-50"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)', border: '1px solid var(--accent)', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; } }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent-text)'; }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quote;