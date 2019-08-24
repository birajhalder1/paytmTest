import React, { Component } from "react";

class PayRequest extends Component {
  render() {
    return (
      <div>
        <title>Merchant Check Out Page</title>
        <center>
          <h1>Please do not refresh this page...</h1>
        </center>
        <form
          method="post"
          action="https://securegw-stage.paytm.in/order/process"
          name="paytm"
        >
          <table border={1}>
            <tbody>
              <input type="hidden" name="MID" defaultValue="YOUR_MID_HERE" />
              <input
                type="hidden"
                name="WEBSITE"
                defaultValue="YOUR_WEBSITE_HERE"
              />
              <input
                type="hidden"
                name="ORDER_ID"
                defaultValue="YOUR_ORDER_ID"
              />
              <input type="hidden" name="CUST_ID" defaultValue="CUSTOMER_ID" />
              <input
                type="hidden"
                name="MOBILE_NO"
                defaultValue="CUSTOMER_MOBILE_NUMBER"
              />
              <input type="hidden" name="EMAIL" defaultValue="CUSTOMER_EMAIL" />
              <input
                type="hidden"
                name="INDUSTRY_TYPE_ID"
                defaultValue="YOUR_INDUSTRY_TYPE_ID_HERE"
              />
              <input
                type="hidden"
                name="CHANNEL_ID"
                defaultValue="YOUR_CHANNEL_ID"
              />
              <input
                type="hidden"
                name="TXN_AMOUNT"
                defaultValue="ORDER_TRANSACTION_AMOUNT"
              />
              <input
                type="hidden"
                name="CALLBACK_URL"
                defaultValue="YOUR_CALLBACK_URL"
              />
              <input
                type="hidden"
                name="CHECKSUMHASH"
                defaultValue="GENERATED_CHECKSUM_VALUE"
              />
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default PayRequest;
