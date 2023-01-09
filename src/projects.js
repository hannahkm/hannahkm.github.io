import worldwiki from "./images/worldwiki.png"
import chimera from "./images/chimera.png"
import roam from "./images/roam.png"
import typefast from "./images/type_fast.png"
import tetris from "./images/tetris.png"
import coved from "./images/coved.png"
import easthaven from "./images/easthaven.png"
import skybound from "./images/skybound.png"

const projects = [
    {
        name: "WorldWiki",
        blurb: "a world building app that generates Wikipedia pages given user input. currently a work in progress."
    },
    {
        name: "Chimera",
        blurb: "a collaborative picture game, built with two teammates"
    },
    {
        name: "Roam",
        blurb: "an android app for users to build itineraries for trips."
    },
    {
        name: "Type Fast",
        blurb: "typing practice to help me learn to type in Korean."
    },
    {
        name: "Tetris",
        blurb: "a recreation of Tetris."
    },
    {
        name: "CovEducation",
        blurb: "a website for the startup CovEducation. developed the contact page and videoconferencing interface."
    },
    {
        name: "Easthaven Apothecary",
        blurb: "a medieval RPG with an arcade-like twist. built with two teammates and submitted to MLH Roll for Hacking (2020)."
    },
    {
        name: "Skybound",
        blurb: "a platformer that uses the player's audio to move the character. created during the Google Computer Science Summer Institute (CSSI): Online."
    }
]

const projectContent = {
    "WorldWiki": {
        link: "https://github.com/hannahkm/worldwiki",
        description: ["worldwiki is a website for users to create Wikipedia pages for any topic of their liking. i am a huge fan of creative writing, but i am also what the writing community might call a 'plotter'. i enjoy organizing and plotting out details of my writing thouroughly before i start writing. worldwiki was a way for me to do that in a fun way.", "users can input information about their topic, whether that be a entire world, a single character, or an event, and worldwiki will create a page that replicates what one might find on Wikipedia."],
        img: worldwiki,
        stack: "React, MongoDB"
    },
    "Chimera": {
        link: "https://weblab.mit.edu/winners/",
        description: ["chimera is a picture based games where users can make a lobby with their friends and draw collaboratively.", "each user is given a picture with one section taken out of it; they must use their imagination to fill in the blank. at the end, each player's pictures are pasted together to display their combined artwork.", "created with two friends for the 2022 MIT WebLab class and competition. chimera was a semi-finalist (top 10) project."],
        img: chimera,
        stack: "React, MongoDB"
    },
    "Roam": {
        link: "https://github.com/hannahkm/FBUFinalApp",
        description: ["roam allows users to plan out their itineraries in detail, including overall locations, popular destinations in cities, and personalized events. users can check the availability of locations for each day, save interests to lists, and invite other users to contribute to their trip.","roam was built as an android app for FBU (2021)."],
        img: roam,
        stack: "Java"
    },
    "Type Fast": {
        link: "https://github.com/hannahkm/type-fast",
        description: ["i learned to type english in elementary school (we had a program called Type to Learn), but my ability to type in korean is nonexistent. type fast allows me to practice typing one letter at a time to gain familiarity in where each character appears on the keyboard, then build up to full words."],
        img: typefast,
        stack: "React"
    },
    "Tetris": {
        link: "https://github.com/hannahkm/react-tetris",
        description: ["i went through a phase of playing tetris nearly every day my freshman year of college. i thought it would be fun challenge to recreate tetris, complete with each piece shape and its rotations, ghost pieces, and holding, so that i could play something of my own creation"],
        img: tetris,
        stack: "React"
    },
    "CovEducation": {
        link: "https://www.coved.org/",
        description: ["CovEducation is a startup that focused on making education accessible to students during the COVID-19 pandemic, offering online tutoring.", "i developed the contact page that would allow new students to reach out and get involved. with a group of two other people, i helped create the videoconferencing interface, which would allow private, secure calls between students and tutors on the CovEducation website."],
        img: coved,
        stack: "React, Node JS, firebase"
    },
    "Easthaven Apothecary": {
        link: "https://devpost.com/software/mypotionsaretoostrongforyoutraveller",
        description: ["easthaven apothecary is a medieval rpg game developed for the 2020 MLH Roll for Hacking hackathon.", "the user plays as a warrior who wants to defeat a dragon. to start, they work as a clerk at a potions shop, where they make potions for customers using various ingredients and a recipe book. performing well will earn them more money through tips.", "as the user earns more money, they can go to the shop to buy weapons and armor. the game ends with a pokemon style battle between the user and the dragon."],
        img: easthaven,
        stack: "p5.js"
    },
    "Skybound": {
        link: "https://glitch.com/~forest-carnelian-journey",
        description: ["skybound is a platformer built during my time at the Google Computer Science Summer Institute (CSSI) with two teammates.", "the platformer uses the player's audio to move the character, similar to games like scream go hero. the platforms appear at random times and random heights, and the louder the user yells, the higher they will jump. they can earn coins through runs that they can use to obtain cosmetics in the shop."],
        img: skybound,
        stack: "p5.js, p5 sound library"
    },
}

export {projects, projectContent};