const User = require('../modal/user'); // Ensure correct path
const nodemailer = require('nodemailer');
module.exports.signup = (req, res) => {
    console.log('Request body:', req.body);

    // Check if email already exists
    User.findOne({ email: req.body.email, password: req.body.password })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ code: 400, message: 'Email already exists' });
            }

            const newUser = new User({
                email: req.body.email,
                password: req.body.password
            });

            newUser.save()
                .then(() => {
                    res.status(201).json({ code: 200, message: 'Signup success' });
                })
                .catch((err) => {
                    console.error('Error during user save:', err);
                    res.status(500).json({ code: 500, message: 'Signup error', error: err.message });
                });
        })
        .catch(err => {
            console.error('Error during email check:', err);
            res.status(500).json({ code: 500, message: 'Internal server error', error: err.message });
        });
};
module.exports.signin = (req, res) => {
    console.log('Request body:', req.body);

    // Check if email already exists
    User.findOne({ email: req.body.email, password: req.body.password })
        .then(existingUser => {
            if (!existingUser) {
                console.log("not found the user");
                res.send({ code: 500, message: 'user donot exist' });

            }
            else {
                console.log("Successfull logged in");
                res.send({ email: existingUser.email, code: 400, message: 'user  exist', token: 'hfgdhg' });

            }
        })
        .catch(err => {
            console.error('error in signin:', err);
            res.send({ code: 500, message: 'Internal server error', error: err.message });
            return;
        });
};


module.exports.sendotp = async (req, res) => {
    try {
        console.log(req.body);
        const otp = Math.floor(100000 + Math.random() * 900000); 
        console.log(otp);

        // Find user by email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send({ code: 500, message: 'User not found' });
        }

        const testAccount = await nodemailer.createTestAccount();
        // Create transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port:587,
            secure:false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass 
            }
        });

        // Send mail
        const info = await transporter.sendMail({
            from: 'patnaikdebasmita44@gmail.com',
            to: req.body.email,
            subject: 'OTP',
            text: String(otp),
            html: `<html>
                        <body>
                            Hello and Welcome,
                            <br>
                            Your OTP is: ${otp}
                        </body>
                   </html>`,
        });

        if (info.messageId) {
            // Update user's OTP
            await User.updateOne({ email: req.body.email }, { otp: otp });
            return res.status(200).send({ code: 200, message: 'OTP sent' });
        } else {
            return res.status(500).send({ code: 500, message: 'Failed to send OTP' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({ code: 500, message: 'Server error' });
    }
};

module.exports.submitotp = async (req, res) => {
    try {
        console.log(req.body); 

        const { otp, password } = req.body;

        // Find user by OTP
        const user = await User.findOne({ otp: otp });

        if (!user) {
            console.log("OTP is wrong"); 
            return res.status(400).send({ code: 400, message: "OTP is wrong" });
        }

        // Update the user's password and clear the OTP
        await User.updateOne({ email: user.email }, { password: password, otp: null });
        console.log("Password updated successfully");
        res.status(200).send({ code: 200, message: "Password updated" });

    } catch (err) {
        console.error("Error occurred:", err); 
        res.status(500).send({ code: 500, message: "An error occurred", error: err.message });
    }
};