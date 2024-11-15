function Content() {
  return (
    <section id="contact" className="py-12 bg-gray-100 text-center px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl lg:text-4xl font-semibold text-gray-900">
          You are just one click away from our experts.
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          Have any questions? Feel free to contact us, and we'll get back to you
          as soon as possible.
        </p>
        <form className="mt-8">
          <select name="" id="" className="w-full py-3 px-2 rounded-md mb-4">
            <option className="text-md" value="">
              Select Language
            </option>
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
            className="w-full py-3 px-4 mb-4 rounded-lg border border-gray-300 focus:outline-none"
          />

          <div className="flex justify-center">
            <span className="border bg-pink-100 border-r-none rounded-md border-r-none py-3 px-2 h-fit">
              +91
            </span>
            <input
              type="number"
              placeholder="10 digit Mobile Number"
              className="w-full py-3 px-4 mb-4 rounded-lg border border-gray-300 focus:outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 px-4 mb-4 rounded-lg border border-gray-300 focus:outline-none"
          />

          <h1 className="text-left font-semibold">Demate Account Status</h1>
          <div className="text-left mb-7 mt-1 space-x-5 sm:space-x-10">
            <span>
              <input type="radio" id="already" name="accountStatus" />
              <label for="already">Already have </label>
            </span>
            <span>
              <input type="radio" id="notYet" name="accountStatus" />
              <label for="notYet">Yet to get</label>
            </span>
          </div>

          <button
            type="submit"
            className="w-full mb-3 bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-200"
          >
            Submit
          </button>

          <div className="text-left">
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              *By clicking on Submit, you agree to Earning Roots's
              <span className="font-semibold">Terms & Conditions</span> and
              <span className="font-semibold"> Privery Policy </span>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Content;
