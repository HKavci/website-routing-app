import Card from "../components/Card"
import {FiPhoneCall} from "react-icons/fi"

const Home = () => {
  return (
    <div className="container-home">
      <div className="home-main d-flex flex-column justify-content-center align-items-center mx-auto">
        <div className="home-main-content text-center text-light m-4 mt-5 rounded" style={{ maxWidth: "70rem" }}>
          <h1>Profesyonel Temizlik Hizmetleri</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia illum, reiciendis maiores recusandae aperiam ea eius asperiores labore itaque minima laborum ipsum cum pariatur dolorum, repellat veniam, reprehenderit numquam harum voluptatum molestias cupiditate ex. Error, aliquid maiores atque sunt rerum asperiores ipsam cum nihil laboriosam nobis accusamus? Atque, blanditiis ut debitis quam ipsum ullam facere esse velit saepe unde perspiciatis natus numquam quidem minus, ex voluptas consectetur accusantium aliquid!
          </p>
        </div>
      </div>
      <div className="message p-1 text-light text-center">
        <h3 className="ms-5">Randevu Alınız...</h3>
        <div className="d-flex gap-3 justify-content-center">
        <FiPhoneCall className="call-icon" />
        <h3>444 0 444</h3>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Home;
