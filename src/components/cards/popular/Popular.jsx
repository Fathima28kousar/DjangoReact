import { useState, useEffect } from 'react'
import axios from 'axios'


const Popular = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/popular-posts/`
                );
                setPost(response.data); //taking all data from response and putting inside the blog
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className="container-fluid bg-dark text-white py-2 mb-4">
                <div className="container">
                    <h4 className="text-center">Most Popular</h4>
                </div>
            </div>
            <div className="row">
                {
                    post.map((popular) => (
                        <div className="col-md-6" key={popular.id}>
                            <div className="card mb-4">
                                <img
                                    className="card-img-top"
                                    src={popular.image}
                                    alt="Card imagecap"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{popular.title}</h5>
                                    <p className="card-text">{popular.excerpt}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Popular
