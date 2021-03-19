import React, { useEffect } from "react";
import "./custom.css";
import Cards from "./cards";
import { useDispatch,useSelector } from "react-redux";
import { fetchUsers } from '../redux/actions'
import { CircularProgress } from "@material-ui/core";
import { Redirect, Link } from "react-router-dom";

const Corona = () => {
   const data = useSelector((state) => state.users);
  // const dispatch = useDispatch();
  // const [data, setData] = useState();

  const headerimg = "covid.png";
  // useEffect(() => {
  //   dispatch(fetchUsers());
  //   console.log(data,"hujh");
  // }, []);
  const logo = "download.png";

  return (
    <div>
      
      <div className="container">
        <img className="img1" src={headerimg} alt="header" width="60%"></img>

        <h3 className="container2">Coronavirus Cases Globally</h3>
      </div>
      {console.log("data andr",data)}
      {  data!=='error' && data ? (
        <Cards data={data} />
      ) : ( <div className="text-center">
<CircularProgress color="secondary" />
<h1 text="text-center">loading...</h1>
</div>
      )}
      <h3 className="footer">COPYRIGHT &#169; HIMANSHU TYAGI </h3>
    </div>
  );
};

export default Corona;
