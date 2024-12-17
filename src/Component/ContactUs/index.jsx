import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import "./index.css";
import { useState, useEffect } from "react";
import TabIcon from "../TabIcon";

export const Contact = () => {
  const [data, setData] = useState({ Name: "", Email: "", Msg: "" });

  useEffect(() => {
    localStorage.setItem("ContactData", JSON.stringify(data));
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name:", name);
    console.log("value:", value);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const SubmitData = (e) => {
    e.preventDefault();
    console.log(data);
    setData({ Name: "", Email: "", Msg: "" });
  };

  return (
    <div className="contact-section bg" id="contact">
      <div className="container d-flex justify-content-between">
        <div className="contact-info w-50 d-flex flex-column align-items-center justify-content-center">
          <h1 className="fs-1 text-center">Feel Free To Connect</h1>

          <div className="contact-icons fs-2 d-flex justify-content-center">
            <TabIcon
              link={"https://www.linkedin.com/in/anand-vishwa"}
              title={"LinkedIn"}
              Icon={<FaLinkedinIn />}
            />

            <TabIcon
              link={"tel:+917318546239"}
              title={"Call me"}
              Icon={<IoIosCall />}
            />
            <TabIcon
              link={"mailto:anandvishwakarma0052@gmail.com"}
              title={"Send an email"}
              Icon={<SiGmail />}
            />
          </div>
        </div>
        <form
          className="contact-form w-50 d-flex flex-column gap-4"
          onSubmit={SubmitData}
        >
          <input
            type="text"
            name="Name"
            value={data.Name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="form-input"
            required
          />
          <input
            type="email"
            name="Email"
            value={data.Email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="form-input"
            required
          />
          <textarea
            name="Msg"
            value={data.Msg}
            onChange={handleInputChange}
            placeholder="Your Message"
            className="form-textarea"
            rows="5"
            required
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
