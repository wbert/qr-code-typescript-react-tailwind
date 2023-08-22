import Icon from './assets/react.svg'
import TextArea from './components/TextArea';
import QRCode from './components/QRcode';
import Hero from './components/Hero';
import { useState } from 'react';
import * as htmlToImage from 'html-to-image';


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [text, setText]: any = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTextAreaChange = (e: any) => {
    setText(e.target.value);

  };

  const saveQRCodeAsImage = () => {
    const qrCodeContainer = document.getElementById('qr-code-container'); // Add an id to the QR code container
    if (qrCodeContainer) {
      htmlToImage.toPng(qrCodeContainer)
        .then(function (dataUrl) {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'qr-code.png';
          link.click();
        });
    }
  };

  return (

    <div>
      <nav className="bg-white dark:bg-gray-900  shadow ">
        <div className="px-8 mx-auto max-w-8xl">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="w-8 h-8" src={Icon} alt="Workflow" />
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    Home
                  </a>
                  <a className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    Gallery
                  </a>
                  <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    Content
                  </a>
                  <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6">
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none" onClick={toggleMenu}>
                <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen ? <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <center>
              <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#" onClick={toggleMenu}>
                Home
              </a>
              <a className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#" onClick={toggleMenu}>
                Gallery
              </a>
              <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#" onClick={toggleMenu}>
                Content
              </a>
              <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#" onClick={toggleMenu}>
                Contact
              </a>
            </center>
          </div>
        </div> : null}
      </nav>
      {/* prose lg:prose-md */}
      <Hero />
      <div className="dark:bg-gray-700 shadow text-white py-16 lg:py-72 md:py-72 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center">

          
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-3">Enter Qr Code Content</h1>
            <TextArea value={text} onInput={handleTextAreaChange} className="text-dark" />
            {/* Display the text from the textarea */}
            <div className="mt-4 items-center" id="content">
              {text ? (
                <div className="mt-4">
                  <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-5md  text-center text-white-800 mb-3">QR Code</h2>
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-16 md:mb-0">
                      <QRCode value={text} className="w-256 h-auto mx-auto sm:mx-0 " />
                    </div>
                    <button
                      onClick={() => saveQRCodeAsImage()}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    >
                      Save As
                    </button>
                  </div>
                </div>
              ):
              <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-5md  text-center  text-white-800 mt-3">No QrCode Generated</h2>}
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

export default App
