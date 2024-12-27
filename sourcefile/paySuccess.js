let reservation = JSON.parse(localStorage.getItem('reservation')) || [];

let data = {
    movie: localStorage.getItem('movieInfo'),
    when: localStorage.getItem('whenInfo'),
    time: localStorage.getItem('timeInfo'),
    theater: localStorage.getItem('theaterInfo'),
    seat: localStorage.getItem('seatInfo')
};

reservation.push(data);
localStorage.setItem('reservation', JSON.stringify(reservation));



// var csv = '영화,관람일,관람시간,관람극장,관람좌석\n';

// //create CSV file data in an array  
// var csvFileData = [
//     [movieInfo, whenInfo, timeInfo, theaterInfo, seatInfo]
// ];
    
// //merge the data with CSV  
// csvFileData.forEach(function(row) {
//     csv += row.join(',');
//     csv += "\n";
// });

// // //display the created CSV data on the web browser
// // document.write('<h1>This reservation</h1>');
// // document.write('year: ' + reservation.year + '<Br>');
// // document.write('month: ' + reservation.month  + '<Br>');
// // document.write('date: ' + reservation.date  + '<Br>');
// // document.write('time: ' + reservation.time  + '<Br>');
// // document.write('destination: ' + reservation.destination  + '<Br>');
// // document.write('train: ' + reservation.train  + '<Br>');

// // var hiddenElement = document.createElement('a');
// // hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
// // hiddenElement.target = '_blank';

// const bom = "\uFEFF";
// const csvBlob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8;' });

// const hiddenElement = document.createElement('a');
// hiddenElement.href = URL.createObjectURL(csvBlob);
// hiddenElement.target = '_blank';

// //provide the name for the CSV file to be downloaded  
// hiddenElement.download = 'This reservation.csv';
// hiddenElement.click();