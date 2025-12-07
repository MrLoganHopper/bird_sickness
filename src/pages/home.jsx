import React from 'react';
import './home.css';

export default function Home() {
  const birdArt = 
  `⣰⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⡾
⠀⠀⣿⡍⠛⠲⣶⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡴⠞⠉⣠⡞⠀⠀
⠀⠀⠘⣽⢷⣦⣌⣈⠋⡚⠿⣦⡀⠀⠀⣀⣤⠀⠀⠀⣠⡶⠚⠛⣙⣭⠠⣤⣶⣯⠆⠀⠀⠀
⠀⠀⠀⣼⣷⣀⠀⠀⠈⠀⠀⠀⢻⡇⠺⡿⠛⣿⠀⠀⢿⠀⠀⣼⠿⣫⣭⣠⣤⡶⠂⠀⠀⠀
⠀⠀⠀⠀⠉⠛⠿⣹⣾⠔⠃⠀⠈⠳⠾⠏⠀⠻⣶⡺⠋⠀⣤⣸⣷⣶⡾⠖⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠒⠷⣿⡻⣞⣀⣄⣀⣀⡄⠀⠀⣠⣄⣸⡿⣾⣿⡽⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠟⠯⣽⢿⡿⠃⠀⢀⣿⡙⠑⠙⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣯⣦⣾⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣼⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⣿⢩⡿⠘⠀⠀`;

  return (
    <>
      {/* ASCII Birds */}
      <div id="bird1" className="bird">{birdArt}</div>
      <div id="bird2" className="bird">{birdArt}</div>
      <div id="bird3" className="bird">{birdArt}</div>
      <div id="bird4" className="bird">{birdArt}</div>
      <div id="bird5" className="bird">{birdArt}</div>
      <div id="bird6" className="bird">{birdArt}</div>
      <div id="bird7" className="bird">{birdArt}</div>
      <div id="bird8" className="bird">{birdArt}</div>

      {/* Header */}


      {/* Main Content */}
      <div className="container">
        <main>
          <h2>Welcome to the Bird Flu Dashboard</h2>
          <p>
            Explore detection patterns, species-level analytics, outbreak clusters, and ecological flu indicators.
            Use the links above or click below to start navigating through the interactive surveillance tools.
          </p>
          <a className="btn" href="/map">Start Exploring →</a>
        </main>
      </div>
    </>
  );
}