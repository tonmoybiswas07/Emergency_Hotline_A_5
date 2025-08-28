const heartIcon = document.getElementsByClassName("heart-icon");

for (const icon of heartIcon) {
  icon.addEventListener("click", function () {
    const heartNumber = document.getElementById("heart-number").innerText;
    console.log(heartNumber);
    const totalOfHeartNumbers = Number(heartNumber) + 1;
    document.getElementById("heart-number").innerText = totalOfHeartNumbers;
  });
}

// call btn function
const time = new Date().toLocaleTimeString();

const callbtns = document.getElementsByClassName("call-button");
for (const button of callbtns) {
  const cardTitle = button.parentNode.parentNode.children[2].innerText;
  const cardNumber = button.parentNode.parentNode.children[3].innerText;
  button.addEventListener("click", function () {
    const callingCoin = document.getElementById("calling-coin").innerText;
    callingCoinConverted = parseInt(callingCoin);
    const afterCallingPoint = callingCoinConverted - 20;
    if (afterCallingPoint < 0) {
      alert(
        "❌You don't have enough coins. You need at least 20 coins to make a call."
      );

      return afterCallingPoint;
    }

    const updatedCoin = (document.getElementById("calling-coin").innerText =
      afterCallingPoint);

    alert("📞 Calling " + cardTitle + cardNumber + "...");

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.innerHTML = `
     <div
                class="flex justify-between items-center bg-gray-100 p-3 mt-4 rounded-xl"
              >
                <div>
                  <h2 class="font-bold mb-2">${cardTitle}</h2>
                  <p> ${cardNumber} </p>
                </div>
                <p class="text-nowrap"> ${time} </span> AM</p>
              </div>
    `;
    historyContainer.append(div);
  });
}

// history section
document.getElementById("clear-btn").addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});
// copy section
const copyButton = document.getElementsByClassName("copy-button");
for (const button of copyButton) {
  button.addEventListener("click", function () {
    const cardNumber = button.parentNode.parentNode.children[3].innerText;
    alert("The number has been copied:" + cardNumber);
    const copyNumber = document.getElementById("copy-number").innerText;
    const copyNumberConvert = parseInt(copyNumber);
    const updateNumber = copyNumberConvert + 1;
    document.getElementById("copy-number").innerText = updateNumber;
    // number copy
    navigator.clipboard.writeText(cardNumber);
  });
}
