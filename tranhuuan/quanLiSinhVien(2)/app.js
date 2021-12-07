let showId = document.getElementById("sbd");
let showName = document.getElementById("name");
let showBorn = document.getElementById("born");
let showMath = document.getElementById("math");
let showNliterature = document.getElementById("nguVan");
let showSocial = document.getElementById("socialSciencens");
let showNatural = document.getElementById("naturalSciencens");
let showHistory = document.getElementById("history");
let showGeographic = document.getElementById("geographic");
let showCivicEeducation = document.getElementById("civicEeducation");
let showBiology = document.getElementById("biology");
let showPhysics = document.getElementById("physics");
let showChemistry = document.getElementById("chemistry");
let showEnglish = document.getElementById("English");

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
let arrayData = [];
readTextFile('./file1.json', function(text) {
    let datas = JSON.parse(text);
    // console.log(data);
    for (let data of datas) {
        arrayData.push(data)
    }
   // student_not_registered_subject(arrayData);
});

// ==================================================Chart code 




function student_not_registered_subject(arrayData) {
    let math_count = 0;
    let phantram_math = 0;
    // văn
    let nliterature_count = 0;
    let phantram_nliteralure = 0;
    // khoa học xã hội
    let socialSciences_count = 0;
    let phantram_socialSciences = 0;
    //khoa học tự nhiên
    let naturalSciences_count = 0;
    let phantram_naturalSciences = 0;
    //lịch sử
    let history_count = 0;
    let phantram_history = 0;
    //môn địa lý
    let Geographic_count = 0;
    let phantram_Geographic = 0;
    //môn gdcd
    let civicEeducation_count = 0;
    let phantram_civicEeducation = 0;
    //môn sinh học
    let biology_count = 0;
    let phantram_biology = 0;
    //môn vật lí
    let physics_count = 0;
    let phantram_physics = 0;
    //môn hóa học
    let chemistry_count = 0;
    let phantram_chemistry = 0;
    // môn tiếng anh
    let English_count = 0;
    let phantram_English = 0;
    for (let i = 0; i < arrayData.length; i++) {
        if (arrayData[i].math == "-1") {
            math_count++;
        } // tính phần trăm số người không thi môn văn
        if (arrayData[i].nliterature == "-1") {
            nliterature_count++;
        } //phần trăm số người không thi khoa học xã hội
        if (arrayData[i].socialSciences == "-1") {
            socialSciences_count++;
        } //phần trăm số người không thi khoa học tự nhiên
        if (arrayData[i].naturalSciences == "-1") {
            naturalSciences_count++;
        }
        if (arrayData[i].history == "-1") {
            history_count++;
        } //phần trăm số người bo thi môn địa lý
        if (arrayData[i].geographic == "-1") {
            Geographic_count++;
        } //phần trăm số người bỏ thi môn dgcd
        if (arrayData[i].civicEeducation == "-1") {
            civicEeducation_count++;
        } //phần trăm số người bỏ thi môn sinh học
        if (arrayData[i].biology == "-1") {
            biology_count++;
        } //số người bỏ thi môn vật lý
        if (arrayData[i].physics == "-1") {
            physics_count++;
        } //số người bỏ thi môn hóa học
        if (arrayData[i].chemistry == "-1") {
            chemistry_count++;
        } //số người bỏ thi môn tiếng anh
        if (arrayData[i].English == "-1") {
            English_count++;
        }
    }

    //tính phần trăm các môn không thi
    // tính phần trăm số người không thi môn toán
    phantram_math = Number((math_count * 100) / arrayData.length);
    // tính phần trăm số người không thi môn văn
    phantram_nliteralure = Number((nliterature_count * 100) / arrayData.length);
    //phần trăm số người không thi khoa học xã hội
    phantram_socialSciences = Number((socialSciences_count * 100) / arrayData.length);
    //phần trăm số người bỏ môn khoa học tự nhiên
    phantram_naturalSciences = Number((naturalSciences_count * 100) / arrayData.length);
    //phần trăm số người bỏ thi môn lịch sử
    phantram_history = Number((history_count * 100) / arrayData.length);
    //phần trăm người bỏ thi môn địa lý
    phantram_Geographic = Number((Geographic_count * 100) / arrayData.length);
    //phần trăm số người bỏ thi môn sinh học
    phantram_biology = Number((biology_count * 100) / arrayData.length);
    //phần trằm số người bỏ thi môn vật lý
    phantram_physics = Number((physics_count * 100) / arrayData.length);
    //phần trăm số người bỏ thi môn hóa học
    phantram_chemistry = Number((chemistry_count * 100) / arrayData.length);
    //phần trăm số người bỏ thi môn tiếng anh
    phantram_English = Number((English_count * 100) / arrayData.length);
    //phần trăm số người bỏ thi môn giáo dục coog dân
    phantram_civicEeducation = Number((civicEeducation_count * 100) / arrayData.length);
    am5.ready(function() {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv");


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX"
        }));

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);


        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var xRenderer = am5xy.AxisRendererX.new(root, {
            minGridDistance: 30
        });
        xRenderer.labels.template.setAll({
            rotation: -90,
            centerY: am5.p100,
            centerX: am5.p100,
            paddingRight: 15
        });

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "country",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {})
        }));


        // Create series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "country",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        series.columns.template.setAll({
            cornerRadiusTL: 5,
            cornerRadiusTR: 5
        });
        series.columns.template.adapters.add("fill", (fill, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add("stroke", (stroke, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });


        // Set data
        var data = [{
            country: "Toán",
            value: phantram_math
        }, {
            country: "Văn",
            value: phantram_nliteralure
        }, {
            country: "KHXH",
            value: phantram_socialSciences
        }, {
            country: "KHTN",
            value: phantram_naturalSciences
        }, {
            country: " Lịch sử",
            value: phantram_history
        }, {
            country: "Địa lí",
            value: phantram_Geographic
        }, {
            country: "DGCD",
            value: phantram_civicEeducation
        }, {
            country: "Sinh học",
            value: phantram_biology
        }, {
            country: "Vật lí",
            value: phantram_physics
        }, {
            country: "Hóa học",
            value: phantram_chemistry
        }, {
            country: "Anh Văn",
            value: phantram_English
        }];

        xAxis.data.setAll(data);
        series.data.setAll(data);


        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear(1000);
        chart.appear(1000, 100);

    }); // end am5.ready()
}

