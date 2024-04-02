import React, { useState } from "react";
import axios from "axios";
import styles from "./PostSearch.module.css"; // Import your module.css file

const PostSearch = () => {
  const [postSearch, setPostSearch] = useState([]);
  const [lookup, setLookup] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // Fetch data on component mount
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs/`);
        setPostSearch(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Function to filter posts
  const filterPosts = (value) => {
    setLookup(value);
  };

  return (
    <div>
      <input type="text" className={`form-control ${styles.searchInput}`} placeholder="Search Here!" onClick={() => setModalOpen(true)} />

      <div className={`modal fade ${modalOpen ? 'show' : ''} ${styles.modalContainer}`} style={{ display: modalOpen ? 'block' : 'none'}} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document" >
          <div className={`modal-content ${styles.content}`} >
            <div className="modal-header">
              <h5 className="modal-title">Search Posts</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setModalOpen(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input type="text" className={`form-control ${styles.searchInput}`} placeholder="Search Here!" onChange={(e) => filterPosts(e.target.value)} />
              <div className="mt-3">
                {postSearch
                  .filter((search) => search.title.toLowerCase().includes(lookup.toLowerCase()))
                  .map((search) => (
                    lookup.length >0 ? 
                    <div className={`card ${styles.searchResult} flex-row`} key={search.id}>
                        <div className="col-md-6  mt-4">
                          <img src={search.image} alt={search.title} height={'150px'}/>
                        </div>
                        <div  className="card-body">
                          <h5 className="card-title">{search.title}</h5>
                          <p className="card-text">{search.excerpt}</p>
                          <a href={`/details/${search.slug}`} className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    : ""
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSearch;

