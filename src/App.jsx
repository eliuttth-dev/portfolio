import Button from "@mui/material/Button";
import WorkIcon from "@mui/icons-material/Work";
import SendIcon from "@mui/icons-material/Send";
import Experience from "./components/Experience";
import GitHubIcon from "@mui/icons-material/GitHub";
import profilePic from "./assets/profile-avatar.svg";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function App() {
  const email = "eliuttth@gmail.com";

  const handleCopyToClipboard = () => {
    toast.success(
      "The email has been successfully copied to your clipboard! 📨"
    );
  };

  return (
    <div className="text-[#eaebee] h-full w-full max-w-[800px] mx-auto px-6">
      {/* <Header /> */}
      <main className="w-full min-h-screen pt-[100px]">
        <div className="w-full h-full py-3">
          {/* Hero */}
          <div className="flex flex-col items-center justify-center gap-4 pb-[80px] border-b-2 border-[#737983]">
            <img
              src={profilePic}
              alt="Eliuth Bompart - profile pic"
              className="border-2 rounded-full w-32 h-32 p-1 border-[#161e2d] object-fill"
            />
            <h2 className=" text-2xl font-bold">Eliuth Bompart</h2>
            <p className="tex-center text-[#9ba4b8]">
              Results-driven Full-stack developer, specializing in Front-end,
              proficient in HTML, CSS, JavaScript, React, GIT, MySQL, and
              Node.js.
            </p>

            <div className="flex flex-col gap-6 md:flex-row">
              {/* ESP CV */}
              <Link
                to="https://drive.google.com/file/d/1wGTY1OnT8ueZqKrOew6LnIoMyCCth1Fl/view?usp=sharing"
                target="_blank"
              >
                <Button
                  variant="contained"
                  startIcon={<AssignmentIndIcon />}
                  sx={{ bgcolor: "#10b981" }}
                >
                  Resume - esp
                </Button>
              </Link>
              {/* ENG CV */}
              <Link
                to="https://drive.google.com/file/d/1WDmMc-SHMgpjIVYvENlI4w-NytiIFSaw/view?usp=sharing"
                target="_blank"
              >
                <Button
                  variant="contained"
                  startIcon={<AssignmentIndIcon />}
                  sx={{ bgcolor: "#10b981" }}
                >
                  Resume - eng
                </Button>
              </Link>
            </div>
          </div>
          {/* Experience */}
          <div className="pt-12">
            <h3 className="font-bold text-2xl md:text-4xl flex items-center gap-2 ">
              Experience <WorkIcon sx={{ fontSize: "32px" }} />
            </h3>
            <div className="pt-6">
              <Experience />
            </div>
          </div>
          {/* Projects */}
          <div className="pt-12">
            <h4 className="font-bold text-2xl flex items-center gap-2 ">
              Projects
            </h4>
            {/* Favorite Projects */}

            {/* Normal Projects */}
            <div className="pt-6 flex gap-4 flex-col sm:flex-row sm:flex-wrap">
              {/*  */}
              <Link to="https://taskrevolution.com/" target="_blank">
                <div className="w-full sm:w-[250px] min-h-[80px] border border-[#737983] rounded-lg p-4 flex-shrink-0">
                  <h6 className="font-bold text-xl text-center">
                    Task Revolution
                  </h6>
                  <p className="text-[#9ba4b8] text-center">E-commerce </p>
                </div>
              </Link>
              {/*  */}
              <Link
                to="https://tourmaline-meringue-37c7f1.netlify.app/"
                target="_blank"
              >
                <div className="w-full sm:w-[250px] min-h-[80px] border border-[#737983] rounded-lg p-4 flex-shrink-0">
                  <h6 className="font-bold text-xl text-center">
                    Restaurant Page
                  </h6>
                  <p className="text-[#9ba4b8] text-center">
                    Hispanic restaurant
                  </p>
                </div>
              </Link>
              {/*  */}
              <Link
                to="https://super-cascaron-2daee8.netlify.app/"
                target="_blank"
              >
                <div className="w-full sm:w-[250px] min-h-[80px] border border-[#737983] rounded-lg p-4 flex-shrink-0">
                  <h6 className="font-bold text-xl text-center">
                    Restaurant Page
                  </h6>
                  <p className="text-[#9ba4b8] text-center">Tasty Food</p>
                </div>
              </Link>
              {/*  */}
              <Link
                to="https://unique-bavarois-3def38.netlify.app/"
                target="_blank"
              >
                <div className="w-full sm:w-[250px] min-h-[80px] border border-[#737983] rounded-lg p-4 flex-shrink-0">
                  <h6 className="font-bold text-xl text-center">
                    Payment Business
                  </h6>
                  <p className="text-[#9ba4b8] text-center">Tasty Food</p>
                </div>
              </Link>
              <Link
                to="https://fantastic-vacherin-34ba3f.netlify.app/"
                target="_blank"
              >
                <div className="w-full sm:w-[250px] min-h-[80px] border border-[#737983] rounded-lg p-4 flex-shrink-0">
                  <h6 className="font-bold text-xl text-center">React Store</h6>
                  <p className="text-[#9ba4b8] text-center">E-commerce</p>
                </div>
              </Link>
              {/*  */}
              <Link to="https://www.cursoalbert.com/" target="_blank">
                <div className="w-full sm:w-[250px] min-h-[80px] border border-[#737983] rounded-lg p-4 flex-shrink-0">
                  <h6 className="font-bold text-xl text-center">
                    Curso Albert Einstein
                  </h6>
                  <p className="text-[#9ba4b8] text-center">Course Web App</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Socials */}
          <div className="pt-12">
            <h4 className="font-bold text-2xl flex items-center gap-2 ">
              Socials
            </h4>
            {/* Normal Projects */}
            <div className="pt-6 flex  flex-wrap gap-4">
              {/* Linkedin */}
              <Link
                to="https://www.linkedin.com/in/eliuth-bompart-in/"
                target="_blank"
              >
                <div className="w-full sm:w-[152px] h-fit border border-[#737983] rounded-lg p-4 flex items-center justify-center">
                  <h6 className="font-bold text-xl flex items-center gap-4 text-[#0284c7]">
                    <LinkedInIcon /> Linkedin
                  </h6>
                </div>
              </Link>
              {/* Github */}
              <Link to="https://github.com/eliuttth-dev" target="_blank">
                <div className="w-full sm:w-[152px] h-fit border border-[#737983] rounded-lg p-4 flex items-center justify-center">
                  <h6 className="font-bold text-xl flex items-center gap-4">
                    <GitHubIcon /> Github
                  </h6>
                </div>
              </Link>
              {/* Youtube */}
              <Link to="https://www.youtube.com/@eliuttthdev" target="_blank">
                <div className="w-full sm:w-[152px] h-fit border border-[#737983] rounded-lg p-4 flex items-center justify-center">
                  <h6 className="font-bold text-xl flex items-center gap-4 text-[#ff0000]">
                    <YouTubeIcon /> Youtube
                  </h6>
                </div>
              </Link>
            </div>
          </div>

          {/* Email */}
          <div className="pt-12">
            <h4 className="font-bold text-2xl flex items-center gap-2 pb-6 ">
              Email
            </h4>
            <div className="flex w-full">
              <p className="w-full p-2 rounded-lg bg-[#2a3441]">{email}</p>
              <Link to="mailto:eliuttth@gmail.com" target="_blank">
                <div className="p-2 ml-2 rounded-lg bg-[#2a3441]">
                  <SendIcon />
                </div>
              </Link>
              <CopyToClipboardButton
                textToCopy={email}
                onCopy={handleCopyToClipboard}
              />
            </div>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}

const CopyToClipboardButton = ({ textToCopy, onCopy }) => {
  const handleCopyButtonClick = () => {
    // Create a range and select the text
    const range = document.createRange();
    const textField = document.createElement("textarea");
    textField.innerText = textToCopy;
    document.body.appendChild(textField);
    range.selectNode(textField);
    window.getSelection().addRange(range);

    // Copy the selected text
    document.execCommand("copy");

    // Clean up
    document.body.removeChild(textField);
    window.getSelection().removeAllRanges();

    onCopy();
  };

  return (
    <button
      className="p-2 ml-2 rounded-lg bg-[#2a3441]"
      onClick={handleCopyButtonClick}
    >
      <ContentPasteIcon />
    </button>
  );
};
