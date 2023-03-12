import SeatWashing from "../assets/img/Seat_Washing-2.jpg";
import CarSeatWashing from "../assets/img/Car_Seat_Washing.jpg";
import BedWashing from "../assets/img/Bed_Washing.jpg";
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate()

  return (
    <div className="card-group text-center">
      <div className="card" role="button" onClick={()=>navigate("/armchair")} id="armchair">
        <img src={SeatWashing} className="card-img-top mx-auto mt-3 rounded" alt="Seat-washing" />
        <div className="card-body">
          <h5 className="card-title">Koltuk Yıkama</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora
            nemo ullam? Quas minus facere rerum! Magni explicabo vero sunt
            voluptate, deserunt saepe odit? Mollitia.
          </p>
          <p className="card-text">
            <small className="text-muted">Lorem ipsum dolor sit amet.</small>
          </p>
        </div>
      </div>
      <div className="card" role="button" onClick={()=>navigate("/carseat")} id="carseat">
        <img
          src={CarSeatWashing}
          className="card-img-top mx-auto mt-3 rounded"
          alt="CarSeatWashing"
        />
        <div className="card-body">
          <h5 className="card-title">Araç Koltuğu Yıkama</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            sint ipsam sunt quod debitis dolore ipsum repellat pariatur
            excepturi tenetur.
          </p>
          <p className="card-text">
            <small className="text-muted">Lorem ipsum dolor sit amet.</small>
          </p>
        </div>
      </div>
      <div className="card" role="button" onClick={()=>navigate("/bed")} id="bed">
        <img src={BedWashing} className="card-img-top mx-auto mt-3 rounded" alt="BedWashing" />
        <div className="card-body">
          <h5 className="card-title">Yatak Yıkama</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam
            debitis id, quia ducimus est reiciendis vel facilis quasi eum
            pariatur ratione perspiciatis eaque laboriosam suscipit?
          </p>
          <p className="card-text">
            <small className="text-muted">Lorem ipsum dolor sit amet.</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
