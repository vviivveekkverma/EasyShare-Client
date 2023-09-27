import { useRef, useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const inputFileRef = useRef();

  const logo = 'https://ik.imagekit.io/ikmedia/backlit.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    inputFileRef.current.click();  
  }

  return (
    <div className='container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>Easy Share</h1>
        <p>Upload your files and simply share the link!</p>

        <button onClick={() => onUploadClick()}>UPLOAD HERE</button>
        <input type="file"
        ref={inputFileRef}
        style={{display: 'none' }}
        onChange={(e) => setFile(e.target.files[0])}
        /> 

        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
