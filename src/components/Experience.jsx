// import { useState, useEffect } from "react";
import data from "../../public/experience.json";

export default function Experience() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const url = "/src/json/experience.json";

  //   axios
  //     .get(url)
  //     .then((res) => setData(res.data))
  //     .catch((error) => console.error("Error fetching data", error));
  // }, []);

  return (
    <>
      {data.map((experience) => (
        <div key={experience.id} className="w-full mb-6">
          {/* Company */}
          <h5 className="font-bold text-xl md:text-3xl">
            {`🏢 ${experience.company}`}
          </h5>
          {/* Job Title */}
          <h4 className="font-bold text-md md:text-2xl">
            {`💼 ${experience.jobTitle}`}
          </h4>

          {/* Start - End */}
          <p className="text-[#9ba4b8] text-sm md:text-xl">
            {`⌚ ${experience.time}`}
          </p>
          {/* List */}
          <ul className="list-disc px-6 pt-4">
            {experience.expList.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
