function loadFrameNumberData(frameNumber, callback) {
    fetch('wdBikes.json')
        .then(response => response.json())
        .then(data => {
            const result = findRecordByFrameNumber(data, frameNumber);
            callback(result);
        })
        .catch(error => {
            console.error("Error loading JSON data:", error);
        });
}

function findRecordByFrameNumber(data, frameNumber) {
    for (const record of data) {
        if (record["Frame Number"] && record["Engine Number"] && record["WD Serial No. Allocation"]) {
            const frameNumberRange = record["Frame Number"];
            const engineNumberRange = record["Engine Number"];
            const wdSerialNumberRanges = record["WD Serial No. Allocation"];
            
            // Match ranges like "16300–19299" for frame numbers
            const frameRangeMatch = frameNumberRange.match(/^(\d+)[–-](\d+)$/);

            // Match ranges like "41-G3WO-20000 to 41-G3WO-22999" for engine numbers
            const engineRangeMatch = engineNumberRange.match(/^(.*-)(\d+)\s+to\s+(.*-)(\d+)$/);

            if (frameRangeMatch && engineRangeMatch) {
                const frameStart = parseInt(frameRangeMatch[1], 10);
                const frameEnd = parseInt(frameRangeMatch[2], 10);
                const enginePrefixStart = engineRangeMatch[1];
                const engineStart = parseInt(engineRangeMatch[2], 10);
                const engineEnd = parseInt(engineRangeMatch[4], 10);

                // Generate lists of frame and engine numbers
                const frameNumbers = generateNumberRange(frameStart, frameEnd);
                const engineNumbers = generateNumberRange(engineStart, engineEnd);

                // Generate the full list of WD Serial Numbers by combining ranges
                const wdSerialNumbers = generateSerialNumberList(wdSerialNumberRanges);

                // Find the index of the frame number in the list
                const frameIndex = frameNumbers.indexOf(frameNumber);

                if (frameIndex !== -1 && frameIndex < engineNumbers.length && frameIndex < wdSerialNumbers.length) {
                    const correspondingEngineNumber = enginePrefixStart + (engineStart + frameIndex).toString();
                    const correspondingSerialNumber = wdSerialNumbers[frameIndex];
                 
                    // Return the full record with all required details
                    return {
                        "Maker's Type": "Matchless " + record["Maker's Type"],
                        "Military Class": record["Military Class"],
                        "WD Serial No.": correspondingSerialNumber,
                        "Engine No.": correspondingEngineNumber,
                        "Contract Number": record["Contract Number"],
                        "Dates": record["Dates"],
                        "Price": record["Price(s)"],
                        "Delivery Destination": record["Delivery Destination & Notes"]
                    };
                }
            } else if (parseInt(frameNumberRange, 10) === frameNumber) {
                return {
                    "Maker's Type": "Matchless " + record["Maker's Type"],
                    "Military Class": record["Military Class"],
                    "WD Serial No.": record["WD Serial No. Allocation"],
                    "Engine No.": record["Engine Number"],
                    "Contract Number": record["Contract Number"],
                    "Dates": record["Dates"],
                    "Price": record["Price(s)"],
                    "Delivery Destination": record["Delivery Destination & Notes"]
                };
            }
        }
    }
    return null;
}

// Helper function to generate a list of numbers from a range string
function generateNumberRange(start, end) {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}

// Helper function to generate the full list of WD Serial Numbers from multiple ranges
function generateSerialNumberList(rangeString) {
    const ranges = rangeString.split(',').map(range => range.trim());
    let fullList = [];
    ranges.forEach(range => {
        if (range.includes('–') || range.includes('-')) {
            // Handle range like "78038-78040"
            const [start, end] = range.split(/[–-]/).map(Number);
            if (start && end) {
                fullList = fullList.concat(generateNumberRange(start, end));
            }
        } else {
            // Handle individual number like "65552"
            const number = parseInt(range, 10);
            if (!isNaN(number)) {
                fullList.push(number);
            }
        }
    });
    return fullList;
}

