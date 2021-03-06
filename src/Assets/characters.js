import seaman from "./Characters/seaman.png";
import sonic from "./Characters/sonic.png";
import sambaDeAmigo from "./Characters/samba-de-amigo.png";

import superMonkey from "./Characters/super-monkey.png";
import zelda from "./Characters/zelda.png";
import metroidPrime from "./Characters/metroid-prime.png";

import mario from "./Characters/Mario.webp";
import luigi from "./Characters/Luigi.png";
import kirby from "./Characters/kirby.png";

import apeEscape from "./Characters/ape-escape.png";
import crashBandicoot from "./Characters/crash-bandicoot.webp";
import kazuyaMishima from "./Characters/kazuya-mishima.webp";
import laraCroft from "./Characters/lara-croft.png";

import tommyVercetti from "./Characters/tommy-vercetti.png";
import amaterasu from "./Characters/amaterasu.webp";
import kratos from "./Characters/kratos.png";

import spiderman from "./Characters/spiderman.png";
import atreus from "./Characters/atreus.png";
import twob from "./Characters/2b.png";

import cj from "./Characters/cj.webp";

import nikoBellic from "./Characters/niko-bellic.png";

const characters = [
  // Dreamcast
  [
    {
      src: sonic,
      alt: "sonic",
      isFound: false,
      coords: {
        xMax: "30.48",
        xMin: "23.61",
        yMax: "42.04",
        yMin: "38.80",
      },
    },
    {
      src: seaman,
      alt: "seaman",
      isFound: false,
      coords: {
        xMax: "31.29",
        xMin: "24.05",
        yMax: "74.39",
        yMin: "69.67",
      },
    },
    {
      src: sambaDeAmigo,
      alt: "samba de amigo",
      isFound: false,
      coords: {
        xMax: "26.02",
        xMin: "18.93",
        yMax: "67.14",
        yMin: "63.56",
      },
    },
  ],
  // Gamecube
  [
    {
      src: superMonkey,
      alt: "super Monkey",
      isFound: false,
      coords: {
        xMax: "26.24",
        xMin: "18.86",
        yMax: "45.92",
        yMin: "42.31",
      },
    },
    {
      src: zelda,
      alt: "zelda",
      isFound: false,
      coords: {
        xMax: "69.01",
        xMin: "65.13",
        yMax: "67.27",
        yMin: "64.54",
      },
    },
    {
      src: metroidPrime,
      alt: "metroid Prime",
      isFound: false,
      coords: {
        xMax: "88.74",
        xMin: "82.31",
        yMax: "55.67",
        yMin: "51.75",
      },
    },
  ],
  // N64
  [
    {
      src: mario,
      alt: "mario",
      isFound: false,
      coords: {
        xMax: "68.63",
        xMin: "62.94",
        yMax: "62.11",
        yMin: "58.49",
      },
    },
    {
      src: luigi,
      alt: "luigi",
      isFound: false,
      coords: {
        xMax: "79.46",
        xMin: "71.20",
        yMax: "49.46",
        yMin: "46.35",
      },
    },
    {
      src: kirby,
      alt: "kirby",
      isFound: false,
      coords: {
        xMax: "90.73",
        xMin: "86.20",
        yMax: "65.91",
        yMin: "63.62",
      },
    },
  ],
  // PS1
  [
    {
      src: apeEscape,
      alt: "ape Escape",
      isFound: false,
      coords: {
        xMax: "69.15",
        xMin: "65.28",
        yMax: "56.55",
        yMin: "54.59",
      },
    },
    {
      src: crashBandicoot,
      alt: "crash Bandicoot",
      isFound: false,
      coords: {
        xMax: "58.77",
        xMin: "53.58",
        yMax: "58.20",
        yMin: "55.53",
      },
    },
    {
      src: kazuyaMishima,
      alt: "kazuya Mishima",
      isFound: false,
      coords: {
        xMax: "65.06",
        xMin: "61.33",
        yMax: "60.46",
        yMin: "57.49",
      },
    },
    {
      src: laraCroft,
      alt: "lara Croft",
      isFound: false,
      coords: {
        xMax: "36.48",
        xMin: "31.51",
        yMax: "53.07",
        yMin: "50.37",
      },
    },
  ],
  // PS2
  [
    {
      src: tommyVercetti,
      alt: "tommy Vercetti",
      isFound: false,
      coords: {
        xMax: "70.25",
        xMin: "64.99",
        yMax: "54.55",
        yMin: "51.15",
      },
    },
    {
      src: amaterasu,
      alt: "amaterasu",
      isFound: false,
      coords: {
        xMax: "37.57",
        xMin: "31.87",
        yMax: "55.50",
        yMin: "51.21",
      },
    },
    {
      src: kratos,
      alt: "kratos",
      isFound: false,
      coords: {
        xMax: "24.93",
        xMin: "16.89",
        yMax: "54.42",
        yMin: "51.38",
      },
    },
  ],
  // PS4
  [
    {
      src: spiderman,
      alt: "spiderman",
      isFound: false,
      coords: {
        xMax: "20.69",
        xMin: "13.30",
        yMax: "52.67",
        yMin: "49.76",
      },
    },
    {
      src: atreus,
      alt: "atreus",
      isFound: false,
      coords: {
        xMax: "66.81",
        xMin: "63.30",
        yMax: "57.49",
        yMin: "55.40",
      },
    },
    {
      src: twob,
      alt: "2b",
      isFound: false,
      coords: {
        xMax: "27.92",
        xMin: "21.86",
        yMax: "66.63",
        yMin: "63.39",
      },
    },
  ],
  // Xbox
  [
    {
      src: cj,
      alt: "cj",
      isFound: false,
      coords: {
        xMax: "53.14",
        xMin: "46.56",
        yMax: "57.49",
        yMin: "53.58",
      },
    },
  ],
  // XBOX360
  [
    {
      src: nikoBellic,
      alt: "niko Bellic",
      isFound: false,
      coords: {
        xMax: "42.18",
        xMin: "35.45",
        yMax: "60.90",
        yMin: "57.15",
      },
    },
  ],
];
export default characters;

//* Copilot is AMAZING!
