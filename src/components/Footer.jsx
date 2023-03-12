import Icon from "../assets/img/icon-2.png"

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center text-light bg-dark">
      <img src={Icon} alt="icon" className="footer-icon" />
      <p className="text-center mt-4 ms-2">Nazenin Temizlik Hizmetleri, Copyright©2023
      </p>
      <img src={Icon} alt="icon" className="footer-icon" />
    </div>
  )
}

export default Footer