import React, { useState } from "react";
// import emailjs from 'emailjs-com';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    // const serviceId = 'service_c3jljia';
    // const templateId = 'template_mrm3h3f';
    // const userId = 'MQrv68Q8keZ9xOVuX';


    // emailjs.send(serviceId, templateId, form, userId)
    //   .then((result) => {
    //     toast.success('Message sent successfully!')
    //   },
    //     (error) => {
    //       toast.error('Failed to send message, please try again.');
    //     });

    setForm({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="py-16 flex justify-center items-center h-screen">
      <div className="container max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Contact Me</h1>
          
        </div>
        <div>
    <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium text-gray-700 mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              onChange={handleChange}
              value={form.name}
              type="text"
              name="name"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              onChange={handleChange}
              value={form.email}
              type="email"
              name="email"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              onChange={handleChange}
              value={form.message}
              name="message"
              rows="4"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-md transition duration-200"
          >
            Send Message
          </button>
        </form>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;
