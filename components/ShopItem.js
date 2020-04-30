import Link from "next/link";

export default function ShopItem(props) {
  const { city, address, name, slug, delivery, personalPickup } = props;

  return <div className="content-info--search-result-items">
    <div className="content-info content-info--search-result-item">
      <div className="content-info--shop-data">
        <div className="content-info--icon">
          <img src="https://zakupyuswoich.pl/Content/images/website/sklep-green.svg"/>
        </div>
        <div className="content-info--content">
          <p className="shop--name">{name}</p>
          <p className="shop--location">{city}</p>
          <p className={"shop--adress"}>{address}</p>
          <p className="shop--url">
            <Link key={slug} href={`/shops/${slug}`}>
              <a>{name}</a>
            </Link>
          </p>
          <p className="shop--name">Dostawa: {delivery}</p>
          <p className="shop--name">Odbiór osobisty: {personalPickup}</p>
        </div>
      </div>
      <Link href="/shops/first-shop/">
        <button className="content-info--button-accent">
          Zrób zakupy
          <br/>
          <small>4124 produkty</small>
        </button>
      </Link>
    </div>
    <hr className="full-width"/>
  </div>;
}
