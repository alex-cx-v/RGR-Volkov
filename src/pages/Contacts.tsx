import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../css/Contacts.css';
import '../css/Header-Footer.css';

const Contacts = () => {
  return (
    <>
      <div className="pageContacts">
        <Header />
        <main className="content-main">
          <div className="container-contacts">

            <h1 className='contactsTile1'>Зв'яжіться з нами</h1>
            <div className="contact-info">
              <div className="map">
                <h2 className='contactsTile2'>Розташування</h2>
                <div className="map-container"><iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20697.837190970386!2d34.57257805854492!3d49.574556912607854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x528a08266c1d4938!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQn9C-0LvRgtCw0LLRgdGM0LrQsCDQv9C-0LvRltGC0LXRhdC90ZbQutCwINGW0LzQtdC90ZYg0K7RgNGW0Y8g0JrQvtC90LTRgNCw0YLRjtC60LDCuw!5e0!3m2!1suk!2sua!4v1610624911843!5m2!1suk!2sua"
                  aria-hidden="false"
                ></iframe></div>
              </div>
              <div className="info">
                <h2 className='contactsTile2'>Контактна інформація</h2>
                <p className='phraseContacts'>E-mail: kanc@nupp.edu.ua</p>
                <p className='phraseContacts'>+38 (0532)56-16-04</p>
                <p className='phraseContacts'>36011, м. Полтава, Першотравневий проспект, 24</p>
                <p className='phraseContacts'>Робочі години: ПН-ПТ - 09:00-18:00</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contacts;
