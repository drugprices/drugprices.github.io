<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drug Price Transparency</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            text-align: center;
        }
        .container {
            margin: 50px auto;
            max-width: 600px;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input {
            width: 80%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            padding: 10px 20px;
            color: white;
            background-color: #007BFF;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .results {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Drug Price Transparency</h1>
        <p>Search for drugs and get the prices instantly!</p>
        <input type="text" id="drugInput" placeholder="Enter drug name" />
        <button onclick="searchDrug()">Search</button>
        <div class="results" id="results"></div>
    </div>
    <script>
        function searchDrug() {
            const drug = document.getElementById('drugInput').value;
            document.getElementById('results').innerHTML = `<p>Searching for ${drug}...</p>`;
            // Logic for backend/API fetching will go here later
        }
    </script>
</body>
</html>
