import React, { useState, useEffect } from 'react';

function InputPhoto(props) {
    const urlImg = props.urlimg
    const [file, setFile] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [base64, setBase64] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    useEffect(() => {
        if (imagePreview) {
            const canvas = document.createElement("canvas");
            const image = new Image();
            image.src = imagePreview;
            image.onload = () => {
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                const context = canvas.getContext("2d");
                context.drawImage(image, 0, 0);
                const base64 = canvas.toDataURL();
                setBase64(base64);
                urlImg(base64)
            };
        }
    }, [imagePreview]);

    return (
        <div>         
            <img src={base64} style={{ width: "8vw", height: "20vh" }} />
            <input type="file" onChange={handleFileChange} />
        </div>
    );
}

export default InputPhoto;
