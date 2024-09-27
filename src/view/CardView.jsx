const CardView = ({ data }) => {
  return (
    <div className="cardd d-flex flex-column border rounded p-3">
      <div>
        <h3>{data.name}</h3>
        <h3>{data.symbol}</h3>
        <p>{Number(data.priceUsd).toFixed(2)}</p>
      </div>
      <p className="d-flex flex-column">
        <span>Günlük Değişim</span>
        <span className={Number(data.changePercent24Hr) >= 0 ? "text-success" : "text-danger"}>
          %{Number(data.changePercent24Hr).toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default CardView;
