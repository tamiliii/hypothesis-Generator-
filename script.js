function generateHypothesis() {
    let input = document.getElementById("inputText").value.trim();

    if (input === "") {
        document.getElementById("output").innerText = "⚠️ Please enter a research topic.";
        return;
    }

    let hypotheses = [
        `If ${input} increases, then system efficiency will improve.`,
        `${input} significantly affects performance outcomes in industrial systems.`,
        `Optimizing ${input} can reduce system failures and maintenance costs.`,
        `${input} is directly proportional to output quality and productivity.`,
        `Changes in ${input} influence energy consumption and system stability.`,
        `There is a measurable relationship between ${input} and operational efficiency.`,
        `${input} can be used as a predictive factor for system performance.`,
        `Improving ${input} will enhance overall system reliability.`
    ];

    let randomIndex = Math.floor(Math.random() * hypotheses.length);
    let result = hypotheses[randomIndex];

    document.getElementById("output").innerText = result;
}
