<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$database = "htdb";

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Extract data from the form
$cemeteryName = $_POST['graveyardName'];
$locationName = $_POST['graveyardLocation'];
$sectionCount = $_POST['sectionNumber'];
$numberOfGraves = $_POST['numberOfGraves'];


// Insert data into the cemeteries table
$sql = "INSERT INTO cemeteries (CemeteryName, LocationName) VALUES ('$cemeteryName', '$locationName')";
if ($conn->query($sql) === TRUE) {
    // Get the ID of the newly inserted cemetery
    $cemeteryID = $conn->insert_id;

    // Insert data into the sections table for each section
    for ($i = 0; $i < $sectionCount; $i++) {
        $sectionCode = ""; // Define how you get or generate the section code
        // Assuming you have a method to generate or retrieve the section code.

        $totalGraves = $numberOfGraves; // Set the totalGraves as $numberOfGraves
        $availableGraves = $numberOfGraves; // Assuming availableGraves is also set to $numberOfGraves initially.

        $sql = "INSERT INTO sections (SectionCode, TotalGraves, AvailableGraves) 
                VALUES ('$sectionCode', $totalGraves, $availableGraves)";
        $conn->query($sql);
    }
    // Redirect to a success page or perform other actions as needed
    header("Location: ../html/addGraveyard.php");
    exit();
} else {
    // Handle the case where the cemetery insertion fails
    echo "Error: " . $sql . "<br>" . $conn->error;

}
// Close the database connection
$conn->close();
?>
