'use client';

import { useState, useEffect } from "react";

const HomePage: React.FC = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/hello");
        const data = await res.json();
        setMessage(data.message);
      } catch (error) {
        setMessage("エラーが発生しました。");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default HomePage;