function searchByFrameNumber() {
    const frameNumberInput = document.getElementById("frameNumberInput").value;
    const frameNumber = parseInt(frameNumberInput, 10);
    
    // Clear other fields
    document.getElementById("engineNumberInput").value = '';
    document.getElementById("serialNumberInput").value = '';


    if (isNaN(frameNumber)) {
        document.getElementById("wdLocationDisplay").textContent = "Please enter a valid frame number.";
        return;
    }

    loadFrameNumberData(frameNumber, function(result) {
        if (result) {
            document.getElementById("wdLocationDisplay").innerHTML = generateBikeCardHTML(result);
        } else {
            document.getElementById("wdLocationDisplay").textContent = "No matching record found.";
        }
    });
}




function loadEngineNumberData(engineNumber, callback) {
    fetch('wdBikes.json')
        .then(response => response.json())
        .then(data => {
            const result = findRecordByEngineNumber(data, engineNumber);
            callback(result);
        })
        .catch(error => {
            console.error("Error loading JSON data:", error);
        });
}

function findRecordByEngineNumber(data, engineNumber) {
    for (const record of data) {
        if (record["Engine Number"] && record["Frame Number"] && record["WD Serial No. Allocation"]) {
            const engineNumberRange = record["Engine Number"];
            const frameNumberRange = record["Frame Number"];
            const wdSerialNumberRanges = record["WD Serial No. Allocation"];

            // Match ranges like "41-G3WO-20000 to 41-G3WO-22999" for engine numbers
            const engineRangeMatch = engineNumberRange.match(/^(.*-)(\d+)\s+to\s+(.*-)(\d+)$/);

            if (engineRangeMatch) {
                const enginePrefixStart = engineRangeMatch[1];
                const engineStart = parseInt(engineRangeMatch[2], 10);
                const engineEnd = parseInt(engineRangeMatch[4], 10);
                const engineNumbers = generateNumberRange(engineStart, engineEnd);

                // Find the index of the engine number in the list
                const engineIndex = engineNumbers.indexOf(parseInt(engineNumber.replace(enginePrefixStart, ''), 10));

                if (engineIndex !== -1) {
                    const correspondingFrameNumber = generateNumberRange(parseInt(frameNumberRange.split('–')[0]), parseInt(frameNumberRange.split('–')[1]))[engineIndex];
                    const correspondingSerialNumber = generateSerialNumberList(wdSerialNumberRanges)[engineIndex];
                    
                    console.log(generateSerialNumberList(wdSerialNumberRanges))
                    console.log(engineIndex)
                    
                    return {
                        "Maker's Type": "Matchless " + record["Maker's Type"],
                        "Military Class": record["Military Class"],
                        "WD Serial No.": correspondingSerialNumber,
                        "Engine No.": enginePrefixStart + engineNumbers[engineIndex],
                        "Contract Number": record["Contract Number"],
                        "Dates": record["Dates"],
                        "Price": record["Price(s)"],
                        "Delivery Destination": record["Delivery Destination & Notes"]
                    };
                }
            } else if (engineNumberRange.includes(engineNumber)) {
                return {
                    "Maker's Type": "Matchless " + record["Maker's Type"],
                    "Military Class": record["Military Class"],
                    "WD Serial No.": record["WD Serial No. Allocation"],
                    "Engine No.": record["Engine Number"],
                    "Contract Number": record["Contract Number"],
                    "Dates": record["Dates"],
                    "Price": record["Price(s)"],
                    "Delivery Destination": record["Delivery Destination & Notes"]
                };
            }
        }
    }
    return null;
}

function searchByEngineNumber() {
    const engineNumberInput = document.getElementById("engineNumberInput").value.trim();

    // Clear other fields
    document.getElementById("frameNumberInput").value = '';
    document.getElementById("serialNumberInput").value = '';

    if (!engineNumberInput) {
        document.getElementById("wdLocationDisplay").textContent = "Please enter a valid engine number.";
        return;
    }

    loadEngineNumberData(engineNumberInput, function(result) {
        if (result) {
            document.getElementById("wdLocationDisplay").innerHTML = generateBikeCardHTML(result);
        } else {
            document.getElementById("wdLocationDisplay").textContent = "No matching record found.";
        }
    });
}


function loadSerialNumberData(serialNumber, callback) {
    fetch('wdBikes.json')
        .then(response => response.json())
        .then(data => {
            const result = findRecordBySerialNumber(data, serialNumber);
            callback(result);
        })
        .catch(error => {
            console.error("Error loading JSON data:", error);
        });
}

