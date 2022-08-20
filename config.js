import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Hyper Bump",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=1009957929174171658&permissions=8&scope=bot",
  //BotInvite Link
  Features: [
    {
      name: "Bump",
      description:
        "Allows you to advertising your server to all servers that use a Hyper Bump",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Uptime",
      description:
        "Uptime is a measure of system reliability, expressed as the percentage of time a machine, typically a computer.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Automation",
      description:
        "Automation describes a wide range of technologies that reduce  human intervention in processes.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Welcomer",
      description:
        "Welcomer is the person who greet the new person in an unique and great way",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 86, //-  - Your
  memberCount: 3254, //--   - Bot
  executedCommand: 12487, //--  - Stats
  availableCommand: 14, //---   - Here
  //Do not change if you don't know about them
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  githubLink: "https://github.com/mohitmimani",
  twitterLink: "https://twitter.com",
  mediumLink: "https://medium.com/",
  facebookLink: "https://facebook.com",
  discordLink: "https://discord.gg/weyNpPACm3",
  youtubeLink: "https://www.youtube.com/channel/UCfhRHeex9lU0ZAVJot6Z2ZQ",
};

export default config;
