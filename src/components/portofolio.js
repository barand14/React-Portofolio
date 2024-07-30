import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'MarvelVerse-Central',
      deployedLink: 'https://skylerrhys.github.io/MarvelVerse-Central/',
      githubLink: 'https://github.com/SkylerRhys/MarvelVerse-Central'
    },
    
    {
        title:'Triviosa',
        deployedLink:'https://drsaho.github.io/Triviosa/',
        githubLink: 'https://github.com/drsaho/Triviosa'
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
