import { darkAssets, lightAssets } from "../../assets/assets";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const { isDarkMode } = useContext(AppContext);

  const iconAssets = !isDarkMode ? lightAssets : darkAssets;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("/api/contact", form);
      if (res.data.success) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col gap-4 p-4 items-center justify-center"
    >
      <div>
        <p className="text-xl">
          Connect with{" "}
          <span className="text-[hsl(var(--accent-color))] font-semibold">
            ME
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center sm:grid sm:grid-cols-[0.5fr_1fr]">
        <div className="flex gap-4 sm:flex-col">
          {iconAssets.map((asset, i) => (
            <div key={i} className="flex gap-4">
              <img src={asset.icon} className="w-6" />
              <p className="hidden sm:block">{asset.value}</p>
            </div>
          ))}
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-800 mb-4 placeholder-gray-400 placeholder:italic placeholder:text-[8px]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-800 mb-4 placeholder-gray-400 placeholder:italic placeholder:text-[8px]"
          />
          <textarea
            name="message"
            required
            placeholder="Hi, Donnie"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-800 mb-4 resize-none placeholder-gray-400 placeholder:italic placeholder:text-[8px]"
          />
          <button
            type="submit"
            className="bg-[hsl(var(--accent-color))] w-full px-4 py-2 text-black rounded"
          >
            Send
          </button>
          <p className="text-sm">{status}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
