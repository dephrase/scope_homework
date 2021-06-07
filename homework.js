
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);
  //Murderer is Miss Scarlet
  //DeclareMurderer called a function which returns the value of the key murderer from the scenario object

  const murderer = 'Professor Plum';

  const changeMurderer = function() {
    murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);
  //Murderer is Professor Plum
  //murderer is a const so can't be changed in the changeMurderer function

  let murderer = 'Professor Plum';

  const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
  }
  
  const firstVerdict = declareMurderer();
  console.log('First Verdict: ', firstVerdict);
  //firstVerdict is Mrs Peacock because the murderer is changed to Mrs Peacock within the delcareMurderer function
  
  const secondVerdict = `The murderer is ${murderer}.`;
  console.log('Second Verdict: ', secondVerdict);
  //secondVerdict is Professor Plum, because murderer is only changed to Mrs Peacock as a let within a function that is not called


let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
//1. Miss Scarlet
//2. Professor Plum
//3. Colonel Mustard - because the declareAllSuspects function changes suspectThree to Colonel Mustard
console.log(`Suspect three is ${suspectThree}.`);
//Mrs. Peacock - Suspect3 in the last console log is pulled from the first time the variable is defined


const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);
  //The weapon is the revolver
  //Although scenario is a const, the keys and values can be mutated

  let murderer = 'Colonel Mustard';

  const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      murderer = 'Mrs. White';
    }
  
    plotTwist();
  }
  
  const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);
  //Mrs. White
  //The plotTwist function is within the change murderer function, so plotTwist will update the murderer from Mr. Green

  let murderer = 'Professor Plum';

  const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      let murderer = 'Colonel Mustard';
  
      const unexpectedOutcome = function() {
        murderer = 'Miss Scarlet';
      }
  
      unexpectedOutcome();
    }
  
    plotTwist();
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);
  //Mr. Green is the murderer because plottwist and unexpectedOutcome set variables only within their scope
///////////////////////////////////////////////////

  const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);
  //Colonel Mustard with the candle stick
  ///////////////////////////////////////

  let murderer = 'Professor Plum';

  if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);
//The murderer is Professor Plum
//Because the murderer is changed, but using a let, so only within the if statement
