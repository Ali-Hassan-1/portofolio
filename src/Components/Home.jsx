import React from "react";
import orange from "./orange.jpg";
import reactLogo from "./reactLogo.png";
import databaseLogo from "./database.png";

import "./Home.css";

const Projects = () => {
  const Projects = [
    {
      id: 0,
      image: orange,
      name: "MERN Memories",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam id aspernatur, a porro odio atque inventore quis, sed maiores temporeplaceat. Unde, animi fuga quis molestiae aspernatur officiis sitvel.",
      stack: ["Mongo", "Express", "React", "Node"],
    },
    {
      id: 1,
      image: orange,
      name: "MERN Memories",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam id aspernatur, a porro odio atque inventore quis, sed maiores temporeplaceat. Unde, animi fuga quis molestiae aspernatur officiis sitvel.",
      stack: ["Mongo", "Express", "React", "Node"],
    },
    {
      id: 2,
      image: orange,
      name: "MERN Memories",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam id aspernatur, a porro odio atque inventore quis, sed maiores temporeplaceat. Unde, animi fuga quis molestiae aspernatur officiis sitvel.",
      stack: ["Mongo", "Express"],
    },
    {
      id: 3,
      image: orange,
      name: "MERN Memories",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      stack: ["Mongo", "Express", "React", "Node"],
    },
  ];

  return (
    <>
      <h1>Projects</h1>
      <div className="projects">
        {Projects.map((project) => (
          <div key={project.id} className="project_card">
            <img width="100%" height="40%" src={project.image} alt="react" />
            <h2>{project.name}</h2>
            <div className="project_break" />
            <p>{project.description}</p>
            <h3>Stack</h3>
            <div className="project_stack">
              {project.stack.map((stack) => (
                <h4>{stack}</h4>
              ))}
            </div>
            <div className="project_btn">
              <button className="project_btn_code">Code</button>
              <button className="project_btn_source">Source</button>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className="break" />
    </>
  );
};

const Technologies = () => {
  const Technologies = [
    {
      image: reactLogo,
      name: "Front-End",
      description: "Experience with React.Js",
    },
    {
      image: databaseLogo,
      name: "Back-End",
      description: "Experience with Node and MongoDB",
    },
  ];
  return (
    <>
      <h1>Technologies</h1>
      <div className="technology">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          incidunt modi doloribus ipsa nemo non dolor enim! Atque, labore
          consequuntur!
        </p>
        <div className="technology_cards">
          {Technologies.map((technology) => (
            <div key={technology.name} className="technology_card">
              <img width="60" height="50" src={technology.image} alt="" />
              <h2>{technology.name}</h2>
              <p>{technology.description}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="break" />
    </>
  );
};

function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <h1>
          Welcome to <br /> my personal portofolio
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
          perferendis possimus quidem! Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <button className="welcome_learn_more">Learn More</button>
        <br />
        <br />
        <br />
        <div className="break" />

        {/* Project Section */}
        {Projects()}
        {/* Technologies Section */}
        {Technologies()}
        {/* About Me Section */}

        <h1>About Me</h1>
        <div className="about_me">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea
            obcaecati accusantium delectus. Doloremque quidem qui suscipit id
            iste sequi quis porro eos hic recusandae.
          </p>
          <div className="about_me_cards">
            <div className="about_me_card">
              <h3>2017</h3>
              <span>Started my Journey</span>
            </div>
            <div className="about_me_card">
              <h3>2018</h3>
              <span>Working as freelance developer</span>
            </div>
            <div className="about_me_card">
              <h3>2019</h3>
              <span>Founded JavaScript Mastery</span>
            </div>
            <div className="about_me_card">
              <h3>2020</h3>
              <span>Share my project with world</span>
            </div>
            <div className="about_me_card">
              <h3>2021</h3>
              <span>Started my own platform</span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="break" />
        {/* Personal Achievement */}
        <h1>Personal Achievement</h1>
        <div className="achievement">
          <div className="achievment_card">
            <h2>20+</h2>
            <span>Open Source Project</span>
          </div>
          <div className="achievment_card">
            <h2>1200+</h2>
            <span>Students</span>
          </div>
          <div className="achievment_card">
            <h2>1900+</h2>
            <span>Girhub Followers</span>
          </div>
          <div className="achievment_card">
            <h2>5000+</h2>
            <span>Github Stars</span>
          </div>
        </div>

        <br />
        <br />
        <div className="break" />
        <br />
        <div className="end_line" />
        <br />
        <div className="contact_detail">
          <div className="contact">
            <p>Call</p>
            <h4>314-141-4141</h4>
          </div>
          <div className="contact">
            <p>Email</p>
            <h4>chaudharyali762@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
