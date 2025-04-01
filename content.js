async function clickWithDelay(selector, textContent, delayTime) {
    return new Promise(resolve => {
        let element = Array.from(document.querySelectorAll(selector)).find(el => el.textContent === textContent);
        if (element) {
            element.click();
            console.log(`Clicked: ${textContent}`);
        } else {
            console.log(`${textContent} not found.`);
        }
        setTimeout(resolve, delayTime);
    });
}

async function performSteps() {
    while (true) {
        // Step 1: Click the "Options" button
        let optionsButton = document.querySelector("[aria-label='Options']");
        if (optionsButton) {
            optionsButton.closest("button, div").click();
            console.log("Clicked Options button.");
        } else {
            console.log("Options button not found.");
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay

        // Step 2: Click the "Report" button
        let reportButton = Array.from(document.querySelectorAll("button")).find(el => el.textContent === "Report");
        if (reportButton) {
            reportButton.click();
            console.log("Clicked Report button.");
        } else {
            console.log("Report button not found.");
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay

        // Step 3: Click the "Report Account" button
        let reportAccountButton = Array.from(document.querySelectorAll("div")).find(el => el.textContent === "Report Account");
        if (reportAccountButton) {
            reportAccountButton.click();
            console.log("Clicked Report Account button.");
        } else {
            console.log("Report Account button not found.");
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay

        // Step 4: Click the reason "It's posting content that shouldn't be on Instagram"
        let reason1Button = Array.from(document.querySelectorAll("div")).find(el => el.textContent === "It's posting content that shouldn't be on Instagram");
        if (reason1Button) {
            reason1Button.click();
            console.log("Clicked: It's posting content that shouldn't be on Instagram");
        } else {
            console.log("Reason 1 button not found.");
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay

        // Step 5: Click the reason "It's spam"
        let reason2Button = Array.from(document.querySelectorAll("div")).find(el => el.textContent === "It's spam");
        if (reason2Button) {
            reason2Button.click();
            console.log("Clicked: It's spam");
        } else {
            console.log("Reason 2 button not found.");
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay

        // Step 6: Click the "Close" button
        let closeButton = Array.from(document.querySelectorAll("button")).find(el => el.textContent === "Close");
        if (closeButton) {
            closeButton.click();
            console.log("Clicked: Close button");
        } else {
            console.log("Close button not found.");
        }
        await new Promise(resolve => setTimeout(resolve,200 )); // 1-second delay

        // Exit loop after all steps
        // break;
    }
}

performSteps();