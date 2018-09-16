import React from 'react';

export default class ParticlesAnimation extends React.Component {
    componentDidMount() {
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('particles-js', 'particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }

    render() {
        return (
            <div id="particles-js"></div>
        );
    }
}