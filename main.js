var choicesArray = [];
var i = 0;
var j = 0;
var rowNum = 0;
var rowRng = 0;
var rowLimit = 0;
// var defineId;
var rng = 0;
var select;
var rngOn = 0;
var rowDeletion;

// add row number to choices

$( document ).ready(function() {

    function createVariables(){
      
        for (var i = 0; i < 100; i++) {
            var choices = {
                id: i,
                row:0,
                cname:null,
                cpercentage:0
            };
            choicesArray.push(choices);
        }
        console.log(choicesArray);
      };

    function emptyInput() {
        document.getElementById("inputChoice").value = "";
        document.getElementById("inputPercentage").value = "";
    };

    function emptyOutput() {
        choicesArray.splice(0,choicesArray.length)
        $("#morning-table-output td").remove();
        $("#morning-table-output tr").remove();
        i = 0;
        j = 0;
        rowNum = 0;
        rowRng = 0;
        rowLimit = 0;
        rngOn = 0;
        addHeaders();
        createVariables();
    };

    function addRow() {
        // $("#morning-table-output > tbody").append("<tr>");
        var table = document.getElementById("morning-table-output");
        var tableRow = table.insertRow(-1);
        tableRow.id = "row" + rowNum;
        for (var i = 0; i < 8; i++) {
            var x = tableRow.insertCell(-1);
            x.id = tableRow.id + "d" + i; 
            console.log(x);
        }
        rowNum++;
        rowLimit = 0;
        j = 0;
    }

    function endRow() {
        $("#morning-table-output > tbody").append("</tr>");
    }

    function insertrng() {
        for (var i = 0; i < rowNum; i++) {
            var row = "row" + (rowNum);
            var x = document.getElementById(row);
            var y = x.insertCell(-1);
            y.innerHTML = Math.random();
        };
        rngOn = 1;
    }

    function addHeaders() {
        $("#morning-table-output > tbody").append("<tr><th>Choice 1</th>" + "<th>Choice 2</th>" + "<th>Choice 3</th>" + "<th>Choice 4</th>" + "<th>Choice 5</th>" + "<th>Choice 6</th>" + "<th>Choice 7</th>" + "<th>Choice 8</th>" + "<th>RNG</th></tr>" + "<div class='buttonGen'><button class='generateRow'>Add Row</button></div>");
    }

    function appendOne() {
        if (j == 0) {
            // addRow();
            var defineId = "row" + (rowNum - 1);
            var row = defineId;
            var z = row + "d" + j;
            var y = document.getElementById(z);
            y.innerHTML = choicesArray[i].cname + " (" + choicesArray[i].cpercentage + ")";
            // $("#morning-table-output > tbody").append("<td>" + choicesArray[i].cname + " (" + choicesArray[i].cpercentage + ")</td>");
            j++;
        } else if (j <= 6) {
            var defineId = "row" + (rowNum - 1);
            var row = defineId;
            var z = row + "d" + j;
            var y = document.getElementById(z);
            y.innerHTML = choicesArray[i].cname + " (" + choicesArray[i].cpercentage + ")";
            // $("#morning-table-output > tbody").append("<td>" + choicesArray[i].cname + " (" + choicesArray[i].cpercentage + ")</td>");
            j++;
        } else if (j == 7) {
            var defineId = "row" + (rowNum - 1);
            var row = defineId;
            var z = row + "d" + j;
            var y = document.getElementById(z);
            y.innerHTML = choicesArray[i].cname + " (" + choicesArray[i].cpercentage + ")";
            // $("#morning-table-output > tbody").append("<td>" + choicesArray[i].cname + " (" + choicesArray[i].cpercentage + ")</td>");
            // endRow();
            j = 0;
        }
    };

    function storeBut() {
        if (rowLimit <= 7) {
            choicesArray[i].cname = document.getElementById("inputChoice").value;
            choicesArray[i].cpercentage = document.getElementById("inputPercentage").value;
            choicesArray[i].row = rowNum - 1;
            appendOne();
            console.log(choicesArray[i].cname);
            console.log(choicesArray[i].cpercentage);
            i++;
            rowLimit++;
        } else {
            alert("You can not add any more choices to this row.");
        }
    };

    function clearRng() {
        if (rngOn == 1) {
            for (var i = 0; i < rowNum + 1; i++) {
                rowDeletion = "row" + i;
                var y = document.getElementById(rowDeletion);
                y.deleteCell(-1);
            }
        }
    }


    function generateStrategy() {
        // rng = Math.floor(Math.random() * 101);
        // if (rng < choicesArray[0].cpercentage) {
        //     select = choicesArray[0];
        // }
        clearRng();
        insertrng();
    }

    // var ipCheckVar1 = 0;
    // var ipCheckVar2 = 0;
    // var ipCheckVar3 = 0;
    // var ipCheckVar4 = 0;
    // var ipCheckVar5 = 0; 
    // var oopCheckVar1 = 0;
    // var oopCheckVar2 = 0;
    // var oopCheckVar3 = 0;
    // var threeCheckVar1 = 0;
    // var threeCheckVar2 = 0;
    // var threeCheckVar3 = 0;
    // var raisedVar1 = 0;
    // var raisedVar2 = 0;

    // var ipTurnVar1 = 0;
    // var ipTurnVar2 = 0;
    // var ipTurnVar3 = 0;
    // var ipTurnVar4 = 0;
    // var oopTurnVar1 = 0;
    // var pasTurnVar1 = 0;

    // var ipRiverVar2 = 0;
    // var ipRiverVar3 = 0;
    // var ipRiverVar1 = 0;
    // var oopRiverVar2 = 0;
    // var oopRiverVar1 = 0;

    // function emptyTable() {
    //     $("#train-table > tbody").empty();
    //     $("#turn-table > tbody").empty();
    //     $("#river-table > tbody").empty();
    // }

    // function generateIPCheckStrat() {
    //     ipCheckVar1 = Math.random();
    //     if (ipCheckVar1 <= 0.8) {
    //         $("#train-table > tbody").append("<tr><td>IP HU or 3w Check</td><td>CHECK</td><td>" + ipCheckVar1.toFixed(3) + "</td>");
    //     }
    //     else if (ipCheckVar1 > 0.8 & ipCheckVar1 <= 0.9) {
    //         $("#train-table > tbody").append("<tr><td>IP HU or 3w Check</td><td>BET 1/3</td><td>" + ipCheckVar1.toFixed(3) + "</td>");
    //     } 
    //     else {
    //         $("#train-table > tbody").append("<tr><td>IP HU or 3w Check</td><td>BET 3/4</td><td>" + ipCheckVar1.toFixed(3) + "</td>");
    //     }
    // }
    
    createVariables();
    $(".store").on("click", storeBut);
    $(".clearStrategy").on("click", emptyOutput);
    $(".generate").on("click", generateStrategy);
    $(".generateRow").on("click", addRow);
    // $(".store").on("click", emptyTable);
    // $(".generate").on("click", generateIPLowBetStrat);
    // $(".generate").on("click", generateIPLowStrongStrat);
    // $(".generate").on("click", generateIPHighBetStrat);
    // $(".generate").on("click", generateIPHighStrongStrat);
    // $(".generate").on("click", generateOOPCheckStrat);
    // $(".generate").on("click", generateOOPBetStrat);
    // $(".generate").on("click", generateOOPStrongStrat);
    // $(".generate").on("click", generateOOP3BetStrat);
    // $(".generate").on("click", generateOOP3BetStrongStrat);
    // $(".generate").on("click", generateIP3BetStrat);
    // $(".generate").on("click", generateRaisedFlopBluffStrat);
    // $(".generate").on("click", generateRaisedFlopValueStrat);
    // $(".generate").on("click", generateIPTurnCheckStrat);
    // $(".generate").on("click", generateIPTurnMediumStrat);
    // $(".generate").on("click", generateIPTurnBluffStrat);
    // $(".generate").on("click", generateIPTurnStrongStrat);
    // $(".generate").on("click", generateOOPTurnBetStrat);
    // $(".generate").on("click", generateStrongTurnPassiveStrat);
    // $(".generate").on("click", generateIPRiverMedStrat);
    // $(".generate").on("click", generateIPRiverBluffStrat);
    // $(".generate").on("click", generateIPRiverStrongStrat);
    // $(".generate").on("click", generateOOPRiverBluffStrat);
    // $(".generate").on("click", generateOOPRiverStrongStrat);

});
