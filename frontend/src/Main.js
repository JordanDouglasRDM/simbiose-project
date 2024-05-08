import Slide from "./components/Slide";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import {useEffect, useState} from "react";
import axios from "axios";
import PageError from "./components/PageError";

function Main() {
    const [data, setData] = useState([]);
    const [errorCode, setErrorCode] = useState(200);
    const [errorStatusText, setErrorStatusText] = useState('');
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const urlApiBackend = 'http://127.0.0.1:8000/api/rouanets';
            const response = await axios.get(urlApiBackend);

            if (response.status === 200) {
                setErrorCode(response.status);
                setErrorStatusText(response.statusText)
                setData(response.data.data);
            } else {
                setErrorCode(response.status);
                setErrorStatusText(response.statusText)
            }
        } catch (error) {
            setErrorCode(error.response.status);
            setErrorStatusText(error.response.statusText)
            console.error('Erro ao buscar dados:', error.response.status);

        }
    };

    if (errorCode !== 200) {
        return <PageError errorCode={errorCode}  errorStatusText={errorStatusText}/>;
    } else {
        return <Slide rouanetData={data}/>
    }

}

export default Main;
