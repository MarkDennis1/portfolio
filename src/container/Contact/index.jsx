import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ekxxel",
        "template_iocgm3f",
        form.current,
        "JMarSvZDQDiVWwhIK"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setIsSuccess(true);
            form.current.reset();
            setTimeout(() => {
              setIsSuccess(false);
            }, 10000);
          } else {
            console.log(result.text);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="h-screen flex flex-col justify-center">
      <h1 className="text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-4">
        Contact me
      </h1>
      {isSuccess && (
        <div
          className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Message Sent. </span>Thank you for
          stopping by.
        </div>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <div className="flex">
              <input
                type="text"
                id="website-admin"
                name="user_name"
                className="mb-4 rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name Surname"
              />
            </div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              </div>
              <input
                type="email"
                id="input-group-1"
                name="user_email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
              />
            </div>
            <textarea
              id="comment"
              name="message"
              rows="4"
              className="focus:ring-blue-500 focus:ring-1 focus:border-blue-500 p-2.5 bg-gray-50 border border-gray-300 rounded-lg w-full text-sm text-gray-900 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a message..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
