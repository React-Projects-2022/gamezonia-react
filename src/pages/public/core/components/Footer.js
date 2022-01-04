import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <hr />
    <div class="container text-center">
      <address>
        <p>Gamezonia 2020 - ¡¡Videojuegos al mejor precio!!</p>
        <p>
          Gila zubia, 20590 - Soraluze (Gipuzkoa)
          <br />
          Tel: 943 75 00 00 00 / 666 00 00 00 - Contacto: mugan86@gmail.com
          <Link className="navbar-brand" to="/">
            Contacta con nosotros
          </Link>
        </p>
      </address>
      <ul class="social nav justify-content-center">
        <li>
          <a
            href="https://youtube.com/mugan86"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/img/icons/youtube.png"
              alt="Canal de Youtube de Anartz Mugika"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/mugan86"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/img/icons/twitter.png"
              alt="Twitter de Anartz Mugika"
            />
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img
              src="/assets/img/icons/facebook.png"
              alt="Página de Facebook"
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);


export default Footer;