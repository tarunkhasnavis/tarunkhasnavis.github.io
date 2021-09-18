import React, {useEffect} from 'react'
import './css/Project.scss'
import ProjectCard from './ProjectCard'
import hackernews from './assets/hackernews.png';
import spotify from './assets/spotify_logo.png';
import covid19 from './assets/covid-dashboard-icon.png';
import opyn from './assets/eth-icon.png';
import pineapple from './assets/pineapple-logo.svg';
import slack from './assets/slack_logo.png';
import coingecko from './assets/coingecko_logo.png';

function Project() {

    return (
        <div className="projects" id="project"> 
            {/* <h2>Projects</h2> */}
            <div className="card-container">
                <ProjectCard 
                    index={0}
                    title="Hacker News"
                    description="News for Developers" 
                    image={hackernews}
                    link="https://hacker-news-14363.web.app/"
                    git_link="https://github.com/tarunkhasnavis/hackernews"
                />
                <ProjectCard 
                    index={1}
                    title="Spotify Lyrics"
                    description="Spotify Player with Lyrics" 
                    image={spotify}
                    link="https://github.com/tarunkhasnavis/spotify-lyrics-player"
                    git_link="https://github.com/tarunkhasnavis/spotify-lyrics-player"
                /> 
                <ProjectCard 
                    index={2}
                    title="COVID-19 Dashboard"
                    description="COVID-19 Stats Visualizer" 
                    image={covid19}
                    link="https://github.com/tarunkhasnavis/covid19-dashboard"
                    git_link="https://github.com/tarunkhasnavis/covid19-dashboard"
                />
                <ProjectCard 
                    index={3}
                    title="Opyn Dex"
                    description="Decentralized Excange UI" 
                    image={opyn}
                    link="https://opyn-test.web.app/"
                    git_link="https://github.com/tarunkhasnavis"
                />
                <ProjectCard 
                    index={4}
                    title="Pineapple Finance"
                    description="Yeild Optimizer on Etherium" 
                    image={pineapple}
                    link="https://github.com/tarunkhasnavis"
                    git_link="https://github.com/tarunkhasnavis"
                />
                <ProjectCard 
                    index={5}
                    title="Coin Gecko"
                    description="MultiSafe Coin Gecko Clone" 
                    image={coingecko}
                    link="https://multisafe-challenge-a3c7e.web.app/"
                    git_link="https://multisafe-challenge-a3c7e.web.app/"
                /> 
            </div>
        </div>
    )
}

export default Project
