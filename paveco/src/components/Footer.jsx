function Footer() {
  return (
    <>
      <div className="container-fluid bg-black pe-5">
        <div className="row text-white">
          <div className="col-7 col-md-6 col-lg-4 text-white roboto-light align-self-center">
            <p className="ps-3 pt-md-3 footer-text">Paveco ® - Asfalto Ecológico 2024 - </p>
          </div>
          <div className="col-5 col-md-6 col-lg-8 text-end">
            <div className="social-media" style={{paddingTop: 0}}>
              <a href="https://wa.me/message/PWL5RB5BZEEKJ1">
                <i class="fa-brands fa-whatsapp pe-2 pe-md-3 pt-md-3"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552672778681&mibextid=kFxxJD">
                <i class="fa-brands fa-facebook pe-2 pe-md-3"></i>
              </a>
              <a href="https://www.instagram.com/paveco.asfalto?utm_source=qr&igsh=emh3MDRxMWJ0dGg1">
                <i class="fa-brands fa-instagram pe-2 pe-md-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
