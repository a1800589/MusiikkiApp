import React from 'react';
import '../css/style.css';
function Kappalelista ( props) {
  let kappalelista = props.kappaleet.map(function(kappale, index) {
    return (
       <p key={index}>
          Kappale: { kappale.kappale } <br />
          Artisti: { kappale.Artisti } <br />
          Albumi: { kappale.Albumi} <br />
          Genre: { kappale.Genre } <br />
          Kuvaus: { kappale.kuvaus}
       </p>);
    });
 return ( <div>{ kappalelista }</div> );
}

export default Kappalelista;
