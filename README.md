# MFP-Get-Monthly-Avg-Protein
Userscript to parse MFP printable diary entries and output monthly average protein per day

## Usage (Web browser)
- Navigate to https://www.myfitnesspal.com/reports/printable-diary and enter your username
  - This can also be accessed by logging into MFP and navigating to Reports -> Printable Diary
- Enter your desired date range and ensure that only "Food Diary" is checked (do not enable "Exercise Diary")
- Click "Change Report" to load the data for your selected date range
- Open the browser console (right click + "Inspect"), and click the "Console" tab
  - Alternatively, press "F12" 
- Copy the code from [mfp-get-monthly-avg-protein.js](https://github.com/SharmaMitchell/MFP-Get-Monthly-Avg-Protein/blob/main/mfp-get-monthly-avg-protein.js) into the console, and press "Enter" to run the code
- This should output an expandable object containing average protein values per month
![image](https://github.com/SharmaMitchell/MFP-Get-Monthly-Avg-Protein/assets/90817905/169693fb-8185-48b7-af3f-1a27f6a3bc04)

- This script can be modified to generage averages for other macros as well, see [line 16 of the script](https://github.com/SharmaMitchell/MFP-Get-Monthly-Avg-Protein/blob/4ee075b8f6260733649a0c9d4a10557058888b01/mfp-get-monthly-avg-protein.js#L16). `nth-child(5)` selects the fifth column of the "totals" row. This can be modified to track Calories (`nth-child(2)`, Carbs (3), Fat (4), etc.)
