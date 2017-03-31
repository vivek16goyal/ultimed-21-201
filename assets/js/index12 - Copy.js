var scroll = new iScroll('wrapper', { vScrollbar: false, hScrollbar: false, hScroll: false });

var id = getUrlVars()["id"];

var db;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("opening database");
    db = window.openDatabase("EmployeeDirectoryDB", "1.0", "PhoneGap Demo", 200000);
    console.log("database opened");
    //db.transaction(populateDB, errorCB, successCB);
    ////Override the back button functionality
    //document.addEventListener('backbutton', onBack, false);
}

    function onBack() {
        //If the current page is index page then exit other wise navigate to index page
        if ($.mobile.activePage.is('#index')) {
            navigator.app.exitApp();
        }
        else {
            db.transaction(queryDB, errorCB);
        }
    }

    function populateDB(tx) {
        //Create the table
        //tx.executeSql('DROP TABLE IF EXISTS MyContacts');
        tx.executeSql('CREATE TABLE IF NOT EXISTS MyContacts (id INTEGER PRIMARY KEY AUTOINCREMENT, \
                name TEXT NOT NULL, nickName TEXT, mobilePhoneNumber INT, \
                workPhoneNumber INT, emailId TEXT, website TEXT, happyBirthDay TEXT)\
                 ');
        tx.executeSql('SELECT id, name, nickName FROM MyContacts ORDER BY name', [], querySuccess, errorCB);
    }

    function successCB() {
        db.transaction(queryDB, errorCB);
    }

    function queryDB(tx) {
        tx.executeSql('SELECT id, name, nickName FROM MyContacts ORDER BY name', [], querySuccess, errorCB);
    }

    function querySuccess(tx, results) {
        $.mobile.showPageLoadingMsg(true);
        var len = results.rows.length;
        $("#userList").html('');
        for (var i = 0; i < len; i++) {
            var row = results.rows.item(i);
            var htmlData = '<li id="' + row["id"] + '"><a href="#"><h2>' + row["name"] + '</h2><p class="ui-li-aside">' + row["nickName"] + '</p></a></li>';
            $("#userList").append(htmlData).listview('refresh');
        }
        $.mobile.changePage($("#index"), { transition: "slide" });
        $.mobile.hidePageLoadingMsg();
    }

    function errorCB(err) {

    }

    $("#addNewPage .error").html('').hide();

    $(".addNew").bind("click", function (event) {
        $("#addNewPage .error").html('').hide();
        $.mobile.changePage($("#addNewPage"), { transition: "slide", reverse: true });
        $("#addNewPageHeader").html("Add New");
    });

    $("#save").bind("click", function (event) {
        var name = $.trim($("#name").val()).replace(/[^A-Za-z0-9 ]/g, '');
        var nickName = $.trim($("#nickName").val()).replace(/[^A-Za-z0-9 @]/g, '');
        var mobilePhoneNumber = $.trim($("#mobilePhoneNumber").val()).replace(/[^0-9-]/g, '');
        var workPhoneNumber = $.trim($("#workPhoneNumber").val()).replace(/[^0-9-]/g, '');
        var emailId = $.trim($("#emailId").val());
        var website = $.trim($("#website").val());
        var happyBirthDay = $.trim($("#happyBirthDay").val());
        console.log(name + ' ' + nickName + ' ' + mobilePhoneNumber + ' ' + workPhoneNumber + ' ' + emailId + ' ' + website + ' ' + happyBirthDay);

        if (name == '') {
            $("#addNewPage .error").html('Please enter name.').show();
        }
        else {
            resetForm();

            var id = $("#id").val();
            $("#id").val('');
            if (id == '') {  //Save
                db.transaction(function (tx) {
                    tx.executeSql("INSERT INTO MyContacts (name, nickName, mobilePhoneNumber, workPhoneNumber, emailId, website, happyBirthDay) VALUES  (?, ?, ?, ?, ?, ?, ?)", [name, nickName, mobilePhoneNumber, workPhoneNumber, emailId, website, happyBirthDay],
                    queryDB, errorCB);
                });
            }
            else {   //Update
                db.transaction(function (tx) {
                    tx.executeSql("UPDATE MyContacts SET name=?, nickName=?, mobilePhoneNumber=?, workPhoneNumber=?, emailId=?, website=?, happyBirthDay=? WHERE id=? ", [name, nickName, mobilePhoneNumber, workPhoneNumber, emailId, website, happyBirthDay, id],
                    queryDB, errorCB);
                });
            }
            db.transaction(queryDB, errorCB);
        }
    });

    $(".refresh").bind("click", function (event) {
        db.transaction(queryDB, errorCB);
    });

    $(".back").bind("click", function (event) {
        resetForm();
        db.transaction(queryDB, errorCB);
    });

    function resetForm() {
        $("#addNewPage .error").html('').hide();
        $("#addNewPage #name").val('');
        $("#addNewPage #nickName").val('');
        $("#addNewPage #mobilePhoneNumber").val('');
        $("#addNewPage #workPhoneNumber").val('');
        $("#addNewPage #emailId").val('');
        $("#addNewPage #website").val('');
        $("#addNewPage #happyBirthDay").val('');
        $("#addNewPage #addNewPageHeader").html('');
    }

    $("#index [data-role='content'] ul").on('tap taphold', 'li', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        var liId = this.id;
        if (event.type === 'taphold') {
            navigator.notification.vibrate(30);
            var $popup = $('#actionList-popup');
            $("#actionList").html('');
            $("#actionList").append('<li id="edit&' + liId + '">Edit</li>').listview('refresh');
            $("#actionList").append('<li id="delete&' + liId + '">Delete</li>').listview('refresh');
            $popup.popup();
            $popup.popup('open');
            $("#tapHoldCheck").val('true');
        }
        else if (event.type === 'tap') {
            if ($("#tapHoldCheck").val() == '') { //If the value of the text box is blank then only tap will work
                db.transaction(function (tx) {
                    tx.executeSql("SELECT name, nickName, mobilePhoneNumber, workPhoneNumber, emailId, website, happyBirthDay  FROM MyContacts WHERE id=?;", [liId], function (tx, results) {
                        var row = results.rows.item(0);
                        $.mobile.showPageLoadingMsg(true);
                        $.mobile.changePage($("#displayDataPage"), { transition: "slide" });
                        $("#nameHeader").html(row['name']);
                        $("#dataName").html(row['name']);
                        $("#dataNickName").html(row['nickName']);
                        $("#dataMobilePhoneNumber").html(row['mobilePhoneNumber']);
                        if (row['mobilePhoneNumber'] != '') {
                            $("#mpnCallSMS").html(
                            '<div class="ui-grid-a">' +
                                '<div class="ui-block-a">' +
                                    '<a href="tel:' + row['mobilePhoneNumber'] + '" data-role="button">Call</a>' +
                                    '</div>' +
                                '<div class="ui-block-b">' +
                                    '<a href="sms:' + row['mobilePhoneNumber'] + '" data-role="button">SMS</a>' +
                                '</div>' +
                            '</div>'
                            );
                        }
                        else {
                            $("#mpnCallSMS").html('');
                        }
                        $("#dataWorkPhoneNumber").html(row['workPhoneNumber']);
                        if (row['workPhoneNumber'] != '') {
                            $("#wpnCallSMS").html(
                            '<div class="ui-grid-a">' +
                                '<div class="ui-block-a">' +
                                    '<a href="tel:' + row['workPhoneNumber'] + '" data-role="button">Call</a>' +
                                    '</div>' +
                                '<div class="ui-block-b">' +
                                    '<a href="sms:' + row['workPhoneNumber'] + '" data-role="button">SMS</a>' +
                                '</div>' +
                            '</div>'
                            );
                        }
                        else {
                            $("#wpnCallSMS").html('');
                        }
                        $("#dataEmailId").html('<a href="mailto:' + row['emailId'] + '">' + row['emailId'] + '</a>');
                        $("#dataWebsite").html('<a href="' + row['website'] + '" data-role="external">' + row['website'] + '</a>');
                        $("#dataHappyBirthDay").html(row['happyBirthDay']);
                        $('#dataList').trigger('create');
                        $('#dataList').listview('refresh');
                        $.mobile.hidePageLoadingMsg();
                    });
                });
            }
        }
    });

    //Change the hidden field value when the popup is closed
    $('#actionList-popup').bind({
        popupafterclose: function (event, ui) {
            $("#tapHoldCheck").val('');
        }
    });

    $("#index [data-role='popup'] ul").on('click', 'li', function (event) {
        var action_liId = this.id.split('&');
        var action = action_liId[0];
        var id = action_liId[1];
        if (action == 'edit') {
            db.transaction(function (tx) {
                tx.executeSql("SELECT name, nickName, mobilePhoneNumber, workPhoneNumber, emailId, website, happyBirthDay  FROM MyContacts WHERE id=?;", [id], function (tx, results) {
                    var row = results.rows.item(0);
                    $("#name").val(row['name']);
                    $("#nickName").val(row['nickName']);
                    $("#mobilePhoneNumber").val(row['mobilePhoneNumber']);
                    $("#workPhoneNumber").val(row['workPhoneNumber']);
                    $("#emailId").val(row['emailId']);
                    $("#website").val(row['website']);
                    $("#happyBirthDay").val(row['happyBirthDay']);
                    $("#id").val(id);
                    $("#addNewPageHeader").html('Edit');
                    $.mobile.changePage($("#addNewPage"), { transition: "slide", reverse: true });
                });
            });
        }
        if (action == 'delete') {
            navigator.notification.confirm(
                'Are you sure?',
                function (buttonIndex) { onConfirm(buttonIndex, id); },
                'Delete Contact',
                'Ok, Cancel'
            );
        }
    });

    function onConfirm(buttonIndex, id) {
        if (buttonIndex === 1) { //Delete 
            db.transaction(function (tx) { tx.executeSql("DELETE FROM MyContacts WHERE id=?", [id], queryDB, errorCB); });
        }
        if (buttonIndex === 2) {
            $.mobile.changePage($("#index"), { transition: "slide" });
        }
    }

});
function transaction_error(tx, error) {
    $('#busy').hide();
    alert("Database Error: " + error);
}

