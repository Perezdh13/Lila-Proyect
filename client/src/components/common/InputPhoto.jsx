import React, { useState, useEffect } from 'react';

function InputPhoto({ setUrlImgCartoon, setUrlImgReal }) {
    const [fileCartoon, setFileCartoon] = useState(null);
    const [FileReal, setFileReal] = useState(null);
    const [imagePreviewCartoon, setImagePreviewCartoon] = useState(null);
    const [imagePreviewReal, setImagePreviewReal] = useState(null);
    const [base64Cartoon, setBase64Cartoon] = useState(null);
    const [base64Real, setBase64Real] = useState(null);console.log(base64Real);
    const [imgCartoonData, setImgCartoonData] = useState('');
    const [imgRealData, setImgRealData] = useState('')

    const handleFileChangeCartoon = (Cartoon) => {
        const selectedFileCartoon = Cartoon.target.files[0];
        setFileCartoon(selectedFileCartoon);

        const readerCartoon = new FileReader();
        readerCartoon.onloadend = () => {
            setImagePreviewCartoon(readerCartoon.result);
        };
        readerCartoon.readAsDataURL(selectedFileCartoon);
    };

    useEffect(() => {
        if (imagePreviewCartoon) {
            const canvas = document.createElement("canvas");
            const image = new Image();
            image.src = imagePreviewCartoon;
            image.onload = () => {
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                const context = canvas.getContext("2d");
                context.drawImage(image, 0, 0);
                const base64cartoon = canvas.toDataURL();
                setBase64Cartoon(base64cartoon);
                setUrlImgCartoon(base64cartoon)
            };
        }
    }, [imagePreviewCartoon]);

    const handleFileChangeReal = (real) => {
        const selectedFile = real.target.files[0];
        setFileReal(selectedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreviewReal(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    useEffect(() => {
        if (imagePreviewReal) {
            const canvas = document.createElement("canvas");
            const image = new Image();
            image.src = imagePreviewReal;
            image.onload = () => {
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                const context = canvas.getContext("2d");
                context.drawImage(image, 0, 0);
                const base64Real = canvas.toDataURL();
                setBase64Real(base64Real);
                setUrlImgReal(base64Real)
            };
        }
    }, [imagePreviewReal]);

    useEffect(() => {
        const imgData = event => {
            setBase64Cartoon(event.detail.cartoon);
            setBase64Real(event.detail.real);
        };
        document.addEventListener("imgData", imgData)
    })

    return (
        <div>
            <div>
                <div style={{ display: "none" }}>
                    <textarea onChange={(cartoon) => setUrlImgCartoon(cartoon.target.value)} value={base64Cartoon} required class="form-control" placeholder="Añade una foto" id="photo" />
                </div>
                <div>
                    <label for="exampleFormControlInput1" class="form-label">Foto cartoon</label>
                </div>
                <img src={base64Cartoon} style={{ width: "10vw", height: "20vh" }} />
                <input type="file" onChange={handleFileChangeCartoon} />
            </div>
            <div>
                <div style={{ display: "none" }}>
                    <textarea onChange={(real) => setUrlImgReal(real.target.value)} value={base64Real} required class="form-control" placeholder="Añade una foto" id="photo" />
                </div>
                <div>
                    <label for="exampleFormControlInput2" class="form-label">Foto real</label>
                </div>
                <img src={base64Real} style={{ width: "10vw", height: "20vh" }} />
                <input type="file" onChange={handleFileChangeReal} />
            </div>
        </div>
    );
}

export default InputPhoto;
