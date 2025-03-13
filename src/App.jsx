import { useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Uploading...");

    try {
      // Simulate upload
      setTimeout(() => {
        setStatus("✅ Upload successful!");
      }, 2000);
    } catch (error) {
      setStatus("❌ Upload failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Publish Your Idea</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Describe your idea..."
          rows="5"
          cols="50"
        />
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default App;
