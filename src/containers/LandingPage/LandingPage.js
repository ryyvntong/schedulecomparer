import React from 'react';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Features from 'components/Features/Features';

class LandingPage extends React.Component {
    render() {
        return (
            <div>
            <p>Toolbar </p>
            <HeroBanner />
            <Features />
            </div>
        );
    }
}

export default LandingPage;