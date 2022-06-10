import React from "react";

export default function Portfolio() {
    return (
        <div style={styles.div}>
            <h1 style={styles.h1}>Samantha Lord</h1>
            <h2 style={styles.h2}>Full Stack Web Developer</h2>
            <p style={styles.p}>Proficient and skilled in JavaScript, Node.js, MySQL, MongoDB, React, Express servers, and more.</p>
            <a href="https://github.com/SamanthaLord22" target="_blank" rel="noreferrer"></a>
            <a href="www.linkedin.com/in/samantha-lord-968437b1" target="_blank" rel="noreferrer"></a>
                <ul style={styles.ul}>Projects:</ul>
                <li>
                    <a>
                        The Golden Group Project
                        <a
                            style={styles.p}
                            target="_blank"
                            rel="noreferrer"
                            href="https://jpcreativeworks.github.io/the-Golden-Group-Project/"
                        >
                            The Golden Group Project
                        </a>
                    </a>
                </li>
                <li>
                    <a>
                        iVentory
                        <a
                            style={styles.p}
                            target="_blank"
                            rel="noreferrer"
                            href="https://datababes-iventory.herokuapp.com/"
                        >
                            iVentory
                        </a>
                    </a>
                </li>
                <li>
                    <a>
                        Password Generator
                        <a
                            style={styles.p}
                            target="_blank"
                            rel="noreferrer"
                            href="https://samanthalord22.github.io/Password-Generator-Wk2/"
                        >
                            Password Generator
                        </a>
                    </a>
                </li>
        </div>
    );
}