import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../css/About.css';
import '../css/Header-Footer.css';
import DiscussionImage from '../images/Discussion-bro.png';
import MessageImage from '../images/New message-bro.png';
import ContactsImage from '../images/Call center-bro.png';

const About = () => {

  return (
    <>
      <Header />
      <div className="pageMain">
        <main className='mainPage'>
          <div className="title title1"><h1 className="head1">На цьому сайті Вас очікує:</h1></div>
          <div className="title title2"><h2 className="head2">Зображення колективу нашого відділу</h2></div>
          <div className="phrase phrase1"><p>Наш юридичний відділ - це злагоджена команда висококваліфікованих працівників, які працюють на
            благо університетської спільноти.</p></div>
          <div className="pic pic1"><img src={DiscussionImage} alt="Image 1" /></div>
          <div className="title title3"><h2 className="head2">Останні юридичні новини України</h2></div>
          <div className="pic pic2"><img src={MessageImage} alt="Image 2" /></div>
          <div className="phrase phrase2"><p>На нашому порталі ми висвітлюємо актуальні юридичні новини України, які ретельно аналізуємо.
            Щодня ми в курсі останніх подій та законодавчих змін, що необхідні для правильного розуміння та вирішення правових питань.
          </p></div>
          <div className="title title4"><h2 className="head2">Контакти</h2></div>
          <div className="phrase phrase3"><p>Наші працівники завжди на зв'язку та готові Вам допомогти.</p></div>
          <div className="pic pic3"><img src={ContactsImage} alt="Image 3" /></div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;
