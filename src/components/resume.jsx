import React from "react";
import Card from "./common/card";
import Certificate from "./common/certificate";
import Domain from "./common/domain";

const Resume = () => {
  const resume = {
    education: [
      {
        year: "2018 - Present",
        institute: "Siddaganga Institute of Technology",
        degree: "Bachelor of Engineering - 9.24 CGPA",
        branch: "Computer Science and Engineering",
      },
      {
        year: "2018",
        institute: "Kendriya Vidyalaya No.1 Faridabad",
        degree: "Class XII - 91.5%",
        branch: "",
      },
      {
        year: "2016",
        institute: "Kendriya Vidyalaya No.1 Faridabad",
        degree: "Class X - 10.0 CGPA",
        branch: "",
      },
    ],
    experience: [
      {
        year: "2019 - Present",
        institute: "DeCoders Coding Club",
        degree: "Member",
        branch: "",
      },
      {
        year: "Dec 2020 - Apr 2021",
        institute:
          "Tumkur District Regional Cooperative Organic Farmers Organizations Federation Ltd",
        degree: "App Developer",
        branch:
          "Developed an app 'Namma Utpanna (Our Produce)'. A multilingual (Kannada-English) app designed to ease interaction between FPO and farmers. Features in include sharing demand list, inventory management etc.",
      },
    ],
    certificates: [
      {
        image: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg",
        name: "The Complete Flutter Development Bootcamp 2020 with Dart",
        issue: "Issued on Apr 8, 2020",
        url:
          "https://www.udemy.com/certificate/UC-164aa8c3-c6b2-4fea-938c-3ff6179c8e2e/",
      },
      {
        image: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg",
        name: "Complete Web Development BootCamp 2020",
        issue: "Issued on Jan 8, 2020",
        url: "https://www.udemy.com/certificate/UC-F9BWJFGQ/",
      },
      {
        image: "https://www.codingninjas.com/assets-landing/images/CNLOGO.svg",
        name: "Data Structures in C++ (Top Performer)",
        issue: "Issued on Jun 2019",
        url: "http://www.codingninjas.in/verify/ed59b2760cefbec5",
      },
      {
        image: "https://www.codingninjas.com/assets-landing/images/CNLOGO.svg",
        name: "Introduction to C++",
        issue: "Issued on May 2019",
        url: "http://www.codingninjas.in/verify/5297b4de3a52cc35",
      },
    ],
    domain: [
      {
        title: "Programming Languages",
        skills: [
          {
            name: "C++",
            percentage: "80%",
          },
          {
            name: "Javascript",
            percentage: "75%",
          },
          {
            name: "Dart",
            percentage: "75%",
          },
          {
            name: "Typescript",
            percentage: "60%",
          },
        ],
      },
      {
        title: "Backend Skills",
        skills: [
          {
            name: "NodeJs",
            percentage: "70%",
          },
          {
            name: "MongoDB",
            percentage: "75%",
          },
          {
            name: "Firebase",
            percentage: "70%",
          },
          {
            name: "GraphQL",
            percentage: "50%",
          },
        ],
      },
      {
        title: "Frontend Skills",
        skills: [
          {
            name: "HTML + CSS",
            percentage: "90%",
          },
          {
            name: "React + Redux",
            percentage: "80%",
          },
          {
            name: "Bootstrap",
            percentage: "85%",
          },
          {
            name: "Tailwind CSS",
            percentage: "90%",
          },
          {
            name: "SASS",
            percentage: "60%",
          },
          {
            name: "Flutter SDK",
            percentage: "85%",
          },
        ],
      },
      {
        title: "DevTools and Others",
        skills: [
          {
            name: "Git Version Control",
            percentage: "85%",
          },
          {
            name: "Linux Terminal",
            percentage: "75%",
          },
        ],
      },
    ],
  };
  return (
    <div>
      <div className="font-bold text-3xl py-10 border-b border-t border-gray-300 mt-6">
        Resume
      </div>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
        <div>
          <div className="font-semibold text-base w-8 border-b-2 border-blue-600">
            Experience
          </div>
          {resume.experience.map((x) => (
            <Card e={x} />
          ))}
        </div>
        <div>
          <div className="font-semibold text-base w-8 border-b-2 border-blue-600">
            Education
          </div>
          {resume.education.map((x) => (
            <Card e={x} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-10">
        <div className="font-semibold text-base w-8 border-b-2 border-blue-600">
          Certifications
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 m-2">
          {resume.certificates.map((x) => (
            <Certificate e={x} />
          ))}
        </div>
      </div>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {resume.domain.map((x) => (
          <Domain e={x} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
