import React, { useState } from 'react';

export const About = () => {
  const [showEducation, setShowEducation] = useState(false);

  const toggleEducation = () => {
    setShowEducation(!showEducation);
  };

  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='py-10 px-4 flex flex-col justify-center items-center'>
        <h1 className='text-2xl px-8'>
          <span className='font-bold text-orange-400'>Introduction</span> <br />
          Hello, my name is Shiv Kumar. I am a passionate Frontend Developer.
          I specialize in building user-friendly web applications.
          Technology excites me because it creates limitless opportunities.
          I enjoy solving problems through coding.
          I believe web development combines creativity and logic beautifully.
          My goal is to deliver high-quality digital experiences.
          I focus on responsive and clean designs.
          I am currently pursuing MCA.
          I hold a strong academic foundation with BCA.
          I am highly motivated to keep learning.
          Curiosity drives me forward in my journey.
          I love transforming ideas into functional projects.
          I enjoy working with both design and code.
          I am a believer in continuous improvement.
        </h1>

        <button
          onClick={toggleEducation}
          className='text-xl mt-6 px-6 py-2 bg-orange-400 rounded-2xl underline'
        >
          {showEducation ? 'Read Less' : 'Read More'}
        </button>

        {showEducation && (
          <>
            <h2 className='text-2xl mt-8 px-8'>
              <span className='font-bold text-orange-400'>Education</span> <br />
              I completed my BCA with 88%. This gave me a solid base in programming.
              I developed skills in software development during BCA.
              My 12th grade score was 65%. These achievements show consistency in my academics.
              I am now pursuing MCA. MCA is helping me specialize further in computing.
              Cloud Computing is one of my favorite areas.
              I have studied Cloud Storage and Data Management in depth.
              My education reflects both theory and practice.
              I constantly try to apply my academic knowledge in projects.
              I value structured learning through academics.
              Education has shaped my disciplined mindset.
              I believe knowledge should be applied creatively.
            </h2>

            <h2 className='text-2xl mt-8 px-8'>
              <span className='font-bold text-orange-400'>Hobbies</span> <br />
              My core skills are in Frontend Development. I am confident in HTML5 and CSS3.
              JavaScript is my favorite programming language. I build modern apps using React.js.
              I also work with Next.js for SSR and SSG. Tailwind CSS is my go-to styling framework.
              I am comfortable with Bootstrap as well. I use Node.js for backend development.
              Express.js is a framework I often use. MongoDB is my preferred database.
              I have built full MERN stack applications. I am familiar with REST API development.
              I have practiced JWT-based authentication. I integrate Stripe for payment solutions.
              Git and GitHub are part of my daily workflow. I know how to deploy projects on Vercel.
              I have deployed apps on Netlify as well. I can work with Firebase when required.
              I am exploring cloud-based development practices. I adapt quickly to new technologies.
            </h2>

            <h2 className='text-2xl mt-8 px-8'>
              <span className='font-bold text-orange-400'>Projects</span> <br />
              I have worked on an e-commerce project called QuickMeds using the MERN stack.
              It included features like cart, checkout, and orders. I implemented JWT authentication
              and integrated Stripe payment gateway. QuickMeds had an admin panel.
              I worked on both frontend and backend. I also developed a Speech-to-Text app
              using Next.js and Deep INFRAA’s API. It focused on accessibility.
              I built my personal portfolio site using Tailwind CSS. It’s responsive and user-friendly.
              Each project improved my confidence and helped me learn.
            </h2>

            <h2 className='text-2xl mt-8 px-8'>
              <span className='font-bold text-orange-400'>Experience (Learning & Practice)</span> <br />
              I actively practice coding challenges on platforms like LeetCode.
              I believe DSA sharpens logic. I balance between DSA and development.
              I work on mini-projects regularly and explore GitHub projects.
              I contribute to open-source occasionally. I read documentation deeply.
              I debug issues carefully and follow tutorials before building independently.
              I’ve improved in React hooks like useState, useEffect, useContext, and custom hooks.
              I’ve tested fetch requests, explored React Router, handled error boundaries,
              studied form handling and validation, and connected frontend with backend using Axios.
            </h2>

            <h2 className='text-2xl mt-8 px-8'>
              <span className='font-bold text-orange-400'>Goals & Aspirations</span> <br />
              My short-term goal is to land a web development role and apply my skills.
              I want to work in a growth-oriented organization and contribute to impactful projects.
              I aim to master deployment pipelines and CI/CD. I wish to specialize in cloud-native development.
              My long-term goal is to become a full-stack expert and lead development teams.
              I want to mentor junior developers, publish tutorials, and build SaaS applications.
              I aim to balance coding and leadership while growing professionally.
              I want to remain a lifelong learner and contribute positively to the tech community.
            </h2>

            <h2 className='text-2xl mt-8 px-8'>
              <span className='font-bold text-orange-400'>Closing Statement</span> <br />
              Thank you for visiting my profile. I am Shiv Kumar, a passionate developer.
              I am eager to join the tech industry and bring dedication and curiosity.
              I am adaptable and excited to collaborate. My portfolio reflects my journey.
              I am open to internships, full-time roles, and freelancing.
              I look forward to working with creative teams and building meaningful applications.
              Let’s build something amazing together.
            </h2>
          </>
        )}
      </div>
    </div>
  );
};