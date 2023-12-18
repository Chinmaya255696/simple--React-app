// HeroSection.js
import React from "react";

const HeroSection = () => {
  // Dummy content for the left section
  const dummyContent = [
    { id: 1, title: "React Documentation", link: "https://reactjs.org/" },
    {
      id: 2,
      title: "GitHub Repository",
      link: "https://github.com/facebook/react",
    },
    {
      id: 3,
      title: "React Router Documentation",
      link: "https://reactrouter.com/",
    },
    { id: 1, title: "React Documentation", link: "https://reactjs.org/" },
    {
      id: 2,
      title: "GitHub Repository",
      link: "https://github.com/facebook/react",
    },
    {
      id: 3,
      title: "React Router Documentation",
      link: "https://reactrouter.com/",
    },
    { id: 1, title: "React Documentation", link: "https://reactjs.org/" },
    {
      id: 2,
      title: "GitHub Repository",
      link: "https://github.com/facebook/react",
    },
    {
      id: 3,
      title: "React Router Documentation",
      link: "https://reactrouter.com/",
    },
    { id: 1, title: "React Documentation", link: "https://reactjs.org/" },
    {
      id: 2,
      title: "GitHub Repository",
      link: "https://github.com/facebook/react",
    },
    {
      id: 3,
      title: "React Router Documentation",
      link: "https://reactrouter.com/",
    },
    { id: 1, title: "React Documentation", link: "https://reactjs.org/" },
    {
      id: 2,
      title: "GitHub Repository",
      link: "https://github.com/facebook/react",
    },
    {
      id: 3,
      title: "React Router Documentation",
      link: "https://reactrouter.com/",
    },
    { id: 1, title: "React Documentation", link: "https://reactjs.org/" },
    {
      id: 2,
      title: "GitHub Repository",
      link: "https://github.com/facebook/react",
    },
    {
      id: 3,
      title: "React Router Documentation",
      link: "https://reactrouter.com/",
    },
    { id: 1, title: "React Documentation", link: "https://reactjs.org/" },
    {
      id: 2,
      title: "GitHub Repository",
      link: "https://github.com/facebook/react",
    },
    {
      id: 3,
      title: "React Router Documentation",
      link: "https://reactrouter.com/",
    },
    { id: 1, title: "React Documentation", link: "https://reactjs.org/" },
    {
      id: 2,
      title: "GitHub Repository",
      link: "https://github.com/facebook/react",
    },
    {
      id: 3,
      title: "React Router Documentation",
      link: "https://reactrouter.com/",
    },
    { id: 1, title: "React Documentation", link: "https://reactjs.org/" },
    {
      id: 2,
      title: "GitHub Repository",
      link: "https://github.com/facebook/react",
    },
    {
      id: 3,
      title: "React Router Documentation",
      link: "https://reactrouter.com/",
    },
  ];

  return (
    <section className="bg-gray-100 p-8 flex items-center">
      <div className="w-1/6 h-96 overflow-y-scroll">
        {dummyContent.map((item) => (
          <div key={item.id} className="mb-4">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>

      {/* Middle content */}
      <div className="w-1/2 mx-8">
        <h1 className="text-4xl font-bold mb-4">Introduction to React</h1>
        <h4 className="text-4xl font-bold mb-4">What is React?</h4>
        <p className="text-lg">
          React, also known as React.js or ReactJS, is an open-source JavaScript
          library for building user interfaces or UI components. It was
          developed by Facebook and is maintained by both Facebook and a
          community of individual developers and companies. React is often used
          for single-page applications where the user interface needs to be
          dynamic and responsive. React follows a component-based architecture,
          allowing developers to create reusable UI components. Each component
          manages its own state, and React efficiently updates and renders
          components when the underlying data changes. One of the key features
          of React is the use of a virtual DOM (Document Object Model), which
          optimizes the updating process and contributes to React's performance.
        </p>
      </div>

      {/* Right side with React content */}
      <div className="w-1/4">
      <p>Advertisement</p>
      <iframe width="400" height="300" src="https://www.youtube.com/embed/G55NcmO7-zQ?si=Qm039Au_KdNenRyP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <a href="https://www.youtube.com/embed/G55NcmO7-zQ?si=Qm039Au_KdNenRyP" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline cursor-pointer">
      Read Java for Free With Lingaraj Sir
    </a>
    
      </div>
    </section>
  );
};

export default HeroSection;
