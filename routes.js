const express = require('express')
const router = express.Router();
const {OAuth2Client} = require('google-auth-library');

router.post('/google', async(req, res) => {

    const client = new OAuth2Client(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_SECRET_KEY
    );
    try{   
        // const r = await client.getToken(req.body.token);
        // const idToken = r.tokens.id_token;
        const idToken = req.body.token;
        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        res.status(200).send(payload)
    }catch(e){
        res.status(400).send(e)
    }
})
module.exports = router;