import Head from 'next/head'
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="subpage">
        <div className="subpage--header">
          <div className="users-account">
            <a
              className="btn btn-transparent-white userpanel-btn"
              href="/MainAccount/Register"
            >
              zarejestruj się jako klient
            </a>
            <a
              className="btn btn-transparent-white userpanel-btn"
              href="/MainAccount/Login"
            >
              zaloguj się
            </a>
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
                name="f191819c4750e88"
                width="1000px"
                height="1000px"
                data-testid="fb:like Facebook Social Plugin"
                title="fb:like Facebook Social Plugin"
                frameBorder={0}
                allowTransparency="true"
                allowFullScreen="true"
                scrolling="no"
                allow="encrypted-media"
                src="https://www.facebook.com/v6.0/plugins/like.php?action=like&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df39bb8cc50fb0c8%26domain%3Dzakupyuswoich.pl%26origin%3Dhttps%253A%252F%252Fzakupyuswoich.pl%252Ff2990fda715d5c%26relation%3Dparent.parent&container_width=212&href=https%3A%2F%2Fwww.facebook.com%2Fzakupyuswoich&layout=button_count&locale=pl_PL&sdk=joey&share=true&size=small"
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
                <br />
                <a href="/oprojekcie">O projekcie</a>
              </div>
            </div>
            <div className="tags">
              <p>#zostanwdomu #zakupyuswoich #WspieramyBiznesZDomu</p>
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
            </div>
          </div>
        </div>
        <div className="content-box start-info">
          <div className="content-wrapper">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Jesteśmy grupą programistów, która próbując odnaleźć się w szerzącej się
              epidemii chce wspomóc możliwość zakupów on-line w małych sklepach
              spożywczych, gospodarstwach rolnych, itd. Jesteśmy przekonani że takie
              podejście przyczyni się do zminimalizowania kontaktu między nami na czas
              epidemii koronawirusa.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Wraz z fundacją Profeto uruchomiliśmy tę platformę wspierającą
              zamawianie zakupów <b>zupełnie za darmo</b> w zaledwie 5 dni!{" "}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Dlatego jeżeli już korzystacie lub chcecie skorzystać z tej platformy?
              Oczekujecie dodania nowych funkcji? Możecie pisać na adres{" "}
              <a href="mailto:kontakt@zakupyuswoich.pl">kontakt@zakupyuswoich.pl</a>.
            </p>
            <br />
            <br />
            <h1>Jak to działa? </h1>
            <hr />
            <h3>Masz sklep, lub gospodarstwo rolne?</h3>
            <ul>
              <li>Wprowadzasz dane adresowe sklepu.</li>
              <li>Wprowadzasz podstawowy asortyment. </li>
              <li>
                <ul>
                  <li>
                    Uwaga! Twoi stali klienci z reguły wiedzą co w Twoim sklepie mogą
                    kupić. Mogą dodawać takie artykuły do listy zakupów, mimo że Ty
                    jeszcze ich nie uzupełniłeś. Jeżeli je posiadasz, przy przyjęciu
                    zamówienia możesz bardzo łatwo dodać je na stan Twojego sklepu.{" "}
                  </li>
                </ul>
              </li>
              <li>
                Dodajesz godziny odbioru zakupów w sklepie. Masz też możliwość
                ustalenia warunków dostawy do klienta.
              </li>
              <li>Ustalasz formy płatności</li>
              <li>
                Po założeniu konta twój sklep otrzyma unikalny adres www. np.{" "}
                <a href="https://sklepnarogu.zakupyuswoich.pl">
                  https://sklepnarogu.zakupyuswoich.pl
                </a>
                . Możesz ten adres zawiesić w widocznym miejscu, oraz udostępniać w
                mediach społecznościowych.
              </li>
              <li>
                Po złożeniu zamówienia w Twoim sklepie zostaniesz poinformowany o tym
                przez e-mail i sms.
              </li>
              <li>
                Po skompletowaniu zamówienia przez Ciebie, klient dostanie również
                e-mail i sms o zamówieniu przygotowanym do odbioru.
              </li>
            </ul>
            <br />
            <h3>Chcesz zrobić zakupy?</h3>
            <ul>
              <li>Na stronie głównej wprowadź nazwę miejscowości lub dzielnicę. </li>
              <li>Wybierz sklep z listy</li>
              <li>Dodawaj artykuły do koszyka.</li>
              <li>
                <ul>
                  <li>
                    Uwaga! Obsługa sklepu mogła jeszcze nie uzupełnić pełnego
                    asortymentu. Możesz dopisać artykuł na liście zakupów nawet jeżeli
                    go nie ma. Zostaniesz poinformowany przy przyjęciu zamówienia o
                    jego dostępności. Jeżeli wybrałeś mały sklep osiedlowy, który
                    znasz to zapewne wiesz co możesz w nim kupić. Brak artykuły nie
                    oznacza jeszcze , że sklep nie ma go na stanie.
                  </li>
                </ul>
              </li>
              <li>
                Wybierz sposób płatności oraz dostawy: odbiór w sklepie lub dostawa do
                domu.{" "}
              </li>
              <li>
                Wpisz swoje dane do kontaktu. Zostawiając nr telefonu, bardzo ułatwisz
                obsłudze sklepu wyjaśnienie wszelkich wątpliwości jeżeli takie się
                pojawią.
              </li>
              <li>
                O realizacji zamówienia będziesz informowany przez e-mail i sms.
              </li>
            </ul>
            <br />
            <br />
            <div className="content-box start-info" style={{ padding: 0, margin: 0 }}>
              <div className="content-wrapper">
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
                    <h3>Obowiązuje Cie kwarantanna lub jesteś osobą starszą?</h3>
                    <p>
                      Nie musisz przekazywać listy zakupów innym osobom i obarczać ich
                      niepotrzebnym przebywaniem w sklepie. Złóż zamówienie w lokalnym
                      sklepie tutaj, a jeśli sklep nie oferuje dostawy to pomocna Ci
                      osoba tylko je odbierze.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <p>Skontaktuj się z nami: </p>
            <p>
              mail:{" "}
              <a href="mailto:kontakt@zakupyuswoich.pl">kontakt@zakupyuswoich.pl</a>,
            </p>
            <p>
              facebook:{" "}
              <a href="https://www.facebook.com/zakupyuswoich">
                https://www.facebook.com/zakupyuswoich
              </a>{" "}
            </p>
          </div>
        </div>
      </div>;

    </Layout>
  )
}
