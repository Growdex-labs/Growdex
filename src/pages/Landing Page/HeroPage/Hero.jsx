import Dashboard1 from "../../../assets/Dashboard Overview (2).png"
import Dashboard from "../../../assets/Frame.png"
import Eclipse1 from "../../../assets/Ellipse 18.png"
import Eclipse2 from "../../../assets/Ellipse 19.png"
import Eclipse3 from "../../../assets/Ellipse 20.png"
import Eclipse4 from "../../../assets/Ellipse 21.png"
import Eclipse5 from "../../../assets/Ellipse 22.png"
import arrowVector from "../../../assets/Vector (8).png"
import { useState } from "react"
import axios from "axios"

export default function HeroSection({ placeholder = "Enter your email" }) {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleJoin = async (e) => {
    e.preventDefault()

    if (!email || !firstName) {
      setError("Please enter both first name and email")
      setSuccess("")
      return
    }

    // email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setLoading(true)

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.post(`${apiUrl}/api/join-waitlist`, {
        email,
        firstName,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_WAITLIST_KEY,
        },
      })
      setSuccess("🎉 You've joined the waitlist!")
      setEmail("")
      setFirstName("")
    } catch (err) {
      setError("❌ Something went wrong. Please try again.")
    } finally {
      setLoading(false)
      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 2000);
    }
  }

  return (
    <section className="bg-white relative overflow-hidden py-24 px-6">
      {/* Background faint curves */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={Dashboard} alt="" className="opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Yellow Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-200 text-black font-medium px-4 py-1 rounded-full text-sm mb-4 mx-auto">
          <span className="inline-block bg-black text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">⚡</span>
          Use AI to automate everything
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Run Smarter Ads Across All Platforms — From One Dashboard.
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-500 mb-8">
          No more switching between Meta, Google, TikTok, Twitter, or Email tools. <br />
          With Growdex, create, launch, and track all your digital campaigns from one place, automatically.
        </p>

        {/* Waitlist Form */}
        <form
          onSubmit={handleJoin}
          className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2"
        >
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            required
            className="border border-gray-300 bg-white px-4 py-3 rounded-md w-full md:w-[200px] text-sm"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="border border-gray-300 bg-white px-4 py-3 rounded-md w-full md:w-[200px] text-sm"
          />
        <button
  type="submit"
  disabled={loading || !email || !firstName}
  className="bg-black text-white px-5 py-3 rounded-md font-medium w-full text-center text-sm md:w-[150px] flex justify-center items-center cursor-pointer"
>
  {loading ? (
    <span className="w-5 h-5 rounded-full animate-spin border-2 border-t-transparent border-b-transparent border-l-white border-r-blue-400"></span>
  ) : (
    "Join Waitlist →"
  )}
</button>

        </form>

        {/* Feedback messages */}
        {success && <div className="text-sm text-green-600 mt-2">{success}</div>}
        {error && <div className="text-sm text-red-600 mt-2">{error}</div>}

        {/* Avatar group */}
        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-gray-600 text-sm md:flex-row md:gap-4">
          <div className="flex -space-x-4">
            {[Eclipse1, Eclipse2, Eclipse3, Eclipse4, Eclipse5].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`User ${i + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <img src={arrowVector} alt="" className="w-6 h-6 rotate-90 md:rotate-0" />
          <span className="text-center">200+ people are already waiting</span>
        </div>
      </div>

      {/* Dashboard Image */}
      <div className="mt-16 w-full max-w-5xl mx-auto flex justify-center z-10">
        <img
          src={Dashboard1}
          alt="Dashboard Preview"
          className="rounded-xl shadow-2xl"
        />
      </div>
    </section>
  )
}
