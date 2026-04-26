const astrologyPredictions = [
  "You will experience a period of personal growth in the coming months.",
  "A new opportunity will present itself when you least expect it.",
  "Your relationships will deepen as you learn to communicate better.",
  "Financial stability will improve through careful decisions.",
  "You will reconnect with someone from your past.",
  "A major decision will shape your future path soon.",
  "Your confidence will increase as you overcome recent challenges.",
  "Travel opportunities may arise unexpectedly.",
  "You will discover a hidden talent within yourself.",
  "A positive shift in your career is on the horizon.",
  "Emotional balance will bring clarity to your life.",
  "You will attract supportive and positive people around you.",
  "A long-standing problem will finally be resolved.",
  "Your hard work will soon start to pay off.",
  "You will gain new insights about your life purpose.",
  "Unexpected financial gains may come your way.",
  "Your intuition will guide you toward the right choices.",
  "A new friendship will have a lasting impact on you.",
  "You will feel more motivated to achieve your goals.",
  "Challenges will teach you valuable life lessons.",
  "You will find peace by letting go of past worries.",
  "Your creativity will flourish in the near future.",
  "A turning point in your personal life is approaching.",
  "You will take steps toward improving your health.",
  "Opportunities for learning and growth will increase.",
  "You will feel more connected to your inner self.",
  "A surprise event will bring joy into your life.",
  "Your patience will be rewarded soon.",
  "You will overcome doubts and move forward confidently.",
  "A new chapter in your life will begin soon."
];
const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];
const avoidSuggestions = [
  "Avoid procrastinating on important tasks.",
  "Avoid making decisions in anger or frustration.",
  "Avoid comparing yourself constantly to others.",
  "Avoid ignoring your physical and mental health.",
  "Avoid overspending beyond your financial limits.",
  "Avoid trusting people blindly without understanding them.",
  "Avoid wasting time on unproductive habits.",
  "Avoid neglecting your responsibilities.",
  "Avoid negative self-talk and self-doubt.",
  "Avoid staying in toxic relationships.",
  "Avoid multitasking excessively without focus.",
  "Avoid skipping sleep for short-term gains.",
  "Avoid reacting impulsively without thinking.",
  "Avoid depending completely on others for success.",
  "Avoid ignoring feedback and constructive criticism.",
  "Avoid unhealthy eating habits regularly.",
  "Avoid overthinking situations beyond control.",
  "Avoid quitting too early when facing challenges.",
  "Avoid being afraid to try new opportunities.",
  "Avoid holding grudges for too long.",
  "Avoid distractions while working on important goals.",
  "Avoid lying or being dishonest in relationships.",
  "Avoid neglecting skill development.",
  "Avoid chasing quick success without effort.",
  "Avoid poor time management.",
  "Avoid ignoring long-term consequences of actions.",
  "Avoid surrounding yourself with negative influences.",
  "Avoid taking unnecessary risks without planning.",
  "Avoid being inconsistent with your goals.",
  "Avoid losing focus on what truly matters."
];

submit=document.getElementById("submit");
submit.addEventListener("click",()=>{
    const name=document.getElementById("name").value;
    const month=parseInt(document.getElementById("date").value.split("-")[1]);
    const day=parseInt(document.getElementById("date").value.split("-")[2]);
    const prediction=astrologyPredictions[Math.floor(Math.random()*astrologyPredictions.length)];
    let zodiac = "";

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) zodiac = "Aries";
    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) zodiac = "Taurus";
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) zodiac = "Gemini";
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) zodiac = "Cancer";
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) zodiac = "Leo";
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) zodiac = "Virgo";
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) zodiac = "Libra";
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) zodiac = "Scorpio";
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) zodiac = "Sagittarius";
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) zodiac = "Capricorn";
    else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) zodiac = "Aquarius";
    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) zodiac = "Pisces";
      const avoid=avoidSuggestions[document.getElementById("date").value.split("-")[2]-1];
    document.getElementById("result").innerHTML=`Hello ${name},<br>
     your zodiac sign is ${zodiac},<br>
    future prediction: ${prediction},<br>
     suggestion: ${avoid}`;
})