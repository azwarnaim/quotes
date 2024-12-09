import { useState } from "react";
import "./App.css";

function App() {
  // State to hold the quote
  const [quote, setQuote] = useState<any>(null);
  console.log("quote:", quote);

  // Function to fetch a random quote
  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/quotes?category=",
        {
          headers: {
            "X-Api-Key": "cJRk+VCTTh0q5qCjOPGkJg==qTuAm4AS5ZK9JNCp",
          },
        }
      );
      const data = await response.json();
      console.log("data:", data);

      setQuote(data[0]); // Set the fetched quote
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to fetch a quote"); // Fallback quote
    }
  };

  return (
    <div className="App">
      <h1>Quote of the Day</h1>

      <div className="quote-container">
        <p>
          {quote
            ? `"${quote?.quote}"`
            : "Click the button to get a random quote!"}
        </p>
      </div>
      <button onClick={fetchQuote} className="quote-button">
        Get Random Quote
      </button>
    </div>
  );
}

export default App;
