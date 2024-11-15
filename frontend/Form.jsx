import { useState } from "react";
import { Nav } from "./Nav";
import axios from "axios";

function Form() {
  // State to store form values and loading status
  const [language, setLanguage] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dematStatus, setDematStatus] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true on form submission

    const formData = {
      language,
      fullName,
      mobileNumber,
      email,
      dematStatus,
    };

    console.log(formData);

    try {
      // Send POST request with axios
      const response = await axios.post("/api/users", formData);

      // Display success alert if the request was successful
      alert("Form Submitted Successfully");
      console.log("Form submitted successfully", response.data);

      // Optionally, reset the form after successful submission
      setLanguage("");
      setFullName("");
      setMobileNumber("");
      setEmail("");
      setDematStatus("");
    } catch (error) {
      alert("Something went wrong");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // Set loading back to false after request completes
    }
  };

  return (
    <>
      <Nav />
      <section id="contact" className="py-12 bg-gray-100 text-center px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl lg:text-4xl font-semibold text-gray-900">
            You are just one click away from our experts.
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Have any questions? Feel free to contact us, and we'll get back to
            you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full py-3 px-2 rounded-md mb-4"
              required
            >
              <option value="">Select Language</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="bengali">Bengali</option>
              <option value="telugu">Telugu</option>
              <option value="marathi">Marathi</option>
              <option value="tamil">Tamil</option>
              <option value="gujarati">Gujarati</option>
              <option value="kannada">Kannada</option>
              <option value="odia">Odia</option>
              <option value="punjabi">Punjabi</option>
            </select>

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full py-3 px-4 mb-4 rounded-lg border border-gray-300 focus:outline-none"
            />

            <div className="flex justify-center">
              <span className="border bg-pink-100 rounded-md py-3 px-2">
                +91
              </span>
              <input
                type="number"
                placeholder="10 digit Mobile Number"
                value={mobileNumber}
                minLength={10}
                maxLength={10}
                required
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full py-3 px-4 mb-4 rounded-lg border border-gray-300 focus:outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-4 mb-4 rounded-lg border border-gray-300 focus:outline-none"
            />

            <h1 className="text-left font-semibold">Demat Account Status</h1>
            <div className="text-left mb-7 mt-1 space-x-5 sm:space-x-10">
              <span className="space-x-2">
                <input
                  required
                  type="radio"
                  id="already"
                  name="accountStatus"
                  value="already"
                  checked={dematStatus === "already"}
                  onChange={(e) => setDematStatus(e.target.value)}
                />
                <label htmlFor="already">Already have</label>
              </span>
              <span className="space-x-2">
                <input
                  type="radio"
                  id="notYet"
                  name="accountStatus"
                  value="notYet"
                  checked={dematStatus === "notYet"}
                  onChange={(e) => setDematStatus(e.target.value)}
                />
                <label htmlFor="notYet">Yet to get</label>
              </span>
            </div>

            <button
              type="submit"
              className="w-full mb-3 bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-200"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Submitting..." : "Submit"} {/* Loader text */}
            </button>

            <div className="text-left space-x-2">
              <input type="checkbox" id="check" />
              <label htmlFor="check">
                By clicking on Submit, you agree to Earning Roots's
                <span className="font-semibold"> Terms & Conditions</span> and
                <span className="font-semibold"> Privacy Policy</span>
              </label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Form;
