import React from 'react';

function Contact() {

  const contactStyle = {
    margin: "5% 15%"
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "4rem"
  };

  const submitBtn = {
    textAlign: "center",
    marginTop: "2%"
  }

  const Btn = {
    backgroundColor: "black",
    color: "#03e9f4",
    width: "50%",
    height: "3rem",
    hover: {
      backgroundColor: "#fff"
    }
  }

  return (
    <>
      <form style={contactStyle}>
        <h1 style={headingStyle} className="mb-4 lead">Contact US</h1>
        <div className="row">
          <div className="col-lg-6 mt-2">
            <label className="label1" for="exampleFormControlFile1" >Name : </label>
            <input className="form-control form-control-md" type="text" placeholder="" />
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email :</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label for="exampleFormControlFile1">Phone :</label>
            <input className="form-control form-control-md" type="tel" placeholder="" />
          </div>
          <div className="col-lg-6">
            <label className="label1" for="exampleFormControlFile1" >Event Name :</label>
            <input className="form-control form-control-md" type="text" placeholder="" />
          </div>
        </div>
        <div className="row mt-2">
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message :</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
        <div style={submitBtn}>
          <button style={Btn} type="submit" className="btn btn-primary mt-3 lead">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Contact;