import Slide from "./components/Slide";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import {useEffect, useState} from "react";
import axios from "axios";

function Main() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const urlApiBackend = 'http://127.0.0.1:8000/api/rouanets'
            const response = await axios.get(urlApiBackend);
            setData(response.data.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    return (
        <div className="container">
            <Slide rouanetData={data}/>
        </div>
    );

}

export default Main;
