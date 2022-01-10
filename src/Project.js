import React, {useEffect} from 'react'
import './css/Project.scss'
import ProjectCard from './ProjectCard'
import hackernews from './assets/hackernews.png';
import spotify from './assets/spotify_logo.png';
import covid19 from './assets/covid-dashboard-icon.png';
import opyn from './assets/eth-icon.png';
import pineapple from './assets/pineapple-logo.svg';
import chainlinklogo from './assets/Chainlink_Logo.png';
import coingecko from './assets/coingecko_logo.png';

function Project() {

    return (
        <div className="projects" id="project"> 
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
                    title="Coin Gecko"
                    description="MultiSafe Coin Gecko Clone" 
                    image={coingecko}
                    link="https://multisafe-challenge-a3c7e.web.app/"
                    git_link="https://multisafe-challenge-a3c7e.web.app/"
                />
                <ProjectCard 
                    index={2}
                    title="Opyn Dex"
                    description="Decentralized Excange UI" 
                    image={opyn}
                    link="https://opyn-test.web.app/"
                    git_link="https://github.com/tarunkhasnavis"
                /> 
                <ProjectCard 
                    index={3}
                    title="Multi-Sig Wallet"
                    description="A Multi-Signature Wallet for Ethereum" 
                    image={covid19}
                    link="https://github.com/tarunkhasnavis/multisig-wallet"
                    git_link="https://github.com/tarunkhasnavis/multisig-wallet"
                />
                <ProjectCard 
                    index={4}
                    title="Chainlink External Adapter"
                    description="An API adapter for Chainlink oracles" 
                    image={chainlinklogo}
                    link="https://github.com/tarunkhasnavis/external-adapters-js"
                    git_link="https://github.com/tarunkhasnavis/external-adapters-js"
                />
                <ProjectCard 
                    index={5}
                    title="Pineapple Finance"
                    description="Stable Yeild Optimizer on Ethereum" 
                    image={pineapple}
                    link="https://github.com/tarunkhasnavis"
                    git_link="https://github.com/tarunkhasnavis"
                />
            </div>
        </div>
    )
}

export default Project