function getEmployee(tx) {
    $('#busy').show();
    var sql = "select e.id, e.firstName, e.lastName, e.managerId, e.title, e.department, e.city, e.officePhone, e.cellPhone, " +
				"e.email, e.picture, m.firstName managerFirstName, m.lastName managerLastName, count(r.id) reportCount " +
				"from employee e left join employee r on r.managerId = e.id left join employee m on e.managerId = m.id " +
				"where e.id=:id group by e.lastName order by e.lastName, e.firstName";
    tx.executeSql(sql, [id], getEmployee_success);
}

function getEmployee_success(tx, results) {
    $('#busy').hide();
    var employee = results.rows.item(0);
    $('#employeePic').attr('src', 'pics/' + employee.picture);
    $('#fullName').text(employee.firstName + ' ' + employee.lastName);
    $('#employeeTitle').text(employee.title);
    $('#city').text(employee.city);
    console.log(employee.officePhone);
    if (employee.managerId > 0) {
        $('#actionList').append('<li><a href="employeedetails.html?id=' + employee.managerId + '"><p class="line1">View Manager</p>' +
				'<p class="line2">' + employee.managerFirstName + ' ' + employee.managerLastName + '</p></a></li>');
    }
    if (employee.reportCount > 0) {
        $('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><p class="line1">View Direct Reports</p>' +
				'<p class="line2">' + employee.reportCount + '</p></a></li>');
    }
    if (employee.email) {
        $('#actionList').append('<li><a href="mailto:' + employee.email + '"><p class="line1">Email</p>' +
				'<p class="line2">' + employee.email + '</p><img src="img/mail.png" class="action-icon"/></a></li>');
    }
    if (employee.officePhone) {
        $('#actionList').append('<li><a href="tel:' + employee.officePhone + '"><p class="line1">Call Office</p>' +
				'<p class="line2">' + employee.officePhone + '</p><img src="img/phone.png" class="action-icon"/></a></li>');
    }
    if (employee.cellPhone) {
        $('#actionList').append('<li><a href="tel:' + employee.cellPhone + '"><p class="line1">Call Cell</p>' +
				'<p class="line2">' + employee.cellPhone + '</p><img src="img/phone.png" class="action-icon"/></a></li>');
        $('#actionList').append('<li><a href="sms:' + employee.cellPhone + '"><p class="line1">SMS</p>' +
				'<p class="line2">' + employee.cellPhone + '</p><img src="img/sms.png" class="action-icon"/></a></li>');
    }
    setTimeout(function () {
        scroll.refresh();
    });
    db = null;
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
