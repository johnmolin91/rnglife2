var choicesArray = [];
var i = 0;
var j = 0;

$( document ).ready(function() {

    // var morningVar1 = 0;
    // var morningVar2 = 0;

    function createVariables(){
      
        for (var i = 0; i <= 50; i++) {
            var choices = {
                id: i,
                cname:null,
                cpercentage:0
            };
            choicesArray.push(choices);
        }
        console.log(choicesArray);
      
        // return choicesArray;
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
        addRow();
        addHeaders();
        createVariables();
    };

    function storeBut() {
        choicesArray[i].cname = document.getElementById("inputChoice").value;
        choicesArray[i].cpercentage = document.getElementById("inputPercentage").value;
        appendOne();
        // var choice + i = {
        //     cname:null,
        //     cpercentage:0
        // }
        console.log(choicesArray[i].cname);
        console.log(choicesArray[i].cpercentage);
        i++;
    };

    function addRow() {
        $("#morning-table-output > tbody").append("<tr>");
    }

    function endRow() {
        $("#morning-table-output > tbody").append("</tr>");
    }

    function addHeaders() {
        $("#morning-table-output > tbody").append("<tr><th>Choice 1</th>" + "<th>Choice 2</th>" + "<th>Choice 3</th>" + "<th>Choice 4</th>" + "<th>Choice 5</th>" + "<th>RNG</th></tr>");
    }

    function appendOne() {
        if (j == 0) {
            addRow();
            $("#morning-table-output > tbody").append("<td>" + choicesArray[i].cname + " (" + choicesArray[i].cpercentage + ")</td>");
            j++;
        } else if (j <= 3) {
            $("#morning-table-output > tbody").append("<td>" + choicesArray[i].cname + " (" + choicesArray[i].cpercentage + ")</td>");
            j++;
        } else if (j == 4) {
            $("#morning-table-output > tbody").append("<td>" + choicesArray[i].cname + " (" + choicesArray[i].cpercentage + ")</td>");
            endRow();
            j = 0;
        }
    };

    // function generateStrategy() {
    //     inputr1d1 = document.getElementById('inputr1d1choice').nodeValue();
    //     inputr1d2 = document.getElementById('inputr1d2percentage').nodeValue();
    //     $("#morning-table > tbody").append("<tr><td>" + inputr1d1 + "</td><td>" + inputr1d2 + "</td></tr>");
    // }

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
