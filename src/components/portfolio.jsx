import Project from './project.jsx';

function Portfolio() {
  const projects = [
    {
      title: 'MarvelVerse-Central',
      image: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg",
      description:"Project 1 description",
      deployedLink: 'https://skylerrhys.github.io/MarvelVerse-Central/',
      githubLink: 'https://github.com/SkylerRhys/MarvelVerse-Central'
    },
    
    {
        title:'Triviosa',
        image: "imageurl",
      description:"Project 2 description",
        deployedLink:'https://drsaho.github.io/Triviosa/',
        githubLink: 'https://github.com/drsaho/Triviosa'
    },
    {
      title:'project 3',
      image: "imageurl",
    description:"Project 3 description",
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
