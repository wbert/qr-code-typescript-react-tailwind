
import QRCodeReact from 'react-qr-code';

const QRCode = ({ value }:any) => {
    if (value === undefined) {
        return null; 
      }
    
      return (
        <div className="text-center" id="qr-code-container">
          <QRCodeReact value={value } />
        </div>
      );
};

export default QRCode;