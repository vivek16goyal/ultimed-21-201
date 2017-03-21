var pushNotification;
var db;
var msg, title, date, id = '1';
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        try {
            try {
                db = window.openDatabase('TiaDatabase', '1.0', 'TiaDatabase', 5242880);
                db.transaction(CreateTableNotification, error, success);
            } catch (e) {
                alert(e.message);
            }
            pushNotification = window.plugins.pushNotification;
           
            if ( device.platform === 'android' || device.platform === 'Android' || device.platform ==='IOS' || device.platform ==='ios')
            {
                pushNotification.register(
                        successHandler,
                        errorHandler, {
                            "senderID": "330933938131",
                            "ecb":"onNotificationGCM"
                        });
            }
            function successHandler(result){
                //alert("Result "+result);
            }
            function errorHandler(error){
                //alert("Error "+error);
            }            
        }
        catch(e){
            //alert(e.message);
        }
        
    }

    function CreateTableNotification(t) {
        t.executeSql('CREATE TABLE IF NOT EXISTS Notification (id, date, msg, title, isRead)');
    }
    function InsertTableNotification(t) {
        t.executeSql("INSERT INTO Notification (id, date, msg, title, isRead) VALUES ('" + id + "', '" + date + "','" + msg + "','" + title + "','0')");
    }
    function SelectTableNotification(t) {
        t.executeSql('SELECT * FROM Notification order by id ', [], showNotifi, error);
    }
    function UpdateTableNotification(t) {
        t.executeSql("UPDATE Notification set isRead='1' WHERE id = '" + id + "'");
    }
    function DeleteTableNotification(t) {
        t.executeSql("delete FROM Notification WHERE  id <> '" + id + "'");
    }
    function error(err) {
        //alert('Error : ' + err.message);
    }
    function success() {
        //alert('Successfully created tables');
    }
    // Android
    function onNotificationGCM(e) {
        localStorage.setItem("DeviceId", e.regid);
       // alert(e.regid);
        switch (e.event) {
            case 'registered':
                sendRequest(e.regid);
                break;

            case 'message':
                AddNotification(e.payload.message, e.payload.title, e.payload.time);
                window.location.href = "#profile";               
                ShowNotify();
                navigator.notification.vibrate(1000);
                break;

            case 'error':
                //alert("Error : "+e.msg);
                break;

            default:
                //alert("unknown event");
                break;
        }
    }
    function ShowNotify() {
        AddActiveClass(8);
        ToggleMenu(6);
        showALLNotifi();
    }
    function AddNotification(msg1, title1, date1) {
        try {
            var notifyCount = localStorage.getItem("NotifyCount");
            if (notifyCount == "" || notifyCount == null) {
                id = '1';
            }
            else {
                id = Number(notifyCount) + 1;
            }
            $("#lblNotifyCnt").text(id);
            msg = msg1;
            title = title1;
            date = date1;
            db.transaction(InsertTableNotification, error, success);
            showALLNotifi();
        }
        catch (e) {
            alert(e.message);
        }
    }

    function showALLNotifi() {
        db.transaction(SelectTableNotification, error);
    }

    function showNotifi(t, results) {
        try {
            $("#divNotification").html("");
            localStorage.setItem("NotifyCount", results.rows.length - 1);
            for (var i = 0; i < results.rows.length; i++) {
                $("#divNotification").append("<ul onclick='ShowNotiMsg(" + i + ")' data-role='listview' data-inset='true'  class='touch ui-listview ui-listview-inset ui-corner-all ui-shadow ' data-icon='false' data-split-icon='delete' style='margin-top:-11px;'>" +
                                    "<li onclick='UpdateMsgRead(" + i + ")' class='ui-li-static ui-body-inherit ui-first-child ui-last-child read-msg' id='ulNoti" + i + "'> " +
                                              "<table>" +
                                                  "<tr>" +
                                                      "<td>" +
                                                          "<label style='color:#137ab0;font-size:18px;white-space:initial'>" + results.rows.item(i).title + "</label>" +
                                                          "<p style='margin-top:-9px;'>" + results.rows.item(i).date + "</p>" +
                                                      "</td>" +
                                                  "</tr>" +
                                                  "<tr id='msg" + i + "'>" +
                                                      "<td>" +
                                                      "<div >" +
                                                         "<p style='margin-top:-6px;white-space:initial;text-align:justify;'>" + results.rows.item(i).msg + "</p>" +
                                                         "</div>"+
                                                      "</td>" +
                                                  "</tr>" +
                                              "</table>" +
                                          "</li> </ul>");                
                if (results.rows.item(i).isRead == '0') {
                    $("#ulNoti" + i).removeClass('read-msg');
                }
                else {
                    $("#ulNoti" + i).addClass('read-msg');
                }
               
                ShowNotiMsg(i);                
            }
        }
        catch (e) {
            alert(e.message);
        }
        
    }

    function ShowNotiMsg(id) {
        $("#msg" + id).toggle(500);        
    }

    function UpdateMsgRead(i) {
        id = i;
        db.transaction(UpdateTableNotification, error);
        $("#ulNoti" + i).addClass('read-msg');
    }

    function deleteAllNotiFication() {        
        db.transaction(DeleteTableNotification, error);
        localStorage.setItem("NotifyCount", "");
        $("#lblNotifyCnt").text("0");
        showALLNotifi();
    }
