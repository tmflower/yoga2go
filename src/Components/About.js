import { Dev } from "./Dev";
import "../styles/About.css";

export function About() {
    return (
        <div className="bio-container">
            <h1>Meet the Yoga2Go Developers</h1>
            <Dev name="Elizabeth King"/>
            <Dev name="Heather Stout"/>
            <Dev name="Kate Baker"/>
            <Dev name="Khalina Boyce"/>
            <Dev name="Kris Jackson"/>
            <Dev name="Sarah Allen"/>
            <Dev name="Tina Flower"/>
            <Dev name="Valentina Provida"/>
        </div>
    )
}