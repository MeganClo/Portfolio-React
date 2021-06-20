// dependencies needed for contact ** emailjs sends me an email from contact page
import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", message: "" });
    const [errorMessage, setErrorMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const { firstName, lastName, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage("Please provide a valid email");
                // console.log(errorMessage)
            } else {
                setErrorMessage("");
            }
        } else {
            console.log(!e.target.value.length)
            // console.log("hello")
            if (!e.target.value.length) {
                // console.log(e.target.value)
                setErrorMessage("Please fill out all fields.");
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    }
    // sending email when someone submits message
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        console.log("error message", errorMessage)
        emailjs.sendForm('service_m129xqt', 'template_na8rpgb', e.target, 'user_T6FtcI25YlWbsWTq5lIWI')
            .then((result) => {
                console.log(result.text);
                setEmailMessage("Your message has been sent")
            }, (error) => {
                console.log(error.text);
                setEmailMessage("Something went wrong, please try again!")
            });
            e.target.reset();
    }

    return (
        <main className="bg-black min-h-screen p-12">

            <div className="container mx-auto my-20 w-2/3 border border-red-800 bg-gray-200">
                <div className="p-5 space-y-5 shadow-x1">
                    <h4 className="light text-center text-3xl">Contact Me</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-5">
                            <input placeholder="First Name" className="border border-red-500 px-4 py-2 focus:outline-none focus:border-red-800" type="text" name="firstName" defaultValue={firstName} onBlur={handleChange} />
                            <input placeholder="Last Name" className="border border-red-500 px-4 py-2 focus:outline-none focus:border-red-800" type="text" name="lastName" defaultValue={lastName} onBlur={handleChange} />

                        </div>
                        <div className="grid grid-cols-1 pt-5">
                            <input placeholder="Email" className="border border-red-500 px-4 py-2 focus:outline-none focus:border-red-800" type="text" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div className="grid grid-cols-1 pt-5">
                            <textarea name="message" placeholder="Write your message..." className="border border-red-500 px-4 py-2 focus:outline-none focus:border-red-800" cols="" rows="5" defaultValue={message} onBlur={handleChange}></textarea>
                        </div>
                        <input className="light focus:outline-none mt-5 bg-red-800 px-4 py-2 text-white font-bold w-full" type="submit" />
                        <div>
                            {errorMessage && (
                                <div>
                                    <p className="bold font-bold text-center">{errorMessage}</p>
                                </div>
                            )}
                            {emailMessage && (
                                <div>
                                    <p className="bold font-bold text-center">{emailMessage}</p>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact;
