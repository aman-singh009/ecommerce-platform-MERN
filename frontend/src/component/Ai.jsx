import React, { useContext, useState } from 'react';
import ai from "../assets/ai.png";
import { shopDataContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import open from "../assets/open.mp3";

function Ai() {
  const { showSearch, setShowSearch } = useContext(shopDataContext);
  const navigate = useNavigate();
  const [activeAi, setActiveAi] = useState(false);
  const openingSound = new Audio(open);

  const speak = (message) => {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  };

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.log("Speech recognition not supported.");
    return null;
  }

  // Utility: keyword match with variations
  const match = (input, keywords) => {
    return keywords.some(kw => input.includes(kw));
  };

  const handleVoiceCommand = () => {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript.trim().toLowerCase();
      console.log("🎤 Transcript:", transcript);

      // Voice command variations
      const searchWords = ["search"];
      const openWords = ["open", "start", "launch"];
      const closeWords = ["close", "shut", "stop"];
      const cartWords = ["cart", "cut", "caught", "card", "cat", "car", "kart", "kaat"];
      const collectionWords = ["collection", "collections", "product", "products"];
      const aboutWords = ["about", "aboutpage"];
      const homeWords = ["home", "homepage"];
      const contactWords = ["contact", "support"];
      const orderWords = ["order", "orders", "myorders", "my order"];

      // === Handlers ===
      if (match(transcript, searchWords)) {
        if (match(transcript, openWords) && !showSearch) {
          speak("Opening search");
          setShowSearch(true);
          navigate("/collection");
        } else if (match(transcript, closeWords) && showSearch) {
          speak("Closing search");
          setShowSearch(false);
        } else {
          speak("Did you mean open or close search?");
          toast.info("Say 'open search' or 'close search'");
        }
        return;
      }

      if (match(transcript, cartWords)) {
        speak("Opening your cart");
        navigate("/cart");
        setShowSearch(false);
        return;
      }

      if (match(transcript, collectionWords)) {
        speak("Opening collection page");
        navigate("/collection");
        return;
      }

      if (match(transcript, aboutWords)) {
        speak("Opening about page");
        navigate("/about");
        setShowSearch(false);
        return;
      }

      if (match(transcript, homeWords)) {
        speak("Opening home page");
        navigate("/");
        setShowSearch(false);
        return;
      }

      if (match(transcript, contactWords)) {
        speak("Opening contact page");
        navigate("/contact");
        setShowSearch(false);
        return;
      }

      if (match(transcript, orderWords)) {
        speak("Opening your orders page");
        navigate("/order");
        setShowSearch(false);
        return;
      }

      speak("Try again");
      toast.error("Try Again");
    };

    recognition.onend = () => {
      setActiveAi(false);
    };

    recognition.start();
    openingSound.play();
    setActiveAi(true);
  };

  return (
    <div
      className='fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]'
      onClick={handleVoiceCommand}
    >
      <img
        src={ai}
        alt="AI Button"
        className={`w-[100px] cursor-pointer ${
          activeAi ? 'translate-x-[10%] translate-y-[-10%] scale-125' : ''
        } transition-transform`}
        style={{
          filter: activeAi
            ? "drop-shadow(0px 0px 30px #00d2fc)"
            : "drop-shadow(0px 0px 20px black)"
        }}
      />
    </div>
  );
}

export default Ai;
