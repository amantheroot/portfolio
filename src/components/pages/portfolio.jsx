import React, { Component } from "react";

import { Helmet } from "react-helmet";

import Footer from "../layout/footer";
import WorkCard from "../portfolio/workcard";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Helmet>
          <meta
            name="description"
            content="Work of Aman Kumar, A Full Stack ReactJS and NodeJS Web Developer based in Hyderabad, India."
          />
          <title>My Work | Aman Kumar | Full Stack Web Developer</title>
        </Helmet>
        <h1>MY WORK</h1>
        <p>(and what you're actually here for...)</p>
        <div className="mywork">
          <a
            href="https://sandbox.rentastico.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WorkCard
              company="Rentastico (OPC) Pvt Ltd"
              duration="2020 Jan - Present"
              cover="https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg"
              description={
                <>
                  <p>
                    Helping Rentastico develop and launch 3 PWA E-Commerce Full
                    Stack Web Applications (MEAN Stack) and a Live Stream
                    E-Commerce Solution using Kurento Media Server & MEAN Stack.
                  </p>
                  <ul>
                    <li>
                      Technologies Used: Angular 10, Ionic, NodeJS, Express.js,
                      JWT, MongoDB, Elasticsearch, Kurento (WebRTC)
                    </li>
                    <li>
                      Developed a full stack live stream e-commerce solution
                      using WebRTC that performs <em>50%</em> faster than
                      existing live stream solutions.
                    </li>
                  </ul>
                </>
              }
            />
          </a>
          <a
            href="https://www.innomatics.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WorkCard
              company="Innomatics Research Labs"
              duration="2020 Oct - Present"
              cover="https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg"
              description={
                <>
                  <p>
                    Developed a fully fledged headless CMS along with an admin
                    dashboard &amp; a viewing engine that reduced the time for
                    content management process by <em>40%</em> over existing CMS
                    solutions.
                  </p>
                  <ul>
                    <li>
                      Technologies Used: Next.js, Ant Design, Express.js, JWT,
                      MongoDB, NodeJS
                    </li>
                    <li>
                      Implemented a CRM Architecture along with a role
                      management system for enhanced authentication.
                    </li>
                    <li>
                      Developed better SEO manipulation for the CMS that
                      improved SEO performance by <em>35%</em>.
                    </li>
                  </ul>
                </>
              }
            />
          </a>
          <a href="https://houp.app" target="_blank" rel="noopener noreferrer">
            <WorkCard
              company="Houp"
              duration="2020 Jun - 2020 Nov"
              cover="https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg"
              description={
                <>
                  <p>
                    Developed &amp; launched a fully featured full stack social
                    media networking Progressive Web App for Houp with a
                    <em>perfect</em> score on Google Lighthouse.
                  </p>
                  <ul>
                    <li>
                      Technologies Used: Next.js, Express.js, JWT, MJML, MongoDB
                    </li>
                    <li>
                      Implemented all PWA features like service workers, cache
                      storage, etc. for better user experience.
                    </li>
                  </ul>
                </>
              }
            />
          </a>
          <a
            href="https://priceless-ride-41f4fc.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WorkCard
              company="PizzaXprs"
              duration="2019 Jan"
              cover="https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg"
            />
          </a>
          <a
            href="https://elegant-villani-bb0afe.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WorkCard
              company="TransOx"
              duration="2019 Sep"
              cover="https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg"
            />
          </a>
        </div>
        <div className="portfolio__contact">
          <div>
            <h1>Now, Would You Please?</h1>
            <button onClick={() => this.props.navigate("contact", 3)}>
              Say Hi!
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
