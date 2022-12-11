import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCapcha = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <div>

            <ReCAPTCHA
                sitekey="6Le-gnAjAAAAAEopzhrzah6w7Q7DChu7VlBqyuJa"
                onChange={onChange}
            />
        </div>
    );
};

export default ReCapcha;