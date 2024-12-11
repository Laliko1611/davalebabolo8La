// დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს



function daabrune(m, n) {
    if (m > n) {
        return m;
    } else if (n > m) {
        return n;
    } else {
        return 0;
    }
}


console.log(daabrune(2, 12)); 
console.log(daabrune(2, 12)); 
console.log(daabrune(17, 17)); 


//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
 





function cifrebi(a,b) {
 return a+b;


}
console.log(cifrebi(15,18));

//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)

function saxeligvari() {
    console.log("ლალი გოლეთიანი");
}


saxeligvari(); 






//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)

function srulisaxeli (firstname, lastname) {
    return `${firstname} ${lastname}`;
}


const laliko = srulisaxeli("lali", "goletiani");
console.log(laliko); 





//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე 
// (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, 
//დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი) 
function datvalefunqcia(n) {
    let cifri = 1;
    for (let i = 1; i <= n; i++) {
        cifri *= i;
    }
    return cifri;
}



console.log(datvalefunqcia(5)); 


// Student obieqti
const student = {
    firstName: "laliko",
    lastName: "goletiani",
    age: 28,
    scores: [4, 7, 5, 3, 2],
    fullName() {
      return `${student.firstName} ${student.lastName}`;
    }
  };
  


  // 6. დაბეჭდეთ სტუდენტის სრული სახელი (სახელი+გვარი- გამოიყენეთ student ობიექტის მეთოდი)
  console.log("Full Name:", student.fullName());
  
 // 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს (scores) და ფუნქცია დააბრუნებს ქულების ჯამს
function calculateSum(scores) {
    return scores.reduce((sum, score) => sum + score, 0);
  }
  
  console.log("Total Scores:", calculateSum([5, 10, 12]));
  
  // 8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
  console.log("Name and Age:", `${student.firstName}, ${student.age}`);
  