$( document ).ready(function() {
    console.log( "ready!" );

	var productionTotal = 0;
    var runsTotal = 0;
	var sleepTotal = 0;
	var readTotal = 0;
	var meditationTotal = 0;
	var verbalExTotal = 0;
	var verbalStudyTotal = 0;
	var workTotal = 0;
    var sleepVar1 = 100; // 9pm  EB = +10; WP = -10
    var sleepVar2 = 90; // 10pm  EB = +8; WP = -8
    var sleepVar3 = 80; // 11pm  EB = +4; WP = -5
    var sleepVar4 = 60; // 12am  EB = -5; WP = +3
    var sleepVar5 = 30; // 1am   EB = -8; WP = +6
    var sleepVar6 = 20; // 2am   EB = -10; WP = +8
    var sleepVar7 = 10; // 3am   EB = -15; WP = +9
	var sleepVar8 = 0; // 4+am   EB = -30; WP = +10
	var readVar1 = 100; // 2+ hours EB = +5; WP = -10
	var readVar2 = 90; // 1.5-2 hours EB = +4; WP = -8
	var readVar3 = 80; // 1-1.5 hours EB = +3; WP = -7
	var readVar4 = 70; // 45m-1 hours EB = +2; WP = -5
	var readVar5 = 50; // 30m-45m EB = +1; WP = -3
	var readVar6 = 30; // 15m-30m EB = 0; WP = 0
	var readVar7 = 10; // 5m-15m EB = -2; WP = +2
	var readVar8 = 0; // < 5m EB = -4; WP = +4
	var meditationVar1 = 100; // 20m EB = +5; WP = -10
	var meditationVar2 = 80; // 15m EB = +4; WP = -8
	var meditationVar3 = 50; // 10m EB = +3; WP = -6
	var meditationVar4 = 30; // 5m EB = +2; WP = -5
	var meditationVar5 = 0; // 0 EB = 0; WP = +2
	var verbalExVar1 = 100; // 2ex EB = +5; WP = -10
	var verbalExVar2 = 90; // 1ex EB = +4; WP = -8
	var verbalExVar3 = 40; // .5ex EB = +1; WP = -2
	var verbalExVar4 = 0; // 0 EB = -2; WP = +2
	var verbalStudyVar1 = 100; // 1+ hours EB = +8; WP = -7
	var verbalStudyVar2 = 80; // 30m - 1hour EB = +5; WP = -4
	var verbalStudyVar3 = 30; // 10m - 30m EB = +2; WP = -2
	var verbalStudyVar4 = 0; // 0 EB = -2; WP = +2
	var workVar1 = 100; // 2+ hours EB = +5; WP = -5
	var workVar2 = 80; // 1 - 2 hour EB = +4; WP = -4
	var workVar3 = 60; // 30m - 1hour EB = +2; WP = -2
	var workVar4 = 30; // 0 - 30m EB = 0; WP = +1
	var workVar5 = 0; // 0 EB = -2; WP = +2
	var sleepRng = 0;
	var readRng = 0;
	var meditationRng = 0;
	var verbalExRng = 0;
	var verbalStudyRng = 0;
	var workRng = 0;

    var emotionalBalance = 50;
    var willpowerMultiplier = 1;
    var willpowerBalance = 50;
	var willpowerFinal = 0;

    function runSim() {
    	runsTotal++;
    	$(".runsDiv").text("Runs:" + runsTotal);

    	sleepRng = Math.random();
    	// console.log(sleepRng);
    	if (sleepRng < .05) {
    		sv = sleepVar1;
    		emotionalBalance += 10;
    		willpowerBalance -= 15;
    		willpowerMultiplier += .003;
    	} else if (sleepRng < .15) {
    		sv = sleepVar2;
    		emotionalBalance += 8;
    		willpowerBalance -= 10;
    		willpowerMultiplier += .003;
    	} else if (sleepRng < .40) {
    		sv = sleepVar3;
    		emotionalBalance += 4;
    		willpowerBalance -= 5;
    		willpowerMultiplier += .002;
    	} else if (sleepRng < .70) {
    		sv = sleepVar4;
    		emotionalBalance -= 5;
    		willpowerBalance += 3;
    		willpowerMultiplier -= .001;
    	} else if (sleepRng < .80) {
    		sv = sleepVar5;
    		emotionalBalance -= 8;
    		willpowerBalance += 8;
    		willpowerMultiplier -= .001;
    	} else if (sleepRng < .90) {
    		sv = sleepVar6;
    		emotionalBalance -= 10;
    		willpowerBalance += 10;
    		willpowerMultiplier -= .001;
    	} else if (sleepRng < .95) {
    		sv = sleepVar7;
    		emotionalBalance -= 15;
    		willpowerBalance += 11;
    		willpowerMultiplier -= .002;
    	} else {
    		sv = sleepVar8;
    		emotionalBalance -= 30;
    		willpowerBalance += 12;
    		willpowerMultiplier -= .003;
    	}
		sleepTotal += sv;
		productionTotal += sv;
		$(".sleepDiv").text("Sleep Score:" + sleepTotal);
		
		readRng = Math.random();
    	// console.log(readRng);
    	if (readRng < .05) {
    		rv = readVar1;
    		emotionalBalance += 5;
    		willpowerBalance -= 10;
    		willpowerMultiplier += .002;
    	} else if (readRng < .10) {
    		rv = readVar2;
    		emotionalBalance += 4;
    		willpowerBalance -= 8;
    		willpowerMultiplier += .002;
    	} else if (readRng < .15) {
    		rv = readVar3;
    		emotionalBalance += 3;
    		willpowerBalance -= 7;
    		willpowerMultiplier += .002;
    	} else if (readRng < .30) {
    		rv = readVar4;
    		emotionalBalance += 2;
    		willpowerBalance -= 5;
    		willpowerMultiplier += .001;
    	} else if (readRng < .60) {
    		rv = readVar5;
    		emotionalBalance += 1;
    		willpowerBalance += 3;
    		willpowerMultiplier += .001;
    	} else if (readRng < .80) {
    		rv = readVar6;
    		emotionalBalance -= 0;
    		willpowerBalance += 0;
    		willpowerMultiplier -= .000;
    	} else if (readRng < .95) {
    		rv = readVar7;
    		emotionalBalance -= 2;
    		willpowerBalance += 2;
    		willpowerMultiplier -= .001;
    	} else {
    		rv = readVar8;
    		emotionalBalance -= 4;
    		willpowerBalance += 4;
    		willpowerMultiplier -= .001;
    	}
		readTotal += rv;
		productionTotal += rv;
		$(".readDiv").text("Reading Score:" + readTotal);
		
		meditationRng = Math.random();
    	// console.log(meditationRng);
    	if (meditationRng < .3) {
    		mv = meditationVar1;
    		emotionalBalance += 5;
    		willpowerBalance -= 10;
    		willpowerMultiplier += .002;
    	} else if (meditationRng < .5) {
    		mv = meditationVar2;
    		emotionalBalance += 4;
    		willpowerBalance -= 8;
    		willpowerMultiplier += .001;
    	} else if (meditationRng < .7) {
    		mv = meditationVar3;
    		emotionalBalance += 3;
    		willpowerBalance -= 6;
    		willpowerMultiplier += .001;
    	} else if (meditationRng < .8) {
    		mv = meditationVar4;
    		emotionalBalance += 2;
    		willpowerBalance -= 5;
    		willpowerMultiplier += .000;
    	} else {
    		mv = meditationVar5;
    		emotionalBalance -= 0;
    		willpowerBalance += 2;
    		willpowerMultiplier -= .001;
    	}
		meditationTotal += mv;
		productionTotal += mv;
		$(".meditationDiv").text("Meditation Score:" + meditationTotal);
		
		verbalExRng = Math.random();
    	// console.log(verbalExRng);
    	if (verbalExRng < .1) {
    		vev = verbalExVar1;
    		emotionalBalance += 5;
    		willpowerBalance -= 10;
    		willpowerMultiplier += .002;
    	} else if (verbalExRng < .7) {
    		vev = verbalExVar2;
    		emotionalBalance += 4;
    		willpowerBalance -= 8;
    		willpowerMultiplier += .002;
    	} else if (verbalExRng < .9) {
    		vev = verbalExVar3;
    		emotionalBalance += 1;
    		willpowerBalance -= 2;
    		willpowerMultiplier += .001;
    	} else {
    		vev = verbalExVar4;
    		emotionalBalance -= 2;
    		willpowerBalance += 2;
    		willpowerMultiplier -= .001;
    	}
		verbalExTotal += vev;
		productionTotal += vev;
		$(".verbalExDiv").text("Verbal Exercise Score:" + verbalExTotal);
		
		verbalStudyRng = Math.random();
    	// console.log(verbalStudyRng);
    	if (verbalStudyRng < .1) {
    		vsv = verbalStudyVar1;
    		emotionalBalance += 8;
    		willpowerBalance -= 7;
    		willpowerMultiplier += .002;
    	} else if (verbalStudyRng < .5) {
    		vsv = verbalStudyVar2;
    		emotionalBalance += 5;
    		willpowerBalance -= 4;
    		willpowerMultiplier += .002;
    	} else if (verbalStudyRng < .9) {
    		vsv = verbalStudyVar3;
    		emotionalBalance += 2;
    		willpowerBalance -= 2;
    		willpowerMultiplier += .001;
    	} else {
    		vsv = verbalStudyVar4;
    		emotionalBalance -= 2;
    		willpowerBalance += 2;
    		willpowerMultiplier -= .001;
    	}
		verbalStudyTotal += vsv;
		productionTotal += vsv;
		$(".verbalStudyDiv").text("Verbal Study Score:" + verbalStudyTotal);
		
		workRng = Math.random();
    	// console.log(workRng);
    	if (workRng < .2) {
    		wv = workVar1;
    		emotionalBalance += 5;
    		willpowerBalance -= 5;
    		willpowerMultiplier += .002;
    	} else if (workRng < .5) {
    		wv = workVar2;
    		emotionalBalance += 4;
    		willpowerBalance -= 8;
    		willpowerMultiplier += .002;
    	} else if (workRng < .7) {
    		wv = workVar3;
    		emotionalBalance += 3;
    		willpowerBalance -= 6;
    		willpowerMultiplier += .001;
    	} else if (workRng < .8) {
    		wv = workVar4;
    		emotionalBalance += 2;
    		willpowerBalance -= 5;
    		willpowerMultiplier += .000;
    	} else {
    		wv = workVar5;
    		emotionalBalance -= 0;
    		willpowerBalance += 2;
    		willpowerMultiplier -= .001;
    	}
		workTotal += wv;
		productionTotal += wv;
		$(".workDiv").text("Work Score:" + workTotal);

    	willpowerFinal = willpowerBalance*willpowerMultiplier;

		console.log(productionTotal);
    	console.log(emotionalBalance);
    	console.log(willpowerBalance);
    	console.log(willpowerMultiplier);
    	console.log(willpowerFinal);

		$(".productionDiv").text("Total Production:" + productionTotal);
    	$(".emotionDiv").text("Emotional Balance:" + emotionalBalance);
    	$(".multDiv").text("Willpower Multiplier:" + willpowerMultiplier);
		$(".willDiv").text("Willpower Balance:" + willpowerFinal);

	};

	// function addData() {
	// 	myChartData.data.labels.push(runsTotal);
	// 	myChartData.data.datasets.forEach((dataset) => {
	// 		dataset.data.push(productionTotal);
	// 	});
	// 	myChartData.update();
	// };

	function addData() {
		myChartData.data.labels.push(runsTotal);
		myChartData.data.datasets[0].data.push(productionTotal);
		myChartData.data.datasets[1].data.push(sleepTotal);
		myChartData.data.datasets[2].data.push(readTotal);
		myChartData.data.datasets[3].data.push(meditationTotal);
		myChartData.data.datasets[4].data.push(verbalExTotal);
		myChartData.data.datasets[5].data.push(verbalStudyTotal);
		myChartData.data.datasets[6].data.push(workTotal);
		myChartData.data.datasets[7].data.push(emotionalBalance);
		myChartData.data.datasets[8].data.push(willpowerFinal);
		myChartData.update();
	};
	
		var ctx = document.getElementById("myChartData").getContext('2d');
		var myChartData = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: [0],
				datasets: [
					{
						type: "line",
						label: "Total Production",
						data: [0],
						fill: false,
						backgroundColor: "green",
						hidden: true
					},
					{
						type: "line",
						label: "Sleep Score",
						data: [0],
						fill: false,
						backgroundColor: "blue"
					},
					{
						type: "line",
						label: "Reading Score",
						data: [0],
						fill: false,
						backgroundColor: "purple"
					},
					{
						type: "line",
						label: "Meditation Score",
						data: [0],
						fill: false,
						backgroundColor: "teal"
					},
					{
						type: "line",
						label: "Verbal Exercise Score",
						data: [0],
						fill: false,
						backgroundColor: "red"
					},
					{
						type: "line",
						label: "Verbal Study Score",
						data: [0],
						fill: false,
						backgroundColor: "orange"
					},
					{
						type: "line",
						label: "Work Score",
						data: [0],
						fill: false,
						backgroundColor: "black"
					}, {
						label: "Emotional Balance",
						data: [0],
						backgroundColor: "pink",
						yAxisID: 'right-axis'
					}, {
						label: "Willpower",
						data: [0],
						backgroundColor: "grey",
						yAxisID: 'right-axis'
					}
				],
			},
			options: {
				legend: {position:'bottom', usePointStyle:true},
				maintainAspectRatio:false,
				responsive: true,
				title: {display: false},
				tooltips: {mode: 'index', intersect: false},
				hover: {mode: 'nearest', intersect: true},
				scales: {
					xAxes: [{display: true, stacked:false, scaleLabel: {display: false, labelString: 'time'}}],
					yAxes: [{
							type:'linear', 
							id:'left-axis', 
							display: true,
							position: 'left', 
							scaleLabel: {display: true, labelString: '%'}
							},{
							type:'linear', 
							id:'right-axis', 
							display: true,
							position: 'right', 
							stacked:false,
							grouped: true,
							scaleLabel: {display: true, labelString: '#'}, 
							gridLines: {drawOnChartArea:false}
						}]
		
				}
			}
		});

	$(".runButton").on("click", runSim);
	$(".runButton").on("click", addData);


});