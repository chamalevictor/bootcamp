/* BEST SOLUTION
function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}
*/


function getGrade (s1, s2, s3) {
    // Code here
    const avg = (s1+s2+s3)/3;
    
    if (avg >=90) return 'A';
    else if (avg >= 80 && avg< 90) return 'B';
    else if (avg >= 70 && avg< 80) return 'C';
    else if (avg >= 60 && avg< 70) return 'D';
    else return 'F';
  }

  console.log(getGrade(95,90,93));