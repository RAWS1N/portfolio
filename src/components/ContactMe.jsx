import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactMe() {
  const collectionRef = collection(db, "recruiter");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      addDoc(collectionRef, {
        ...formData,
      });
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "", subject: "" });
        toast.success("Mail has been sent.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      }, 2000);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div>
      <ToastContainer />
      <div className="relative  h-screen flex flex-col text-center md:text-left md:flex-row justify-evenly mx-auto items-center">
        <h2 className="absolute top-20  text-gray-500 uppercase tracking-[18px] text-2xl">
          Contact
        </h2>

        <div className="flex flex-col space-y-5">
          <h4 className="text-xl text-center text-semibold  px-4">
            I have got just what you need, <span>Lets Contact</span>
          </h4>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-2  w-fit mx-auto"
          >
            {error && (
              <p className="py-2 text-red-400 text-lg text-center">{error}</p>
            )}
            <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
              <input
                name="name"
                required={true}
                value={formData.name}
                onChange={handleChange}
                className="contactInput"
                type="text"
                placeholder="Name or Company"
              />
              <input
                className="contactInput"
                onChange={handleChange}
                value={formData.email}
                required={true}
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              placeholder="Subject"
              name="subject"
              className="contactInput"
              type="text"
              onChange={handleChange}
              value={formData.subject}
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              name="message"
              className="contactInput max-h-24"
            />
            <button className="px-10 py-2 bg-[#DC9A71] text-black text-lg font-semibold rounded-sm">
              Submit
            </button>
          </form>
          <div className="text-center mx-auto w-9/12 md:w-full">
            <p>OR</p>
            <h4 className="bg-white my-2  text-blue-500 font-medium uppercase px-6 py-2 rounded-sm">Get in touch via dharmicsinga@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
