import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgress, IconButton, Badge } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import { useDispatch,useSelector } from "react-redux";
import { fetchUsers } from '../redux/actions'
const News = ({newz, setNewz,searchout, setSearchOut,fav, setFav}) => {
  // const [newz, setNewz] = useState();
  const [searchin, setSearchIn] = useState("");
  // const [searchout, setSearchOut] = useState("covid");
  // const [fav, setFav] = useState([]);
  const [show, setShow] = useState(0);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://newsapi.org/v2/top-headlines?q=${searchout}&apiKey=6d2f59b7e4e54a9fab2054de3ac1d512`
  //     )
  //     .then((response) => {
  //       console.log("response", response);
  //       setNewz(response.data.articles, console.log("newz data", newz));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [searchout]);
  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }
  const handleSearch = () => {
    if (searchin.trim()) {
      setSearchOut(searchin.trim());
    } else {
      setSearchOut("covid");
    }
  };
  const handleLike = (index) => {
    var favourite = newz[index];
    if (fav && fav.includes(favourite)) {
      var x = fav.indexOf(favourite);
      console.log(x);
      var fav2 = [...fav];
      fav2.splice(x, 1);
      setFav(fav2);

      // alert('removed from like')
    } else {
      setFav([...fav, favourite]);
      // alert('Added to like')
    }
  };
  const handleLike2 = (index) => {
    
      var fav2 = [...fav];
      fav2.splice(index, 1);
      setFav(fav2);

    
  };
  return (
    <div>
      <div className="container img2">
        <div className="text-center mb">
          <button
            className="btn btn-danger btn-lg"
            onClick={() => setShow(!show)}
          >
            {" "}
            {show ? "Show all news" : "Show liked news"}{" "}
            {fav.length > 0 && !show ?   <span class="badge  badge-pill badge-warning">{fav.length}</span>: <span></span>}
          </button>
        </div>
        {!show?<div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <input
              className="searchkaro"
              placeholder="Search news"
              value={searchin}
              onChange={(e) => (
                e.preventDefault(), setSearchIn(e.target.value)
              )}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-secondary btn-lg" onClick={handleSearch}>
              Search
            </button>
            {console.log("favourites", fav)}
          </div>
        </div>:<span></span>}
        

        {!show?newz ? (
          newz.map((newz, index) => (
            <div
              className="card text-center"
              style={{
                backgroundColor: fav.includes(newz)
                  ? "rgb(0, 0, 0,0.2)"
                  : "white",
              }}
            >
              <h3>{newz.title}</h3>
              <p>{newz.description}</p>
              <p>
                {" "}
                <b>Published by-</b>
                {newz.author}
              </p>

              <p>
                <b>Published On-</b>
                {formatDate(newz.publishedAt)}
              </p>

              <center>
                <img className="p-2" src={newz.urlToImage} width="60%"></img>
              </center>
              <a href={newz.url}>
                {" "}
                <b>view full news!</b>
              </a>
              <div className="text-right">
                <IconButton
                  aria-label="skipNext"
                  onClick={() => handleLike(index)}
                >
                  <Badge color="secondary">
                    {!fav.includes(newz) ? (
                      <ThumbUpOutlinedIcon
                        style={{ fontSize: 70 }}
                        color="primary"
                      />
                    ) : (
                      <ThumbUpIcon style={{ fontSize: 70 }} color="primary" />
                    )}
                  </Badge>
                </IconButton>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <CircularProgress color="secondary" />
            <h1 text="text-center">loading...</h1>
          </div>
        ):fav.length>0? (
          fav.map((newz, index) => (
            <div
              className="card text-center"
             
            >
              <h3>{newz.title}</h3>
              <p>{newz.description}</p>
              <p>
                {" "}
                <b>Published by-</b>
                {newz.author}
              </p>

              <p>
                <b>Published On-</b>
                {formatDate(newz.publishedAt)}
              </p>

              <center>
                <img className="p-2" src={newz.urlToImage} width="60%"></img>
              </center>
              <a href={newz.url}>
                {" "}
                <b>view full news!</b>
              </a>
              <div className="text-right">
                <IconButton
                  aria-label="skipNext"
                  onClick={() => handleLike2(index)}
                >
                  <Badge color="secondary">
                     
                      <DeleteForeverIcon
                        style={{ fontSize: 70 }}
                        color="primary"
                      />
                    
                  </Badge>
                </IconButton>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h1 text="text-center">Empty :(</h1>
          </div>)}
      </div>
      <h3 className="footer">COPYRIGHT &#169; HIMANSHU TYAGI </h3>
    </div>
  );
};

export default News;
