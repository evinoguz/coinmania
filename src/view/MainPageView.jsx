import { MdCurrencyBitcoin } from "react-icons/md";
import CardView from "./CardView";
import millify from "millify";
import LoadMoreController from "../controller/LoadMoreController";

const MainPageView = ({ coins, popular, navigate }) => {
  return (
    <div className="container-xl mt-5">
      <h3 className="d-flex align-items-center gap-2">
        <p>
          <MdCurrencyBitcoin />
        </p>
        <p>Bitcoin'in Yükselişi</p>
      </h3>
      <p>
        Bitcoin, kripto para dünyasında büyük bir çıkış yakaladı. Son birkaç haftada değeri hızla arttı ve birçok
        yatırımcı tarafından ilgiyle takip ediliyor. Peki, bu yükseliş ne anlama geliyor?
      </p>
      {/* Populer List */}
      <div className="d-flex justify-content-around mb-5">
        {popular?.map((item) => (
          <CardView key={item.id} data={item} />
        ))}
      </div>
      {/* Table List Area */}
      <table className="table table-dark">
        <thead>
          <tr>
            <td>#</td>
            <td>Coin</td>
            <td>Fiyat</td>
            <td>Market Hacmi</td>
            <td>Değişim (24s)</td>
            <td>% Değişim (24s)</td>
          </tr>
        </thead>
        <tbody>
          {coins ? (
            coins.map((coin, id) => (
              <tr key={id} onClick={() => navigate(`/coin/${coin.id}`)}>
                <td>{id + 1}</td>
                <td>
                  <span className="text-warning text-nowrap fw-bold me-2">{coin.symbol}</span>
                  {coin.name}
                </td>
                <td>${millify(coin.priceUsd)}</td>
                <td>{millify(coin.marketCapUsd)}</td>
                <td>{millify(coin.volumeUsd24Hr)}</td>
                <td className={Number(coin.changePercent24Hr) >= 0 ? "text-success" : "text-danger"}>
                  {millify(Number(coin.changePercent24Hr).toFixed(2))}
                </td>
              </tr>
            ))
          ) : (
            <p>Yükleniyor</p>
          )}
        </tbody>
      </table>
      <LoadMoreController />
    </div>
  );
};

export default MainPageView;
