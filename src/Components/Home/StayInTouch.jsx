import React from 'react'

export const StayInTouch = () => {
    return (

        <div className="page-section">
            <div className="container">
                <div className="text-center">
                    <h2 className="title-section mb-3">Stay in touch</h2>
                    <p>Just say hello or drop us a line. You can manualy send us email on <a href="mailto:monkdevs@gmail.com">monkdevs@gmail.com</a></p>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8">
                        <form action="#" className="form-contact">
                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label htmlFor="name" className="fg-grey">Name</label>
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Enter name.." />
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label htmlFor="email" className="fg-grey">Email</label>
                                    <input type="text" name="email" className="form-control" id="email" placeholder="Email address.." />
                                </div>
                                <div className="col-12 py-2">
                                    <label htmlFor="subject" className="fg-grey">Subject</label>
                                    <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject.." />
                                </div>
                                <div className="col-12 py-2">
                                    <label htmlFor="message" className="fg-grey">Message</label>
                                    <textarea id="message" name="message" rows={8} className="form-control" placeholder="Enter message.." defaultValue={""} />
                                </div>
                                <div className="col-12 mt-3">
                                    <button type="submit" className="btn btn-primary px-5">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
