/*
// while loop:

while হচ্ছে প্রায় if এর কাছাকাছি । তবে এক না।  if  এক বার কাজ করে
 কিন্তু while কাজ করে বারবার । if শর্ত পুরন করলে কাজ বন্ধ হয়ে যায় কিন্তু while কে
একটা লিমিটের মধ্যে ব্যবাহার করা যায় । মনে করি একটি বিয়ে বাড়ীতে ১০ জনকে কে খাবার
দেওয়া হবে। সে এই ১০ বার খাবার না দেওয়া পর্যন্ত দিতে থাকবে। 
   
   */

var roastGiven = 0;
while (roastGiven < 10) {
  console.log("Roast Den, please !!");
  console.log(roastGiven);
  roastGiven++;
}

/**
 * Loop ব্যবাহার করতে হলে চারটি জিনিস লাগে  । 
 * 1. Loop Variable
 * 2. Condition inside while  
  3. loop body 
  4. change the loop variable 
 */
