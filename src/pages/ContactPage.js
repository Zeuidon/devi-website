import React, { useState, useEffect } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null,
    success: false
  });
  
  // Load EmailJS script
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    
    script.onload = () => {
      // Initialize EmailJS with your user ID
      window.emailjs.init("zX-ukff-g569OcK1P");
    };
    
    // Add script to document
    document.body.appendChild(script);
    
    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!isValidEmail(formData.email)) {
      setFormStatus({
        submitted: false,
        error: "Please enter a valid email address",
        success: false
      });
      return;
    }

    setFormStatus({
      submitted: true,
      error: null,
      success: false
    });
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: "devienterprises.vns@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      from_message: formData.message,
    };

    try {
      // Check if emailjs is loaded
      if (!window.emailjs) {
        throw new Error('EmailJS not loaded yet. Please try again.');
      }
      
      // Send email using EmailJS
      const response = await window.emailjs.send(
        'service_devi6bp',
        'template_23th1r6',
        templateParams
      );
      
      console.log('Email sent successfully:', response);
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      setFormStatus({
        submitted: false,
        error: null,
        success: true
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitted: false,
        error: "Failed to send your message. Please try again later.",
        success: false
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 text-[#73320D]">
      <h1 className="text-4xl text-center mb-12">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="contact-info">
          <h2 className="text-3xl mb-6">Get in Touch</h2>
          <p className="mb-4">We'd love to hear from you!</p>
          <div className="contact-details">
            <p className="mb-2">Email: devienterprises.vns@gmail.com</p>
            <p className="mb-2">Phone: +91 99993 36330</p>
            <p className="mb-2">Address: Indirapuri Colony, Varansi</p>
            <div className="social-links mt-6">
              <a href="https://www.instagram.com/Devi_Welfare_Association/?hl=en" className="mr-4 text-[#6A5ACD]">Instagram</a>
              {/* <a href="#" className="mr-4 text-[#6A5ACD]">Facebook</a>
              <a href="#" className="text-[#6A5ACD]">LinkedIn</a> */}
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          {formStatus.success ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
              <strong className="font-bold">Thank you!</strong>
              <p>Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {formStatus.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  <strong className="font-bold">Error:</strong>
                  <p>{formStatus.error}</p>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-2 border rounded"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formStatus.submitted}
                className="bg-[#73320D] text-white px-6 py-3 rounded hover:bg-[#6A5ACD] transition disabled:opacity-50"
              >
                {formStatus.submitted ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;