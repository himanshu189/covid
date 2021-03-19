import React, { useEffect, useState } from "react";
import "./custom.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import {Link} from 'react-router-dom'
import NavBarr from "./navbarr";
import { CircularProgress } from "@material-ui/core";


const Daily = ({isauth}) => {
  const [data, setData] = useState();const not2='not2.png'
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 2))
  );
  var date3 = startDate.toJSON();
  date3 = date3.slice(0, 10);
  const [startDate2, setStartDate2] = useState(date3);
  const[filtered,setFiltered]=useState([])
  const[search,setSearch]=useState('')
  const[search2,setSearch2]=useState('')

  const headerimg = "covid.png";
  const handleDate = (date) => {
    
    setStartDate(date);
    var date2 = date.toJSON();

    date2 = date2.slice(0, 10);
    setStartDate2(date2, console.log(date.getMonth(), date2),console.log("date",startDate,"date2",startDate2));
  };
  useEffect(() => {
    let x = axios
      .get(`https:/covid19.mathdro.id/api/daily/${startDate2}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [startDate]);
  // useEffect(()=>{
  //   if(data ){
  //   const results = data.filter((data) =>
  //   data.countryRegion.toLowerCase().includes(search.toLowerCase()));
  //   setFiltered(results,console.log('ujhujhu',filtered))}

  // },[search,startDate,data])
  useEffect(()=>{
    if(data ){
    const results = data.filter((data) =>
    data.provinceState.toLowerCase().includes(search2.toLowerCase().trim())&&data.countryRegion.toLowerCase().includes(search.toLowerCase().trim()));
    setFiltered(results,console.log('ujhujhu',filtered))}

  },[search2,search,data])
  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }
const handleSearch=(e)=>{
 setSearch(e.target.value,console.log(search))
//  setSearch2("")

 
}
const handleSearch2=(e)=>{
  setSearch2(e.target.value,console.log(search2))
  // setSearch("")

 }
const logo='download.png'


  return (
    <div>
  <div className="container">
        <img className="img1" src={headerimg} alt="header" width="60%"></img>
        <div className="padtopp1">
        <h6>(click to select date)</h6>

          <DatePicker
              placeholderText="End date"
            maxDate={new Date(new Date().setDate(new Date().getDate() - 2))}
            className="dropp1"
            selected={startDate}
            onChange={(date) => handleDate(date)}
          />
        </div>
        <div className='row'>
<div className="searchdiv col-md-6">
                  <input className='searchkaro' placeholder='Search by country  (eg. india)' value={search} onChange={(e)=>handleSearch(e)} />

        </div>
        <div className="searchdiv col-md-6">
                  <input className='searchkaro' placeholder='Search by state  (eg. Punjab)' value={search2} onChange={(e)=>handleSearch2(e)} />

        </div>
        </div>
        

        <div className="tablecont">
          {data ? filtered.length>0?<table className="table1">
            <thead className="tablehead">
              <th className="tabledata">State</th>
              <th className="tabledata">Country</th>
              <th className="tabledata">Confirmed</th>
              <th className="tabledata">Active</th>
              <th className="tabledata">Recovered</th>
              <th className="tabledata">Deaths</th>
              <th className="tabledata1">Last Updated</th>
            </thead>
            {  search || search2 ?
            
              filtered.slice(0,50).map((data, index) => (
                
                <tr key={index} className="tablerow">
                  <td >{data.provinceState ? data.provinceState : "N/A"}</td>
                  <td>{data.countryRegion?data.countryRegion:"N/A"}</td>
                  <td>{data.confirmed?data.confirmed:"N/A"}</td>
                  <td>{data.active?data.active:'N/A'}</td>
                  <td>{data.recovered?data.recovered:"N/A"}</td>
                  <td>{data.deaths?data.deaths:"N/A"}</td>
                  <td>{formatDate(data.lastUpdate)}</td>
                </tr>
              )):(data&&data.slice(0,50).map((data, index) => (
                <tr key={index} className="tablerow">
                  <td  >{data.provinceState ? data.provinceState : "N/A"}</td>
                  <td>{data.countryRegion?data.countryRegion:"N/A"}</td>
                  <td>{data.confirmed?data.confirmed:"N/A"}</td>
                  <td>{data.active?data.active:'N/A'}</td>
                  <td>{data.recovered?data.recovered:"N/A"}</td>
                  <td>{data.deaths?data.deaths:"N/A"}</td>
                  <td>{formatDate(data.lastUpdate)}</td>
                </tr>)))
              }
          </table>:<div className='text-center'> <h1> Sorry not found </h1><img src={not2} width='200px'></img></div>: <div className="text-center">
<CircularProgress color="secondary" />
<h1 text="text-center">loading...</h1>
</div>}
        </div>
      </div> 
      
      <h3 className="footer">COPYRIGHT 	&#169; HIMANSHU TYAGI</h3>

    </div>
  );
};

export default Daily;
