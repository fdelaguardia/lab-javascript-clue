//### Iteration 1: Create the cards
const suspectsArray = [
    {
      firstName: "Jacob",
      lastName: "Green",
      occupation: "Entrepreneur",
      age: 45,
      description: "He has a lot of connections",
      color: "green",
    },
    {
      firstName: "Doctor",
      lastName: "Orchid",
      occupation: "Scientist",
      age: 26,
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      color: "white",
    },
    {
      firstName: "Victor",
      lastName: "Plum",
      occupation: "Designer",
      age: 22,
      description: "Billionaire video game designer",
      color: "purple",
    },
    {
      firstName: "Kassandra",
      lastName: "Scarlet",
      occupation: "Actor",
      age: 31,
      description: "She is an A-list movie star with a dark past",
      color: "red",
    },
    {
      firstName: "Eleanor",
      lastName: "Peacock",
      occupation: "Socialité",
      age: 36,
      description: "She is from a wealthy family and uses her status and money to earn popularity",
      color: "blue",
    },
    {
      firstName: "Lack",
      lastName: "Mustard",
      occupation: "Retired Football Player",
      age: 62,
      description: "He is a former football player who tries to get by on his former glory",
      color: "yellow",
    },
  ];
  
  const weaponsArray = [
    { name: "rope", weight: 10, },
    { name: "knife", weight: 8, },
    { name: "candlestick", weight: 2, },
    { name: "dumbell", weight: 30, },
    { name: "poison", weight: 2, },
    { name: "axe", weight: 15, },
    { name: "bat", weight: 13, },
    { name: "trophy", weight: 25, },
    { name: "pisto;", weight: 20, },
  ];
  
  const roomsArray = [
    { name: "Dining Room" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Library" },
    { name: "Billiard Room" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living Room" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest House" },
    { name: "Patio" },
  ];
  
  
  
  
  
  //### Iteration 2: Create the mystery
  function selectRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function pickMistery() {
    let randomSuspect = suspectsArray[selectRandom(0, suspectsArray.length - 1)];
    let randomWeapon = weaponsArray[selectRandom(0, weaponsArray.length - 1)];
    let randomRoom = roomsArray[selectRandom(0, roomsArray.length - 1)];
  
  
    return { suspect: randomSuspect, weapon: randomWeapon, room: randomRoom, };
  }
  
  
  
  
  
  
  //### Iteration 3: Reveal the mystery
  function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
  }
  
  console.log(revealMystery(pickMistery()))