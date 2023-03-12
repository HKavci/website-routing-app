import { FiPhoneCall } from "react-icons/fi";
import Logo from "../assets/img/Kartvizit.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="d-flex gap-3 justify-content-center mt-5 text-danger ">
        <h1>BİZİ ARAYIN</h1>
        <FiPhoneCall className="call-icon mt-2" />
        <h1>444 1 444</h1>
      </div>

      <div className="row mb-5">
        <div
          className="card col-sm-12 shadow-lg mt-5 ms-auto mx-auto pt-3"
          style={{ maxWidth: "25rem" }}
        >
          <img src={Logo} alt="kartvizit-img" className="kartvizit" />
          <div className="card-body">
            <h5 className="card-title">İşyeri Adresimiz:</h5>
            <p className="card-text">
              Organize Sanayi Bölgesi D:16 Blok No:27/2 <br /> Nazilli / Aydın
            </p>
            <h5>444 1 444</h5>
          </div>
        </div>
        <form
          className="container col-sm-12 form mt-5 ms-auto p-3 border rounded shadow-lg"
          style={{ maxWidth: "36rem" }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputText" className="form-label">
              Ad Soyad:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText"
              placeholder="Ad Soyad"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Adresi:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="mail@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputTel" className="form-label">
              Telefon:
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputTel"
              placeholder="0(....)"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              maxLength="11"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Talep ve Şikayetleriniz:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
              placeholder="Mesajınızı yazınız"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className="d-flex gap-3 justify-content-center mt-5 text-danger ">
                  <h1>BİZİ ARAYIN</h1>
                  <FiPhoneCall className="call-icon mt-2" />
                  <h1>444 1 444</h1>
                </div>
                <div>
                  <div className="d-flex mb-5 p-5">
                    <div className="container mt-5 pt-3 px-2 shadow-lg border rounded" style={{ maxWidth: "21rem" }}>
                      <img src={Logo} alt="kartvizit-img" className="kartvizit px-1" />
                      <div className="mt-5">
                        <h5>İşyeri Adresimiz:</h5>
                        <p>
                          Organize Sanayi Bölgesi D:16 Blok No:27/2 <br /> Nazilli / Aydın
                          Tel: 444 1 444
                        </p>
                      </div>
                    </div> */
}
