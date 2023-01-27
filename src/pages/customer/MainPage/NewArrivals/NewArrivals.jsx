import React from "react";
import "./NewArrivals.scss";

const NewArrivals = () => {
  return (
    <section class="new-arrival">
      <div class="title">
        <span>Novedades</span>
        <h2>Ultimos Dispositivos</h2>
      </div>

      <div class="row container">
        <div class="col col-1">
          <img
            src="https://www.digitaltrends.com/wp-content/uploads/2022/07/Nothing-Phone-1-Apps.jpg?p=1"
            alt=""
          />
          <h3>
            Tips <br />
            Compra Online
            <span>Infórmate</span>
          </h3>
        </div>
        <div class="col col-2">
          <img
            src="https://www.zdnet.com/a/img/resize/9a5f51c8f24a1ac0028c1c9d1b6a74ed48e4964d/2022/10/17/52969766-2b2e-4874-a447-81930abf01dd/google-pixel-7pro-hazel2.jpg?auto=webp&fit=crop&height=360&width=640"
            alt=""
          />
          <h3>
            Nuevos <br />
            Samsung 3000
            <span>Pocas Unidades</span>
          </h3>
        </div>
        <div class="col col-3">
          <img
            src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/24059001/226270_iPHONE_14_PHO_akrales_0788_sq.jpg"
            alt=""
          />
          <h3>
            Tendencias 2023 <br />
            Iphone 14
            <span>Disponible</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
