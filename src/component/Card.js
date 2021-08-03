import React from 'react'
import PropTypes from 'prop-types'
import '../component/css/cards.css'



function card({title, imageSource, text}) {
    return (
        <div className="card text-center animate__animated animate__fadeOutUp">
      <div className="overflow">
      <img src={imageSource} alt="" className="card-img-top" />
      </div>

            <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary"> {text } </p>
        <a href="#!" className="btn btn-outline-secondary"> compra aqui </a>
            </div>
        </div>
    )
}
card.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default card