function findRecordBySerialNumber(data, serialNumber) {
    const serialNum = parseInt(serialNumber, 10);
    for (const record of data) {
        if (record["WD Serial No. Allocation"] && record["Frame Number"] && record["Engine Number"]) {
            const wdSerialNumberRanges = record["WD Serial No. Allocation"];
            const frameNumberRange = record["Frame Number"];
            const engineNumberRange = record["Engine Number"];

            const wdSerialNumbers = generateSerialNumberList(wdSerialNumberRanges);

            // Find the index of the serial number in the list
            const serialIndex = wdSerialNumbers.indexOf(serialNum);

            if (serialIndex !== -1) {
                const correspondingFrameNumber = generateNumberRange(
                    parseInt(frameNumberRange.split('–')[0]), 
                    parseInt(frameNumberRange.split('–')[1])
                )[serialIndex];
                
                const engineRangeMatch = engineNumberRange.match(/^(.*-)(\d+)\s+to\s+(.*-)(\d+)$/);
                let correspondingEngineNumber = record["Engine Number"];
                
                if (engineRangeMatch) {
                    const enginePrefix = engineRangeMatch[1]; // Keep the prefix, e.g., "41-G3WO-"
                    const engineNumbers = generateNumberRange(
                        parseInt(engineRangeMatch[2], 10), 
                        parseInt(engineRangeMatch[4], 10)
                    );
                    correspondingEngineNumber = enginePrefix + engineNumbers[serialIndex];
                }

                return {
                    "Maker's Type": "Matchless " + record["Maker's Type"],
                    "Military Class": record["Military Class"],
                    "WD Serial No.": wdSerialNumbers[serialIndex],
                    "Engine No.": correspondingEngineNumber,
                    "Contract Number": record["Contract Number"],
                    "Dates": record["Dates"],
                    "Price": record["Price(s)"],
                    "Delivery Destination": record["Delivery Destination & Notes"]
                };
            }
        }
    }
    return null;
}

function searchBySerialNumber() {
    const serialNumberInput = document.getElementById("serialNumberInput").value.trim();

    // Clear other fields
    document.getElementById("frameNumberInput").value = '';
    document.getElementById("engineNumberInput").value = '';

    const serialNumber = parseInt(serialNumberInput, 10);
    
    if (isNaN(serialNumber)) {
        document.getElementById("wdLocationDisplay").textContent = "Please enter a valid serial number.";
        return;
    }

    loadSerialNumberData(serialNumber, function(result) {
        if (result) {
            document.getElementById("wdLocationDisplay").innerHTML = generateBikeCardHTML(result);
        } else {
            document.getElementById("wdLocationDisplay").textContent = "No matching record found.";
        }
    });
}



function getTankImageByContractNumber(contractNumber, makersType) {
    switch (contractNumber) {
        case "C4608":
        case "C5247":
        case "C6094":
            return "images/tank1.png";
        case "C7183":
        case "C8078":
        case "C8934":
            return "images/tank2.png";       
        case "C1050":
        case "C2604":
        case "C4555":
            return "images/tank4.png";
        case "C6150":
            return "images/tank5.png";
        // Add more cases as needed
        default:
            // If no contract matches, check the Maker's Type for the default
            if (makersType.includes("G3L")) {
                return "images/tank3.png"; // Default image for G3L if no contract matches
            } else {
                return "images/matchless_logo.ai_.png"; // General default image
            }
    }
}


