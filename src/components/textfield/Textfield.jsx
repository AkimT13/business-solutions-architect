import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Textfield = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post("http://localhost:8000/query", { query });
      setResponse(res.data.response);
    } catch {
      setResponse("There was an error getting a response");
    }
  };
  return (
    <div className="flex  md:w-[30rem] w-10  justify-center ">
      <form onSubmit={handleSubmit} className=" md:w-[30rem] w-10">
        <p className="font-semibold text-center pb-2">Input</p>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" md:w-[30rem] w-36 resize-none pt-3"
          placeholder="hello"
        />
      </form>
    </div>
  );
};

export default Textfield;
