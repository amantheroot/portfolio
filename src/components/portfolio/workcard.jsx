import React, { Component } from "react";

class WorkCard extends Component {
  render() {
    return (
      <div className="workcard">
        <div className="cover">
          <img
            src="https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg"
            alt="rentastico"
          />
        </div>
        <div className="content">
          <div className="header">
            <strong>Rentastico</strong>
            <strong>Jan 2020 - Present</strong>
          </div>
          <div className="main">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur aliquid ipsa, iste cupiditate soluta similique nihil
              qui, mollitia molestias repellat dolorem dolorum a harum quia in
              quibusdam libero amet nulla.
            </p>
            <ul>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Laborum quod fugit totam ratione, corrupti odit! Tempore ipsam,
              </li>
              <li>
                libero necessitatibus veritatis ad omnis, inventore minus vel
              </li>
              <li>ipsa soluta facere maxime dolore!</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkCard;
