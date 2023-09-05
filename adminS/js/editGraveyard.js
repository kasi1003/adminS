$(document).ready(function () {
    $.ajax({
        url: '../php/editGraveyard.php',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var tableBody = $('#data-table tbody');

            // Check if there is at least one cemetery and one section
            if (data.cemeteries.length > 0 && data.sections.length > 0) {
                var cemetery = data.cemeteries[0];
                var section = data.sections[0];

                var newRow = $('<tr>');
                newRow.append('<td>' + cemetery.CemeteryName + '</td>');
                newRow.append('<td>' + section.SectionCode + '</td>');
                newRow.append('<td>' + section.TotalGraves + '</td>');
                newRow.append('<td>' + section.AvailableGraves + '</td>'); 
                newRow.append('<td>' + cemetery.LocationName + '</td>');
                tableBody.append(newRow);
            } else {
                // Handle the case where there is no data
                tableBody.append('<tr><td colspan="5">No data available</td></tr>');
            }
        },
        error: function () {
            alert('Error fetching data from the server');
        }
    });
});
