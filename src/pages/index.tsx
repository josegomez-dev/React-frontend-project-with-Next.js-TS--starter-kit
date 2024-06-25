import styles from "@/app/assets/styles/MainPage.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from 'react-icons/fa';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          React project with Next.js (TS)
          <code>
            <Link href="#"> <b><u>starter-kit</u></b> </Link>
          </code>
        </p>
        <ul>
          <li>
            <b>Global Context</b> Management using <b><u>React Hooks</u></b>
          </li>
          <li>
            Implement <b><u>Role-Based Conditional Navigation</u></b>
          </li>
          <li>
            Incorporate configuration for <b><u>Eslint</u></b> and <b><u>Prettier</u></b>
          </li>
          <li>
            Use of <b><u>React Icons</u></b> from <b><u>react-icons/fa</u></b> module
          </li>
          <div className="custom-spacer" />
          <li className={styles['list-with-no-style']}>
            <FaPlus /> Basic <b>Authentication</b> (Login, SignUp, Onboarding)
          </li>
          <li className={styles['list-with-no-style']}>
            <FaPlus /> Basic <b>Pages</b> (User Profile & Admin Dashboard)
          </li>
          <li className={styles['list-with-no-style']}>
            <FaPlus /> Basic <b>Components</b> (Layout, Navigation Bar, Footer)
          </li>
        </ul>
        <div>
          <a
            href="https://app.daily.dev/josegomezdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            José Alejandro Gómez Castro
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/catarsismusical-logo.png"
          alt="Catarsis Musical Logo"
          width={300}
          height={400}
          priority
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://app.daily.dev/josegomezdev"><img src="https://api.daily.dev/devcards/v2/abPOwdz0L9yYL5Tmgqo8B.png?r=kdl&type=wide" width="652" alt="José Alejandro Gómez Castro's Dev Card"/></a>
      </div>

      <div className={styles.grid}>
        <a
          href="https://josegomez-dev.github.io/resume/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About Me <span>-&gt;</span>
          </h2>
          <p>Go to my Digital Portfolio <b><u>(Skills, Projects, Medium Blog)</u></b></p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Project Docs <span>-&gt;</span>
          </h2>
          <p>Check the whole project docs (<b><u>powered by ChatGPT</u></b>)</p>
        </a>

        <a
          href="https://excalidraw.com/#json=mIQEAXBnGmgeM2JsBBMYN,t8975NcOKyhdQibVeMBDBA"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Tech Stack <span>-&gt;</span>
          </h2>
          <p>Check our hand-drawn sketch diagram from <b><u>Excalidraw</u></b></p>
        </a>

        <a
          href="https://github.com/josegomez-dev/React-frontend-project-with-Next.js-TS--starter-kit"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Start your project <span>-&gt;</span>
          </h2>
          <p>
            Follow <b> <u>README</u> </b> steps to getting your project up.
          </p>
        </a>
      </div>
      <div className="custom-nav-spacer" />
    </main>
  )
}

export default Home
