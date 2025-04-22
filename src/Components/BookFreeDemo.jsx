import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const BookFreeDemo = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [careerStatus, setcareerStatus] = useState('');
  const [course, setCourse] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [careerStatusError, setcareerStatusError] = useState('');
  const [courseError, setCourseError] = useState('');

  const validateForm = () => {
    let isValid = true;

    setNameError(name ? '' : 'Name is required');
    setEmailError(
      email
        ? /\S+@\S+\.\S+/.test(email)
          ? ''
          : 'Email is invalid'
        : 'Email is required'
    );
    setNumberError(
      number
        ? /^\d{10}$/.test(number)
          ? ''
          : 'Phone number is invalid'
        : 'Number is required'
    );
    setcareerStatusError(careerStatus ? '' : 'Please select your career status');
    setCourseError(course ? '' : 'Course is required');

    isValid = name && email && number && careerStatus && course;
    return isValid;
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setNumber('');
    setcareerStatus('');
    setCourse('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post('http://localhost:3000/api/bookfreedemo', {
          name,
          email,
          number,
          careerStatus,
          course,
        });
        alert('Form submitted successfully');
        resetForm();
        setIsOpen(false);
      } catch (err) {
        alert('Something went wrong. Please try again.');
        console.error(err);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-main-color text-white px-6 py-3 rounded-xl shadow-lg hover:bg-main-color transition"
      >
        Book Free Demo
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-400/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-2xl w-96"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Book a Free Demo</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
                  />
                  {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
                  />
                  {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Your Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
                  />
                  {numberError && <p className="text-red-500 text-sm mt-1">{numberError}</p>}
                </div>

                <div>
                  <select
                    value={careerStatus}
                    onChange={(e) => setcareerStatus(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
                  >
                    <option value="">Are you Working or Studying?</option>
                    <option value="working">Working</option>
                    <option value="studying">Studying</option>
                  </select>
                  {careerStatusError && <p className="text-red-500 text-sm mt-1">{careerStatusError}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Course You Want to Attend"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
                  />
                  {courseError && <p className="text-red-500 text-sm mt-1">{courseError}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-main-color text-white py-3 rounded-lg shadow-md hover:bg-main-color transition"
                >
                  Submit
                </button>
              </form>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-red-600 hover:underline block text-center w-full"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookFreeDemo;
