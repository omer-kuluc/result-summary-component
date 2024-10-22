const summaryData = [
  {
    name: 'reactionScore',
    label: 'Reaction',
    icon: 'reaction-icon.svg',
    score: 80,
  },
  {
    name: 'memoryScore',
    label: 'Memory',
    icon: 'memory-icon.svg',
    score: 70,
  },
  {
    name: 'verbalScore',
    label: 'Verbal',
    icon: 'Verbal-icon.svg',
    score: 60,
  },
  {
    name: 'visualScore',
    label: 'Visual',
    icon: 'Visual-icon.svg',
    score: 70,
  },
];

let total_score = 0;

for(const data of summaryData) {
  if(data.name=='reactionScore') {
    reactionGradeTxt.innerText = data.score;
    total_score += data.score;
  }
  else if(data.name=='memoryScore') {
    memoryGradeTxt.innerText = data.score;
    total_score += data.score;
  }
  else if(data.name=='verbalScore') {
    verbalGradeTxt.innerText = data.score;
    total_score += data.score;
  }
  else if(data.name=='visualScore') {
    visualGradeTxt.innerText = data.score;
    total_score += data.score;
  }
    averageTxt.innerText = total_score/4;
  }

// for (let i=0; i<summaryData.length; i++) {
//   total_score+= summaryData[i].score;
//   if(i==3 && total!==344) {
//     averageTxt.innerText = Number(total_score/4); 
//   }
// }


  // for (let i=0; i<summaryData.length; i++) {
  //   if(summaryData[i].name=='reactionScore') {
  //     total_score+= data.score;
  //     reactionGradeTxt.innerText = data.score;

  //   }
  //   if(summaryData[i].name=='memoryScore') {
  //     total_score+= data.score;
  //     reactionGradeTxt.innerText = data.score;

  //   }
  //   if(summaryData[i].name=='verbalScore') {
  //     total_score+= data.score;
  //     reactionGradeTxt.innerText = data.score;

  //   }
  //   if(summaryData[i].name=='visualScore') {
  //     total_score+= data.score;
  //     reactionGradeTxt.innerText = data.score;
  //   }

  //   averageTxt.innerText = total_score /4 ;

  // }

  // function total_score() { 
  //   for(let i =0; i<summaryData.length ; i++) {
  //   total_score+=summaryData[i].score;
  //   averageTxt.innerText = Number(total_score/4);
  //   }

  // }