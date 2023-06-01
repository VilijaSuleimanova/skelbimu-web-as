import React from "react"
import axios from "axios";

export default function Home() {

    const [listOfAdvertisments, setListOffAdvertisments] = useState([]);

    useEffect(() => {
         axios.get("http://localhost:3001/advertisments").then((response) => {
            setListOffAdvertisments(response.data);
        });
     }, []);

    return (
    <div className="App">
        {listOfAdvertisments.map((value, key) => {
            return (
                <div className="advertisment">
                <div className="title"> {value.title} </div>
                <div className="body">{value.advertismentText}</div>
                <div className="footer">{value.username}</div>
                </div>
            );
        })}
    </div>
    );
  
  }