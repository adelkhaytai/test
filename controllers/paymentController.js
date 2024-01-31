const axios = require("axios");

module.exports = {
  Add : async (req,res)=>{
      const url = "https://developers.flouci.com/api/generate_payment"
      const payload = {
          "app_token": "465aa0dc-b8de-4433-b760-0d76942fbb4e",
          "app_secret":  process.env.FLOUCI_SECRET,
          "amount": req.body.amount,
          "accept_card": "true",
          "session_timeout_secs": 1200,
          "success_link": "http://localhost:4000/success",
          "fail_link": "http://localhost:4000/fail",
          "developer_tracking_id": "92b8ede1-6a0d-433d-9a55-004dd5429aa9"
      }
      await axios.post(url,payload)
      .then(result=>res.send(result.data))
      .catch(err=>console.log(err))
    }
};
