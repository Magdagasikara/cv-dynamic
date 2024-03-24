import { useEffect } from 'react';
import axios from 'axios';

// Lyckades inte få igång detta så det får bli en annan gång :(

export default function SendMessage({ phoneNumber }) {
    useEffect(() => {
        const username = "(mitt)";
        const password = "(mitt)";

        const key = btoa(`${username}:${password}`);
        const postFields = {
            from: "Magda",
            to: phoneNumber,
            message: "Hi! Let's stay in touch "
        };

        const postData = new URLSearchParams(postFields);

        const options = {
            method: 'POST',
            url: 'https://api.46elks.com/a1/SMS',
            headers: {
                'Authorization': `Basic ${key}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: postData
        };

        axios(options)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was a problem with the request:', error);
            });

    }, [phoneNumber]);

    return null;
}