function generateBikeCardHTML(result) {
    let imageUrl;
    if (result["Maker's Type"].includes("G3L")) {
        imageUrl = "images/g3l2.jpg";
    } else if (result["Maker's Type"].includes("G3")) {
        imageUrl = "images/g3wo2.jpg";
    } else {
        imageUrl = "https://via.placeholder.com/600x300.png?text=No+Image+Available";
    }

    // Get the tank image based on the contract number
    const tankImageUrl = getTankImageByContractNumber(result["Contract Number"], result["Maker's Type"]);

    // Create the styled WD Serial Number
    const serialNumberStyled = `<span style="
        display: inline-block;
        background-color: #4D4B1D; /* This is a close approximation to the green in the image */
        color: white;
        font-weight: bold;
        font-family: Arial, sans-serif;
        font-size: 32px; /* Increased font size for larger text */
        padding: 10px 20px; /* Increased padding for larger size */
        border-radius: 60px;
    ">C ${result["WD Serial No."]}</span>`;

    return `
        <div class="card responsive-card">
            <div class="card-image">
                <img src="${imageUrl}" alt="Bike Image" style="width: 100%; height: auto;" />
            </div>
            <div class="card-content">
                <h3>${result["Maker's Type"]}</h3>
                <p><strong>Military Class:</strong> ${result["Military Class"]}</p>
                <p><strong>Engine No.:</strong> ${result["Engine No."]}</p>
                <p><strong>Contract Number:</strong> ${result["Contract Number"]}</p>
                <p><strong>Dates:</strong> ${result["Dates"]}</p>
                <p><strong>Price:</strong> ${result["Price"]}</p>
                <p><strong>Delivery Destination:</strong> ${result["Delivery Destination"]}</p>
                <p><strong>Tank:</strong> <img src="${tankImageUrl}" alt="Tank Image" style="max-width: 300px; display: inline-block; vertical-align: middle;" /></p>
                <p><strong>WD Serial No.:</strong> ${serialNumberStyled}</p>
            </div>
        </div>`;
}






function countBikesByContract(data) {
    const contractCounts = {};

    data.forEach(record => {
        const contractNumber = record["Contract Number"];
        const frameNumberRange = record["Frame Number"];
        const dates = record["Dates"];
        const makersType = record["Maker's Type"];
        const tankImageUrl = getTankImageByContractNumber(contractNumber, makersType);

        if (frameNumberRange) {
            const frameRangeMatch = frameNumberRange.match(/^(\d+)[–-](\d+)$/);

            let numberOfBikes = 1; // Default to 1 if no range
            if (frameRangeMatch) {
                const frameStart = parseInt(frameRangeMatch[1], 10);
                const frameEnd = parseInt(frameRangeMatch[2], 10);
                numberOfBikes = frameEnd - frameStart + 1;
            }

            if (!contractCounts[contractNumber]) {
                contractCounts[contractNumber] = {
                    makersType: makersType,
                    numberOfBikes: 0,
                    dates: dates,
                    tankImageUrl: tankImageUrl,
                    firstDate: extractFirstDate(dates)
                };
            }

            contractCounts[contractNumber].numberOfBikes += numberOfBikes;
        }
    });

    // Convert the object to an array and sort by the first date
    const sortedContracts = Object.entries(contractCounts).sort((a, b) => {
        return a[1].firstDate - b[1].firstDate;
    });

    return sortedContracts;
}

function generateContractTableHTML(sortedContracts) {
    const khakiGreenNo3 = "#4D4B1D"; // Khaki Green No. 3 color

    let tableHTML = `
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
                <tr style="background-color: ${khakiGreenNo3}; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Model</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Contract Number</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Number of Bikes</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Dates</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Tank Type</th>
                </tr>
            </thead>
            <tbody>`;

    sortedContracts.forEach(([contractNumber, details]) => {
        tableHTML += `
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${details.makersType}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${contractNumber}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${details.numberOfBikes}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${details.dates}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">
                    <img src="${details.tankImageUrl}" alt="Tank Image" style="max-width: 50px; vertical-align: middle;" />
                </td>
            </tr>`;
    });

    tableHTML += `</tbody></table>`;
    return tableHTML;
}

function displayContractTable(data) {
    const contractCounts = countBikesByContract(data);
    const contractTableHTML = generateContractTableHTML(contractCounts);
    document.getElementById("contractTableDisplay").innerHTML = contractTableHTML;
}

function loadWDBikeTable() {
    fetch('wdBikes.json')
        .then(response => response.json())
        .then(data => {
            displayContractTable(data); // Display the contract table after processing the data
        })
        .catch(error => {
            console.error("Error loading JSON data:", error);
        });
}

function parseDate(dateString) {
    const dateParts = dateString.split('/');
    if (dateParts.length === 3) {
        // Assuming date format is DD/MM/YY
        const day = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10) - 1; // Months are zero-based in JavaScript Date
        const year = parseInt(dateParts[2], 10) + 2000; // Assuming all dates are in the 20th century
        return new Date(year, month, day);
    }
    return null;
}

function extractFirstDate(dates) {
    const dateMatch = dates.match(/(\d{2}\/\d{2}\/\d{2})/);
    if (dateMatch) {
        return parseDate(dateMatch[1]);
    }
    return new Date(); // Return a very early date if no match is found
}