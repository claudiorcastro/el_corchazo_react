import React from "react";

const Carrusel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide edit"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/themes/cubo/1-slide-1621740094331-873172835-66105985aeadc923b8e834feb05666791621740095-1920-1920.webp?883347455"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgM7OaaTf3JfqP2rOUETtxyxParwC76E_Sw&usqp=CAU"
            className="d-block  w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/551/869/themes/amazonas/1-slide-1655245624581-2895361086-0d0438698d168ba6016a52da04c51afd1655245627-480-0.webp?953195013"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://theguiligans.com/wp-content/uploads/2022/10/carrusel4.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://image.shutterstock.com/image-illustration/brandy-whiskey-clear-glass-ice-260nw-2152715891.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;
