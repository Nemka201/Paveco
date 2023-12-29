function Footer() {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="row text-white">
          <div className="col-4 text-white text-normal align-self-center">
            <p className="ps-3 pt-3">PAVECO ® - ASFALTO ECOLÓGICO</p>
          </div>
          <div className="col-8 text-end">
            <div className="social-media">
              <a href="/">
                <i class="fa-brands fa-whatsapp pe-3"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-instagram pe-3"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-youtube pe-3"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-tiktok pe-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
