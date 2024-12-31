import { useState, useEffect } from 'react';
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa';
import Confetti from 'react-confetti';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryName = urlParams.get('name');
    if (queryName) {
      setName(decodeURIComponent(queryName));
    }
  }, []);

  const currentUrl = window.location.href;
  const baseUrl = currentUrl.split('?')[0];

  const shareMessage = encodeURIComponent(
    `${name || 'Esta pessoa'} te deseja um feliz ano novo! Acesse este site para criar sua mensagem personalizada: ${baseUrl}`
  );

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${shareMessage}`,
    telegram: `https://t.me/share/url?url=${baseUrl}&text=${shareMessage}`,
    instagram: baseUrl, 
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`,
  };

  return (
    <div
      style={{
        backgroundImage: "url('back.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen flex gap-2 flex-col items-center justify-center text-white p-4 sm:p-6 lg:p-8"
    >
      <Confetti />
      <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-md text-black">
        <p className="font-medium">Anúncio 3</p>
      </div>
      <div className="text-center p-6 max-w-lg w-full bg-black bg-opacity-50 rounded-lg shadow-lg">
        <div className='bg-white/90 rounded-lg p-2 flex flex-col gap-2'>
          <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Feliz Ano Novo {name && `, ${name}`}!
          </h1>
          <p className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r leading-5 from-yellow-600 via-red-500 to-pink-500">
            Desejo a você um ano cheio de realizações e momentos felizes!
          </p>
        </div>

        <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-md text-black">
            <p className="font-medium">Anúncio 1</p>
          </div>
          <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-md text-black">
            <p className="font-medium">Anúncio 2</p>
          </div>
        </section>
        <nav className="flex flex-wrap justify-center gap-2 mt-6">
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-2xl sm:text-3xl hover:scale-125 transition-transform"
          >
            <FaWhatsapp />
          </a>
          <a
            href={shareLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl sm:text-3xl hover:scale-125 transition-transform"
          >
            <FaTelegramPlane />
          </a>
          <a
            href={shareLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-2xl sm:text-3xl hover:scale-125 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 text-2xl sm:text-3xl hover:scale-125 transition-transform"
          >
            <FaFacebookF />
          </a>
        </nav>
        <form
          className="my-6"
          onSubmit={(e) => {
            e.preventDefault();
            const newName = e.target.name.value;
            if (newName) {
              setName(newName);
              window.history.replaceState({}, '', `?name=${encodeURIComponent(newName)}`);
            }
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Digite o nome do destinatário"
            className="p-3 w-full rounded-lg text-black mb-4 border border-yellow-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 p-3 rounded-lg font-bold text-white transition-all"
          >
            Criar minha mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
