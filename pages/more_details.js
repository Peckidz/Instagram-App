import React, { useEffect, useState } from 'react';
import Header from './../components/Header';

export default function MoreDetails() {
  const [text, setText] = useState("");
  useEffect(() => {
    // console.log("Call API");
    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
      action: "query",
      format: "json",
      titles: "Mona_Lisa",
      prop: "extracts",
      exlimit: "max"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

    const newUrl = url;
    fetch(newUrl)
      .then(function (response) { return response.json(); })
      .then(function (response) {
        // setText(response.query.pages[Object.keys(response.query.pages)[0]].extract)
        document.getElementById("content").innerHTML = response.query.pages[Object.keys(response.query.pages)[0]].extract;
        // var pages = response.query.pages;
        // for (var p in pages) {
        //     for (var l of pages[p].links) {
        //         console.log(l.title);
        //     }
        // }

        // console.log( response.query.pages[Object.keys(response.query.pages)[0]].extract.match( '== (.*) ==' )[0] );
      })
      .catch(function (error) { console.log(error); });
  }, [])
  return <>
    <Header />
    <div className='moredetails' style={{
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", margin: "auto",
      transition: "0.3s;", width: "60%"
    }} >
      <div id="content" style={{ padding: "2px 16px;", }} >
        <h4><b>Mona Lisa</b></h4>
        {/* <p>{text}</p>  */}
      </div>
    </div>
  </>;
}
