import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css"

export default function QRCodeGenerator(){
    const [input, setInput] = useState("");
    const [qrCode, setQrCode] = useState("");

    const handleGenerateQRCode = () => {
        setQrCode(input);
        setInput("");
    }
    return (
        <div className="qr-code-container">
            <h1>QR Code Generator</h1>
            <div>
                <input type="text" name="qr-code" placeholder="Enter your value here" value={input} onChange={(e) => setInput(e.target.value)} />
                <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQRCode}>Generate</button>
            </div>
            <div>
                <QRCode id="qr-code-value" value={qrCode} size={200} bgColor="#ffffff"/>
            </div>
        </div>
    )
}