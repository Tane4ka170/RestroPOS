export const getRandomBg = () => {
  const colors = [
    "bg-[#1efde8]",
    "bg-[#bf1c85]",
    "bg-[#530add]",
    "bg-[#d204db]",
    "bg-[#88c501]",
    "bg-[#27efea]",
    "bg-[#6097c5]",
    "bg-[#c03e26]",
    "bg-[#9c15d9]",
    "bg-[#5bd2f9]",
    "bg-[#3e717d]",
    "bg-[#edc9c4]",
    "bg-[#b5f6a6]",
    "bg-[#ecece6]",
    "bg-[#675f2a]",
    "bg-[#156f37]",
    "bg-[#e3092c]",
    "bg-[#622fb6]",
    "bg-[#329f13]",
    "bg-[#e616f6]",
    "bg-[#3e433f]",
    "bg-[#b2f12e]",
    "bg-[#872e93]",
    "bg-[#6aafb8]",
    "bg-[#cc1069]",
    "bg-[#abe57f]",
    "bg-[#4f407a]",
    "bg-[#341067]",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const getBgColor = () => {
  const bgarr = [
    "#8255e5",
    "#df9371",
    "#e061fc",
    "#a7036e",
    "#ca9312",
    "#7c1e81",
    "#5d81ae",
    "#aaa20f",
    "#4d6811",
    "#b10a6d",
    "#509af5",
    "#b1bc86",
    "#64b3ee",
    "#955044",
    "#e62861",
    "#69271f",
    "#198cb8",
    "#2e9a66",
    "#f238cc",
    "#aaaec4",
  ];
  const randomBg = Math.floor(Math.random() * bgarr.length);
  const color = bgarr[randomBg];
  return color;
};

export const getAvatarName = (name) => {
  if (!name) return "";
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};
