'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let data1 = [
  {"domain":"mongodb.info","ip":"82.192.74.35","country":"NL"},
  {"domain":"udemy.com","ip":"190.93.242.22","country":"CR"},  
  {"domain":"coursereport.com","ip":"204.236.232.83","country":"US"}
];

let data2 = [
   {"rank":1,"name":"China","population":1373420000,"percent":18.9},
   {"rank":2,"name":"India","population":1280670000,"percent":17.6},
   {"rank":3,"name":"United States","population":322317000,"percent":4.42},
   {"rank":4,"name":"Indonesia","population":255461700,"percent":3.51},
   {"rank":5,"name":"Brazil","population":205252000,"percent":2.82}
];

// data1.map(function(row) {
//   Object.keys(row).map(function(prop) {
//     console.log(row[prop]);
//   });
// });

class Thead extends React.Component {
  render() {
    let headers = Object.keys(this.props.data[0]);
    return (
      <thead>
        <tr>
          {
            headers.map(function(prop, index) {
            return (<th key={index}>{prop}</th>);
          })
          }
        </tr>
      </thead>
      )
  }
}

class Tbody extends React.Component {
  render() {
    let objs = this.props.data;
    return (
      <tbody>
        {
          objs.map(function(row, index) {
            return (<tr key={index}>{
              Object.keys(row).map(function(cell, index) {
              return (<td key={index}>{row[cell]}</td>);
            })
            }</tr>);
          })
        }
      </tbody>
      )
  }
}

class Table extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <table>
        <Thead data={data} />
        <Tbody data={data} />
      </table>
      )
  }
}

ReactDOM.render(
  <div>
    <Table data={data1} />
    <br />
    <Table data={data2} />
  </div>,
  document.getElementById('content'));