//========================================age====================================//

function student_age(arrayData) {
    let age2002 = 0;
    let ageLarger2002 = 0;
    let ageSmaller2002 = 0;

    for(let i = 0; i < arrayData.length; i++){
        if(arrayData[i].yy == 2002){
            age2002++;
           
        }

        if(arrayData[i].yy < 2002){
            ageSmaller2002++;
            
        }

        if(arrayData[i].yy > 2002){
            ageLarger2002++;
            console.log(arrayData[i]);
        }
    }

    let phantram_2002 = Number((age2002 * 100) / arrayData.length);
    let phantram_larger_2002 = Number((ageLarger2002 * 100) / arrayData.length);
    let phantram_smaller_2002 = Number((ageSmaller2002 * 100) / arrayData.length);
    am5.ready(function() {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv");


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX"
        }));

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);


        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var xRenderer = am5xy.AxisRendererX.new(root, {
            minGridDistance: 30
        });
        xRenderer.labels.template.setAll({
            rotation: -90,
            centerY: am5.p100,
            centerX: am5.p100,
            paddingRight: 15
        });

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "country",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {})
        }));


        // Create series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "country",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        series.columns.template.setAll({
            cornerRadiusTL: 5,
            cornerRadiusTR: 5
        });
        series.columns.template.adapters.add("fill", (fill, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add("stroke", (stroke, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });


        // Set data
        var data = [{
            country: "2002",
            value: phantram_2002
        }, {
            country: "lớn hơn 2002",
            value: phantram_larger_2002
        }, {
            country: "bé hơn 2002",
            value: phantram_smaller_2002
        }];

        xAxis.data.setAll(data);
        series.data.setAll(data);


        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear(1000);
        chart.appear(1000, 100);

    }); // end am5.ready()
}

