import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function FirstShop() {
  return (
    <Layout>
      <div>
        <div className="container">
          <div className="row">
            <div className="col d-none d-sm-block">
              <div id="shop-logo" className="shadow-box">
                <a href="/">
                  <img
                    className="img-responsive"
                    src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/images/9eb91e4e-7877-ea11-9eb3-002590662569"
                    alt="image"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="shadow-box float-right">
                <a className="btn-secondary" href="/logowanie">
                  Zaloguj się
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div id="fb-root" className=" fb_reset">
                  <div
                    style={{
                      position: "absolute",
                      top: "-10000px",
                      width: 0,
                      height: 0
                    }}
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
                name="f3b5c2a82bfa484"
                width="1000px"
                height="1000px"
                data-testid="fb:like Facebook Social Plugin"
                title="fb:like Facebook Social Plugin"
                frameBorder={0}
                allowTransparency="true"
                allowFullScreen="true"
                scrolling="no"
                allow="encrypted-media"
                src="https://www.facebook.com/v6.0/plugins/like.php?action=like&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df1f6321062c86e4%26domain%3Deurosklepgrzegorzczyz.zakupyuswoich.pl%26origin%3Dhttps%253A%252F%252Feurosklepgrzegorzczyz.zakupyuswoich.pl%252Ff3c1cebeb4834bc%26relation%3Dparent.parent&container_width=0&href=https%3A%2F%2Feurosklepgrzegorzczyz.zakupyuswoich.pl%2F&layout=button_count&locale=pl_PL&sdk=joey&share=true&size=small"
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
                  <a className="center" href="https://zakupyuswoich.pl">
                    <div className="top-section--logo logo_shop_User_login">
                      <img src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/logo.svg" />
                    </div>
                  </a>
                </center>
                <h1 id="shop-title" className="text-center">
                  Euro sklep
                </h1>
                <div className="text-center">
                  <a href="/zakupy" className="btn-do-shop">
                    <i className="fa fa-cart-plus" /> Rozpocznij zakupy...
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="shadow-box">
                  <h4>
                    <i className="fa fa-home" /> Sklep
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
                      <i className="fa fa-envelope mr-3" /> Grzegorzczyz.wg@gmail.com
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-phone mr-3" /> 793575239
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      opłata za pakowanie
                      <span className="badge badge-secondary badge-pill">
                  0,00 zł
                </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shadow-box">
                  <h4>
                    <i className="fa fa-truck" /> Dostawa
                  </h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      w godzinach
                      <span className="badge badge-success badge-pill">BRAK</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      cena
                      <span className="badge badge-secondary badge-pill">
                  0,00 zł
                </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      zasięg dostawy
                      <span className="badge badge-secondary badge-pill">20 km</span>
                    </li>
                    <li className="list-group-item">
                      GODZINY DOSTAW MOGĄ SIĘ R�ŻNIĆ W ZALEŻNOŚCI OD ILOŚCI ZAM�WIEŃ,
                      SĄ USTALANE INDYWIDUALNIE
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shadow-box">
                  <h4>
                    <i className="fa fa-shopping-bag" /> Odbi�r
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
          </div>
        </div>
        <div
          className="modal fade"
          id="notyficationModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" />
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">�</span>
                </button>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="lightboxOverlay"
          tabIndex={-1}
          className="lightboxOverlay"
          style={{ display: "none" }}
        />
        <div
          id="lightbox"
          tabIndex={-1}
          className="lightbox"
          style={{ display: "none" }}
        >
          <div className="lb-outerContainer">
            <div className="lb-container">
              <img
                className="lb-image"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                alt
              />
              <div className="lb-nav">
                <a className="lb-prev" aria-label="Previous image" href />
                <a className="lb-next" aria-label="Next image" href />
              </div>
              <div className="lb-loader">
                <a className="lb-cancel" />
              </div>
            </div>
          </div>
          <div className="lb-dataContainer">
            <div className="lb-data">
              <div className="lb-details">
                <span className="lb-caption" />
                <span className="lb-number" />
              </div>
              <div className="lb-closeContainer">
                <a className="lb-close" />
              </div>
            </div>
          </div>
        </div>
      </div>;

    </Layout>
  )
}
