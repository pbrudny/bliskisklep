import Head from 'next/head'
import Layout from "../components/Layout";

export default function Rules() {
  return (
    <Layout>
      <div>
        <div id="StayFocusd-infobar" style={{ display: "none", top: 0 }}>
          <img src="chrome-extension://laankejkbhbdhmipfmgcngdelahlfoji/common/img/eye_19x19_red.png" />
          <span id="StayFocusd-infobar-msg" />
          <span id="StayFocusd-infobar-links">
      <a id="StayFocusd-infobar-never-show">hide forever</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a id="StayFocusd-infobar-hide">hide once</a>
    </span>
        </div>
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
        <a href="/">
          <div className="top-section--logo logo_shop_User_login">
            <img src="https://zakupyuswoich.pl/Content/images/website/logo.svg" />
          </div>
        </a>
        <div className="row ">
          <div className="container cookiesbackground col-12">
            <h1 className="text-center">Regularmin</h1>
            <p className="text-center">Regulamin serwisu ZakupyUSwoich.pl</p>
            <p>1. Postanowienia wstępne</p>
            <p>
              Regulamin określa zasady świadczenia przez fundację Profeto.pl na rzecz
              Użytkowników serwisu usług polegających na umożliwieniu umieszczania
              ofert sprzedaży produktów, oraz wspierania zamawiania tych produktów
              przez Użytkowników.
            </p>
            <p> 2. Definicje</p>
            <div className="settings-1">
              <p> 2.1. Regulamin ó niniejszy regulamin;</p>
              <p>
                {" "}
                2.2. Serwis ZakupyUSwoich.pl, Serwis ó internetowy serwis ogłoszeniowy
                pod nazwą ZakupyUSwoich.pl, który umożliwia zamieszczanie ofert
                produktów sklepów i gospodarstw rolnych, wspomaganie zamawiania tych
                produktów, oraz ustalania sposobu zapłaty i odbioru zamówionych
                produktów.
              </p>
              <p>
                {" "}
                2.3. Operator ó Operatorem Serwisu zakupyuswoich.pl, a zarazem
                Administratorem Danych osobowych przekazywanych za jego pośrednictwem,
                jest Fundacja Profeto.pl ó Sercański Sekretariat Na Rzecz Nowej
                Ewangelizacji z siedzibą w Warszawie przy ulicy Łowickiej 46 (05-531),
                wpisana do rejestru stowarzyszeń, innych organizacji społecznych i
                zawodowych, fundacji, ZOZ pod numerem 0000494148, sąd rejestrowy: Sąd
                Rejonowy dla Warszawy Mokotowa w Warszawie, XIII Wydział Gospodarczy
                Krajowego Rejestru Sądowego, NIP: 6551971642.
              </p>
              <p>
                {" "}
                2.4. Oferta ó utworzone przez Użytkownika wpisy dotyczące posiadanych
                produktów na sprzedaż zgodnie z zasadami opisanymi w Regulaminie;
              </p>
              <p>
                {" "}
                2.5. Produkt ó rzecz, usługa lub prawo oferowane na terenie
                Rzeczypospolitej Polskiej, które mogą być przedmiotem Ogłoszenia,
                zgodnie z Regulaminem;
              </p>
              <p>
                {" "}
                2.6. Użytkownik ó osoba fizyczna, która ukończyła 18 lat i posiada
                pełną zdolność do czynności prawnych, która w trybie przewidzianym w
                Regulaminie utworzyła zamówienie, utworzyła konto lub zarejestrowała
                ofertę sprzedaży;
              </p>
              <p>
                {" "}
                2.7. Konto ó część Serwisu, przydzielona użytkownikowi, identyfikowana
                za pomocą adresu e-mail, za pomocą której Użytkownik może dokonywać
                przewidzianego dla konta zakresu działań w ramach Serwisu.
              </p>
            </div>
            <p> 3. Postanowienia ogólne</p>
            <div className="settings-1">
              <p>
                {" "}
                3.1 Oferta pochodzi od Użytkownika, który samodzielnie ustala jego
                treść. Treść Oferty musi być zgodna ze stanem faktycznym.
              </p>
              <p>
                {" "}
                3.2. Treść Oferty powinna w oczywisty sposób nawiązywać do produktu,
                nie może wprowadzać w błąd innych Użytkowników.
              </p>
              <p>
                {" "}
                3.3. Oferta produktu musi zawierać, nazwę, jednostkę miary (waga,
                liczba sztuk, objętość), cenę.
              </p>
              <p>
                {" "}
                3.4. Oferty dostępne są dla wszystkich użytkowników Serwisu
                ZakupyUSwoich.pl.
              </p>
              <p>
                3.5. Użytkownik jest odpowiedzialny za publikowane treści (w tym
                zdjęcia) i gwarantuje, że są one zgodne ze stanem faktycznym oraz
                prawem a ich publikacja nie narusza praw Operatora, Regulaminu oraz
                praw osób trzecich, w tym praw autorskich.
              </p>
              <p>
                3.6. Pobieranie lub wykorzystywanie w jakimkolwiek zakresie dostępnych
                w ramach Serwisu ZakupyUSwoich.pl materiałów wymaga każdorazowo zgody
                Operatora i nie może naruszać postanowień Regulaminu oraz
                obowiązującego prawa. Nie może również naruszać interesów Operatora.{" "}
              </p>
              <p>
                3.7. Operator w najszerszym dopuszczalnym przez prawo zakresie nie
                ponosi odpowiedzialności za zakłócenia w tym przerwy w funkcjonowaniu
                Serwisu spowodowane siłą wyższą, niedozwolonym działaniem osób
                trzecich, niekompatybilnością Serwisu z infrastrukturą techniczną
                Klienta. Operator nie odpowiada za zakłócenia w procesie realizacji
                zamówienia, czy jakiekolwiek nieprawidłowe działanie serwisu w
                procesie realizacji zamówienia, gdyż Serwis świadczy tylko i wyłącznie
                wsparcie w realizacji zamówień u oferentów.
              </p>
              <p>
                3.8. Operator zastrzega sobie prawo do usuwania wszelkich ofert,
                danych sprzedawców, użytkowników, danych zamówień, których autorzy w
                jakikolwiek sposób nie stosują się do Regulaminu, korzystają w sposób
                niezgodny z przeznaczeniem Serwisu, lub dopuszczają się łamania prawa.
              </p>
              <p>
                3.9. Operator nie ponosi odpowiedzialności za nienależyte wykonanie
                bądź niewykonanie przez Strony umów związanych z Zamówieniem.
              </p>
              <p>
                3.10. Operator nie ponosi odpowiedzialności za jakość lub legalność
                oferowanych produktów, prawdziwość i rzetelność informacji podawanych
                przez Użytkowników, a także zdolność sprzedających oraz kupujących do
                realizacji Zamówienia.
              </p>
              <p>
                3.11. Serwis jest tylko narzędziem wspierającym proces zamówienia, a
                ostateczny zakres i cena zamówienia jest potwierdzana u sprzedawcy
                przy dokonywaniu płatności. Wszelkie rozbieżności dot. zamówienia
                wyjaśniane są pomiędzy użytkownikami poza Serwisem.
              </p>
              <p>3.12. Korzystanie z serwisu jest nieodpłatne.</p>
              <p>
                3.13. Operator zastrzega sobie prawo zmiany regulaminu, o czym
                powiadomi użytkowników poprzez wysłanie wiadomości e-mail lub podczas
                logowania Użytkownika do Serwisu.
              </p>
              <p>
                3.14. Jakiekolwiek agregowanie i przetwarzanie danych oraz innych
                informacji dostępnych w Serwisie ZakupyUSwoich.pl w celu ich dalszego
                udostępniania osobom trzecim w ramach innych serwisów internetowych
                jak i poza Internetem jest zabronione. Wykorzystywanie oznaczeń
                Serwisu ZakupyUSwoich.pl, w tym elementów grafiki bez zgody Operatora
                jest zabronione.
              </p>
              <p>
                3.15. Użytkownik korzystający z usług oferowanych w związku z
                funkcjonowaniem Serwisu zapewnia, że jest uprawniony do korzystania z
                podawanych danych kontaktowych (adres e-mail, numeru telefonu, itp.).
                Dane kontaktowe podane podczas korzystania z usług Serwisu mogą być
                wykorzystywane do prowadzenia stosownej komunikacji przez Operatora.
                Operator zastrzega możliwość prowadzenia stosownej komunikacji
                związanej bezpośrednio ze świadczonymi usługami. Kontakty o
                charakterze marketingowym odbywają się na podstawie dobrowolnej zgody
                Użytkownika. Udzieloną zgodę można wycofać lub ograniczyć w dowolnym
                momencie.
              </p>
            </div>
            <div className="row" style={{ backgroundColor: "#323b40" }}>
              <a
                className="btn btn-primary"
                style={{ float: "right" }}
                target="_blank"
                href="/ciasteczka"
                role="button"
              >
                Polityka Prywatności
              </a>
            </div>
          </div>
        </div>
        <footer id="footerShop" style={{ visibility: "hidden" }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="pull-left">
                  2020 Realizacja zakupyuswoich.pl Wszelkie prawa zastrzeżone.{" "}
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
      </div>;

    </Layout>
  )
}
