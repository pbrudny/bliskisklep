import Head from 'next/head'
import Layout from "../components/Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function MyOrders() {
  return (
    <Layout>
      <div>
        <a href="/">
          <div className="top-section--logo logo_shop_User_login">
            <img src="https://zakupyuswoich.pl/Content/images/website/logo.svg" />
          </div>
        </a>
        <div id="website-wizzard" className="container minHeightLayout">
          <div className="row">
            <div className="col-xs-12">
              <div id="step-panel">
                <div id="ww-step-1" className="active"></div>
                <div id="ww-step-5"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <span id="ww-loaderBox" className />
              </div>
              <div id="ww-container" style={{}}>
                <div className="row wizardwebsitebackground">
                  <div className="container containerwizardmargin">
                    <div className="row">
                      <div className="title titleWizards1">Informacje podstawowe</div>
                    </div>
                    <div className="row websitewizardCenter">
                      <form
                        action="/WebsiteWizzard/Step_1"
                        data-ajax="true"
                        data-ajax-begin="nextStepWizzardBegin"
                        data-ajax-method="POST"
                        data-ajax-success="nextStepWizzard"
                        data-ajax-url="/WebsiteWizzard/Step_1"
                        id="form0"
                        method="post"
                      >
                        <input
                          name="__RequestVerificationToken"
                          type="hidden"
                          defaultValue="xPyiSPbYcr4h65TAsvZF5KZRA_kzelNr20ldr6SMln8P3LEaE5rYAzyo4qcX8HCz3-jwLoam6ztYWOUIAQdkRvPJZz3gnDZ3adpDlD2Whno1"
                        />
                        <input
                          data-val="true"
                          data-val-required="Pole WizzardUserInstanceKey jest wymagane."
                          id="WizzardUserInstanceKey"
                          name="WizzardUserInstanceKey"
                          type="hidden"
                          defaultValue="5e607307-d1ff-4a9d-914e-83f761b259d1"
                        />
                        <input
                          id="DomainName"
                          name="DomainName"
                          type="hidden"
                          defaultValue=".bliskisklep.pl"
                        />
                        <div className=" form-group">
                          <label className="control-label" htmlFor="Email">
                            Wpisz swój adres email<span className="required">*</span>{" "}
                          </label>
                          <input
                            autoComplete="off"
                            className="form-control "
                            data-placement="bottom"
                            data-toggle="tooltip"
                            data-val="true"
                            data-val-email="Wartość w polu Wpisz swój adres email nie jest prawidłowym adresem e-mail."
                            data-val-required="Adres email jest wymagany"
                            id="Email"
                            name="Email"
                            title
                            type="text"
                            defaultValue
                            width="500px"
                            data-original-title="Adres email który będzie używany podczas logowania w aplikacji."
                            style={{ backgroundColor: "rgb(241, 240, 240)" }}
                          />
                          <span
                            className="field-validation-valid"
                            data-valmsg-for="Email"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <div className=" form-group">
                          <label className="control-label" htmlFor="Subdomain">
                            Nazwa witryny<span className="required">*</span>{" "}
                          </label>
                          <div className="input-group">
                            <input
                              autoComplete="off"
                              className="form-control"
                              color="black"
                              data-placement="bottom"
                              data-toggle="tooltip"
                              data-val="true"
                              data-val-maxlength="Pole Nazwa witryny musi być ciągiem lub typem tablicy o maksymalnej długości 50."
                              data-val-maxlength-max={50}
                              data-val-required="Nazwa witryny wymagana"
                              id="Subdomain"
                              name="Subdomain"
                              title
                              type="text"
                              defaultValue
                              data-original-title="Unikalna nazwa witryny w skali systemu. Wyświetlana w adresie witryny w pasku przeglądarki."
                              style={{ backgroundColor: "rgb(241, 240, 240)" }}
                            />
                            <span className="input-group-addon">
                        .bliskisklep.pl
                      </span>
                          </div>
                          <span
                            className="field-validation-valid"
                            data-valmsg-for="Subdomain"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <div className=" form-group">
                          <label className="control-label" htmlFor="Title">
                            Nadaj tytuł np. Sklep u Janka
                            <span className="required">*</span>{" "}
                          </label>
                          <input
                            autoComplete="off"
                            className="form-control"
                            color="black"
                            data-placement="bottom"
                            data-toggle="tooltip"
                            data-val="true"
                            data-val-maxlength="Pole Nadaj tytuł np. Sklep u Janka musi być ciągiem lub typem tablicy o maksymalnej długości 70."
                            data-val-maxlength-max={70}
                            data-val-required="Tytuł wymagany"
                            id="Title"
                            name="Title"
                            title
                            type="text"
                            defaultValue
                            data-original-title="Tytuł witryny prezentowany w wyszukiwarkach internetowych. Optymalna długość tytułu to od 10 do 70 znaków."
                            style={{ backgroundColor: "rgb(241, 240, 240)" }}
                          />
                          <span
                            className="field-validation-valid"
                            data-valmsg-for="Title"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <div className=" form-group">
                          <label className="control-label" htmlFor="Phone">
                            Podaj numer telefonu<span className="required">*</span>{" "}
                          </label>
                          <input
                            autoComplete="off"
                            className="form-control"
                            color="black"
                            data-placement="bottom"
                            data-toggle="tooltip"
                            data-val="true"
                            data-val-maxlength="Pole Podaj numer telefonu musi być ciągiem lub typem tablicy o maksymalnej długości 70."
                            data-val-maxlength-max={70}
                            data-val-required="Nr telefonu jest wymagany"
                            id="Phone"
                            name="Phone"
                            title
                            type="text"
                            defaultValue
                            data-original-title="Telefon do kontaktu z klientami"
                            style={{ backgroundColor: "rgb(241, 240, 240)" }}
                          />
                          <span
                            className="field-validation-valid"
                            data-valmsg-for="Phone"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <input
                          data-val="true"
                          data-val-number="The field PlaceId must be a number."
                          data-val-required="Pole PlaceId jest wymagane."
                          id="PlaceId"
                          name="PlaceId"
                          type="hidden"
                          defaultValue={0}
                        />
                        <div className=" form-group">
                          <label className="control-label" htmlFor="Location">
                            Wyszukaj lokalizację sklepu
                            <span className="required">*</span>{" "}
                          </label>
                          <input
                            autoComplete="off"
                            className="form-control ui-autocomplete-input"
                            color="black"
                            data-placement="bottom"
                            data-toggle="tooltip"
                            data-val="true"
                            data-val-required="Pole Wyszukaj lokalizację sklepu jest wymagane."
                            id="Location"
                            name="Location"
                            title
                            type="text"
                            defaultValue
                            data-original-title="Wyszukaj lokalizację"
                            style={{ backgroundColor: "rgb(241, 240, 240)" }}
                          />
                          <span
                            className="field-validation-valid"
                            data-valmsg-for="Location"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <div className=" form-group">
                          <label className="control-label" htmlFor="Description">
                            Opis sklepu
                            <span
                              className="required"
                              style={{ visibility: "hidden" }}
                            >
                        *
                      </span>{" "}
                          </label>
                          <textarea
                            autoComplete="off"
                            className="form-control"
                            color="black"
                            data-placement="bottom"
                            data-toggle="tooltip"
                            data-val="true"
                            data-val-maxlength="Pole Opis sklepu musi być ciągiem lub typem tablicy o maksymalnej długości 160."
                            data-val-maxlength-max={160}
                            id="Description"
                            name="Description"
                            rows={6}
                            title
                            data-original-title="Opis zawartości witryny prezentowany w wyszukiwarkach internetowych. Najlepiej aby był powiązany z tytułem i zawierał maksylamnie 160 znaków."
                            style={{ backgroundColor: "rgb(241, 240, 240)" }}
                            defaultValue={""}
                          />
                          <span
                            className="field-validation-valid"
                            data-valmsg-for="Description"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </form>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 text-left">
                  <button id="ww-prev" className="btn" style={{ display: "none" }}>
                    <div className="icon-wizzard" /> poprzedni krok
                  </button>
                </div>
                <div className="col-xs-6 text-right">
                  <button id="ww-next" className="btn">
                    <div className="icon-wizzard" /> następny krok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact-with-us-section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-center">
                <span className="normal-text">Masz pytanie, napisz:</span>
                <span className="big-text">
            <span className="fa-stack fa-lg fa-2x">
            <FontAwesomeIcon icon={['fab', 'github']} />
            </span>
            kontakt@bliskisklep.pl
          </span>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div>
                  2020 Realizacja bliskisklep.pl Wszelkie prawa zastrzeżone.
                </div>
              </div>
            </div>
          </div>
        </footer>
        <ul
          id="ui-id-1"
          tabIndex={0}
          className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
          style={{ display: "none" }}
        />
        <div
          role="status"
          aria-live="assertive"
          aria-relevant="additions"
          className="ui-helper-hidden-accessible"
        />
      </div>;

    </Layout>
  )
}
