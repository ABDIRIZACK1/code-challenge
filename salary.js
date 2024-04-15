// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.3; // 30% tax rate
    const nhifRate = 0.025; // 2.5% NHIF rate
    const nssfRate = 0.06; // 6% NSSF rate

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate tax
    const tax = grossSalary * taxRate;

    // Calculate NHIF deductions
    const nhifDeductions = grossSalary * nhifRate;

    // Calculate NSSF deductions
    const nssfDeductions = grossSalary * nssfRate;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    // Return the results
    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

// Example usage:
const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Tax:", salaryDetails.tax);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);
