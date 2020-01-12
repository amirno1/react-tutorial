import React, { useState, useEffect } from "react";

const Api = () => {
  const [subjects, setSubject] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(response => response.json())
      .then(data => setSubject(data.slice(0, 5)));
  });
  return (
    <div>
      {subjects.map(subject => {
        return <div>{subject.title}</div>;
      })}
    </div>
  );
};

export default Api;
