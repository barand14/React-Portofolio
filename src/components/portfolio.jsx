import Project from './project.jsx';

function Portfolio() {
  const projects = [
    {
      title: 'MarvelVerse-Central',
      image: "file:///C:/Users/bbara/Downloads/the-avengers.webp",
      description:"A Marvel API to access marvel movies",
      deployedLink: 'https://skylerrhys.github.io/MarvelVerse-Central/',
      githubLink: 'https://github.com/SkylerRhys/MarvelVerse-Central'
    },
    
    {
        title:'Triviosa',
        image: "https://thumbs.dreamstime.com/b/trivia-badge-white-background-trivia-badge-white-304082228.jpg",
      description:"A Trivia API to generate questions by category",
        deployedLink:'https://drsaho.github.io/Triviosa/',
        githubLink: 'https://github.com/drsaho/Triviosa'
    },
    {
      title:'PWA-text-editor',
      image: "https://cdn.glitch.me/9d392eb2-e56d-4c4b-9cac-ad56f7192984%2Fvscodepwa.png",
    description:"A text editor that runs in the browser",
      deployedLink:'https://pwa-text-editor-udml.onrender.com',
      githubLink: 'https://github.com/barand14/PWA-Text-Editor'
  },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
