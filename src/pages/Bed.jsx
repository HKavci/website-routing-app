import { useNavigate } from "react-router-dom";

const Bed = () => {
  const navigate = useNavigate()

  return (
    <div className="washing bed text-light ps-5 pe-5">
      <div className="mx-auto pt-5 ps-4 pe-4 pb-5" style={{maxWidth: "80vw"}}>
      <h1 className="text-center">Yatak Yıkama</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        saepe assumenda maxime neque mollitia veniam odit, omnis nulla nemo
        impedit deleniti dolorum laborum earum laudantium quidem incidunt in
        magnam alias dolores temporibus nihil nobis. Ea tempore non optio,
        adipisci quae molestias exercitationem atque cupiditate beatae
        asperiores repellat neque, expedita eos vel voluptas illo id at
        doloremque. Maiores in suscipit eius perspiciatis, sint iusto eum unde,
        porro vel quas impedit placeat fuga enim sapiente, hic architecto
        corporis reiciendis consequatur quisquam ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nulla
        neque nemo doloribus corporis eius veniam consequatur, est, velit dolore
        consequuntur amet? Perferendis ipsam corporis eligendi labore ea
        expedita exercitationem sint illum quisquam minus qui mollitia vero nemo
        dignissimos, eaque sapiente. Facere at error et nihil culpa, voluptates
        quod provident molestias cum architecto eius quidem suscipit sapiente
        harum possimus voluptatibus quisquam inventore optio iusto laboriosam
        amet quia necessitatibus. Voluptatem aspernatur architecto, nihil, ut
        nostrum deserunt, asperiores impedit assumenda cupiditate eos cumque.
        Autem, voluptatum. Autem praesentium nisi eveniet. Tempora suscipit
        nobis animi quasi alias corrupti, tenetur sapiente inventore, ab fugiat
        beatae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
        praesentium atque, ipsa eveniet obcaecati consectetur nemo
        reprehenderit? Facilis perferendis blanditiis doloribus fuga porro
        dolorem. Magni tempore asperiores minima nulla quis culpa maiores
        itaque, aliquam nobis quas inventore praesentium eos fuga alias
        perferendis! Ipsum ducimus facere, id sint repellat, consequatur nam
        odit omnis corrupti aspernatur odio, dolorum magnam? Reprehenderit, esse
        incidunt. Unde similique sapiente natus error. Mollitia ex quis minima
        delectus necessitatibus? Doloremque omnis nemo placeat.
      </p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur repellendus. Nam repellendus quia inventore vitae velit. Corrupti, quidem ut. Minima molestias deserunt debitis illo ab sint necessitatibus esse ex obcaecati sed blanditiis voluptates maxime ut quasi autem mollitia labore ad, eum dignissimos inventore aperiam accusantium. Quo totam nemo ipsam impedit cum suscipit possimus sed corrupti esse porro fugit quam maxime excepturi eaque commodi, incidunt id enim provident vel, ea officiis repellendus eveniet facilis? Deleniti vitae voluptatem, corrupti, iure optio quidem officiis tenetur fugit eum unde autem quasi similique minima!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque ab natus laboriosam alias temporibus consequuntur corrupti architecto aliquid itaque accusamus vero iure, maiores ea repudiandae saepe cumque aliquam placeat.</p>
      <button type="button" className="btn btn-warning" onClick={()=>navigate("/")}>Anasayfaya Dön</button>
    </div>
    </div>
  );
};
  

export default Bed