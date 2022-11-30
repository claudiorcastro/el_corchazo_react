import React from 'react'

const Carrusel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.esquire.com%2Fes%2Fdonde-comer-beber%2Fg27083152%2Fmejores-whiskies-malta-del-mundo%2F&psig=AOvVaw23oOw7sKJB0KvviIQOaLh_&ust=1669934080408000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjPtq771vsCFQAAAAAdAAAAABAE" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cocinayvino.com%2Fvinos-bebidas%2Fcerveza-fermentados%2Fcervezas-vendidas-bares-top-mundo%2F&psig=AOvVaw2TZfeDmAyJEFmEluPYwSkr&ust=1669934043137000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDn_I-B1_sCFQAAAAAdAAAAABAD" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clarin.com%2Fgourmet%2Fcuesta-mejor-vino-argentina-importante-concurso-internacional_0_vXrvQf3Ojb.html&psig=AOvVaw3j9MV7IfwvrCiYnfVafNTF&ust=1669934003515000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjN3puB1_sCFQAAAAAdAAAAABAD" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flatinafy.com%2Fhe%2Fblog%2Fse-consigue-fernet-en-otras-ciudades-del-mundo%2F&psig=AOvVaw11RwiJI1Ee6Sl-_V9vUaI1&ust=1669933900829000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDk7KaB1_sCFQAAAAAdAAAAABAD" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cronista.com%2Fclase%2Fgourmet%2Fdia-del-vino-argentino-el-mapa-con-descuentos-y-menus-especiales-para-celebrarlo-en-buenos-aires%2F&psig=AOvVaw3j9MV7IfwvrCiYnfVafNTF&ust=1669934003515000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjN3puB1_sCFQAAAAAdAAAAABAO" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carrusel