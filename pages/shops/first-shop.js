import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
// import styles from './Shop.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FirstShop() {
  return (<Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <div id="fb-root" className=" fb_reset">
              <div
                style={{ position: "absolute", top: "-10000px", width: 0, height: 0 }}
              >
                <div />
              </div>
            </div>
            <div
              className="fb-like fb_iframe_widget"
              style={{ marginTop: 10, marginBottom: 10 }}
              data-href="\"
              data-width
              data-layout="button_count"
              data-action="like"
              data-size="small"
              data-share="true"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="action=like&app_id=&container_width=0&href=https%3A%2F%2Feurosklepgrzegorzczyz.zakupyuswoich.pl%2F&layout=button_count&locale=pl_PL&sdk=joey&share=true&size=small"
            >
        <span style={{ verticalAlign: "bottom", width: 178, height: 20 }}>
          <iframe
            name="f29ec2c591938d4"
            width="1000px"
            height="1000px"
            data-testid="fb:like Facebook Social Plugin"
            title="fb:like Facebook Social Plugin"
            frameBorder={0}
            allowTransparency="true"
            allowFullScreen="true"
            scrolling="no"
            allow="encrypted-media"
            src="https://www.facebook.com/v6.0/plugins/like.php?action=like&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df1b16e6a1e6fc54%26domain%3Deurosklepgrzegorzczyz.zakupyuswoich.pl%26origin%3Dhttps%253A%252F%252Feurosklepgrzegorzczyz.zakupyuswoich.pl%252Ff193d690bc1bf8%26relation%3Dparent.parent&container_width=0&href=https%3A%2F%2Feurosklepgrzegorzczyz.zakupyuswoich.pl%2F&layout=button_count&locale=pl_PL&sdk=joey&share=true&size=small"
            style={{
              border: "none",
              visibility: "visible",
              width: 178,
              height: 20
            }}
            className
          />
        </span>
            </div>
            <center style={{ marginTop: 10 }}>
              <Link className="center" href="/">
                <div className="top-section--logo logo_shop_User_login">
                  <img src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/logo.svg" />
                </div>
              </Link>
            </center>
            <h1 id="shop-title" className="text-center">
              Euro sklep
            </h1>
            <div className="text-center">
              <a href="/zakupy" className="btn-do-shop">
                <FontAwesomeIcon icon={['fab', 'github']} /> Rozpocznij zakupy...
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="shadow-box">
              <h4>
                <FontAwesomeIcon icon={['fab', 'github']} /> Sklep
              </h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <dsada className="pull-left"> JULIANA TUWIMA 41</dsada>{" "}
                  <dsada className="pull-right">Kaczyce</dsada>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  otwarty w godzinach
                  <span className="badge badge-success badge-pill">6-20</span>
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={['fab', 'github']} /> Grzegorzczyz.wg@gmail.com
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={['fab', 'github']} /> 793575239
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  opłata za pakowanie
                  <span className="badge badge-secondary badge-pill">0,00 zł</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-box">
              <h4>
                <FontAwesomeIcon icon={['fab', 'github']} /> Dostawa
              </h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  w godzinach
                  <span className="badge badge-success badge-pill">BRAK</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  cena
                  <span className="badge badge-secondary badge-pill">0,00 zł</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  zasięg dostawy
                  <span className="badge badge-secondary badge-pill">20 km</span>
                </li>
                <li className="list-group-item">
                  GODZINY DOSTAW MOGĄ SIĘ RÓŻNIĆ W ZALEŻNOŚCI OD ILOŚCI ZAMÓWIEŃ, SĄ
                  USTALANE INDYWIDUALNIE
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-box">
              <h4>
                <FontAwesomeIcon icon={['fab', 'github']} /> Odbiór
              </h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  w godzinach
                  <span className="badge badge-success badge-pill">BRAK</span>
                </li>
                <li className="list-group-item">USTALANE INDYWIDUALNIE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>;

    </Layout>
  )
}
