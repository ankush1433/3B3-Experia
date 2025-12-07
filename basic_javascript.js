
console.log("--- 1. Script is running! ---");


const fixedCommission = 0.02;  


let listingPrice = 5000000;
let isAvailable = true; 

console.log(`Agent: ${agentName}`);
console.log(`Price: ₹${listingPrice}`);
console.log(`Available Status: ${isAvailable}`);


let transactionFee = listingPrice * fixedCommission; 
console.log(`Transaction Fee: ₹${transactionFee}`);

listingPrice = listingPrice + transactionFee; 
console.log(`Total Cost to Buyer: ₹${listingPrice}`);


let isHighValue = listingPrice > 6000000;
console.log("Is this a high-value listing? " + isHighValue); 

let checkName = (agentName === "Ravi Sharma");
console.log("Is the agent Ravi Sharma? " + checkName); 



console.log("\n--- 4. Decisions (If/Else) ---");

if (isAvailable === true) {
    console.log("Action: Display property details to the user.");
} else {
    console.log("Action: Display 'Property is Under Contract'.");
}


console.log("\n--- 5. Simple Repetition ---");
for (let i = 1; i <= 3; i++) {
    console.log(`Checking property photo ${i} of 3...`);
}