function myfunction(){
    let text = document.getElementById("text").value;
    let title = document.getElementById("title");
    let divchart = document.getElementById("chartdiv");
    if(text == "tỉ lệ bỏ môn"){
        divchart.innerHTML = "";
        student_not_registered_subject(arrayData);
    }
    if(text == "tỉ lệ sinh viên cao tuổi"){
        divchart.innerHTML = "";
        title.innerText = "tỉ lệ sinh viên cao tuổi";
        student_age(arrayData);
    }
}
// functional find id student
function rong() {
    showId.value = "";
    showName.value = "";
    showSocial.value = "";
    showNliterature.value = "";
    showNatural.value = "";
    showMath.value = "";
    showHistory.value = "";
    showGeographic.value = "";
    showCivicEeducation.value = "";
    showEnglish.value = "";
    showPhysics.value = "";
    showChemistry.value = "";
    showBiology.value = "";
    showBorn.value = "";
}
let find = function() {
    let id = document.getElementById("search").value;
    
    for(let i = 0; i < arrayData.length; i++){
        if(id == arrayData[i].sbd){
            showId.value = arrayData[i].sbd;
            showName.value = arrayData[i].name;
            showBorn.value = arrayData[i].dd + "/" + arrayData[i].mm + "/" + arrayData[i].yy;
            showMath.value = arrayData[i].math;
            showNliterature.value = arrayData[i].nliterature;
            showSocial.value = arrayData[i].socialSciences;
            showNatural.value = arrayData[i].naturalSciences;
            showHistory.value = arrayData[i].history;
            showGeographic.value = arrayData[i].geographic;
            showCivicEeducation.value = arrayData[i].civicEeducation;
            showBiology.value = arrayData[i].biology;
            showChemistry.value = arrayData[i].chemistry;
            showEnglish.value = arrayData[i].English;
            showPhysics.value = arrayData[i].physics;
            break;
        }
    }
}

// addion manage student
function addtion() {
   
    
    let dd = showBorn.value.substr(0,2);
    let mm = showBorn.value.slice(3,5);
    let yy = showBorn.value.substr(6,9)
    const obj_student = {
        "sbd": showId.value,
        "name": showName.value,
        "dd": dd,
        "mm": mm,
        "yy": yy,
        "math": showMath.value,
        "nliterature": showNliterature.value,
        "socialSciences": showSocial.value,
        "naturalSciences": showNatural.value,
        "history": showHistory.value,
        "geographic": showGeographic.value,
        "civicEeducation": showCivicEeducation.value,
        "biology": showBiology.value,
        "physics": showPhysics.value,
        "chemistry": showChemistry.value,
        "English": showEnglish.value,
    }

        arrayData.push(obj_student);
     
        
    for(let i = 0; i < arrayData.length - 1; i++){
       
        if(arrayData[i].sbd == arrayData[arrayData.length - 1].sbd){
            alert("bị trùng số báo danh!!");
            arrayData.pop();
            break;
        }
    }
    rong();
}

// remove manage student

function remove() {
    
    let id = document.getElementById("search").value;
    for(let i = 0; i < arrayData.length; i++){
        if(arrayData[i].sbd == id){
            delete arrayData[i];
            alert("đã xóa thông tin của học sinh");
            break;
        }
    }
    rong();
    
    
}

// function update
function update() {
    let id = document.getElementById("search").value;
    
    let dd = showBorn.value.substr(0,2);
    let mm = showBorn.value.slice(3,5);
    let yy = showBorn.value.substr(6,9)
    
    for(let i = 0; i < arrayData.length; i++){
        if(id == arrayData[i].sbd){
            arrayData[i].name = showName.value;
            arrayData[i].dd = dd;
            arrayData[i].mm = mm;
            arrayData[i].yy = yy;
            arrayData[i].math = showMath.value;
            arrayData[i].naturalSciences = showNatural.value;
            arrayData[i].nliterature = showNliterature.value;
            arrayData[i].socialSciences = showSocial.value;
            arrayData[i].history = showHistory.value;
            arrayData[i].geographic = showGeographic.value;
            arrayData[i].civicEeducation = showCivicEeducation.value;
            arrayData[i].biology = showBiology.value;
            arrayData[i].physics = showPhysics.value;
            arrayData[i].chemistry = showChemistry.value;
            arrayData[i].English = showEnglish.value;
            break;

        }
    }
    rong();

}