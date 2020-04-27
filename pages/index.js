import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div>
        <div className="home">
          <div className="users-account">
            <h4 className="userpanel--username">Witaj: pbrudny@gmail.com</h4>
            <a
              className="btn btn-transparent-white userpanel-btn"
              href="/mojezamowienia"
            >
              Moje zamówienia
            </a>
            <form action="/MainAccount/LogOff" method="post">
              <input
                name="__RequestVerificationToken"
                type="hidden"
                defaultValue="UaEWGgnMtFyZzYw75vmM0bDwPiySIArbuyYunK1ucZhR_HL---vfFEzFLywX-feKBkBKxXOKoVt4I5e--4zQYrQ3AA6-iPIQ9Hi_WSx1tT9IHQxJqb1KTQhKC5GUcZ1sWFglfp3-tYl5l8jDNtq3cw2"
              />{" "}
              <input
                type="submit"
                defaultValue="wyloguj się"
                className="btn btn-transparent-white"
              />
            </form>
            <div className="clearfix" />
          </div>
          <div className="top-section">
            <div className="top-section--left">
              <a href="/">
                <div className="top-section--logo">
                  <img src="https://zakupyuswoich.pl/Content/images/website/logo.svg" />
                </div>
              </a>
              <div className="about-project-link">
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
                  data-href="https://www.facebook.com/zakupyuswoich"
                  data-width
                  data-layout="button_count"
                  data-action="like"
                  data-size="small"
                  data-share="true"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="action=like&app_id=&container_width=212&href=https%3A%2F%2Fwww.facebook.com%2Fzakupyuswoich&layout=button_count&locale=pl_PL&sdk=joey&share=true&size=small"
                >
            <span style={{ verticalAlign: "bottom", width: 201, height: 20 }}>
              <iframe
                name="f29b682d4d86dd"
                width="1000px"
                height="1000px"
                data-testid="fb:like Facebook Social Plugin"
                title="fb:like Facebook Social Plugin"
                frameBorder={0}
                allowTransparency="true"
                allowFullScreen="true"
                scrolling="no"
                allow="encrypted-media"
                src="https://www.facebook.com/v6.0/plugins/like.php?action=like&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df17500f587c62a8%26domain%3Dzakupyuswoich.pl%26origin%3Dhttps%253A%252F%252Fzakupyuswoich.pl%252Ff148aba8dcdb23%26relation%3Dparent.parent&container_width=212&href=https%3A%2F%2Fwww.facebook.com%2Fzakupyuswoich&layout=button_count&locale=pl_PL&sdk=joey&share=true&size=small"
                style={{
                  border: "none",
                  visibility: "visible",
                  width: 201,
                  height: 20
                }}
                className
              />
            </span>
                </div>
                <div>
                  <a href="/oprojekcie">O projekcie</a>
                </div>
              </div>
            </div>
            <div className="tags">
              <p>#zostanwdomu</p>
            </div>
            <div className="add-your-shop" style={{ maxWidth: "90%" }}>
              <a href="/kreator">
                <div className="add-your-shop--button-content">
                  <div className="add-your-shop--titles">
                    <p className="add-your-shop--main-title">Dodaj swój sklep!</p>
                    <p className="add-your-shop--second-title">
                      To zajmie tylko kilka minut
                    </p>
                  </div>
                  <img src="https://zakupyuswoich.pl/Content/images/website/sklep.svg" />
                </div>
              </a>
              <div className="add-your-shop--how-work">
                <p className="how-work--text">Jak to działa?</p>
                <div className="popup">
                  <p className="popup-close--btn">x</p>
                  <h3>Jak to działa?</h3>
                  <div className="popup-rows">
                    <div className="popup-row">
                      <div className="popup-row--icon">
                        <img src="https://zakupyuswoich.pl/Content/images/website/tick.svg" />
                      </div>
                      <div className="popup-row--content">
                        <p>
                          <span className="text-bold">Dodajesz swój sklep. </span>
                          otrzymujesz indywidualny adres
                        </p>
                      </div>
                    </div>
                    <div className="popup-row">
                      <div className="popup-row--icon">
                        <img src="https://zakupyuswoich.pl/Content/images/website/tick.svg" />
                      </div>
                      <div className="popup-row--content">
                        <p>
                          <span className="text-bold">Dzielisz się nim</span> w
                          sieciach społecznościowych
                        </p>
                      </div>
                    </div>
                    <div className="popup-row">
                      <div className="popup-row--icon">
                        <img src="https://zakupyuswoich.pl/Content/images/website/tick.svg" />
                      </div>
                      <div className="popup-row--content">
                        <p>
                    <span className="text-bold">
                      Klienci z okolicy mogą przez Internet złożyć zamówienie
                    </span>{" "}
                          w twoim sklepie
                        </p>
                      </div>
                    </div>
                    <div className="popup-row">
                      <div className="popup-row--icon">
                        <img src="https://zakupyuswoich.pl/Content/images/website/tick.svg" />
                      </div>
                      <div className="popup-row--content">
                        <p>
                          <span className="text-bold">Przejmujesz zamówienie</span> i
                          jesteście na bieżąco informujesz klientów o realizacji przez
                          SMS i e-mail
                        </p>
                      </div>
                    </div>
                    <div className="popup-row">
                      <div className="popup-row--icon">
                        <img src="https://zakupyuswoich.pl/Content/images/website/zdjecie.svg" />
                      </div>
                      <div className="popup-row--content">
                        <p>
                          <span className="text-bold">Nie martw się</span> o
                          uzupełnienie asortymentu, wystarczy że zrobisz zdjęcia półek
                          sklepowych.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="popup-btn">
                    <a href="/kreator">
                      <div className="popup-btn--button-content">
                        <div className="popup-btn--titles">
                          <p className="popup-btn--main-title">
                            Chcesz dodać swój sklep?
                          </p>
                          <p className="popup-btn--second-title">
                            to zajmie tylko kilka minut!
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="titles">
            <div className="titles--main-title">Zrób zakupy w lokalnym sklepie</div>
            <div className="titles--second-title">bez wychodzenia z domu</div>
          </div>
          <div className="search-container">
            <div className="search--info">
              Podaj miejscowość i znajdź sklepy w twojej okolicy
            </div>
            <div className="search-wrapper">
              <div className="search-places">
                <input
                  type="search"
                  defaultValue
                  className="seach-places--name ui-autocomplete-input"
                  placeholder="Miejscowość"
                  autoComplete="off"
                />
                <button className="search-places--btn">Szukaj</button>
              </div>
              <div id="search-tooltip" style={{ display: "none" }}>
          <span>
            wybierz miejscowość z listy która pojawi się podczas wpisywania jej
            nazwy ...
          </span>
              </div>
            </div>
          </div>
          <div className="instruction" style={{ display: "none" }}>
            <h3>Jak zrobić zakupy?</h3>
            <h4>To tylko kilka prostych kroków</h4>
            <div className="shopping-steps">
              <div className="step-box">
                <div className="step-box-header">
                  <div className="step-box--number">1</div>
                  <div className="step-box--icon">
                    <img src="https://zakupyuswoich.pl/Content/images/website/pinezka.svg" />
                  </div>
                </div>
                <div className="step-box--title">Wprowadź nazwę miejscowości</div>
                <div className="step-box--content" />
              </div>
              <div className="step-box">
                <div className="step-box-header">
                  <div className="step-box--number">2</div>
                  <div className="step-box--icon">
                    <img src="https://zakupyuswoich.pl/Content/images/website/sklep.svg" />
                  </div>
                </div>
                <div className="step-box--title">Wybierz sklep</div>
                <div className="step-box--content">
                  Jeśli nie ma sklepu w Twojej okolicy, możesz zachęcić właściciela
                  aby go dodał
                </div>
              </div>
              <div className="step-box">
                <div className="step-box-header">
                  <div className="step-box--number">3</div>
                  <div className="step-box--icon">
                    <img src="https://zakupyuswoich.pl/Content/images/website/koszyk.svg" />
                  </div>
                </div>
                <div className="step-box--title">Dodaj artykuły do koszyka</div>
                <div className="step-box--content">
                  Możesz dodać również nowy produkt
                </div>
              </div>
              <div className="step-box">
                <div className="step-box-header">
                  <div className="step-box--number">4</div>
                  <div className="step-box--icon">
                    <img src="https://zakupyuswoich.pl/Content/images/website/dostawa.svg" />
                  </div>
                </div>
                <div className="step-box--title">
                  Wybierz sposób płatności i dostawy
                </div>
                <div className="step-box--content">
                  O realizacji zostaniesz poinformowany przez e-mail i sms
                </div>
              </div>
            </div>
          </div>
          <div className="content-box start-info" style={{ display: "none" }}>
            <div className="content-wrapper">
              <div className="content-info content-info--search-results">
                <div className="content-info--content">
                  <p> Ostatnio dodane sklepy </p>
                  <br />
                </div>
              </div>
              <div className="content--last-added-shops"></div>
              <hr />
              <div className="content-info">
                <div className="content-info--icon">
                  <img src="https://zakupyuswoich.pl/Content/images/website/sklep-erro.svg" />
                </div>
                <div className="content-info--content">
                  <h3>Twojego sklepu w okolicy nie ma jeszcze tutaj?</h3>
                  <p>
                    Zachęć właściciela do dodania sklepu na platformie. <br />
                    Wszyscy na tym skorzystamy i ograniczymy bezpośredni kontakt.
                  </p>
                </div>
              </div>
              <hr className="w90" />
              <div className="content-info">
                <div className="content-info--icon">
                  <img src="https://zakupyuswoich.pl/Content/images/website/kwarantanna.svg" />
                </div>
                <div className="content-info--content">
                  <h3>Obowiązuje cie kwarantanna lub jesteś osobą starszą?</h3>
                  <p>
                    Nie musisz przekazywać listy zakupów innym osobom i obarczać ich
                    niepotrzebnym przebywaniem w sklepie. Złóż zamówienie w lokalnym
                    sklepie tutaj, a jeśli sklep nie oferuje dostawy, to pomocna ci
                    osoba tylko je odbierze.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-box search-result" style={{ display: "block" }}>
            <div className="content-wrapper">
              <div
                className="content-info content-info--no-result"
                style={{ display: "none" }}
              >
                <div className="content-info--icon">
                  <img src="https://zakupyuswoich.pl/Content/images/website/sklep-erro.svg" />
                </div>
                <div className="content-info--content">
                  <p> Brak sklepów w Twojej okolicy </p>
                </div>
              </div>
              <div className="content-info content-info--search-results">
                <div className="content-info--content">
                  <p> Znalezione sklepy w Twojej okolicy </p>
                </div>
              </div>
              <div className="content-info--space " />
              <div className="content-info--search-result-items">
                <div className="content-info content-info--search-result-item">
                  <div className="content-info--shop-data">
                    <div className="content-info--icon">
                      <img src="https://zakupyuswoich.pl/Content/images/website/sklep-green.svg" />
                    </div>
                    <div className="content-info--content">
                      <p className="shop--name">Euro sklep</p>
                      <p className="shop--location">Kaczyce</p>
                      <p className={"shop--adress"}>JULIANA TUWIMA 41</p>
                      <p className="shop--url">
                        <Link href="/shops/first-shop/">
                          https://Eurosklepgrzegorzczyz.zakupyuswoich.pl
                        </Link>
                      </p>
                      <p className="shop--name">Dostawa: w godz. BRAK do 20 km</p>
                      <p className="shop--name">Odbiór osobisty w godz: BRAK</p>
                    </div>
                  </div>
                  <Link href="/shops/first-shop/">
                    <button className="content-info--button-accent">
                      Zrób zakupy
                      <br />
                      <small>4124 produkty</small>
                    </button>
                  </Link>
                </div>
                <hr className="full-width" />
                <div className="content-info content-info--search-result-item">
                  <div className="content-info--shop-data">
                    <div className="content-info--icon">
                      <img src="https://zakupyuswoich.pl/Content/images/website/sklep-green.svg" />
                    </div>
                    <div className="content-info--content">
                      <p className="shop--name">NATURHOUSE CIESZYN</p>
                      <p className="shop--location">Cieszyn</p>
                      <p className="shop--adress" />
                      <p className="shop--url">
                        <Link href="https://naturhousecieszyn.zakupyuswoich.pl/">
                          https://naturhousecieszyn.zakupyuswoich.pl
                        </Link>
                      </p>
                      <p className="shop--name" />
                      <p className="shop--name" />
                    </div>
                  </div>
                  <Link href="https://naturhousecieszyn.zakupyuswoich.pl/">
                    <button className="content-info--button-empty-products">
                      Zrób zakupy
                      <br />
                      <small>zapytaj o produkty</small>
                    </button>
                  </Link>
                </div>
                <hr className="full-width" />
              </div>
              <div className="content-info--space " />
              <div id="searhtoslideup" className="content-info newsletter">
                <div className="content-info--content">
                  <h3>
                    Wygląda na to że możesz być inicjatorem akcji w swojej okolicy
                  </h3>
                  <p>Poinformuj lokalne sklepy o nas i rób zakupy bezpiecznie.</p>
                  <br />
                  <p>
                    Gdy pojawią się sklepy w Twojej okolicy niezwłocznie Cię o tym
                    poinformujemy. Zostaw nam swój adres e-mail:{" "}
                  </p>
                </div>
                <br />
                <div className="newsletter--form">
                  <input
                    type="email"
                    name="email"
                    id="newsletterEmail"
                    className="newsletter--input-email"
                    defaultValue
                    placeholder="Adres e-mail"
                  />
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="Email"
                    data-valmsg-replace="true"
                  />
                  <button id="sendNewsletter" className="newsletter--send-btn">
                    Wyślij
                  </button>
                  <br />
                  <div className="newletter--checkbox-wrapper">
                    <input
                      id="checkboxNewsletter"
                      type="checkbox"
                      defaultChecked="checked"
                      className="newsletter--checkbox"
                      name="agreeNewsletter"
                      defaultValue
                    />
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
                    informacyjnych, promocyjnych, statystycznych,marketingowych oraz
                    związanych z realizacją działalności platformy ZakupyUSwoich.pl.
                    Mam świadomość, że administratorem danych jest Fundacja Profeto.pl
                    Sercański Sekretariat na rzecz Nowej Ewangelizacji, podanie danych
                    jest dobrowolne, mam prawo kontroli przetwarzanych danych, prawo
                    dostępu do przetwarzanych danych oraz ich poprawiania.
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <footer id="footerShop">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="pull-left">
                  ó 2020 Realizacja zakupyuswoich.pl Wszelkie prawa zastrzeżone.{" "}
                  <small>Wersja aplikacji: 1.0.9</small>
                </div>
                <div className="pull-right">
                  <a
                    className="footer_redulations "
                    style={{ color: "white!important" }}
                    href="/regulamin"
                  >
                    REGULAMIN
                  </a>
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

    </div>
  )
}
