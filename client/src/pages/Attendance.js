import React, { useEffect, useState } from 'react';
import Papa from 'papaparse'; // Library for parsing CSV data
import './css/Attendance.css';

const Attendance = () => {
  const [sheetData, setSheetData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [selectedYear, setSelectedYear] = useState('2nd Year'); // State for selected year
  const selectedColumns = ['NAME', 'USN', 'SUB 1', 'SUB 2']; // List of columns to display

  // URLs for different years' CSV files
  const sheetURLs = {
    '2nd Year': 'https://docs.google.com/spreadsheets/d/17Y-gjPDH3OrlToy0aVfsJHO4ppDtfU2e07XTvVHNccI/export?format=csv',
    '3rd Year': 'https://docs.google.com/spreadsheets/d/1iCcXGv-rwNemW6bobt8nEgynqI3lKCm6TKk8vycVxv8/export?format=csv',
    '4th Year': 'https://docs.google.com/spreadsheets/d/1qrfa_PDh9Lzp0LRYfJM9vGwyFiVubQ7fjwdz0Z4yuDQ/export?format=csv',
  };

  useEffect(() => {
    const fetchSheetData = async () => {
      const sheetURL = sheetURLs[selectedYear]; // Get the URL based on selected year

      try {
        const response = await fetch(sheetURL);
        const csvText = await response.text();

        // Parse CSV data
        Papa.parse(csvText, {
          header: true, // Use first row as column headers
          skipEmptyLines: true,
          complete: (results) => {
            setSheetData(results.data); // Set parsed data to state
          },
        });
      } catch (error) {
        console.error('Error fetching or parsing the Google Sheets data:', error);
      }
    };

    fetchSheetData();
  }, [selectedYear]); // Refetch data whenever the selected year changes

  // Filter sheet data based on the search query
  const filteredData = sheetData.filter(row => {
    return selectedColumns.some(column => 
      row[column]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="attendance-container">
      <section className="sheet-data">
        <h2>Student List</h2>

        {/* Dropdown to select year */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)} // Update selected year
          className="year-dropdown"
        >
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>

        {/* Search input field */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          className="search-input"
        />

        {filteredData.length > 0 ? (
          <div className="table-wrapper">
            <table className="sheet-table">
              <thead>
                <tr>
                  {/* Dynamically generate table headers based on selected columns */}
                  {selectedColumns.map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Dynamically generate table rows based on selected columns */}
                {filteredData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {selectedColumns.map((column, cellIndex) => (
                      <td key={cellIndex}>{row[column]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No matching data found...</p>
        )}
      </section>
    </div>
  );
};

export default Attendance;
