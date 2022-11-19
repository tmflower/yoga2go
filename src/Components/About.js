import { Dev } from "./Dev";
import "../styles/About.css";
import katepic from "./Images/katepic.jpeg";
import Elizabethpic from "./Images/Elizabethpic.jpeg";
import Heatherpic from "./Images/Heatherpic.jpeg";
import sarahpic from "./Images/sarahpic.jpeg";
import Valentinapic from "./Images/Valentinapic.jpeg";
import Tinapic from "./Images/Tinapic.jpg";

export function About() {
  return (
    <div>
      <h1>Meet the Yoga2Go Developers</h1>
      <div className="bio-container">
        <Dev
          name="Tina Flower"
          bio="Full stack web developer with a background in teaching. When I'm not digging deep into a coding problem, my favorite place to be is on the ocean, paddling an outrigger canoe. Yoga brings me strength, balance and calm in times of challenge."
          photo={Tinapic}
          link="https://www.linkedin.com/in/tinaflower"
        />

        <Dev
          name="Valentina Provida"
          bio="Passionate cyber security analyst and computer digital forensic specialist with practical, hands-on experience. Skilled in risk/vulnerability management, networking protocols, IT regulatory compliance, incident response, business continuity, and disaster recovery planning. Yoga brings balance in my life!"
          photo={Valentinapic}
          link="https://github.com/vprovida"
        />

        <Dev
          name="Sarah Allen"
          bio="Aspiring Network or DevOps Engineer; currently a full-time student studying Network Technologies. I have a background in WordPress site development and management as well as strong marketing skills. I enjoy being challenged and am always looking for opportunities to grow."
          photo={sarahpic}
          link="https://github.com/ravenwooddesigns"
        />

        <Dev
          name="Kate Baker"
          bio="Experienced educator who is keenly pursuing a career switch to front end development. Passionate about sharing the benefits of daily yoga for meditation."
          photo={katepic}
          link="https://github.com/KateVB2 "
        />
        <Dev
          name="Heather Stout Svanidze"
          bio="Front-end developer with a background in cross-cultural communication. After a decade in French-English translation, I was ready for a career with more innovation and variety. I decided on web development because I enjoy the challenging combination of creativity and problem-solving it provides. Yoga helped me stay sane through lockdown and feel at home in my body again after having four children."
          photo={Heatherpic}
          link="https://github.com/heathersvanidze"
        />

        <Dev
          name="Elizabeth King"
          bio="Web Designer with knowledge of UX/UI design and front-end development. My background is in writing and copyediting, and I aspire to freelance work in all of these areas. I have a passion for creating wondrous things and hope to never stop learning."
          photo={Elizabethpic}
          link="https://github.com/elizabethkatk"
        />

        <Dev
          name="Khalina Boyce"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <Dev
          name="Kris Jackson"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}
