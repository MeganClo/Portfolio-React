import { useState } from "react";

const Contact = () => {
    const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", message: "" });
    const { firstName, lastName, email, message } = formState;
    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    };
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <main className="bg-black min-h-screen p-12">

            <div className="container mx-auto my-20 w-2/3 border border-red-800 bg-gray-200">
                <div className="p-5 space-y-5 shadow-x1">
                    <h4 className="light text-center text-3xl">Contact Me</h4>
                    <form onSubmit={handleSubmit} >
                        <div className="grid grid-cols-2 gap-5">
                            <input placeholder="First Name" className="border border-red-500 px-4 py-2 focus:outline-none focus:border-red-800" type="text" name="firstName" defaultValue={firstName} onChange={handleChange} />
                            <input placeholder="Last Name" className="border border-red-500 px-4 py-2 focus:outline-none focus:border-red-800" type="text" name="lastName" defaultValue={lastName} onChange={handleChange} />

                        </div>
                        <div className="grid grid-cols-1 pt-5">
                            <input placeholder="Email" className="border border-red-500 px-4 py-2 focus:outline-none focus:border-red-800" type="text" name="email" defaultValue={email} onChange={handleChange} />
                        </div>
                        <div className="grid grid-cols-1 pt-5">
                            <textarea name="message" placeholder="Write your message..." className="border border-red-500 px-4 py-2 focus:outline-none focus:border-red-800" cols="" rows="5" defaultValue={message} onChange={handleChange}></textarea>
                        </div>
                        <input className="light focus:outline-none mt-5 bg-red-800 px-4 py-2 text-white font-bold w-full" type="submit"/>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact;
