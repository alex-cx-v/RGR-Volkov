import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './style.css';
import './css/Header-Footer.css';

const App = () => {
  return (
    <>
      <div className="Page">
        <Header />
        <main className="Main">
          <h1 className='titleMain title1'>Ласкаво просимо на наш сайт!</h1>
          <h1 className='titleMain title2'>Для навігації використовуйте меню в хедері та футері.</h1>
          <h1 className='titleMain title3'>На нашому сайті можна переглянути фото цікавих робочих днів наших працівників, новини та контакти, використовуючи меню.</h1>
          <h1 className='titleMain title4'>Гарного перегляду!</h1>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
