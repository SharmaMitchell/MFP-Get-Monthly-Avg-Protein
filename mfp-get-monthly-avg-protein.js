function calculateAverageProtein(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const reportBoxes = doc.querySelectorAll('[data-testid="qa-regression-report"]');

    const monthlyProtein = {};

    reportBoxes.forEach(box => {
        const dateElement = box.querySelector('[data-testid="qa-regression-report-date"]');
        if (!dateElement) return; // Skip if date element not found
        const dateText = dateElement.textContent.trim();
        const month = dateText.split(' ')[0];

        const table = box.querySelector('.MuiTable-root');
        const totalRow = table.querySelector('[data-testid="qa-regression-foods-total-data"]');
        const totalProtein = parseInt(totalRow.querySelector('th:nth-child(5)').textContent.trim(), 10);

        if (!isNaN(totalProtein)) {
            if (monthlyProtein[month]) {
                monthlyProtein[month].totalProtein += totalProtein;
                monthlyProtein[month].totalDays++;
            } else {
                monthlyProtein[month] = {
                    totalProtein: totalProtein,
                    totalDays: 1
                };
            }
        }
    });

    const averageProteinPerMonth = {};
    for (const month in monthlyProtein) {
        averageProteinPerMonth[month] = monthlyProtein[month].totalProtein / monthlyProtein[month].totalDays;
    }

    return averageProteinPerMonth;
}

// Call the function with your HTML data
const htmlData = document.querySelector('.css-1udhdkt').innerHTML;
const averageProtein = calculateAverageProtein(htmlData);
console.log(averageProtein);
