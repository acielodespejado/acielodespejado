import BookImg from "./assets/book.png";
import {
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import BookPdf from "./assets/LLEGANDO_A_LOS_PIES_DE_CRISTO.pdf";

function App() {
  return (
    <div className="main-app">
      <div className="container">
        <div className="content" id="content-left">
          <h1 className="title">Llegando a los pies de Cristo</h1>
          <p className="paragrahp">
          Este libro está destinado a difundir el plan redentor de Jesucristo, y su poder transformador, para quien decide llegar a sus pies por medio de la fe.
          </p>
          <a
            href={BookPdf}
            className="primary-button"
            id="download-btn"
            download="llegando-a-los-pies-de-cristo"
            target="_blank"
            rel="noreferrer"
            style={{marginTop: 50}}
          >
            Descargar Gratis
          </a>
          {/** <button className="secondary-button" id="share-btn">
            <WhatsAppOutlined /> Compartir con alguien especial
  </button> **/}
        </div>
        <div className="image">
          <img src={BookImg} alt="" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="container">
        <div className="content" style={{ textAlign: "center" }}>
          <h2 className="title">Nuestra Misión</h2>
          <p className="paragrahp">
            Difundir a la humanidad el plan de salvación por parte de Dios, para
            todo aquel que cree y acepte a Cristo como redentor, brindar al
            lector la oportunidad de acercarse a los pies de Cristo, a través de
            las promesas escritas en la biblia, para que estos fundamentos
            sirvan de guía moral y respeto, todo ello enmarcado, con el
            compromiso inquebrantable con Dios, de dar a conocer su palabra de
            salvación y vida eterna.
          </p>
          <h2 className="title">Nuestra Visión</h2>
          <p className="paragrahp">
            Contribuir a formar una cultura cristiana con los dones, frutos del
            espíritu y los talentos que son agradables al corazón de Dios.
          </p>

          <h2 className="title">Valores</h2>
          <p className="paragrahp">
            <ul>
              <li>Cristo</li>
              <li>Evangelio</li>
              <li>Salvación</li>
              <li>Vida Eterna</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="footer-menu">
          <ul className="list">
            <li>
              <a href="mailto:llegandoalospiesdecristo@gmail.com">
                <MailOutlined />
                Escribir un testimonio
              </a>
            </li>
            <li>
              <a href="https://instagram.com/acielodespejado">
                <InstagramOutlined />
                @acielodespejado
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copy">
          <p className="copy">
            © Copyright{" "}
            <a href="http://acielodespejado.com">acielodespejado.com</a> | Todos
            los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
