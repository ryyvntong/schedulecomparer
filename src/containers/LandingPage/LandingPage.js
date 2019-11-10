import React from 'react';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Features from 'components/Features/Features';
import Toolbar from 'components/toolbar/toolbar'
class LandingPage extends React.Component {
    render() {
        return (
            <div>
            <Toolbar></Toolbar>
            <HeroBanner />
            <Features />
            </div>
        );
    }
}

export default LandingPage;