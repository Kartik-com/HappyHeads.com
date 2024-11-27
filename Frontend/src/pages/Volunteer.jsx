import React from "react";

const founders = [
  {
    name: "Suprita",
    role: "Front-end Team",

    image:
      "https://github.com/Kartik-com/Images/blob/main/Screenshot%202024-11-26%20100818.png?raw=true", // Replace with actual image file
  },
  {
    name: "Pratham",
    role: "Front-end Team",
    image:
      "https://github.com/Kartik-com/Images/blob/main/Screenshot%202024-11-26%20095948.png?raw=true", // Replace with actual image file
  },

  {
    name: "Prathmesh",
    role: "Front-end Team",
    image:
      "https://github.com/Kartik-com/Images/blob/main/Screenshot%202024-11-26%20100313.png?raw=true", // Replace with actual image file
  },
  {
    name: "Kartik",
    role: "Front-end & Back-end Team",
    image:
      "https://github.com/Kartik-com/Images/blob/main/Screenshot%202024-11-26%20100655.png?raw=true", // Replace with actual image file
  },
];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
