import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Corona from "./components/corona";
import Cards from "./components/cards";
import React, { useEffect, useState } from "react";
import Country from "./components/country";
import Daily from "./components/daily";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import NavBarr from "./components/navbarr";
import NavBarr2 from "./components/navbarr2";
import Dasboard from "./components/dashboard";
import Error from "./components/error";
import News from "./components/news";
import { fetchUsers, fetchUsers2 } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
const[isauth,setIsAuth]=useState()
const[private1,setPrivate1]=useState()
const [countryName, setCountryName] = useState("india");
const [searchout, setSearchOut] = useState("covid");
const [newz, setNewz] = useState();
const [fav, setFav] = useState([]);

// const data = useSelector((state) => state.users);
const dispatch = useDispatch();

  useEffect(() => {
    var token1=localStorage.getItem("token")
    console.log('ye h token abhi',token1)
    if (token1==='true'){ setIsAuth(true,console.log('yha hua true',isauth))}
    else {setIsAuth(false,console.log('yha hua false',isauth))};
 
    }, [private1]);
    useEffect(() => {
      dispatch(fetchUsers());

      
    }, []);
    useEffect(() => {
      axios
        .get(
          `http://newsapi.org/v2/top-headlines?q=${searchout}&apiKey=6d2f59b7e4e54a9fab2054de3ac1d512`
        )
        .then((response) => {
          console.log("response newz", response);
          setNewz(response.data.articles, console.log("newz data", newz));
        })
        .catch((error) => {
          console.log(error);
        });
    }, [searchout]);
    useEffect(() => {
      // let x = axios
      //   .get(`https:/covid19.mathdro.id/api/countries/${countryName}`)
      //   .then((response) => {
      //     console.log(response);
      //     setData(response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setData("error");
      //   });
      dispatch(fetchUsers2(countryName));
    }, [countryName]);
  return (
    <div style={{ 
      backgroundImage: `url("back.jpg")` 
    }}>
{console.log(isauth,"huish")}
      <BrowserRouter>
      {isauth?<NavBarr  isauth={isauth} setIsAuth={setIsAuth} private1={private1} setPrivate1={setPrivate1} />:<NavBarr2/>} 
          <Switch><Route exact path="/" component={Home} />
            {(isauth===true|| isauth===false) && <ProtectedRoute exact path="/corona"  isauth={isauth} component={Corona}/>}

            {(isauth===true|| isauth===false) && <ProtectedRoute exact path="/country"  isauth={isauth}  component={props=> <Country  countryName={countryName} setCountryName={setCountryName} />}/>}
            {(isauth===true|| isauth===false) && <ProtectedRoute exact path="/daily"  isauth={isauth}  component={Daily}/>}
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login"   render={props => <Login private1={private1} setPrivate1={setPrivate1}  isauth={isauth} setIsAuth={setIsAuth}/>} />
            <Route exact path="/dash" component={Dasboard} />
            <Route exact path="/news" render={props => <News newz={newz} setNewz={setNewz} searchout={searchout} setSearchOut={setSearchOut} fav={fav} setFav={setFav} /> }/>

            <Route component={Error}/>


            
          </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
