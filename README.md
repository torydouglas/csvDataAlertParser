# CSV Line Checker Tool

This is a simple internal tool designed to read a directory of .csv files, check each line for a certain value, and append only those lines to a specific output file.

## Usage

1. **Setup**:

   - Place your .csv files in the "data_files" directory.
   - Ensure you have Node.js installed on your system. I used v21.6.2 for this code
   - Modify the .env file variable named CSV_COLUMN_TO_FILTER to the column index (starting at zero) in the csv file that you want to check the value for. For example the 2nd column would have an index of 1.
   - Modify the .env file variable named CSV_VALUE_TO_FILTER to the value that if found in the configured column will be added to the output csv file. The code is currently looking for exact match to be included.

2. **Run the Tool**:

   - Open your terminal or command prompt.
   - Navigate to the project directory.
   - Run the following command:
     ```
     npm run start
     ```

3. **Output**:
   - The program will generate a single .csv file in the "output_file" directory.
   - This output file will contain only the lines from the input .csv files that match the specified criteria.

## Example

Suppose you have several .csv files containing sales data. You want to extract only the rows where the sales amount exceeds $1,000. This tool will help you achieve that by creating a consolidated .csv file with the relevant data.

Feel free to customize this README to provide more details specific to your use case. Happy coding! 🚀
