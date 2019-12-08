import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Company Name',
        field: 'companyname',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Ticker Symbol',
        field: 'tickersymbol',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Previous Close',
        field: 'previousclose',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Open',
        field: 'open',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Bid',
        field: 'bid',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Ask',
        field: 'ask',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        companyname: 'Apple',
        tickersymbol: 'AAPL',
        previousclose: '265.58',
        open: '267.48',
        bid: '270.55',
        ask: '270.53'
      },
      {
        companyname: 'Amazon',
        tickersymbol: 'AMZN',
        previousclose: '265.58',
        open: '267.48',
        bid: '270.55',
        ask: '270.53'
      },
      {
        companyname: 'Google',
        tickersymbol: 'GOOG',
        previousclose: '265.58',
        open: '267.48',
        bid: '270.55',
        ask: '270.53'
      },
      {
        companyname: 'Intel',
        tickersymbol: 'INTC',
        previousclose: '265.58',
        open: '267.48',
        bid: '270.55',
        ask: '270.53'
      },
      {
        companyname: 'Microsoft',
        tickersymbol: 'MSFT',
        previousclose: '265.58',
        open: '267.48',
        bid: '270.55',
        ask: '270.53'
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );

}

export default DatatablePage;
