import React from 'react';




const Listing = (props) => (
  <div>
    <table>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
      {
        props.fileList.map(element => {
          return (
            <tr>
              <td>{element['date']}</td>
              <td>{element['description']}</td>
              <td>{element['amount']}</td>
            </tr>
          )
        })
      }
    </table>
  </div>
)

export default (Listing);