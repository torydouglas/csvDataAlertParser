# CSV Line Checker Tool

This is a simple internal tool designed to read a directory of .csv files, check each line for a certain value, and append only those lines to a specific output file.

## Usage

1. **Setup**:
   - Place your .csv files in the "data_files" directory.
   - Ensure you have Node.js installed on your system.

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
