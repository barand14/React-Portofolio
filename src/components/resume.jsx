import resume from "../assets/example.png"
function Resume(){
    return(
        <div>
          <h2>Download my <a href={resume} download>resume</a></h2>
            <ul>
                <h3>Front End</h3>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
            </ul>
            <ul>
                <h3>Back End</h3>
                <li>Node.js</li>
                <li>Java</li>
                <li> SQL</li>
            </ul>
        </div>
    )
}

export default Resume