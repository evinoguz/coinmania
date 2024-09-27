import millify from "millify";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";

const DetailPageView = ({ model }) => {
  return (
    <div>
      <h3 className="text-center">
        <span className="fs-2 me-3 text-warning">{model.coin?.symbol}</span>
        <span className="fs-4 font-bold">{model.coin?.name}</span>
      </h3>
      <div className="row p-5">
        {/* Left Area */}
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-4">
          {model?.infoFields?.map((item, i) => (
            <div key={i} className="text-bg-light rounded shadow-lg text-center p-3">
              <span className="fs-2">{item.icon}</span>
              <h4>{item.label}</h4>
              <p className="fw-bold">{millify(Number(item.value))}</p>
            </div>
          ))}
        </section>
        {/* Right Area */}
        <section className="col-md-9 p-5 p-md-4">
          <Line data={model?.chartData} />
          <Bar data={model?.chartData} />
        </section>
      </div>
    </div>
  );
};

export default DetailPageView;
