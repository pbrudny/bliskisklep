import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
// import styles from './Shop.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SecondShopBuy() {
  return (<Layout>
      <div>
        <div
          role="dialog"
          aria-live="polite"
          aria-label="cookieconsent"
          aria-describedby="cookieconsent:desc"
          className="cc-window cc-banner cc-type-info cc-theme-block cc-bottom cc-color-override-1021095783 cc-invisible"
          style={{ display: "none" }}
        >
          {/*googleoff: all*/}
          <span id="cookieconsent:desc" className="cc-message">
      Nasz serwis używa plików cookies. Klikając{" "}
            <a
              style={{
                display: "inline-table",
                borderRadius: 10,
                maxWidth: 100,
                padding: 2
              }}
              aria-label="dismiss cookie message"
              role="button"
              tabIndex={0}
              className="cc-btn cc-dismiss"
            >
        Akceptuję
      </a>{" "}
            lub korzystając dalej z serwisu, wyrażasz zgodę na
      <a
        style={{ color: "blue" }}
        id="rodoId"
        target="_blank"
        href="/ciasteczka"
      >
        {" "}
        politykę prywatności i cookies
      </a>{" "}
            serwisu ZakupyUSwoich.pl.
    </span>
          <div className="cc-compliance">
            <a
              aria-label="dismiss cookie message"
              role="button"
              tabIndex={0}
              className="cc-btn cc-dismiss"
              style={{ display: "none" }}
            >
              Akceptuję
            </a>
          </div>
          {/*googleon: all*/}
        </div>
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
                <h1 className="text-center mt-5">Euro sklep</h1>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-7">
                <div id="products-table" className="shadow-box">
                  <h4 className="text-dark-secondary d-inline-block">Produkty: </h4>
                  {/* ko if: total() */}
                  <h4
                    className="text-dark-secondary d-inline-block"
                    data-bind="text: filtered"
                  >
                    4124
                  </h4>
                  {/* /ko */}
                  <table className="table table-sm">
                    <thead>
                    {/* ko if: total() */}
                    <tr>
                      <th colSpan={3}>
                        <input
                          type="text"
                          className="form-control full-bg products-search--input"
                          placeholder="wyszukaj ..."
                          data-bind="value: productNameFilter, valueUpdate: 'keyup'"
                        />
                      </th>
                      <th colSpan={3}>
                        <select
                          className="form-control full-bg"
                          data-bind="value: productCategoryFilter"
                          id="product-category"
                          name="product-category"
                        >
                          <option value>wybierz kategorię ...</option>
                          <option value={62}>alkohol</option>
                          <option value={60}>domowe</option>
                          <option value={61}>inne</option>
                          <option value={58}>kosmetyki</option>
                          <option value={53}>mięso</option>
                          <option value={56}>mrożonki</option>
                          <option value={3}>nabiał</option>
                          <option value={9}>napoje</option>
                          <option value={1}>owoce</option>
                          <option value={55}>pieczywo</option>
                          <option value={57}>spożywcze</option>
                          <option value={59}>toaletowe</option>
                          <option value={63}>tytoń</option>
                          <option value={2}>warzywa</option>
                          <option value={54}>wędliny</option>
                        </select>
                      </th>
                    </tr>
                    <tr>
                      <th />
                      <th />
                      <th>Nazwa</th>
                      <th>Rodzaj</th>
                      <th colSpan={2}>Cena [zł]</th>
                    </tr>
                    {/* /ko */}
                    {/* ko if: !total() */}
                    {/* /ko */}
                    </thead>
                    <tbody>
                    {/* ko foreach: rows */}
                    <tr>
                      <td data-bind="text: ($index() + 1)">1</td>
                      <td className="clickable">
                        <div data-bind="if: IsImage" />
                        <div data-bind="ifnot: IsImage">
                          <img
                            data-bind="attr: {src: $parent.defaultProductImage}, click: $parent.showProductDetail"
                            className="products-list--product-minature"
                            src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/noImage.png"
                          />
                        </div>
                      </td>
                      <td
                        className="clickable"
                        data-bind="text: ProductName, click: $parent.showProductDetail"
                        data-toggle="tooltip"
                        title
                        data-original-title="Kliknij, aby wyświetlić szczegóły"
                      >
                        100 RAD
                      </td>
                      <td data-bind="text: ProductCategory" />
                      <td data-bind="text: Price">1.69</td>
                      <td data-bind="displayAddToCartBtn: ProductId">
                        <button className="btn cart">
                          <i className="fa fa-cart-plus" /> dodaj
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-bind="text: ($index() + 1)">2</td>
                      <td className="clickable">
                        <div data-bind="if: IsImage" />
                        <div data-bind="ifnot: IsImage">
                          <img
                            data-bind="attr: {src: $parent.defaultProductImage}, click: $parent.showProductDetail"
                            className="products-list--product-minature"
                            src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/noImage.png"
                          />
                        </div>
                      </td>
                      <td
                        className="clickable"
                        data-bind="text: ProductName, click: $parent.showProductDetail"
                        data-toggle="tooltip"
                        title
                        data-original-title="Kliknij, aby wyświetlić szczegóły"
                      >
                        100 RAD
                      </td>
                      <td data-bind="text: ProductCategory" />
                      <td data-bind="text: Price">1.59</td>
                      <td data-bind="displayAddToCartBtn: ProductId">
                        <button className="btn cart">
                          <i className="fa fa-cart-plus" /> dodaj
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-bind="text: ($index() + 1)">3</td>
                      <td className="clickable">
                        <div data-bind="if: IsImage" />
                        <div data-bind="ifnot: IsImage">
                          <img
                            data-bind="attr: {src: $parent.defaultProductImage}, click: $parent.showProductDetail"
                            className="products-list--product-minature"
                            src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/noImage.png"
                          />
                        </div>
                      </td>
                      <td
                        className="clickable"
                        data-bind="text: ProductName, click: $parent.showProductDetail"
                        data-toggle="tooltip"
                        title
                        data-original-title="Kliknij, aby wyświetlić szczegóły"
                      >
                        100 RAD POLECA
                      </td>
                      <td data-bind="text: ProductCategory" />
                      <td data-bind="text: Price">1.5</td>
                      <td data-bind="displayAddToCartBtn: ProductId">
                        <button className="btn cart">
                          <i className="fa fa-cart-plus" /> dodaj
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-bind="text: ($index() + 1)">4</td>
                      <td className="clickable">
                        <div data-bind="if: IsImage" />
                        <div data-bind="ifnot: IsImage">
                          <img
                            data-bind="attr: {src: $parent.defaultProductImage}, click: $parent.showProductDetail"
                            className="products-list--product-minature"
                            src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/noImage.png"
                          />
                        </div>
                      </td>
                      <td
                        className="clickable"
                        data-bind="text: ProductName, click: $parent.showProductDetail"
                        data-toggle="tooltip"
                        title
                        data-original-title="Kliknij, aby wyświetlić szczegóły"
                      >
                        3 CZERWONE POMARANCZE 1.75L
                      </td>
                      <td data-bind="text: ProductCategory" />
                      <td data-bind="text: Price">3.69</td>
                      <td data-bind="displayAddToCartBtn: ProductId">
                        <button className="btn cart">
                          <i className="fa fa-cart-plus" /> dodaj
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-bind="text: ($index() + 1)">5</td>
                      <td className="clickable">
                        <div data-bind="if: IsImage" />
                        <div data-bind="ifnot: IsImage">
                          <img
                            data-bind="attr: {src: $parent.defaultProductImage}, click: $parent.showProductDetail"
                            className="products-list--product-minature"
                            src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/noImage.png"
                          />
                        </div>
                      </td>
                      <td
                        className="clickable"
                        data-bind="text: ProductName, click: $parent.showProductDetail"
                        data-toggle="tooltip"
                        title
                        data-original-title="Kliknij, aby wyświetlić szczegóły"
                      >
                        4MOVE IZOTONIK MULTIFRUIT 0.7L
                      </td>
                      <td data-bind="text: ProductCategory" />
                      <td data-bind="text: Price">2.49</td>
                      <td data-bind="displayAddToCartBtn: ProductId">
                        <button className="btn cart">
                          <i className="fa fa-cart-plus" /> dodaj
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-bind="text: ($index() + 1)">6</td>
                      <td className="clickable">
                        <div data-bind="if: IsImage" />
                        <div data-bind="ifnot: IsImage">
                          <img
                            data-bind="attr: {src: $parent.defaultProductImage}, click: $parent.showProductDetail"
                            className="products-list--product-minature"
                            src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/noImage.png"
                          />
                        </div>
                      </td>
                      <td
                        className="clickable"
                        data-bind="text: ProductName, click: $parent.showProductDetail"
                        data-toggle="tooltip"
                        title
                        data-original-title="Kliknij, aby wyświetlić szczegóły"
                      >
                        7DAYS MAX 110G
                      </td>
                      <td data-bind="text: ProductCategory" />
                      <td data-bind="text: Price">2.89</td>
                      <td data-bind="displayAddToCartBtn: ProductId">
                        <button className="btn cart">
                          <i className="fa fa-cart-plus" /> dodaj
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-bind="text: ($index() + 1)">7</td>
                      <td className="clickable">
                        <div data-bind="if: IsImage" />
                        <div data-bind="ifnot: IsImage">
                          <img
                            data-bind="attr: {src: $parent.defaultProductImage}, click: $parent.showProductDetail"
                            className="products-list--product-minature"
                            src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/noImage.png"
                          />
                        </div>
                      </td>
                      <td
                        className="clickable"
                        data-bind="text: ProductName, click: $parent.showProductDetail"
                        data-toggle="tooltip"
                        title
                        data-original-title="Kliknij, aby wyświetlić szczegóły"
                      >
                        ABSOLWENT 100ML
                      </td>
                      <td data-bind="text: ProductCategory" />
                      <td data-bind="text: Price">6.9</td>
                      <td data-bind="displayAddToCartBtn: ProductId">
                        <button className="btn cart">
                          <i className="fa fa-cart-plus" /> dodaj
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-bind="text: ($index() + 1)">8</td>
                      <td className="clickable">
                        <div data-bind="if: IsImage" />
                        <div data-bind="ifnot: IsImage">
                          <img
                            data-bind="attr: {src: $parent.defaultProductImage}, click: $parent.showProductDetail"
                            className="products-list--product-minature"
                            src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/noImage.png"
                          />
                        </div>
                      </td>
                      <td
                        className="clickable"
                        data-bind="text: ProductName, click: $parent.showProductDetail"
                        data-toggle="tooltip"
                        title
                        data-original-title="Kliknij, aby wyświetlić szczegóły"
                      >
                        ABSOLWENT CYTRYNóWKA 100ML
                      </td>
                      <td data-bind="text: ProductCategory" />
                      <td data-bind="text: Price">5.59</td>
                      <td data-bind="displayAddToCartBtn: ProductId">
                        <button className="btn cart">
                          <i className="fa fa-cart-plus" /> dodaj
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-bind="text: ($index() + 1)">9</td>
                      <td className="clickable">
                        <div data-bind="if: IsImage" />
                        <div data-bind="ifnot: IsImage">
                          <img
                            data-bind="attr: {src: $parent.defaultProductImage}, click: $parent.showProductDetail"
                            className="products-list--product-minature"
                            src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/noImage.png"
                          />
                        </div>
                      </td>
                      <td
                        className="clickable"
                        data-bind="text: ProductName, click: $parent.showProductDetail"
                        data-toggle="tooltip"
                        title
                        data-original-title="Kliknij, aby wyświetlić szczegóły"
                      >
                        ABSOLWENT CYTRYNóWKA 200ML
                      </td>
                      <td data-bind="text: ProductCategory" />
                      <td data-bind="text: Price">9.99</td>
                      <td data-bind="displayAddToCartBtn: ProductId">
                        <button className="btn cart">
                          <i className="fa fa-cart-plus" /> dodaj
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-bind="text: ($index() + 1)">10</td>
                      <td className="clickable">
                        <div data-bind="if: IsImage" />
                        <div data-bind="ifnot: IsImage">
                          <img
                            data-bind="attr: {src: $parent.defaultProductImage}, click: $parent.showProductDetail"
                            className="products-list--product-minature"
                            src="https://eurosklepgrzegorzczyz.zakupyuswoich.pl/Content/images/website/noImage.png"
                          />
                        </div>
                      </td>
                      <td
                        className="clickable"
                        data-bind="text: ProductName, click: $parent.showProductDetail"
                        data-toggle="tooltip"
                        title
                        data-original-title="Kliknij, aby wyświetlić szczegóły"
                      >
                        ABSOLWENT POZIOMKA 200ML
                      </td>
                      <td data-bind="text: ProductCategory" />
                      <td data-bind="text: Price">9.89</td>
                      <td data-bind="displayAddToCartBtn: ProductId">
                        <button className="btn cart">
                          <i className="fa fa-cart-plus" /> dodaj
                        </button>
                      </td>
                    </tr>
                    {/* /ko */}
                    </tbody>
                    <tfoot>
                    <tr>
                      <th colSpan={3}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="zapytaj o produkt ..."
                          data-bind="value: inquiryProductName, valueUpdate: 'keyup'"
                        />
                        <div
                          className="alert alert-warning alert-dismissible fade show"
                          role="alert"
                        >
                          Nie ma produktu na liście? Wpisuj w to pole produkty które
                          sprzedawca może oferować w swoim sklepie. On później
                          zweryfikuje Twoją listę i przygotuje zamówienie!
                          <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">ó</span>
                          </button>
                        </div>
                      </th>
                      <th colSpan={2}>
                        <input
                          type="number"
                          className="form-control m-width-100"
                          placeholder="ilość ..."
                          data-bind="value: inquiryProductCount, valueUpdate: 'keyup'"
                        />
                      </th>
                      <th data-bind="displayAddInquiryToCartBtn: []">
                        <button className="btn cart">
                          <i className="fa fa-cart-plus" /> dodaj
                        </button>
                      </th>
                    </tr>
                    </tfoot>
                  </table>
                  <div>
                    {/* ko if: currentPage() > 1 */}
                    {/* /ko */}
                    <span
                      className="text-dark-secondary text-smaller"
                      data-bind="text: currentPage"
                    >
                1
              </span>
                    <span className="text-dark-secondary text-smaller">/</span>
                    <span
                      className="text-dark-secondary text-smaller"
                      data-bind="text: maxPages"
                    >
                413
              </span>
                    {/* ko if: currentPage() < maxPages() */}
                    <a href="#" className="text-smaller" data-bind="click: nextPage">
                      następna strona &gt;&gt;
                    </a>
                    {/* /ko */}
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div id="shopping-cart" className="shadow-box">
                  <h4 className="text-dark-secondary">Twój koszyk</h4>
                  <table className="table table-sm">
                    <thead>
                    <tr>
                      <th>#</th>
                      <th>Nazwa</th>
                      <th>Ilość</th>
                      <th>Cena [zł]</th>
                      <th />
                    </tr>
                    </thead>
                    <tbody>
                    {/* ko foreach: shopProducts */}
                    {/* /ko */}
                    <tr>
                      <td colSpan={5}>zapytania o produkty:</td>
                    </tr>
                    {/* ko foreach: inquiryProducts */}
                    {/* /ko */}
                    <tr>
                      <td />
                      <td>Koszt zapakowania</td>
                      <td />
                      <td data-bind="text: bagPrice">0</td>
                      <td />
                    </tr>
                    <tr className="text-bold">
                      <td colSpan={2}>cena całkowita:</td>
                      <td />
                      <td>
                        <span data-bind="text: totalPrice">0</span>
                        <span>zł</span>
                      </td>
                      <td />
                    </tr>
                    </tbody>
                  </table>
                  <div className="mt-3 text-danger text-smaller">
                    * Jeżeli w koszyku są produkty o które zapytałeś, cena może ulec
                    zmianie. Otrzymasz sms i e-mail , kiedy sprzedawca potwierdzi
                    dostępność towaru i cenę.
                  </div>
                  <div className="mt-3 text-center">
                    <a id="btn-login-modal" href="#" className="btn">
                      Zaloguj się ...
                    </a>
                  </div>
                  {/* ko if: inquiryProducts().length || shopProducts().length */}
                  {/* /ko */}
                </div>
              </div>
              <div className="shop-gallery shadow-box mt-5 p-5 col-md-7">
                <h4 className="text-dark-secondary d-inline-block">
                  Zdjęcia asortymentu pomogą Ci w zapytaniu o produkt jeżeli nie ma go
                  na liście.
                </h4>
                <div className="row mt-5"></div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="shoppingModal"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">ó</span>
                  </button>
                </div>
                <div className="modal-dialog--content justify-content-center" />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="detail-product--modal"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="detail-product--modal-title">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">ó</span>
                  </button>
                </div>
                <div className="modal-dialog--content justify-content-center" />
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
                  <span aria-hidden="true">ó</span>ó
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
        <div id="fb-root" className=" fb_reset">
          <div style={{ position: "absolute", top: "-10000px", width: 0, height: 0 }}>
            <div />
          </div>
        </div>
      </div>;

    </Layout>
  )
}
