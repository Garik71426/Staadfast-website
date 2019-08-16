import React from 'react';

import SectionHeading from './../SectionHeading';
import PortfolioWeb from './PortfolioWeb';
import PortfolioMobile from './PortfolioMobile';

import './Portfolio.scss';
const Portfolio = ({ ...props }) => {
    const portfolioInfo = [
        {
            id: 'mobile',
            title: 'Keedgo',
            content: 'Use Keedgo to organize and manage your afterschool activities.',
            imgHref: 'img/keedgo.png',
            style: 'mobile'
        }, {
            id: 'web',
            title: 'Blotclub',
            content: 'Bazar Blot Club is one of the popular card games played in Armenia. Instead of Durak, Nardi and Poker players most often prefer to play Blot.',
            imgHref: 'img/blot.png',
            style: 'web'
        }, {
            id: 'web',
            title: 'Imblox',
            content: 'A smartbot platform, with a complete suite of analytics, machine learning, content management and engagement tools.',
            imgHref: 'img/imblox.png',
            style: 'web'
        }, {
            id: 'web',
            title: 'Forkize',
            content: 'Forkize is all about mobile experience personalization. Think of it as a brain inside mobile app, which helps apps to understand and retain users better.',
            imgHref: 'img/forkize.png',
            style: 'web'
        }, {
            id: 'web',
            title: 'Daily doc',
            content: 'In the Daily Doc, we strive for an optimal combination of quality care in today\'s modern life and an individual approach to each patient, typical for traditional medicine.',
            imgHref: 'img/patient.png',
            style: 'web'
        }, {
            id: 'mobile',
            title: 'Daily doc',
            content: 'In the Daily Doc, we strive for an optimal combination of quality care in today\'s modern life and an individual approach to each patient, typical for traditional medicine.',
            imgHref: 'img/dailydoc.png',
            style: 'mobile'
        }
    ];
    return (
        <section id="sf-portfolio" className="section">
            <div className="container">
                
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <SectionHeading 
                            title = 'Our work'
                            content = 'We build strong client partnerships that extend beyond the website launch. Here are some of our projects completed by our development team.'
                        />
                    </div>
                </div>
                <PortfolioWeb portfolioInfo ={portfolioInfo} />
                <PortfolioMobile portfolioInfo ={portfolioInfo} />
            </div>
        </section>
    );
};

export default Portfolio;