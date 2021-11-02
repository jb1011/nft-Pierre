import React from 'react'

const Card = props => {
    return (
      <div>
        <div class="portfolio-item">
          <a
            class="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal1"
          >
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              class="img-fluid"
              src={props.img}
              alt="..."
            />
          </a>
          <div class="portfolio-caption">
            <div class="portfolio-caption-heading text-purple">{props.title}</div>
            <div class="portfolio-caption-subheading text-muted">
              {props.text}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card
