/* Created by ..... [*YASHASWI*] ..... */

//////////*********************Specialized App For Shree Medical*****************************//////////////
/////////Use of variable
//////Heading : App Name
//////PCODE : Party Code used for specialized app
//////folderPathImg : 

var APPType = "$";

//  1)///////************SHREE MEDICAL*************////////////////////////
////var Heading = "Shree Medical";
////var PCODE = "00002_" ///"00002_";
////var folderPathImg = "file:///storage/sdcard0/" + PCODE + "/";
////var FolderName = PCODE;
////var SMSFrom = "md-goyals";
///var HomeSlideCnt = "2";
//var pDiscOnOrder = "0";
//var pWallet = "1";
//var pDiscPer = "0";
//var pDocReq = "0";

//  2)///////*******A to Z Dava Healing touch medico **********************//////////
////////var Heading = "A to Z Dava";
////////var PCODE = "RSHT01";
////////var folderPathImg = "file:///storage/sdcard0/" + PCODE + "/";
////////var DownloadPath = "file:///storage/sdcard0/";
////////var FolderName = PCODE;
////////var SMSFrom = "md-goyals";
////////var HomeSlideCnt = "1";
////////var pDiscOnOrder = "1";
////////var pWallet = "0";
////////var pDiscPer = "20"; 
////////var pDocReq = "1"; 


//  3)///////*******A to Z Dava [Demo Version Given To Drug Deal] **********************//////////
var Heading = "ULTIMED";
var PCODE = "dem001";
var folderPathImg = "file:///storage/sdcard0/" + PCODE + "/";
var DownloadPath = "file:///storage/sdcard0/";
var FolderName = PCODE;
var SMSFrom = "md-goyals";
var HomeSlideCnt = "1";
var pDiscOnOrder = "1";
var pWallet = "0";
var pDiscPer = "";
var pDocReq = "1";
//////*********************Generlized App*****************************//////////////
//var APPType = "@"; 
//var Heading = "TiaERP@ConsumerApp";
//var PCODE = "";
//var folderPathImg = "file:///storage/sdcard0/TiaERP@ConsumerApp/";
//var FolderName = "TiaERP@ConsumerApp";
//var HomeSlideCnt = "0";
//var pDiscOnOrder = "0";
//var pDiscPer = "0";
//var pWallet = "0";
//var pDocReq = "0";

var SMSFrom = "md-goyals";
var loadmsg="Please Wait....";
//var GBCServicePath = "http://tiaapp.goyalonline.in/";
var GBCServicePath = "http://localhost:51738/";
var pictureSource;
var destinationType;
var folderPath = "file:///storage/sdcard0";
var Flag ;
var myScroll;
var activemenu;

function loaded() {
    try {
        myScroll = new IScroll('#wrapper', {
            zoom: true,
            scrollX: true,
            scrollY: true,
            mouseWheel: true,
            wheelAction: 'zoom'
        });
        
    }
    catch (e) {
        alert(e.message);
    }
}
function slider(){
    $("#slider").load("deep-minified.html");
    // document.getElementById("content").innerHTML = '<object type="type/html" data="deep-minified.html" ></object>';
}
function onDeviceReady() {
    if (APPType == "@") {
        $("#div_statecity").hide();
    }
    else {
        slider();
        $("#div_statecity").show();
        try {
            if (HomeSlideCnt == "1") {
                $("#HomeSlider-div").html("<ul  id='sliderFrame' style='display: none' > <li id='slide-1'>" +
                                         "<img src='assets/img/Slide-11.jpg' />" +
                                         "</li></ul>");
                $("#sliderFrame").addClass("slides");
                $("#sliderFrame li").show();
                $("#li-offer").hide();
            }

            if (pWallet == "1") {
                $("#li-wal").Show();
            } else {
                $("#li-wal").hide();
            }
        } catch (e) {
            alert(e.message);
        }        
    }
    if (pDocReq == "1") {
        $("#tr_DocLbl").show();
        $("#tr_DocTxt").show();
        $("#pro_DocDiv").show();
        $("#Doc_Div").show();
    } else {
        $("#tr_DocLbl").hide();
        $("#tr_DocTxt").hide();
        $("#pro_DocDiv").hide();
        $("#Doc_Div").hide();
    }
    localStorage.setItem("isOTPmsg","0")
    $("#RegOTPNo").slideUp();
    document.getElementById("tbl1").style.display = "none";
    document.getElementById("Table1").style.display = "none";
    $('.flex-direction-nav').html("");
    $(".flex-control-nav").hide();
    CheckSMSPluginSupport();
    try {
        if (APPType == "$") {
            $(".GenralizedApHeading").hide();
            $("#HomePage").hide();
            $("#HomePagehree").show();
            if (PCODE == "00002_") {
                $("#main-p-00002_").show();
                $("#main-p-RSHT01").hide();
            } else {
                $("#main-p-00002_").hide();
                $("#main-p-RSHT01").show();
            }
        }
        else {
            $(".GenralizedApHeading").show();
            $("#HomePage").show();
            $("#HomePagehree").hide();
        }
        loaded();
        $("#heading").text(Heading);
        $("#imgcheck").show();
        $("#on").hide();
        //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        document.addEventListener("deviceready", HideWaiting, true);
        document.addEventListener("backbutton", BackButton, true); 
        document.addEventListener("pause", BackButton, false);
        window.location.href = "#page-con";
        var pa= setInterval(
            function ab() {
                clearInterval(pa);
                Flag = '0';
                CheckPartyRegistration("1")
            }, 1000);    
        var destination = $('#sel_image').offset();
        var a = destination.top +10;
        var b = destination.right + 200
        $('#A1').css({ top: a, right: b });       
        
    }
    catch (e) {
        alert(e.message);
    }

}
//change link item cart
function cliencode_check() {
    var clientCode = localStorage.getItem("ClientCode");
    if (clientCode == null || clientCode == "") {
        window.location = "index01.html";
    }
    else {
        var sp = clientCode.substring(0, 1);
        if (sp == "2") {
            window.location = "Retailer.html";
        }
        else {
            window.location = "SRepresentation.html"
        }

    }
}

//party ledger//vivek umredkar


function Party_ledger() {
    window.location.href = "#div-party-ldgr";
    ShowPartyLdgr();
}
function ShowPartyLdgr() {
    localStorage.setItem("Ldg_DataList", "");
    localStorage.setItem("Ldg_PCODE", "");
    localStorage.setItem("Ldg_OpBal", "");

    WebSerUrl = localStorage.getItem("APIURL");
    var pcode = "dem001";
    if (localStorage.getItem("FDName") == "ORDS") {
        pcode = localStorage.getItem("pcode");
    } else if (localStorage.getItem("FDName") == "WSAL") {
        pcode = localStorage.getItem("pcodeWsale");
    } else if (localStorage.getItem("FDName") == "SALE") {
        pcode = localStorage.getItem("pcodeSale");
    } else if (localStorage.getItem("FDName") == "MNRC") {
        pcode = localStorage.getItem("ReceiptPcode");
    } else if (localStorage.getItem("FDName") == "MNPY") {
        pcode = localStorage.getItem("ReceiptPcode");
    } else if (localStorage.getItem("FDName") == "QTTN") {
        pcode = localStorage.getItem("pcodeQTTN");
    } else if (localStorage.getItem("FDName") == "QTNW") {
        pcode = localStorage.getItem("pcodeQTNW");
    }
    //else {
    //    pcode = localStorage.getItem("pcodeLdg");
    //}
    if (pcode != "" && pcode != null) {
        loadmsg = "Loading Data...";
        $(".show-page-loading-msg").click();
        var frmdate = $("#frmdt_ldg1").val();
        var todate = $("#todt_ldg1").val();
        //var todate;
        //var frmdate;
        if (frmdate == "" || frmdate == null) {
            frmdate = localStorage.getItem("startdt");
        }
        if (todate == "" || todate == null) {
            todate = localStorage.getItem("enddt");
        }
        var IsopbalInclude;
        var Issummary;

        if ("1" == $("#flip-chk-opBal").val()) {
            IsopbalInclude = true;
        } else {
            IsopbalInclude = false;
        }
        if ("1" == $("#flip-chk-sumary").val()) {
            Issummary = true;
        } else {
            Issummary = false
        }
        $.ajax({
            url: WebSerUrl + "/Order/GetPartyLedger",
            type: "get",
            data: { pcode: pcode, frmdate: frmdate, todate: todate, IsOPBalInclude: IsopbalInclude, IsSummary: Issummary },
            dataType: 'json',
            processData: true,
            success: function (data) {
                $(".hide-page-loading-msg").click();
                $("#ldgRpt-body").html("");
                $("#ldgRpt-body").append(" <table id='tbl_ldgrpt' class='CSSTableGenerator' style='border-collapse:collapse;width:600px;'><tr><td style='width:50px;'>Dt</td><td >Description</td><td >DrAmt</td><td >CrAmt</td><td >Balance</td></tr>");
                for (var i = 0; i < data.length; i++) {
                    localStorage.setItem("Ldg_DataList", data);
                    localStorage.setItem("Ldg_PCODE", pcode);
                    if (data[0].Error == "1") {
                        ShowErrorFromServer(data[0].Description);
                    }
                    else {
                        if (IsopbalInclude) {
                            $("#lblOPBal").show();
                            var a;
                            if (data[data.length - 1].OPBalance.toFixed(2) > 0) {
                                a = data[data.length - 1].OPBalance.toFixed(2) + "Dr";
                            }
                            else {
                                a = data[data.length - 1].OPBalance.toFixed(2) + "Cr";
                            }
                            localStorage.setItem("Ldg_OpBal", a);
                            $("#lblOPBal").text("OpBal: " + a);
                        } else {
                            $("#lblOPBal").hide();
                        }
                        var balancestr;
                        if (data[i].Balance.toFixed(2) > 0) {
                            balancestr = data[i].Balance.toFixed(2) + "Dr";
                        } else {
                            balancestr = data[i].Balance.toFixed(2) + "Cr";
                        }
                        if (Issummary) {
                            $("#ldgRpt-body").hide();
                            $("#ldgRpt-body-summary").show();
                            $("#lbl-s-dr").text("DrAmt : " + data[data.length - 1].dramt.toFixed(2));
                            $("#lbl-s-cr").text("CrAmt : " + data[data.length - 1].cramt.toFixed(2));
                            $("#lbl-s-bal").text("Balance : " + balancestr);
                        } else {
                            $("#ldgRpt-body-summary").hide();
                            $("#ldgRpt-body").show();

                            if (i == data.length - 1) {
                                $("#tbl_ldgrpt tr:last").after("<tr><td colspan='2' style='color:purple;font-weight:bold;'>" + data[i].Description + "</td><td style='color:purple;font-weight:bold; text-align:right;width:70px;'>" + data[i].dramt.toFixed(2) + "</td><td  style='color:purple;font-weight: bold; text-align:right;width:70px;'>" + data[i].cramt.toFixed(2) + "</td><td style='color:purple;font-weight:bold; text-align:right;width:70px;'>" + balancestr.replace("-", "") + "</td></tr></tbody>");

                            } else {
                                $("#tbl_ldgrpt tr:last").after("<tr><td style='width:50px;'>" + data[i].Dt + "</td> <td  style='text-align:justify;width:340px;'>" + data[i].Description + "</td><td style=' text-align:right;'>" + data[i].dramt.toFixed(2) + "</td><td style=' text-align:right;'>" + data[i].cramt.toFixed(2) + "</td><td style=' text-align:right;'>" + balancestr.replace("-", "") + "</td></tr>");

                            }
                        }

                    }
                }
                setInterval(function setsize() {

                }, 2000);
            },
            error: function (event) {
                $(".hide-page-loading-msg").click();
                ServiceStopMsg();
            }
        });
    }
}
function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) {
        alert('Invalid Email Address');
        return false;
    }

    return true;

}

function SendLedgerEmail() {
    var pcode = "A10000";
    var frmdate = $("#frmdt_ldg1").val();//CHANGE BY VIVEK TEMPIRARY
    var todate = $("#todt_ldg1").val();
    //var todate=null;
    //var frmdate = null;
    if (frmdate == "" || frmdate == null) {
        frmdate = localStorage.getItem("startdt");
    }
    if (todate == "" || todate == null) {
        todate = localStorage.getItem("enddt");
    }
    var IsopbalInclude;
    var Issummary;

    if ("1" == $("#flip-chk-opBal").val()) {
        IsopbalInclude = true;
    } else {
        IsopbalInclude = false;
    }
    if ("1" == $("#flip-chk-sumary").val()) {
        Issummary = true;
    } else {
        Issummary = false
    }
    //  var pcode = localStorage.getItem("Ldg_PCODE");
    var list_partyLdgr = localStorage.getItem("Ldg_DataList");
    var ToEmail = $("#txt_ldgToEmail").val();
    var Subject = $("#txt_ldgSubject").val();
    var MsgText = $("#txt_ldgBody").val();
    var Footer = $("#txt_ldgFooter").val();
    var OPBal = localStorage.getItem("Ldg_OpBal");
    loadmsg = "Please Wait..";
    $(".show-page-loading-msg").click();
    var WebSerUrl = localStorage.getItem("APIURL");
    WebSerUrl = WebSerUrl + "/Values/SendLedgerEmail?pcode=" + pcode + "&frmdate=" + frmdate + "&todate=" + todate + "&IsOPBalInclude=" + IsopbalInclude + "&IsSummary=" + Issummary + "&ToEmail=" + ToEmail + "&Subject=" + Subject + "&MsgText=" + MsgText + "&Footer=" + Footer + "&OPBal=" + OPBal;
    $.ajax({
        url: WebSerUrl,
        success: function (data) {
            $(".hide-page-loading-msg").click();
            window.location.href = "#Party-Ldg";
            alert("Mail Send Succesfully.")
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            $(".hide-page-loading-msg").click();
            window.location.href = "#Party-Ldg";
            alert("Sorry! Please Try After Some Time")
        }
    });
}

//change uup
function Forward() {
    $(".hide-page-loading-msg").click();
    var link = window.location.href.toString();
    var r = link.split('#');

    switch (r[1]) {
        case "Item-Info-Search-Body":
        case "Item-Info-Search":
            window.location.href = "#Item-cart";
            break;
        case "Item-Info-Search":
            window.location.href = "#Item-cart";
            break;        
        default:
            window.location.href = "#page-con";
    }

}

function BackButton() {
    $(".hide-page-loading-msg").click();
    var link = window.location.href.toString();
    var r = link.split('#');
    $("#ordSaveprog").hide();
    $("#Div11").hide();
    switch (r[1]) {
        case "page-con":
            Clear_OrderDetail();
            navigator.app.exitApp();
            break;
        case "divRegi":
            
            break;
        case "Item-Info-Search":
        case "profile":
        case "saleRpt":
        case "div-offer":
            window.location.href = "#page-con";
            break;
        case "Item-Info-Search-Body":
        case "ImageSelect":
            if (activemenu == 'O') {
                window.location.href = "#Item-Info-Search";
            } else {
                window.location.href = "#page-con";
            }
            break;
        case "Item-cart":
            window.location.href = "#Item-Info-Search";
            break;
        case "Vrdetail":
            Order_click();
            break;
        case "altITem":
            history.back(1);
            break;
        default:
            window.location.href = "#page-con";
    }

}

function Reload() {
    window.location.href = "#page-con";
    window.location.reload();
}
function Clear_OrderDetail() {
    localStorage.setItem("SelectedArea", "");
    localStorage.setItem("SelectedItemIndex", "");
    localStorage.setItem("activePage", "");
    localStorage.setItem("curr_window", "");
    localStorage.setItem("SelectedItemInfo", "");
    localStorage.setItem("TotalAmt", 0);
    $("#lbl-cart-cnt").text("0");
    $("#lbl-cart-cnt1").text("0");
}

function HideWaiting() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

//Reset APp Or LogOut
function Reset() {
    window.localStorage.clear();
    location.reload();
}

//To check User Register or Not
function fun_CheckPartyReg() {
    var MobileNo = $("#txt-clientMobno").val().trim();
    if (MobileNo == "" || MobileNo == null) {
        var txtClientCode = $("#txt-clientCode").val().trim();
        if (txtClientCode == "" || txtClientCode == null) {
            textAnim('txt-clientCode', 'bounce');
        }
        else {
            GetDataFromRegCode();
        }
    } else {
        loadmsg = "Please Wait! Checking Mobile No..";
        $(".show-page-loading-msg").click();
        GetDataFromMobNo();
    }
}

function CheckRegCode() {
    if ($("#txt-clientCode").val() == "") {
    } else {
        localStorage.setItem("ClientCode", $("#txt-clientCode").val().trim());
    }    
    CheckPartyRegistration("0");
}

//Check entered OTP No
function Reg_CheckOTPNo() {
    if (localStorage.getItem("randomNo") == $("#txt-clientOTP").val()) {
        localStorage.setItem("ClientCode", localStorage.getItem("CheckRegCode"));
        CheckRegCode();
    } else {
        alert('Please enter Correct OTP no.')
    }
}


//Update Device Id on  SErver For Push Notification
function UpdateDeviceId() {
    //Update on Gbc Server
    $.ajax({
        url: GBCServicePath + "/Values/UpDateDeviceId?PtCode=" + localStorage.getItem("PTCODE") + "&DeviceId=" + localStorage.getItem("DeviceId"),
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
           
        }
    });

    //Update On client Server
    var APIURL = localStorage.getItem("APIURL");
    APIURL = APIURL + "/Values/UpDateDeviceId?PtCode=" + localStorage.getItem("PTCODE") + "&DeviceId=" + localStorage.getItem("DeviceId"),

    $.ajax({
        url: APIURL,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
          
        }
    });
}


function CheckPartyRegistration(val) {
    CheckSupplierStatus();
    if (val == "0") {
        loadmsg = "Checking...";
        $(".show-page-loading-msg").click();
    }
    //localStorage.setItem("ClientCode", "");
    var clientCode = localStorage.getItem("ClientCode");
    if (clientCode == null || clientCode == "") {
        showClient();
    }
    
    else {  
        var APIURL = localStorage.getItem("APIURL");     
       // var url = GBCServicePath + "/Values/checkparty?PtCode=" + clientCode;
         var url = APIURL + "/Values/checkparty?PtCode=" + clientCode;
        try {
            $.ajax({
                url: url,
                type: "GET",
                success: function (data) {
                    try{
                        if (APPType == "@") {
                            $("#a4_").show();
                        } else {
                            $("#a4").show();
                        }
                        $(".hide-page-loading-msg").click();
                        SetProfilePhoto();
                        if (APPType == "$") {
                            if (data.indexOf("$") == 0) {
                                alert(data);
                            }
                            else if (data == "0") {
                                alert("Invalid Registration Code");
                                localStorage.setItem("ClientCode", "");
                                showClient();
                            }
                            else {
                                try{
                                    
                                    var nameSer = data.split('|');                                   
                                    localStorage.setItem("PTNAME", nameSer[3]);
                                    localStorage.setItem("PTCODE", nameSer[4]);
                                    localStorage.setItem("PTNO", nameSer[5]);
                                    localStorage.setItem("PTEMAIL", nameSer[6]);
                                    localStorage.setItem("PTADD", nameSer[7]);
                                    localStorage.setItem("State", nameSer[9]);
                                    localStorage.setItem("City", nameSer[10]);
                                    localStorage.setItem("Area", nameSer[11]);
                                    localStorage.setItem("DocName", nameSer[12]);
                                    localStorage.setItem("DocCode", nameSer[13]);
                                    $("#div-clientCode").popup("close");
                                    if (nameSer[1] == "") {
                                        $("#lblSupp").text(Heading);
                                    } else {
                                        $("#lblSupp").text(nameSer[1]);
                                    }
                                    $("#profile_name").text(nameSer[3]);
                                    $("#Cust").text(nameSer[3]);
                                    AfterLoginPage();
                                    UpdateDeviceId();
                                    SetStaeCity();
                                }
                                catch (e) {
                                    alert(e.message);
                                }
                            }
                        } else {
                            if (data.split('|')[0] == null || data.split('|')[0] == "") {
                                AfterLoginPage();
                                alert("Please Select Supplier");                            
                                GetActiveSupplierList();
                                window.location.href = "#profile";
                            } else {
                                if (data.indexOf("$") == 0) {
                                    alert(data);
                                }
                                else if (data == "0") {
                                    alert("Invalid Registration Code");
                                    showClient();
                                }
                                else {
                                    
                                    var nameSer = data.split('|');
                                   
                                    localStorage.setItem("APIURL", nameSer[0]);
                                    localStorage.setItem("PNAME", nameSer[1]);
                                    localStorage.setItem("PCode", nameSer[2]);
                                    localStorage.setItem("PTNAME", nameSer[3]);
                                    localStorage.setItem("PTCODE", nameSer[4]);
                                    localStorage.setItem("PTNO", nameSer[5]);
                                    localStorage.setItem("PTEMAIL", nameSer[6]);
                                    localStorage.setItem("PTADD", nameSer[7]);
                                    localStorage.setItem("State", nameSer[9]);
                                    localStorage.setItem("City", nameSer[10]);
                                    localStorage.setItem("Area", nameSer[11]);
                                    localStorage.setItem("DocName", nameSer[12]);
                                    localStorage.setItem("DocCode", nameSer[13]);
                                    if (APPType == "@") {
                                        PCODE = nameSer[2];
                                    }
                                    $("#div-clientCode").popup("close");
                                    $("#lblSupp").text(nameSer[1]);
                                    $("#profile_name").text(nameSer[3]);
                                    $("#Cust").text(nameSer[3]);
                                    AfterLoginPage();
                                    UpdateDeviceId();
                                    SetStaeCity();
                                }
                            }
                        }
                    } catch (e) {
                        alert(e.message);
                    }
                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    alert(xmlHttpRequest.responseText);
                    if (APPType == "@") {
                        $("#a4_").show();
                    } else {
                        $("#a4").show();
                    }
                    $(".hide-page-loading-msg").click();
                    alert("Error occurred while getting information from GBC Server. Please contact with GBC Administrator or check your internet connection..");
                    showClient();
                }
            });
        }
        catch (e) {
            alert(e.message);
            $(".hide-page-loading-msg").click();
            alert("Error occurred while getting information from GBC Server. Please contact with GBC Administrator or check your internet connection.");
            showClient();
        }

    }

}

function CheckSupplierStatus() {
    $('.activeImg').show();
    $('.activeImg').attr('src', 'assets/img/red.gif');
    if (Flag != "0") {
        loadmsg = "Checking...";
        $(".show-page-loading-msg").click();
    }
    if (PCODE != "") {
        var url = GBCServicePath + "/Values/getServiceStatus?pcode=" + PCODE + "&AppType=" + APPType;
        try {
            $.ajax({
                url: url,
                type: "GET",
                success: function (data) {
                    $(".hide-page-loading-msg").click();                    
                    showDisplayMsg(data);
                    setInterval(
                        function Check() {
                            PingTiaService("2");
                        }, 1000);
                },
                error: function (event) {
                    $(".hide-page-loading-msg").click();
                    showDisplayMsg("!");
                }
            });
        }
        catch (e) {
            alert(e.message);
            showDisplayMsg("!")
            setInterval(
                        function Check() {
                            PingTiaService("2");
                        }, 1000);
        }
    }
    GetPRetailOrdQty();
}

function showDisplayMsg(AppURL) {
    if (AppURL == "*") {
        alert("Problem in connecting to Supplier!!! Please Try After Some Time.*");
    }
    else if (AppURL == "#") {
        alert("Supplier TiaERPApp service is stop!!!");
    } else if (AppURL == "%") { //license Expired
        alert("Problem in connecting to Supplier!!! Please Try After Some Time.%");
    } else if (AppURL == "$") {
        alert("Problem in connecting to Supplier!!! Please Try After Some Time.$");
    }
    else {
        if (AppURL == "!") {
            alert("Problem in getting information from GBC Server. Please contact with GBC Administrator or check your internet connection.");
        }
        else {
            try {
                var itmstr = AppURL.split('<|>');
                localStorage.setItem("APIURL", itmstr[2]);
                localStorage.setItem("PNAME", itmstr[1]);
                localStorage.setItem("PCode", itmstr[0]);
                if (APPType == "@") {
                    PCODE = itmstr[0];
                }
                getStartEndDate();
                PingTiaService("2");
                
                //AfterLoginPage();
                //window.location.href = "#page-con";
            } catch (e) {
                alert(e.message);
            }
        }
    }

}


function showClient() {
    if (APPType == "@") {
        $("#a4_").hide();
    } else {
        $("#a4").hide();
    }
    $("#imgcheck").hide();
    $("#on").show();
    $('.activeImg').attr('src', 'assets/img/red.gif');
    $("#a_div-clientCode").click();
}


function textAnim(evt, str) {
    try {
        $('#' + evt).addClass(str + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('#' + evt).removeClass(str + ' animated');
        });
    } catch (err) {
    }
};

$(document).on("click", ".show-page-loading-msg", function () {
    var $this = $(this),
        theme = $this.jqmData("theme") || $.mobile.loader.prototype.options.theme,
        msgText = loadmsg,
        textVisible = $this.jqmData("textvisible") || $.mobile.loader.prototype.options.textVisible,
        textonly = !!$this.jqmData("textonly");
    html = $this.jqmData("html") || "";
    $.mobile.loading("show", {
        text: msgText,
        textVisible: textVisible,
        theme: theme,
        html: html
    });
    var loading = document.querySelector(".ui-loader");
    loading.style.display = "block";
})
   .on("click", ".hide-page-loading-msg", function () {
       var loading = document.querySelector(".ui-loader");
       loading.style.display = "none";
       $.mobile.loading("hide");

   });

function ResendOTP() {
    SendingOTP();
}

///////Registration Process
function CheckMono() {
    try {
        //alert('in check mono');
        var Name = $("#txtRegName").val().trim();
        var MoNo = $("#txtMoNO").val().trim();
        var Address = $("#txtadd").val().trim();
        var Email = $("#txtemail").val().trim();

        localStorage.setItem("txtName", Name);
        localStorage.setItem("txtMono", MoNo);
        localStorage.setItem("txtAdd", Address);
        localStorage.setItem("txtEmail", Email);

        if (Name == "") {
            textAnim('txtRegName', 'bounce');
        }
        if (MoNo == "") {
            textAnim('txtMoNO', 'bounce');
        }
        if (Address == "") {
            textAnim('txtadd', 'bounce');
        }
        if (Email == "") {
            textAnim('txtemail', 'bounce');
        }

        if (Name != "" && MoNo != "" && Address != "" && Email != "") {
            loadmsg = "Checking Mobile No.";
            $(".show-page-loading-msg").click();
            var MoNo;
            if (localStorage.getItem("PTCODE") == "" || localStorage.getItem("PTCODE") == null) {
                MoNo = $("#txtMoNO").val();
            } else {
                MoNo = $("#txtMoNO").val();
            }
            var WebSerUrl = localStorage.getItem("APIURL");

            $.ajax({
                url: WebSerUrl + "/Values/CheckNo?Mo=" + MoNo,
                type: "GET",
                dataType: "json",
                cache: false,
                success: function (data) {
                   
                    if (data.indexOf("$") == 0) {
                        alert(data);
                        $(".hide-page-loading-msg").click();
                        $("#txtMoNO").focus();
                    }
                    else if (data == "@") {
                        alert("Mobile No AlReady Registered.");
                        $(".hide-page-loading-msg").click();
                    }
                    else {
                        //$(".hide-page-loading-msg").click();                    
                        SendingOTP();
                    }
                },
                //if any error occure
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    $(".hide-page-loading-msg").click();
                    alert("Problem In Checking Availability Of Mobile No. Please Check Your Internet Connection.");
                }
            })
        }
    } catch (e) {
        alert(e.message);
    }
}


function ChkOTPSend() {
    
    try {
        if (localStorage.getItem("txtName") != "" && localStorage.getItem("txtMono") != "" && localStorage.getItem("txtAdd") != "" && localStorage.getItem("txtEmail") != "" && localStorage.getItem("txtName") != null && localStorage.getItem("txtMono") != null && localStorage.getItem("txtAdd") != null && localStorage.getItem("txtEmail") != null) {
            $("#txtRegName").val(localStorage.getItem("txtName"));
            $("#txtMoNO").val(localStorage.getItem("txtMono"));
            $("#txtadd").val(localStorage.getItem("txtAdd"));
            $("#txtemail").val(localStorage.getItem("txtEmail"));
        }
        if (localStorage.getItem("OTP") != "" && localStorage.getItem("OTP") != null) {            
            $("#divOTP").slideDown();
            $("#txtotp").focus();
            window.scrollTo(0, 800);
        }
        else {           
            $("#divOTP").slideUp();
        }
        var link = window.location.href.toString();
        var r = link.split('#');

        if (r[1] != "divRegi") {
            window.location.href = "#divRegi";
        }
        
    }
    catch (e) {
        alert(e.message);
    }
}

function SendingOTP() {
    try {
        // alert('sendoing otp');
        startWatch();
        var Name = $("#txtRegName").val().trim();
        var MoNo = $("#txtMoNO").val().trim();
        var Address = $("#txtadd").val().trim();
        var Email = $("#txtemail").val().trim();
        //alert('show');
        loadmsg = "Sending OTP.";
        var showIntval1 = setInterval(function fun2() {
            $(".show-page-loading-msg").click();
        }, 10);
        randomNumberGenerate();
        var no = localStorage.getItem("randomNo");
        var msg = "Hi! Welcome to TiaERP@ConsumerApp. Your OTP no is ";
        if (APPType == "$") {
            msg = "Hi! Welcome to " + Heading + " App. Your OTP no is " ;
        }
        localStorage.setItem("OTP", localStorage.getItem("randomNo"));
        localStorage.setItem("OTpMsgBody", msg);
        msg = msg + no;
        $.ajax({
            url: GBCServicePath + "/Values/GetSMSUrl?mono=" + MoNo + "&msg=" + msg + "&AppType=" + APPType + "&Pcode=" + PCODE,
            type: "GET",
            dataType: "json",
            cache: false,
            success: function (data) {            
                if (data == "1") {
                    clearInterval(showIntval1);
                    $(".show-page-loading-msg").click();
                    localStorage.setItem("OTP", localStorage.getItem("randomNo"));
                    ReadOTP();
                } else {
                    clearInterval(showIntval1);
                    $(".hide-page-loading-msg").click();
                    if (data.indexOf("remote name could not be resolved") > 0) {
                        alert('Please Check Your Internet! And Try Again!');
                    }
                    else {
                        alert("Sorry!!! SMS Sending Failed. Please Try after some Time.");
                    }                
                }
            
            },
            error: function (xmlHttpRequest, textStatus, errorThrown) {
                alert("Sorry!!! SMS Sending Failed. Please Try after some Time.");
                clearInterval(showIntval1);
                $(".hide-page-loading-msg").click();
            }
        })
    }
    catch (e) {
        alert(e.message);
    }
}
var showIntval;
function ReadOTP() {
    $(".hide-page-loading-msg").click();
    loadmsg = "Verifying OTP No.";
    $(".show-page-loading-msg").click();
    showIntval = setInterval(function fun2() {
        $(".show-page-loading-msg").click();
    }, 10);
    setTimeout(function fun1() {        
        closeVerification();
        $("#divOTP").show();
    }, 16000);
}

function closeVerification() {
    $("#divOTP").hide();
    clearInterval(showIntval);
    $(".hide-page-loading-msg").click();
    $("#divOTP").slideDown();
    $("#txtotp").focus();
    window.scrollTo(0, 800);
}

$(document).ready(function () {
    $("#txtMoNO").keydown(function (e) {
        if ($("#txtMoNO").val().length >= 10) {
            var charCode = (e.which) ? e.which : event.keyCode
            if (charCode != 8) {
                e.preventDefault();
            }
        }
    });
    $("#txtRegName").blur(function (e) {
        if ($("#txtRegName").val().length <= 3) {
            alert("Enter Proper Name");
            
        }
    });
    $("#txtMoNO").blur(function (e) {
        if ($("#txtMoNO").val().length < 10) {
            alert("Enter Proper Mobile No");
            $("#txtMoNO").focus();
        }
    });
});

function randomNumberGenerate() {
    var rand_no = Math.floor(Math.random() * 900000) + 100000;
    rand_no = parseInt(rand_no);
    localStorage.setItem("randomNo", rand_no);
}

function CheckOTP() {
    var OTP = $("#txtotp").val().trim();
    if (OTP == "") {
        textAnim('txtotp', 'bounce');
    }
    else {
        if (OTP == localStorage.getItem("OTP")) {
            localStorage.setItem("randomNo", "");
            if (localStorage.getItem("PTCODE") == "" || localStorage.getItem("PTCODE") == null || localStorage.getItem("ClientCode") =="" || localStorage.getItem("ClientCode")==null) {
                Register();
            }
            else {
                UpdateProfileData();
            }
            
        }
        else {
            alert("Incorrect OTP");
        }
    }
}

function SetDocName(flag) {
    if (flag == '1') {
        localStorage.setItem("DocName", $('#txtDocName').val());
    } else {
        localStorage.setItem("DocName", $('#pro_txtDocname').val());
    }
}

$(function () {
    try {
        $('#pro_txtDocname').autocomplete({
            autoFocus: true,
            source: function (request, response) {

                $.ajax({
                    url: localStorage.getItem("APIURL") + "/Product/GetDr",
                    data: { Iname: request.term },
                    type: "GET",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        response($.map(data, function (item, id) {
                            var mydata = {
                                label: item.Name,
                                code: item.HrCode
                            };
                            return mydata;
                        }));
                    },
                    //if any error occure
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        //alert(xmlHttpRequest.responseText);
                    }
                })
            },

            messages: {
                noResults: function (resultsCount) {
                },
                results: function (resultsCount) {
                }
            },
            select: function (event, ui) {
                localStorage.setItem("DocCode", ui.item.code);
                localStorage.setItem("DocName", ui.item.label);
            },
            close: function () {
            },
            minLength: 1,
            delay: 1
        })

    } catch (err) {
    }
});
$(function () {
    try {
        $('#txtDocName').autocomplete({
            autoFocus: true,
            source: function (request, response) {

                $.ajax({
                    url: localStorage.getItem("APIURL") + "/Product/GetDr",
                    data: { Iname: request.term },
                    type: "GET",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        response($.map(data, function (item, id) {
                            var mydata = {
                                label: item.Name,
                                code: item.HrCode
                            };
                            return mydata;
                        }));
                    },
                    //if any error occure
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        //alert(xmlHttpRequest.responseText);
                    }
                })
            },

            messages: {
                noResults: function (resultsCount) {
                },
                results: function (resultsCount) {
                }
            },
            select: function (event, ui) {
                localStorage.setItem("DocCode", ui.item.code);
                localStorage.setItem("DocName", ui.item.label);
            },
            close: function () {               
            },
            minLength: 1,
            delay: 1
        })

    } catch (err) {
    }
});

$(function () {
    try {
        $('#selState').autocomplete({
            autoFocus: true,
            source: function (request, response) {
                 
                $.ajax({
                    url: localStorage.getItem("APIURL") + "/Order/GetStateList?name=" + request.term,
                    type: "GET",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        response($.map(data, function (item, id) {
                           
                            var mydata = {
                                label: item.StName,
                                code: item.StCode                                
                            };
                            return mydata;
                        }));
                    },
                    //if any error occure
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        //alert(xmlHttpRequest.responseText);
                    }
                })
            },

            messages: {
                noResults: function (resultsCount) {
                  
                },
                results: function (resultsCount) {

                }
            },
            select: function (event, ui) {
                $("#ast").hide();
                $("#selState").css('color', 'black');
                localStorage.setItem("Stcode", ui.item.code);
                localStorage.setItem("StName", ui.item.label);
                localStorage.setItem("State", ui.item.code);
                $('#selCity').focus();
            },
            close: function () {
                var name = $("#selState").val();
                if (name.trim() != localStorage.getItem("StName")) {
                    $("#ast").show();
                    $("#selState").css('color', 'red');
                    textAnim('ast', 'bounceInDown');
                }
            },
            minLength: 1,
            delay: 1
        })
        
    } catch (err) {
    }
});

$(function () {
    try {
        $('#selCity').autocomplete({
            autoFocus: true,
            source: function (request, response) {
                $.ajax({
                    url: localStorage.getItem("APIURL") + "/Order/GetCityList?Stcode=" + localStorage.getItem("Stcode") + "&name=" + request.term,
                    type: "GET",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        response($.map(data, function (item, id) {

                            var mydata = {
                                label: item.CtName,
                                code: item.CtCode
                            };
                            return mydata;
                        }));
                    },
                    //if any error occure
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        //alert(xmlHttpRequest.responseText);
                    }
                })
            },

            messages: {
                noResults: function (resultsCount) {

                },
                results: function (resultsCount) {

                }
            },
            select: function (event, ui) {
                $("#act").hide();
                $("#selCity").css('color', 'black');
                localStorage.setItem("CtName", ui.item.label);
                localStorage.setItem("Ctcode", ui.item.code);
                localStorage.setItem("City", ui.item.code)
               
                $('#selArea').focus();
            },
            close: function () {
                var name = $("#selCity").val();
                if (name.trim() != localStorage.getItem("CtName")) {
                    $("#act").show();
                    $("#selCity").css('color', 'red');
                    textAnim('act', 'bounceInDown');
                }
            },
            minLength: 1,
            delay: 1
        })

    } catch (err) {
    }
});

$(function () {
    try {
        $('#selArea').autocomplete({
            autoFocus: true,
            source: function (request, response) {
                $.ajax({
                    url: localStorage.getItem("APIURL") + "/Order/GetAreaList?name=" + request.term,
                    type: "GET",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        response($.map(data, function (item, id) {

                            var mydata = {
                                label: item.aName,
                                code: item.aCode
                            };
                            return mydata;
                        }));
                    },
                    //if any error occure
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        //alert(xmlHttpRequest.responseText);
                    }
                })
            },

            messages: {
                noResults: function (resultsCount) {

                },
                results: function (resultsCount) {

                }
            },
            select: function (event, ui) {
                $("#aat").hide();
                $("#selArea").css('color', 'black');
                localStorage.setItem("Acode", ui.item.code);
                localStorage.setItem("AName", ui.item.label);
                localStorage.setItem("Area", ui.item.code);
                
                $('#txtadd').focus();
            },
            close: function () {
                var name = $("#selArea").val();
                if (name.trim() != localStorage.getItem("AName")) {
                    $("#aat").show();
                    $("#selArea").css('color', 'red');
                    textAnim('aat', 'bounceInDown');
                }
            },
            minLength: 1,
            delay: 1
        })

    } catch (err) {
    }
});


$(function () {
    try {
        $('#Textstate').autocomplete({
            autoFocus: true,
            source: function (request, response) {
                $.ajax({
                    url: localStorage.getItem("APIURL") + "/Order/GetStateList?name=" + request.term,
                    type: "GET",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        response($.map(data, function (item, id) {

                            var mydata = {
                                label: item.StName,
                                code: item.StCode
                            };
                            return mydata;
                        }));
                    },
                    //if any error occure
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        alert(xmlHttpRequest.responseText);
                    }
                })
            },

            messages: {
                noResults: function (resultsCount) {

                },
                results: function (resultsCount) {

                }
            },
            search: function (event, ui) {                
                localStorage.setItem("Stcode", "");
                localStorage.setItem("StName", "");

            },
            select: function (event, ui) {
                $("#a5").hide();
                $("#Textstate").css('color', 'black');
                localStorage.setItem("Stcode", ui.item.code);
                localStorage.setItem("StName", ui.item.label);
                localStorage.setItem("State", ui.item.code);
                $('#Textcity').focus();
            },
            close: function () {
                var name = $("#Textstate").val();
                if (name.trim() != localStorage.getItem("StName")) {
                    $("#a5").show();
                    $("#Textstate").css('color', 'red');
                    textAnim('a5', 'bounceInDown');
                }
            },
            minLength: 1,
            delay: 1
        })

    } catch (err) {
    }
});

$(function () {
    try {
        $('#Textcity').autocomplete({
            autoFocus: true,
            source: function (request, response) {
                $.ajax({
                    url: localStorage.getItem("APIURL") + "/Order/GetCityList?Stcode=" + localStorage.getItem("Stcode") + "&name=" + request.term,
                    type: "GET",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        response($.map(data, function (item, id) {

                            var mydata = {
                                label: item.CtName,
                                code: item.CtCode
                            };
                            return mydata;
                        }));
                    },
                    //if any error occure
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        alert(xmlHttpRequest.responseText);
                    }
                })
            },

            messages: {
                noResults: function (resultsCount) {

                },
                results: function (resultsCount) {

                }
            },
            select: function (event, ui) {
                $("#a6").hide();
                $("#Textcity").css('color', 'black');
                localStorage.setItem("CtName", ui.item.label);
                localStorage.setItem("Ctcode", ui.item.code);
                localStorage.setItem("City", ui.item.code)
                $('#Textarea').focus();
            },
            close: function () {
                var name = $("#Textcity").val();
                if (name.trim() != localStorage.getItem("CtName")) {
                    $("#a6").show();
                    $("#Textcity").css('color', 'red');
                    textAnim('a6', 'bounceInDown');
                }
            },
            minLength: 1,
            delay: 1
        })

    } catch (err) {
    }
});

$(function () {
    try {
        $('#Textarea').autocomplete({
            autoFocus: true,
            source: function (request, response) {
                $.ajax({
                    url: localStorage.getItem("APIURL") + "/Order/GetAreaList?name=" + request.term,
                    type: "GET",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        response($.map(data, function (item, id) {

                            var mydata = {
                                label: item.aName,
                                code: item.aCode
                            };
                            return mydata;
                        }));
                    },
                    //if any error occure
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        alert(xmlHttpRequest.responseText);
                    }
                })
            },

            messages: {
                noResults: function (resultsCount) {

                },
                results: function (resultsCount) {

                }
            },
            select: function (event, ui) {
                $("#a7").hide();
                $("#Textarea").css('color', 'black');
                localStorage.setItem("Acode", ui.item.code);
                localStorage.setItem("Area", ui.item.code);
                localStorage.setItem("AName", ui.item.label);
                $('#pro_txtadd').focus();
            },
            close: function () {
                var name = $("#Textarea").val();
                if (name.trim() != localStorage.getItem("AName")) {
                    $("#a7").show();
                    $("#Textarea").css('color', 'red');
                    textAnim('a7', 'bounceInDown');
                }
            },
            minLength: 1,
            delay: 1
        })

    } catch (err) {
    }
});

$(function () {
    try {
        $('#del-area').autocomplete({
            autoFocus: true,
            source: function (request, response) {
                $.ajax({
                    url: localStorage.getItem("APIURL") + "/Order/GetAreaList?name=" + request.term,
                    type: "GET",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        response($.map(data, function (item, id) {

                            var mydata = {
                                label: item.aName,
                                code: item.aCode
                            };
                            return mydata;
                        }));
                    },
                    //if any error occure
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        alert(xmlHttpRequest.responseText);
                    }
                })
            },

            messages: {
                noResults: function (resultsCount) {

                },
                results: function (resultsCount) {

                }
            },
            select: function (event, ui) {
                $("#a-msg").hide();
                $("#a8").hide();
                $("#del-area").css('color', 'black');
                localStorage.setItem("Acode", ui.item.code);
                localStorage.setItem("Area", ui.item.code);
                localStorage.setItem("AName", ui.item.label);
                SetStaeCity();
            },
            close: function () {
                var name = $("#del-area").val();
                if (name.trim() != localStorage.getItem("AName")) {
                    $("#a8").show();
                    $("#del-area").css('color', 'red');
                    textAnim('a8', 'bounceInDown');
                    localStorage.setItem("DelCharges", "0");
                }
            },
            minLength: 1,
            delay: 1
        })

    } catch (err) {
    }
});

function CheckListValidation(val) {
    setTimeout(function an() {
        switch (val) {
            case '1':
                var name = $("#selState").val();
                if (name != "" && name != null) {
                    if (name.trim() != localStorage.getItem("StName")) {
                        $("#ast").show();
                        $("#selState").css('color', 'red');
                        textAnim('ast', 'bounceInDown');
                    }
                }
                break;
            case '2':
                var name = $("#selCity").val();
                if (name != "" && name != null) {
                    if (name.trim() != localStorage.getItem("CtName")) {
                        $("#act").show();
                        $("#selCity").css('color', 'red');
                        textAnim('act', 'bounceInDown');
                    }
                }
                break;
            case '3':
                var name = $("#selArea").val();
                if (name != "" && name != null) {
                    if (name.trim() != localStorage.getItem("AName")) {
                        $("#aat").show();
                        $("#selArea").css('color', 'red');
                        textAnim('aat', 'bounceInDown');
                    }
                }
                break;
            case '4':
                var name = $("#Textstate").val();
                if (name != "" && name != null) {
                    if (name.trim() != localStorage.getItem("StName")) {
                        $("#a5").show();
                        $("#Textstate").css('color', 'red');
                        textAnim('a5', 'bounceInDown');
                    }
                }
                break;
            case '5':
                var name = $("#Textcity").val();
                if (name != "" && name != null) {
                    if (name.trim() != localStorage.getItem("CtName")) {
                        $("#a6").show();
                        $("#Textcity").css('color', 'red');
                        textAnim('a6', 'bounceInDown');
                    }
                }
                break;
            case '6':
                var name = $("#Textarea").val();
                if (name != "" && name != null ) {
                    if (name.trim() != localStorage.getItem("AName")) {
                        $("#a7").show();
                        $("#Textarea").css('color', 'red');
                        textAnim('a7', 'bounceInDown');
                    }
                }
                break;
            case '7':
                var name = $("#del-area").val();
                if (name != "" && name != null) {
                    if (name.trim() != localStorage.getItem("AName")) {
                        $("#a8").show();
                        $("#del-area").css('color', 'red');
                        textAnim('a8', 'bounceInDown');
                        localStorage.setItem("DelCharges", "0");
                    }
                } else {
                    if (name == "") {
                        localStorage.setItem("DelCharges", "0");
                    }
                }
                SetOrderBillAmtType();
                break;
            default:
                break;
        }
    }, 100);
}

function Register() {
    try {
        closeVerification();
        stopWatch();
        loadmsg = "Saving Data...";
        $(".show-page-loading-msg").click();
        var showInterval = setInterval(function fun2() {
            loadmsg = "Saving Data...";
            $(".show-page-loading-msg").click();
        }, 10);
        var Name = $("#txtRegName").val();
        var MoNo = $("#txtMoNO").val();
        var Address = $("#txtadd").val();
        var Email = $("#txtemail").val();
        var state = $("#selState").val();
        // var DrName = $("#txtDocName").val();
        //var DrCode = localStorage.getItem("DocCode");
        if (localStorage.getItem("Stcode") != "" && localStorage.getItem("Stcode") != null) {
            state = localStorage.getItem("Stcode");
        }
        var city = $("#selCity").val();
        if (localStorage.getItem("Ctcode") != "" && localStorage.getItem("Ctcode") != null) {
            city = localStorage.getItem("Ctcode");
        }
        var area = $("#selArea").val();
        if (localStorage.getItem("Acode") != "" && localStorage.getItem("Acode") != null) {
            area = localStorage.getItem("Acode");
        }
        var WebSerUrl = localStorage.getItem("APIURL");
        $.ajax({
            // url: GBCServicePath + "/Values/RegisterCustmoer?name=" + Name + "&Add=" + Address + "&email=" + Email + "&phone=" + MoNo + "&Pass= &AppType=" + APPType + "&PCODE=" + PCODE + "&Stcode=" + state + "&CtCode=" + city + "&area=" + area + "&deviceId =" + localStorage.getItem("DeviceId") + "&DrName=" + DrName + "&DrCode=" + DrCode,
            url: WebSerUrl + "/Values/RegisterCustmoer?name=" + Name + "&Add=" + Address + "&email=" + Email + "&phone=" + MoNo + "&Pass= &AppType=" + APPType + "&PCODE=" + PCODE + "&Stcode=" + state + "&CtCode=" + city + "&area=" + area + "&deviceId =" + localStorage.getItem("DeviceId"),
            type: "GET",
            dataType: "json",
            cache: false,
            success: function (data) {            
                if (data.indexOf("$") == 0) {
                    alert(data);
                }
                else {
                    try{
                        localStorage.setItem("PTNAME", Name);
                        localStorage.setItem("PTCODE", data);
                        localStorage.setItem("PTNO", MoNo);
                        localStorage.setItem("PTEMAIL", Email);
                        localStorage.setItem("PTADD", Address);
                        localStorage.setItem("State", state);
                        localStorage.setItem("City", city);
                        localStorage.setItem("Area", area);
                        localStorage.setItem("deviceId", localStorage.getItem("DeviceId"))
                        window.location.href = "#page-con";
                        alert("Succeccfully Registered");
                        localStorage.setItem("OTP", "");
                        alert("Your Registration Code " + data);
                        localStorage.setItem("ClientCode", data);
                        CheckPartyRegistration("1");
                        clearInterval(showInterval);
                        $(".hide-page-loading-msg").click();
                        UpdateDeviceId();
                    } catch (e) {
                        alert(e.message);
                    }
                }
                setTimeout(function fun1() {
                    clearInterval(showInterval);
                    $(".hide-page-loading-msg").click();
                }, 6000);
            },
            error: function (xmlHttpRequest, textStatus, errorThrown) {
                
                alert(textStatus);
                $(".hide-page-loading-msg").click();
            }
        })
    }
    catch (e) {
        alert(e.message);
    }
}

///////End Registration Process

function Rpt_click() {
    $("#lblptname1").text(localStorage.getItem("PTNAME").toString().toUpperCase());    
    window.location.href = "#saleRpt";
    GetSaleRpt();
}

function GetSaleRpt() {
    loadmsg = "Loading Data...";
    $(".show-page-loading-msg").click();
    var url = localStorage.getItem("APIURL");
    var frmdate = $("#frmdt_ldg").val();
    var todate = $("#todt_ldg").val();
    var pcode = 'ZZZZZZ'; PCODE;
    var ptcode =   localStorage.getItem("PTCODE");
    var vrtype = $("#flip-chk-vrtype").val();
    url = url + "/Values/GetSaleRpt?fromdate=" + frmdate + "&Todate=" + todate + "&pcode=" + pcode + "&ptcode=" + ptcode + "&vrtype=" + vrtype;    
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            $(".hide-page-loading-msg").click();
            var itm = data;
            $("#saleRptBody").html("");
            $("#saleRptBody").append("<table  class='CSSTableGenerator' style='border-collapse:collapse;width:100%'><tr><td>VrNo</td><td>VrDate</td><td>CashAmt</td><td>CrAmt</td></tr>");
            for (var i = 0; i < itm.length; i++) {
                if (i == itm.length - 1) {
                    $("#saleRptBody tr:last").after("<tr><td colspan='2' style='color:purple;font-weight:bold;'>" + itm[i].Vrno + "</td><td style='color:purple;font-weight:bold; text-align:right;width:70px;'>" + itm[i].cashAmt + "</td><td  style='color:purple;font-weight: bold; text-align:right;width:70px;'>" + itm[i].crAmt + "</td></tr></tbody>");
                    
                } else {
                    $("#saleRptBody tr:last").after(
                        "<tr><td>" + itm[i].Vrno + "</td> <td>" + itm[i].Vrdt + "</td><td style='text-align: right;'>" + itm[i].cashAmt + "</td><td style='text-align: right;'>" + itm[i].crAmt + "</td></tr></tbody>");
                }
            }
        },
        error: function (data) {
            $(".hide-page-loading-msg").click();
            alert("Supplier TiaERPApp service is stop!!!");
        }
    });
}

function AfterLoginPage() {    
    GetWalletBal('2');
    $("#li-wal").removeClass('ui-li-has-thumb');
    $("#menuUName").text("Hi, " + localStorage.getItem("PTNAME"));
    $(".flex-control-nav").show();
    if (localStorage.getItem("PNAME") == null || localStorage.getItem("PNAME") == "") {
    } else {
        if (APPType == "$") {
            $("#heading").text(Heading);
            $("#heading1").text(Heading);
            $("#h5").text(Heading);
            $("#h1").text(Heading);
            $("#h6").text(Heading);
            $("#h4").text(Heading);
            $("#h9").text(Heading);
        } else {
            $(".slider").hide();
            CallChangeHeading();
        }
    }
    $("#imgcheck").hide();
    $("#HomePage").hide();
    $("#HomePagehree").hide();
    $("#menuBottun").show();
    $("#sliderFrame").show();
    $("#a_div-clientCode").hide();
   
    var item = localStorage.getItem("ListFDNAME");
    if (APPType == "@") {
        document.getElementById("Table1").style.display = "Block";
        document.getElementById("tbl1").style.display = "none";
        document.getElementById("menuBtn").style.width = "40vw";
        $("#slide-offer").hide();
    }
    else {
        document.getElementById("Table1").style.display = "none";
        document.getElementById("tbl1").style.display = "Block";
        $("#slide-offer").show();
    }
    textAnim('Table1', 'bounceInDown');
    textAnim('td-ord', 'bounceInDown');
    textAnim('td-ldg', 'bounceInDown');

}

function SetStaeCity() {
    var a = localStorage.getItem("State");
    var b = localStorage.getItem("City");
    var c = localStorage.getItem("Area");
    if (c == "" || c == null) {
        localStorage.setItem("IsAreaWarn", "1");
    }
    else {
        localStorage.setItem("IsAreaWarn", "0");
    }
    var WebSerUrl = localStorage.getItem("APIURL");
    WebSerUrl = WebSerUrl + "/Values/GetCodeName?st=" + a + "&ct=" + b + "&ar=" + c;
    $.ajax({
        url: WebSerUrl  ,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            str = data.split('|');
            $("#Textstate").val(str[0]);
            $("#Textcity").val(str[1]);
            $("#Textarea").val(str[2]);            
            $("#CustState").text(str[2] + ", " + str[1] + ", " + str[0]);
            localStorage.setItem("DelCharges", str[3]);
            SetOrderBillAmtType();
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
           
        }
    })
}

function SetOrderBillAmtType() {
    try {              
        var DelChrg = localStorage.getItem("DelCharges");    
       $("#charges").text(Number(DelChrg).toFixed(2));
        var Amt = $("#amt").text().toString().replace("Rs.", "");
        var NwAmt = Number(Amt) ;
        var WalAmt;
        var DiscAmt;
        if (pDiscOnOrder == "1") {
            $("#tr_Disc").show();
            DiscAmt = (pDiscPer * NwAmt) / 100;
        } else {
            $("#tr_Disc").hide();
            DiscAmt = 0;
        }
       $("#DiscAmt").text(DiscAmt.toFixed(2));
        NwAmt = Number(NwAmt)
        if (pWallet == "1") {
            $("#tr_Wallete").show();
            WalAmt = $("#wal1").text();
        } else {
            $("#tr_Wallete").hide();
            WalAmt = 0;
        }

        if (WalAmt > NwAmt) {
            $("#walAmt").text(Number(NwAmt).toFixed(2));
        } else {
            $("#walAmt").text(Number(WalAmt).toFixed(2));
        }
        WalAmt = $("#walAmt").text();
        //change for total amount
        var Total = ((Number(NwAmt) - Number(WalAmt)) + Number(DelChrg)).toFixed(2);
        //var Total = (Number(NwAmt)).toFixed(2);
        Total = Math.ceil(Number(Total));
        Total = Number(Total).toFixed(2);
        $("#Ordtot").text(Total);
    } catch (e) {
        alert(e.message);
    }
}

function UpdateCustomer(PCode, Pname) {
    localStorage.setItem("PCode", PCode);
    PCODE = PCode;
    localStorage.setItem("PNAME", Pname);
    if (APPType == "$") {
        CheckSupplierStatus();
    }
    else {
        loadmsg = "Please Wait...";
        $(".show-page-loading-msg").click();
        $.ajax({
            url: GBCServicePath + "/Values/UpdateCustomer?PCode=" + PCode + "&ClientCode=" + localStorage.getItem("ClientCode"),
            type: "GET",
            dataType: "json", 
            cache: false,
            success: function (data) {
                $(".hide-page-loading-msg").click();
                if (data.indexOf("$") == 0) {
                    alert("Sorry! There is some problem. Please try after some time " + data);
                }
                else {
                    if (data == null) {
                        alert("Sorry! There is some problem. Please try after some time " + data);
                    }
                    else {
                        var nameSer = data.split('|');
                        localStorage.setItem("APIURL", nameSer[0]);
                        localStorage.setItem("PNAME", nameSer[1]);
                        localStorage.setItem("PCode", nameSer[2]);
                        localStorage.setItem("PTNAME", nameSer[3]);
                        localStorage.setItem("PTCODE", nameSer[4]);
                        localStorage.setItem("PTNO", nameSer[5]);
                        localStorage.setItem("PTEMAIL", nameSer[6]);
                        localStorage.setItem("PTADD", nameSer[7]);
                        localStorage.setItem("State", nameSer[9]);
                        localStorage.setItem("City", nameSer[10]);
                        localStorage.setItem("Area", nameSer[11]);
                        if (APPType == "@") {
                            PCODE = nameSer[2];
                        }
                        PingTiaService("1");
                        AfterLoginPage();
                        window.location.href = "#page-con";
                    }
                }
            },
            error: function (xmlHttpRequest, textStatus, errorThrown) {
                $(".hide-page-loading-msg").click();
            }
        });
    }
}

function PingTiaService(val) {    
    $("#imgcheck").hide();
    $(".activeImg").show();
    if (Flag != "0") {
        if (val != "2") {
            loadmsg = "Checking Connection To Supplier..";
            $(".show-page-loading-msg").click();
        }
    }
    
    var APIURL = localStorage.getItem("APIURL");    
    APIURL= APIURL + "/Values/Ping?PtCode=" + localStorage.getItem("ClientCode");    
    $.ajax({
        url: APIURL,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            $(".hide-page-loading-msg").click();
            if (data == "1") {
                if (Flag != "0") {
                    if (val != "2") {
                        alert("Process Complete Successfully. ");
                    }
                }
                if (val != "2") {
                    Flag = '1';
                }
                $('.activeImg').attr('src', 'assets/img/green.gif');
            }
            else {
                $('.activeImg').attr('src', 'assets/img/red.gif');
                if (val != "2") {
                    alert("Connection to supplier failed. " + data);
                }
            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            $('.activeImg').attr('src', 'assets/img/red.gif');
            if (val != "2") {
                alert("Connection to supplier failed. ");
            }
            $(".hide-page-loading-msg").click();
        }
    });
}

function getStartEndDate() {
    var startdt;
    var enddt;
    WebSerUrl = localStorage.getItem("APIURL");
    $.ajax({
        url: WebSerUrl + "/Order/GetStartEndDate",
        type: "GET",
        cache: false,
        success: function (data) {
            var dt = data.split('%');
            startdt = dt[0];
            enddt = dt[1];
            localStorage.setItem("startdt", startdt);
            localStorage.setItem("enddt", startdt);
            document.getElementById("frmdt_ldg").valueAsDate = new Date(startdt);
            document.getElementById("todt_ldg").valueAsDate = new Date(enddt);
        },
        //if any error occure
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            console.log('some error occured', textStatus, errorThrown);
        }

    });
}



function CallChangeHeading() {
    var name = localStorage.getItem("PNAME");
    $("#heading").text(name);
    $("#heading1").text(name);
    $("#h5").text(name);
    $("#h1").text(name);
    $("#h6").text(name);
    $("#h4").text(name);
    $("#h9").text(name);
    var a = setInterval(function () {
        clearInterval(a);
        Heading_show();
    }, 6000);
}

function Heading_show() {
    $("#heading").text(Heading);
    $("#heading1").text(Heading);
    $("#h5").text(Heading);
    $("#h1").text(Heading);
    $("#h6").text(Heading);
    $("#h4").text(Heading);
    $("#h9").text(Heading);
    var b = setInterval(function () {
        clearInterval(b);
        CallChangeHeading();
    }, 3000);
}

function Order_click() {
    $("#a-msg").hide();
    if (localStorage.getItem("APIURL") == "" || localStorage.getItem("APIURL") == null) {
        if (APPType == "$") {
            alert("Please Check Supplier Status.");
        }
        else {
            alert("Please Select Supplier.");
        }
        window.location.href = "#profile";
        GetActiveSupplierList();
    } else {
        try {
            GetWalletBal('1');
            GetOrderPartyUserDetail();
            activemenu = 'O';
            Close_img();
            localStorage.setItem("FDName", "ORDR");
            localStorage.setItem("VRNOName", "");
            window.location.href = "#Item-Info-Search";
            fun_showCart();
            SetItem_Count();
        } catch (e) {
            alert(e.message);
        }
    }
}


function Upload_click() {
    if (localStorage.getItem("APIURL") == "" || localStorage.getItem("APIURL") == null) {
        if (APPType == "$") {
            alert("Please Check Supplier Status.");
        }
        else {
            alert("Please Select Supplier.");
        }
        window.location.href = "#profile";
        GetActiveSupplierList();
    } else {
        GetOrderPartyUserDetail();
        activemenu = 'U';
        Close_img();
        localStorage.setItem("FDName", "ORDR");
        localStorage.setItem("VRNOName", "");
        window.location.href = "#ImageSelect";
        SetItem_Count();
    }
}

function SetItem_Count() {
    try{
        var arry = localStorage.getItem("SelectedItemInfo");
        var count;
        if (arry != null) {
            var a = arry.split('$');
            count = a.length - 1;
        }
        else {
            count = 0;
        }
        if (count == 0) {
            $("#itm-cnt").hide();
            $("#Empty-basket").show();
            $("#Itm_Grid").html("");
            var src = document.getElementById('Img16').src;
            if (src.indexOf("No_image.png") > 0) {
                $("#Item-grid-table").hide();
            } else {
                $("#Item-grid-table").show();
            }

        } else {
            $("#itm-cnt").show();
            $("#Empty-basket").hide();
            $("#Item-grid-table").show();
        }
        $("#itm-cnt").text("Total " + Number(count) + " Item found");
        $("#lbl-cart-cnt").text(count);
        $("#lbl-cart-cnt1").text(count);
        $("#lbl-cart-cnt2").text(count);
        textAnim('lbl-cart-cnt', 'bounceInDown');
        textAnim('lbl-cart-cnt1', 'bounceInDown');
        textAnim('lbl-cart-cnt2', 'bounceInDown');
        
    }catch(E){
    }
}

//////////////////Image 

function clearCache() {
    navigator.camera.cleanup();
}

function onPhotoURISuccess(imageURI) {  ///////////
    window.location.href = "#ImageSelect";
    var smallImage = document.getElementById('sel_image');
    smallImage.src = imageURI;    
    document.getElementById('Img16').src = imageURI;
    localStorage.setItem("ImagePath", imageURI);
}



function onPhotoDataSuccess(imageURI) {  ///////////////
    window.location.href = "#ImageSelect";
    var smallImage = document.getElementById('sel_image');
    smallImage.src = imageURI;    
    document.getElementById('Img16').src = imageURI;
    localStorage.setItem("ImagePath", imageURI);
    //movePic(imageURI);
}


function capturePhotoEdit() { ///////////
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20,
        destinationType: destinationType.FILE_URI,
        // saveToPhotoAlbum: true
    });
}


//function capturePhotoEdit() {
//    // Retrieve image file location from specified source
//    navigator.camera.getPicture(getImageURI, function(message) {
//        alert('Image Capture Failed');
//    }, {
//        quality : 40,
//        destinationType : Camera.DestinationType.FILE_URI
//    });

//}
//function getImageURI(imageURI) {
//    alert(imageURI);
//    var gotFileEntry = function (fileEntry) {
//        alert("got image file entry: " + fileEntry.fullPath);
//        var gotFileSystem = function (fileSystem) {
//            alert(fileSystem);
//            fileSystem.root.getDirectory("TestFolder", {
//                create: true
//            }, function (dataDir) {
//                alert(dataDir);
//                // copy the file
//                fileEntry.moveTo(dataDir, "1.jpg", null, fsFail);

//            }, dirFail);
//        };
        
//        // get file system to copy or move image file to
//        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFileSystem,
//                fsFail);
//    };
//    // resolve file system for image
//    alert(imageURI);
//    window.resolveLocalFileSystemURI(imageURI, gotFileEntry, fsFail);

//    // file system fail
//    var fsFail = function (error) {
//        alert("failed with error code: " + error.code);
//    };

//    var dirFail = function (error) {
//        alert("Directory error code: " + error.code);
//    };
//}




function getPhoto(source) {  ////////////
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source
    });
}

function onFail(message) {  ///////////
    alert('Failed because: ' + message);
}


function send(imageURI, fileName, val) {
    //var imageName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    fileName = fileName + ".jpeg";
    localStorage.setItem("VRNOName", fileName);
    //movePic(imageURI);
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileName //imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    options.chunkedMode = false;
    options.headers = {
        Connection: "close"
    }
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
    var WebSerUrl;
    if (val == "GBC") {
        WebSerUrl = GBCServicePath;
    } else {
        WebSerUrl = localStorage.getItem("APIURL");
    }
    var ft = new FileTransfer();
    ft.upload(imageURI, encodeURI(WebSerUrl + "/upload/Post"), win, fail, options);
    if (val != "GBC") {
        ft.upload(imageURI, encodeURI(WebSerUrl + "/upload/PostInside"), win, fail, options);
    }
    return fileName;
}

function Receive(filename) {
    loadmsg = "Please Wait While Loading Order...";
    $(".show-page-loading-msg").click();
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);
    function fileSystemSuccess(fileSystem) {
        try {
            filename = filename + ".jpeg";
            var DownloadPath = fileSystem.root.toURL();
            DownloadPath = DownloadPath + filename ;
            var downloadURl = GBCServicePath;
            downloadURl = localStorage.getItem("APIURL") + "UploadedImage/" + filename;
            var uri = encodeURI(downloadURl);
            var fileTransfer = new FileTransfer();
            fileTransfer.download(uri, DownloadPath,
                            function (entry) {
                                //document.getElementById(imgId).src = DownloadPath;                                
                                document.getElementById('Img16').src = DownloadPath;
                                document.getElementById('cart-pre').src = DownloadPath;
                                document.getElementById('sel_image').src = DownloadPath;
                                localStorage.setItem("ImagePath", DownloadPath);
                                fun_showCart();
                                $(".hide-page-loading-msg").click();
                            },
                         function (error) {
                             alert("Sorry. Prescription Not download From Server " + error.code);
                             $(".hide-page-loading-msg").click();
                         }
                    );
        } catch (e) {
            alert(e.message);
            $(".hide-page-loading-msg").click();
        }
    }
    function fileSystemFail(evt) {
        //Unable to access file system
        alert("Unable to access file system :" + evt.target.error.code);
        $(".hide-page-loading-msg").click();
    }
}

function win(r) {
    //alert("File Upload Successuful");    
}

function fail(error) {
    alert("Failed To Send Prescription On Server. Error Code:- " + error.code + " Error source :- " + error.source + " Error Target :- " + error.target);
}

function Close_img() {
    var smallImage = document.getElementById('sel_image');
    smallImage.src = "assets/img/No_image.png";
    document.getElementById('Img16').src = "assets/img/No_image.png";
}

function FullSize() {
    var smallImage = document.getElementById('sel_image');
    window.open(smallImage.src, '_system', ' ');
}

///End Image

function ShowErrorFromServer(err) {
    alert("Error Occured! Structur Rebuild Required! If problem not Solved, Contact with Administrator. \n" + err);
}

///////////**********Item Search*******************//////////////////
$(function () {
    try {
        $('#itm-srch').autocomplete({
            autoFocus: true,
            source: function (request, response) {
                $.ajax({
                    url: localStorage.getItem("APIURL") + "/Product/GetItemConsumer",
                    data: { Iname: request.term, PCODE: 'ZZZZZZ' },
                    type: "GET",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        response($.map(data, function (item, id) {
                            if (item.INAME.indexOf("$") == 0) {
                                ShowErrorFromServer(item.INAME);
                                return null;
                            }
                            var mydata = {
                                label: item.INAME,
                                Icode: item.ICODE,
                                Mrp: item.Mrp,
                                packing: item.packing,
                                pursize: item.pursize,
                                GNAME: item.GNAme,
                                Rate: item.Rate,
                                WRate: item.WRate
                            };
                            return mydata;
                        }));
                    },
                    //if any error occure
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        alert("Supplier TiaERPApp service is stop!!!");
                    }
                })
            },

            messages: {
                noResults: function (resultsCount) {
                    $("#msgText2").removeClass('hide');
                    textAnim('msgText2', 'bounceInDown')
                    setTimeout(function () {
                        $("#msgText2").addClass('hide');
                    }, 2000);

                },
                results: function (resultsCount) {

                }

            },
            select: function (event, ui) {
                localStorage.setItem("IsFromReorder", "");
                ClearItemInfo();
                $("#lblRetailrate").text(ui.item.Rate);
                $("#lblRate").text(ui.item.WRate);
                $("#lblItmCode").text(ui.item.Icode);
                $("#lblItmMRP").text(ui.item.Mrp);
                $("#lblItmName").text(ui.item.label);
                $("#PackExp").text(ui.item.packing);
                $("#lblContent").text(ui.item.GNAME);                
                fun_showItmInfo("#");                
            },
            close: function () {
            },
            minLength: 1,
            delay: 1
        }).data("ui-autocomplete")._renderItem = function (ul, item) {
            return $('<li></li>')
              .append("<a style='padding-left:5px;padding-right:5px;padding-top:8px;line-height:6vh'><label style='width:90%;white-space:initial;' > " + item.label + " (" + item.packing + ")</label>")
              .append("<p style='margin:0px;padding-left:5px;padding-right:5px;'> MRP : " + item.Mrp+ "</p>")
              .append("<hr /></a>")
              .appendTo(ul);
        };
    } catch (err) {
    }
});

function ClearItemInfo() {
    $("#lblRetailrate").text('');
    $("#lblRate").text('');
    $("#lblItmCode").text("");
    $("#lblItmMRP").text("");
    $("#lblItmName").text("");
    $("#PackExp").text("");
    $("#itm-srch").val("");
}

function fun_showItmInfo(id) {   
    $("#txt-qty").val("");
    $("#txt-free").val("");
    if (id != '#') {
        SetItemInfo(id);
        $("#insert_itemInfo").hide();
        $("#update_itemInfo").show();
    }
    else {
        $("#insert_itemInfo").show();
        $("#update_itemInfo").hide();
    }
    $("#txt-qty").focus();
    SetItem_Count();
    $("#a_Item-Info-Search-Body").click();
}

var isupdate = '0';
var IsProcessComplete = '0';

function fun_AddToCart() {
    var Qty = $("#txt-qty").val().trim();
    var free = $("#txt-free").val().trim();
    var qty_free = Number(Qty) + Number(free);
    if (Qty == "" || Qty == "0" || Qty.indexOf("-") == 0) {
        $("#msgText0").removeClass('hide');
        textAnim('msgText0', 'bounceInDown')
        setTimeout(function () {
            $("#msgText0").addClass('hide');
        }, 2000);
        $("#txt-qty").focus();
    }
    else {
        fun_AddToCartCont();
    }
}

function fun_AddToCartCont() {
    loadmsg = "Please Wait...";
    $(".show-page-loading-msg").click();
    InsertDataToarray();
    ShowNxtWind();
}

function InsertDataToarray() {
    ///create variable
    var Qty;
    var free;
    var Icode;
    var Iname;
    var MRP;
    var Packing;
    var stock;
    var Rate;
    var IndexAtFound = null;
    var gname;
    var WRate;
    var indexInArray = '';
    var SelectedId = localStorage.getItem("SelectedItemIndex");
    localStorage.setItem("SelectedItemIndex", "");

    //initialise with new value
    Qty = $("#txt-qty").val();
    free = $("#txt-free").val();
    Icode = $("#lblItmCode").text();
    Iname = $("#lblItmName").text();
    MRP = $("#lblItmMRP").text();
    Packing = $("#PackExp").text();
    Rate = $("#lblRetailrate").text();
    WRate = $("#lblRate").text();
    gname = $("#lblContent").text();
    if (free == "") {
        free = "0";
    }

    ///get item list

    var arr = localStorage.getItem("SelectedItemInfo");
    if (arr != null) {
        var splitArr = arr.split("$");
        if (splitArr.length <= 1) {
        }
        else {
            for (var i = 1; i <= splitArr.length - 1; i++) {
                var data = (JSON).parse(splitArr[i]);

                if (data.Icode == Icode) {
                    if (i == SelectedId) {  //update item open from cart to edit item                    
                        IndexAtFound = i;
                        break;
                    } else { ////insert item multiple time
                        Qty = Number(Qty) + Number(data.Qty);
                        free = Number(free) + Number(data.free);
                        Qty = String(Qty);
                        free = String(free);
                        IndexAtFound = i;
                        break;
                    }
                }
                else {
                    IndexAtFound = null;
                }
            }
        }
    }

    ///Create Complete data
    var ItemInfo = {
        "Icode": Icode.trim(),
        "Iname": Iname.trim(),
        "MRP": MRP.trim(),
        "Packing": Packing.trim(),
        "Rate": Rate.trim(),
        "Qty": Qty.trim(),
        "free": free.trim(),
        "GNAMe": gname.trim(),
        "WRate": WRate.trim()
    }

    var Itemdata = JSON.stringify(ItemInfo);
    if (IndexAtFound == null) {
        var arr = localStorage.getItem("SelectedItemInfo");
        arr = arr + '$' + Itemdata;
        localStorage.setItem("SelectedItemInfo", arr);
    }
    else { ////Update
        isupdate = '1';
        var upArr = splitArr.splice(IndexAtFound, 0, Itemdata); //insert at position
        upArr = splitArr.splice(Number(IndexAtFound + 1), 1); //remove old item from  position
        var arrStr;
        for (var i = 0; i <= splitArr.length - 1; i++) {
            if (splitArr[i] == ",") {
                splitArr[i] = "$";
            }
            arrStr = arrStr + splitArr[i];
            if (i <= splitArr.length - 2) {
                arrStr = arrStr + "$";
            }
            localStorage.setItem("SelectedItemInfo", arrStr);
        }
    }
    IsProcessComplete = "1";
    
    localStorage.setItem("SelectedItemIndex", "");
    SetItem_Count();

}

function ShowNxtWind() {
    if (IsProcessComplete == '1') {
        IsProcessComplete = '0';
        if (isupdate == '1') {
            fun_nextItem();
            fun_showCart();
        } else {
            fun_nextItem();
            fun_showCart();
        }
        isupdate = '0';
        $(".hide-page-loading-msg").click();
    } else {
        setTimeout(ShowNxtWind, 1000);
    }
}

function fun_nextItem() {
    ClearItemInfo();
    $("#itm-srch").focus();
    if (localStorage.getItem("IsFromReorder") == "1") {
        window.location.href = "#Item-cart";
    } else {
        window.location.href = "#Item-Info-Search";
        // fun_showCart();
    }
}

function fun_showCart() {
    fun_AddItemInCart();
    var smallImage = document.getElementById('sel_image');
    var image = smallImage.src;
    if (smallImage.src.indexOf("No_image.png") < 0) {        
        document.getElementById("cart-pre").src = image;
        $("#cart-pre").show();
        $("#lbl-cart-pre").show();
    } else {
        $("#cart-pre").hide();
        $("#lbl-cart-pre").hide();
    }
    window.location.href = "#Item-cart";
}

function fun_AddItemInCart() {
    var Total = 0;
    var arr = '';
    arr = localStorage.getItem("SelectedItemInfo");
    if (arr != null) {
        var splitArr = arr.split("$");
        if (splitArr.length <= 1) {

        }
        else {
            var arrLength = splitArr.length;
            $("#Itm_Grid").html("");
            for (var i = 1; i <= arrLength - 1; i++) {
                var data = (JSON).parse(splitArr[i]);
                var amt = Number(Number(data.WRate) * (Number(data.Qty))).toFixed(2);
                $("#grid_Ord").show();
                $("#Itm_Grid").append(
                    "<li onclick='fun_showItmInfo(this.id);'  onmousedown='list_Mousedown(this)' onmouseup='list_MouseUp()' class='ui-first-child ui-last-child' id=" + i + ">" +
                                "<a href='#Item-Info-Search-Body' class='ui-btn'>" +
                                    "<label style='margin-top:6px;float:right;font-size:13px;background-color:#137ab0;color:white;padding:3px;font-weight:lighter;'>" + data.MRP + "</label>" +
                                    "<p style='color:#137ab0;font-size:13px;font-weight:bold'>" + data.Iname + "</p>" +
                                    "<p style='display:inline;float:left ;font-weight:bold;margin-top:3px;margin-top:-3px;'>[" + data.Qty + "+" + data.free + "]</p> " +
                                    "<p style='display:inline;float:left ;margin-top:3px;margin-top:-3px;'>&nbsp;*&nbsp;</p>" +
                                    "<p style='display:inline;float:left ;font-weight:bold;margin-top:3px;margin-top:-3px;'>" + data.WRate + "</p>" +
                                    "<p style='display:inline;float:left ;margin-top:3px;margin-top:-3px;'>&nbsp;=&nbsp;</p>" +
                                    "<p style='color:#137ab0;display:inline;float:left ;font-weight:bold;margin-top:3px;margin-top:-3px;font-size:13px' >" + amt + "</p>" +
                                "</a>" +
                            "</li>"
                                        );
                Total = Number(Total) +Number(amt);

            }

        }
    }
    Total = Total.toFixed(2);
    $("#amt").text(Total);
    //var a = localStorage.getItem("DelCharges");
    //var b = Total;
    //var c = (Number(b) + Number(a)).toFixed(2);
    //$("#Ordtot").text(c);
    SetOrderBillAmtType();
    SetItem_Count();
}
var timerLongPrss;
function list_Mousedown(eve) {
    timerLongPrss = setInterval(function () {
        clearInterval(timerLongPrss);
        var listitem = $(eve);
        RemoveItem(eve.id, listitem);
    }, 1000);
}
function list_MouseUp() {
    clearInterval(timerLongPrss);
}
var index_d;
function RemoveItem(a, listitem) {
    confirmAndDelete(listitem, "left", a);
    function confirmAndDelete(listitem, transition, id) {
        //window.localStorage.setItem("DeletAtIndex", id);
        index_d = id;
        // Highlight the list item that will be removed
        listitem.children(".ui-btn").addClass("ui-btn-active");
        // Inject topic in confirmation popup after removing any previous injected topics
        $("#confirm .topic").remove();
        listitem.find(".topic").clone().insertAfter("#question");
        // Show the confirmation popup
        $("#confirm").popup("open");

        // Proceed when the user confirms
        $("#confirm #yes").on("click", function () {
            listitem.remove();
            RemoveItemFromCart();
            $("#Itm_Grid").listview("refresh");

        });
        // Remove active state and unbind when the cancel button is clicked
        $("#confirm #cancel").on("click", function () {
            listitem.children(".ui-btn").removeClass("ui-btn-active");
            $("#confirm #yes").off();
        });
    }
}
function RemoveItemFromCart() {
    var id = index_d;
    index_d = 0;
    if (id >= 1) {
        var arr = '';
        arr = localStorage.getItem("SelectedItemInfo");        
        var splitArr = arr.split("$");
        var arrLength = splitArr.length;
        splitArr.splice(id, 1);
        var arrStr = "";
        for (var i = 0; i <= splitArr.length - 1; i++) {
            if (splitArr[i] == ",") {
                splitArr[i] = "$";
            }
            arrStr = arrStr + splitArr[i];
            if (i <= splitArr.length - 2) {
                arrStr = arrStr + "$";
            }
        }
        localStorage.setItem("SelectedItemInfo", arrStr);
        SetItem_Count();
        fun_AddItemInCart();
    }
}

function SetItemInfo(id) {
    var arr = '';
    localStorage.setItem("SelectedItemIndex", id);
    arr = localStorage.getItem("SelectedItemInfo");
    var splitArr = arr.split("$");
    if (splitArr.length <= 1) {
    }
    else {
        var arrLength = splitArr.length;
        var data = (JSON).parse(splitArr[id]);
        $("#lblItmCode").text(data.Icode);
        $("#lblRate").text(data.WRate);
        $("#lblRetailrate").text(data.Rate);
        $("#lblItmMRP").text(data.MRP);
        $("#lblItmName").text(data.Iname);
        $("#PackExp").text(data.Packing);
        $("#lblContent").text(data.GNAMe);
        $("#txt-qty").val(data.Qty)
        $("#txt-free").val(data.free)
    }

}

function fun_cancel() {
    if (confirm("Wish To Exit From App?")) {
        Clear_OrderDetail();
        navigator.app.exitApp();
    }
}

$(function () {
    try {
        $('#dr-name').autocomplete({
            autoFocus: true,
            source: function (request, response) {
                $.ajax({
                    url: localStorage.getItem("APIURL") + "/Product/GetDr",
                    data: { Iname: request.term },
                    type: "GET",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        response($.map(data, function (item, id) {
                            if (item.Name.indexOf("$") == 0) {
                                ShowErrorFromServer(item.Name);
                                return null;
                            }
                            var mydata = {
                                label: item.Name,
                                HrCode: item.HrCode,
                                Add: item.Address
                            };
                            return mydata;
                        }));

                    },
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        alert("Your TiaERPApp service is stop!!! To use TiaERP@App Application, start TiaERPApp Service from AppServiceStarter.");
                    }
                })
            },
            messages: {
                noResults: function (resultsCount) {
                            
                },
                results: function (resultsCount) {

                }
            },
            //if any error occure
           
            select: function (event, ui) {
                $("#dr-info-body").removeClass("display-none");
                textAnim('dr-info-body', 'zoomIn');
                $("#dr_infoAdd").text(ui.item.Add);
                window.localStorage.setItem("DrCode", ui.item.HrCode);
                window.scrollTo(0, 300);
                $("#dr-name").blur();
            },
            close: function () {
            },
            minLength: 1,
            delay: 1
        });

    } catch (err) {
    }
});


function chenregistration()
{
    var ptco= localStorage.getItem("PTCODE");
    var code=ptco.substring(0,4);
    now = new Date;
    var year = now.getFullYear();
    if (year == code)
    {
        alert("please valid your user contact system administrator ");
    }
else
    {
        //localStorage.setItem("ClientCode", data);
        //localStorage.setItem("PTCODE", data);

         SaveOrder();
    }

}

function SaveOrder() {    
    //loadmsg = "Saving Data...";
    // $(".show-page-loading-msg").click();
   


    if ($("#del-area").val().trim() == "" || $("#del-area").val() == "null") {
        $("#a-msg").show();
        $("#a8").show();
        textAnim('a-msg', 'flash');
        textAnim('a8', 'bounceInDown');
        $("#del-area").focus();
    }
    else
    
    {
        
        {
        
            //UpdateArea(localStorage.getItem("Acode"), localStorage.getItem("PTCODE"));
            $("#progress").val(20);
            $(".parentDisable").show();
            window.scrollTo(0, 0);        
            $("#ordSaveprog").show();
            textAnim('ordSaveprog', 'slideInLeft');
            var WebSerUrl = localStorage.getItem("APIURL");
            if ($("#lbl-cart-cnt2").text() == "0") {
                WebSerUrl = WebSerUrl + "/Order/SaveOrderCon1";
            } else {
                WebSerUrl = WebSerUrl + "/Order/SaveOrderCon";
            }
            $.ajax({
                url: WebSerUrl,
                type: "post",
                data: getUserDataForOrderPlace("0"),
                dataType: 'json',
                processData: true,
                success: function (data) {
                    $("#progress").val(65);
                    if (data != null) {
                        if (data.vrno == null) {
                            ShowErrorFromServer(data.pcode);
                        }
                        else {
                            var filename = "";
                            var smallImage = document.getElementById('sel_image');
                            var image = smallImage.src;
                            if (smallImage.src.indexOf("No_image.png") < 0) {
                                var imageURI = localStorage.getItem("ImagePath");
                                filename = send(imageURI, data.vrno, "");                          
                            }
                            SaveOrderinGBC(data.vrno, filename, data.TotalAmt);
                            SetVrDeetail(data.vrno, data.TotalAmt, data.pcode, data.items);
                            var vrno = data.vrno;
                            setTimeout(function abc() {
                                SendNotif(vrno);
                            }, 7000);
                        }
                        $(".hide-page-loading-msg").click();
                    }
                    else {
                        alert("Save Failed. Please Try Again!!!");
                    }
                    $("#progress").val(75);
                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    $(".hide-page-loading-msg").click();
                    alert("Please Try Again!!!" + xmlHttpRequest.responseText);
                    $("#ordSaveprog").hide();
                    $(".parentDisable").hide();
                }
            });
        }
    }
}
    

function SaveOrderinGBC(vrno, name, amt) {
    // var amt = $("#Ordtot").text().toString().replace("Rs.", "");
    var charge = $("#charges").text().toString().replace("Rs.", "");
    var model = {
        FromUserId: localStorage.getItem("PTCODE"),
        ToUserId: PCODE,
        VrNo: vrno,
        ImgName: name,
        OrdAmt: amt,
        oi: getArrayOfOrder(),
        AppType: APPType,
        DelCharges: charge
    };
    $.ajax({
        type: "POST",
        data: JSON.stringify(model),
        url: GBCServicePath + "/Values/save",
        contentType: "application/json"
    }).done(function (res) {
        var smallImage = document.getElementById('sel_image');
        var image = smallImage.src;
        if (smallImage.src.indexOf("No_image.png") < 0) {
            var imageURI = localStorage.getItem("ImagePath");
            filename = send(imageURI, res, "GBC");
        }
    });
}
function getUserDataForOrderPlace(val) {
    var pcode;
    if (val == "0") {
        pcode = localStorage.getItem("PTCODE");
    }
    else {
        pcode = localStorage.getItem("PCode");
    }
    var dataArr = getArrayOfOrder();
    var Disc;
    var WalAmt;
    if (pDiscOnOrder == "1") {
        Disc = $("#DiscAmt").text();
    } else {
        Disc = "0";
    }
    if (pWallet == "1") {
        WalAmt = $("#walAmt").text();
    } else {
        WalAmt = "0";
    }
    if (dataArr == "") {
        var data = {
            "pcode": pcode,
            "PatientID": localStorage.getItem("ClientCode"),
            "NameP": localStorage.getItem("PTNAME"),
            "Addr": $("#txtbillingAdd").val(),
            "DCode": localStorage.getItem("DrCode"),
            "DrName": $("#dr-name").val(),
            "DrAddr": $("#dr_infoAdd").text(),
            "DelCharges": $("#charges").text().toString().replace("Rs.", ""),
            "AppType": APPType,
            "Iwqty": localStorage.getItem("pretailordQty"),
            "EWD": WalAmt,
            "Disc": Disc,
            "pWallet": pWallet
        };
        return data;
    }
    else {
        var data = {
            "items": dataArr,
            "pcode": pcode,
            "PatientID": localStorage.getItem("ClientCode"),
            "NameP": localStorage.getItem("PTNAME"),
            "Addr": $("#txtbillingAdd").val(),
            "DCode": localStorage.getItem("DrCode"),
            "DrName": $("#dr-name").val(),
            "DrAddr": $("#dr_infoAdd").text(),
            "DelCharges": $("#charges").text().toString().replace("Rs.", ""),
            "AppType": APPType,
            "Iwqty": localStorage.getItem("pretailordQty"),
            "EWD": WalAmt,
            "Disc": Disc,
            "pWallet": pWallet
        };
        return data;
    }
   
}

function getArrayOfOrder() {
    try{
        var arr;
        arr = localStorage.getItem("SelectedItemInfo");
        if (arr != null) {
            var splitArr = arr.split("$");
            splitArr.shift();
            splitArr = JSON.parse('[' + splitArr + ']');
            return splitArr;
        }
        else {
            return "";
        }
    } catch (e) {
        alert(e);
    }
}

function SetVrDeetail(vrno, TotalAmt, pcode, data) {
    try {
        ShowMsgOrdSave();
        ShowPopupDivMsg();
        $("#ordSaveprog").show();
        $(".parentDisable").show();
        $("#progress").val(85);
        setTimeout(
            function abc() {
                $("#progress").val(100);
                textAnim('ordSaveprog', 'slideOutRight');            
                setTimeout(function xyz() {
                    $("#ordSaveprog").hide();
                }, 1000);
                $(".parentDisable").hide();
            }, 1000);
        HidePopupDivMsg();

        var smallImage = document.getElementById('sel_image');
        var image = smallImage.src;
        if (smallImage.src.indexOf("No_image.png") < 0) {
            $("#img").slideDown(100);
        }
        else {
            $("#img").slideUp(100);
        }
        Clear_OrderDetail();
        window.location.href = "#Vrdetail";
        $("#p_VrNO").text(vrno);
        $("#L_NetAmt").text(TotalAmt);
        $("#p1").text(localStorage.getItem("PNAME"));
        $("#div_itemList").html("");
        var itm = data;
        if (itm.length > 0) {
            $("#div_itemList").append("<table  class='CSSTableGenerator' style='border-collapse:collapse;width:100%'><tr><td style='width:30px;'>SrNo</td><td >Item Name</td><td >Qty+Free</td><td >Value</td></tr>");
        }
        for (var i = 0; i < itm.length; i++) {
            var j = i + 1;
            $("#div_itemList tr:last").after(
                "<tr><td style='width:50px;text-align:center'>" + j + ".</td> <td  style='width:340px;'>" + itm[i].INAME + "</td><td style='text-align:center'>" + itm[i].Qty + "+" + itm[i].free + "</td><td style=' text-align:right;'>" + (Number(itm[i].Rate)*Number(itm[i].Qty)).toFixed(4) + "</td></tr></tbody>");
        }
       
    } catch (e) {
        //alert(e.message);
    }
}

function ShowHide() {
    $("#tbl_orderDetail").toggle(200);
}

function fun_cancelOrder() {
    if (confirm("Do you want to cancel Current process?")) {
        Clear_OrderDetail();
        Close_img();
        window.location.href = "#page-con";
    }
}
function ToggleMenu(id) {
    if (id == 1) {
        $("#select-div").slideDown();
        $("#orderHistory-div").slideUp();
        $("#EditProfile").slideUp();
        $("#Track").slideUp();
        $("#Reffere").slideUp();
        $("#notification").slideUp();
    }
    else if (id == 2) {
        $("#select-div").slideUp();
        $("#orderHistory-div").slideDown();
        $("#EditProfile").slideUp();
        $("#Track").slideUp();
        $("#Reffere").slideUp();
        $("#notification").slideUp();
    }
    else if (id == 3) {
        $("#select-div").slideUp();
        $("#orderHistory-div").slideUp();
        $("#EditProfile").slideDown();
        $("#Track").slideUp();
        $("#Reffere").slideUp();
        $("#notification").slideUp();
    }
    else if (id == 4) {
        $("#select-div").slideUp();
        $("#orderHistory-div").slideUp();
        $("#EditProfile").slideUp();
        $("#Track").slideDown();
        $("#Reffere").slideUp();
        $("#notification").slideUp();
    }
    else if (id == 5) {
        $("#select-div").slideUp();
        $("#orderHistory-div").slideUp();
        $("#EditProfile").slideUp();
        $("#Track").slideUp();
        $("#Reffere").slideDown();
        $("#notification").slideUp();
    }
    else if (id == 6) {
        $("#select-div").slideUp();
        $("#orderHistory-div").slideUp();
        $("#EditProfile").slideUp();
        $("#Track").slideUp();
        $("#Reffere").slideUp();
        $("#notification").slideDown();
    }
    else {
        $("#select-div").slideUp();
        $("#orderHistory-div").slideUp();
        $("#EditProfile").slideUp();
        $("#Track").slideUp();
        $("#Reffere").slideUp();
        $("#notification").slideUp();
    }
}

function AddActiveClass(id) {
    if (id == 1) {
        $("#td_select").addClass('pro-menutd');
        $("#td_orderHist").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
        $("#A3").removeClass('pro-menutd');
        $("#A2").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
    }
    else if (id == 2) {
        $("#td_select").removeClass('pro-menutd');
        $("#td_orderHist").addClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
        $("#A3").removeClass('pro-menutd');
        $("#A2").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
    }
    else if (id == 3) {
        $("#td_select").removeClass('pro-menutd');
        $("#td_orderHist").removeClass('pro-menutd');
        $("#td_track").addClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
        $("#A3").removeClass('pro-menutd');
        $("#A2").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
    }
    else if (id == 4) {
        $("#td_select").removeClass('pro-menutd');
        $("#td_orderHist").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").addClass('pro-menutd');
        $("#A3").removeClass('pro-menutd');
        $("#A2").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
    }
    else if (id == 5) {
        $("#td_select").removeClass('pro-menutd');
        $("#td_orderHist").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
        $("#A3").addClass('pro-menutd');
        $("#A2").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
    }
    else if (id == 6) {
        $("#td_select").removeClass('pro-menutd');
        $("#td_orderHist").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
        $("#A3").removeClass('pro-menutd');
        $("#A2").removeClass('pro-menutd');
        $("#td_track").addClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
    }
    else if (id == 7) {
        $("#td_select").removeClass('pro-menutd');
        $("#td_orderHist").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
        $("#A3").removeClass('pro-menutd');
        $("#A2").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").addClass('pro-menutd');
    }
    else if (id == 8) {
        $("#td_select").removeClass('pro-menutd');
        $("#td_orderHist").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
        $("#A3").removeClass('pro-menutd');
        $("#A2").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
    }
    else {
        $("#td_select").removeClass('pro-menutd');
        $("#td_orderHist").removeClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
        $("#A3").removeClass('pro-menutd');
        $("#A2").addClass('pro-menutd');
        $("#td_track").removeClass('pro-menutd');
        $("#td_reffer").removeClass('pro-menutd');
    }
}



function getOrderHistory() {
    loadmsg = "Loading Order History...";
    $(".show-page-loading-msg").click();
    AddActiveClass(2);
    ToggleMenu(2);
    var WebSerUrl = GBCServicePath;
    var Code = localStorage.getItem("ClientCode");
    if (WebSerUrl == null || WebSerUrl == "") {
        $(".hide-page-loading-msg").click();
        $("#Ul-ord-history").html("");
        $("#Ul-ord-history").append("<ul  data-role='listview' data-inset='true'  class='touch ui-listview ui-listview-inset ui-corner-all ui-shadow' data-icon='false' data-split-icon='delete'>" +
                            "<li class=' ui-li-static ui-body-inherit ui-first-child ui-last-child'> No Record Available...</li></ul>");

    } else {
        WebSerUrl = WebSerUrl + "/Values/Order1_history?PtCode=" + Code + "&AppType=" + APPType + "&PCode=" + PCODE;
        $.ajax({
            url: WebSerUrl,
            type: "get",
            dataType: 'json',
            processData: true,
            success: function (data) {
                $("#Ul-ord-history").html("");
                $(".hide-page-loading-msg").click();
                if (data == null || data=="") {
                    $("#Ul-ord-history").append("<ul  data-role='listview' data-inset='true'  class='touch ui-listview ui-listview-inset ui-corner-all ui-shadow' data-icon='false' data-split-icon='delete'>" +
                            "<li class=' ui-li-static ui-body-inherit ui-first-child ui-last-child'> No Record Available</li></ul>");
                }
                else {                    
                    var itm = data
                    for (var i = 0; i < itm.length; i++) {
                        $("#Ul-ord-history").append("<ul  id='' data-role='listview'  data-inset='true'  class='touch ui-listview ui-listview-inset ui-corner-all ui-shadow' data-icon='false' data-split-icon='delete'>" +
                            "<li class=' ui-li-static ui-body-inherit ui-first-child ui-last-child' onclick='ShowItemList(" + i + ")'> " +
                            "<a style='margin-top:-6px;margin-left:6px;font-weight: bold;color:#1ed40a;'>" + itm[i].status + "</a>" +
                                      "<table>" +
                                          "<tr>" +
                                              "<td rowspan='2'>" +                                                  
                                                  "<img id='vrnoimg" + itm[i].vrno + "' src='assets/img/No_image.png' style='width:100px;height:120px;'/>" +
                                              "</td>" +
                                          "</tr>" +
                                          "<tr>" +
                                              "<td>" +
                                                  "<label style='color:#137ab0;font-size:18px;'>" + itm[i].vrno + "</label>" +
                                                  "<p style='margin-top:-9px;'>" + itm[i].vrdate + "</p>" +
                                                  "<label style='white-space:initial;margin-top:-4px;'>" + itm[i].pcode + "</label>" +
                                                  "<p style='margin-top:-6px;'>Total Item : " + itm[i].items.length + "</p>" +
                                                  "<p style='margin-top:-6px;'><span > <img src='assets/img/rupee.png' alt='Rs' class='rupes' /> </span><span class='amt-color' id='Span1'>" + itm[i].TotalAmt + "</span></p>" +
                                              "</td>" +
                                          "</tr>" +
                                          "<tr>" +
                                              "<td colspan='3'>" +
                                                 "<div id=itmtbl" + i + "></div>" +
                                              "</td>" +
                                          "</tr>" +
                                      "</table>" +
                                  "</li>"+
                                  "<li class=' ui-li-static ui-body-inherit ui-first-child ui-last-child' onclick=ReOrder('" + itm[i].vrno + "')>" +
                                  "<a style='margin-top:-6px;font-weight: bold;font-size:15px;'>Click Me To ReOrder... </a>" +
                                  "</li>" +
                                  "</ul>");
                        $("#itmtbl" + i).append("<table  class='CSSTableGenerator' style='border-collapse:collapse;'><tr><td >Item Name</td><td >Qty</td><td >Value</td></tr>");
                        var item = itm[i].items;
                        for (var j = 0; j < item.length; j++) {
                            $("#itmtbl" + i + " tr:last").after("<tr><td style='width:70%;white-space:initial'>" + item[j].INAME + "</td><td style='width:10%'>" + item[j].Qty + "+" + item[j].free + "</td><td style='width:10%'>" + item[j].ICODE + "</td></tr></tbody>");
                        }
                        if (item.length == 0) {
                            $("#itmtbl" + i + " tr:last").after("<tr><td colspan='3'>No Item Available</td></tr></tbody>");
                        }
                        if (itm[i].imgName != "" && itm[i].imgName != null) {
                            document.getElementById("vrnoimg" + itm[i].vrno).src = "assets/img/prescription_icon.jpg";
                            //Receive(itm[i].imgName, "vrnoimg" + itm[i].vrno + "")
                        }
                        ShowItemList(i);
                    }
                }
            },
            error: function (event) {
                $(".hide-page-loading-msg").click();
                $("#Ul-ord-history").append("<ul  data-role='listview' data-inset='true'  class='touch ui-listview ui-listview-inset ui-corner-all ui-shadow' data-icon='false' data-split-icon='delete'>" +
                         "<li class=' ui-li-static ui-body-inherit ui-first-child ui-last-child'> No Record Available.</li></ul>");
            }
        });
    }
}

///Reorder From Order history
function ReOrder(VrNo) {
    try {
        var IsPre = '0';
        loadmsg = "Please Wait While Loading Order...";
        $(".show-page-loading-msg").click();
        var WebSerUrl = localStorage.getItem("APIURL");        
        WebSerUrl = WebSerUrl + "/Order/GetOrdDataOnVrno?VrNo=" + VrNo;        
        $.ajax({
            url: WebSerUrl,
            type: "get",
            dataType: 'json',
            processData: true,
            success: function (data) {
                
                Order_click();
                localStorage.setItem("IsFromReorder", "1");
                localStorage.setItem("SelectedItemIndex", "");
                localStorage.setItem("SelectedItemInfo", "");
                try {
                    if (data != null) {
                        if (data.imgName.trim() != "" && data.imgName != null) {
                            IsPre = '1';
                            Receive(VrNo);
                            //document.getElementById('Img16').src = document.getElementById("vrnoimg" + VrNo).src;
                            //document.getElementById('cart-pre').src = document.getElementById("vrnoimg" + VrNo).src;
                            //document.getElementById('sel_image').src = document.getElementById("vrnoimg" + VrNo).src;
                            //localStorage.setItem("ImagePath", document.getElementById("vrnoimg" + VrNo).src);
                        } else {                            
                            Close_img();
                        }
                        
                        var itm = data.items;
                        for (var i = 0; i < itm.length; i++) {
                            ClearItemInfo();
                            if (localStorage.getItem("pretailordQty") == "1") {
                                $("#txt-qty").val(itm[i].WQty);
                                $("#txt-free").val(itm[i].Wfree);
                            } else {
                                $("#txt-qty").val(itm[i].Qty);
                                $("#txt-free").val(itm[i].free);
                            }
                            $("#lblItmCode").text(itm[i].ICODE);
                            $("#lblItmName").text(itm[i].INAME);
                            $("#lblItmMRP").text(itm[i].Mrp);
                            $("#PackExp").text(itm[i].packing);
                            $("#lblRetailrate").text(itm[i].Rate);
                            $("#lblRate").text(itm[i].WRate);
                            $("#lblContent").text(itm[i].GNAme);                            
                            fun_AddToCart();
                        }
                        if (IsPre != "1") {
                            $(".hide-page-loading-msg").click();
                            fun_showCart();
                        }
                        localStorage.setItem("IsFromReorder", "0");
                    }
                } catch (e) {
                    alert(e.message)
                }
            },
            error: function (event) {
                $(".hide-page-loading-msg").click();                
            }
        });

    } catch (e) {
        alert(e.message);
    }   
}

function EditProfile() {
    AddActiveClass(5);
    ToggleMenu(3);
    $("#pro_txtReg").val(localStorage.getItem("PTCODE"));
    $("#pro_txtname").val(localStorage.getItem("PTNAME"));
    $("#pro_txtmo").val(localStorage.getItem("PTNO"));
    $("#pro_txtemail").val(localStorage.getItem("PTEMAIL"));
    $("#pro_txtadd").val(localStorage.getItem("PTADD"));
    $("#Textstate").val(localStorage.getItem("State"));
    $("#Textcity").val(localStorage.getItem("City"));
    $("#Textarea").val(localStorage.getItem("Area"));
    $("#pro_txtDocname").val(localStorage.getItem("DocName"));
    SetStaeCity();
    if ($("#pro_txtReg") == "") {
        alert("Please Select Supplier");
        GetActiveSupplierList();
        window.location.href = "#profile";
    }
}

function TrackOrder(Vrno, name) {
    try{
        AddActiveClass(6);
        ToggleMenu(4);
        BindOrdVrNo();    }
    catch (e) {
        alert(e.message);
    }
}

function Track_Order() {    
    window.location.href = "#profile";    
    TrackOrder();
}

function Order_History() {
    window.location.href = "#profile";
    getOrderHistory();
}

function RefferedTo() {
    AddActiveClass(7);
    ToggleMenu(5);
}


function UpdateProfile() {
    if ($("#pro_txtname").val() == "") {
        textAnim('pro_txtname', 'bounce');
    }
    if ($("#pro_txtmo").val() == "") {
        textAnim('pro_txtmo', 'bounce');
    }
    if ($("#pro_txtemail").val() == "") {
        textAnim('pro_txtemail', 'bounce');
    }
    if ($("#pro_txtadd").val() == "") {
        textAnim('pro_txtadd', 'bounce');
    }
    if ($("#pro_txtname").val() != "" && $("#pro_txtmo").val() != "" && $("#pro_txtemail").val() != "" && $("#pro_txtadd").val() != "") {
        if ($("#pro_txtmo").val() == localStorage.getItem("PTNO")) {
            UpdateProfileData();
        }
        else {
            loadmsg = "Checking Mobile No.";
            $(".show-page-loading-msg").click();
            var MoNo = $("#pro_txtmo").val();
            $.ajax({
                url: GBCServicePath + "/Values/CheckNo?Mo=" + MoNo,
                type: "GET",
                dataType: "json",
                cache: false,
                success: function (data) {
                    if (data.indexOf("$") == 0) {
                        alert(data);
                        $(".hide-page-loading-msg").click();
                        $("#pro_txtmo").focus();
                    }
                    else if (data == "@") {
                        alert("Mobile No AlReady Registered.");
                        $(".hide-page-loading-msg").click();
                    }
                    else {
                        $(".hide-page-loading-msg").click();
                        loadmsg = "Sending OTP.";
                        SendingOTP();
                    }
                },
                //if any error occure
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    $(".hide-page-loading-msg").click();
                    alert(errorThrown);
                }
            })
        }
    }
    
}

function UpdateArea(a,p) {
    $.ajax({
        url: localStorage.getItem("APIURL") + "/Values/UpdateArea?acode=" + a + "&Ptcode=" + p,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
        },
        //if any error occure
        error: function (xmlHttpRequest, textStatus, errorThrown) {
        }
    })
}

function UpdateProfileData() {    
    loadmsg = "Saving Data...";
    $(".show-page-loading-msg").click();
    var DrName = $("#pro_txtDocname").val();
    var DrCode = localStorage.getItem("DocCode");
    var state = $("#Textstate").val();
    if (state == "") {
        localStorage.setItem("State","");
    } else {
        if (localStorage.getItem("State") != "" && localStorage.getItem("State") != null) {
            state = localStorage.getItem("State");
        }
    }
    var city = $("#Textcity").val();
    if (city == "") {
        localStorage.setItem("City", "");
    } else {
        if (localStorage.getItem("City") != "" && localStorage.getItem("City") != null) {
            city = localStorage.getItem("City");
        }
    }
    var area = $("#Textarea").val();
    if (area == "") {
        localStorage.setItem("Area","")
    } else {
        if (localStorage.getItem("Area") != "" && localStorage.getItem("Area") != null) {
            area = localStorage.getItem("Area");
        }
    }
    var WebSerUrl = localStorage.getItem("APIURL");
    if (WebSerUrl == "" || WebSerUrl == null) {
        var gbcUrl = GBCServicePath + "/Values/UpdatePtData?PtCode=" + $("#pro_txtReg").val() + "&Ptname=" + $("#pro_txtname").val() + "&MoNo=" + $("#pro_txtmo").val() + "&Email=" + $("#pro_txtemail").val() + "&Add=" + $("#pro_txtadd").val() + "&Stcode=" + state + "&CtCode=" + city + "&area=" + area + "&DrName=" + DrName + "&DrCode=" + DrCode;
        
        $.ajax({
            url: gbcUrl,
            type: "get",
            dataType: 'json',
            processData: true,
            success: function (data) {
                $(".hide-page-loading-msg").click();                
                localStorage.setItem("PTNAME", $("#pro_txtname").val());
                localStorage.setItem("PTNO", $("#pro_txtmo").val());
                localStorage.setItem("PTEMAIL", $("#pro_txtemail").val());
                localStorage.setItem("PTADD", $("#pro_txtadd").val());
                localStorage.setItem("State", localStorage.getItem("State"));
                localStorage.setItem("City", localStorage.getItem("City"));
                localStorage.setItem("Area", localStorage.getItem("Area"));
                localStorage.setItem("DocCode", DrCode);
                localStorage.setItem("DocName", DrName);

                $("#profile_name").text($("#pro_txtname").val());
                alert('Profile Update Successfully');
               
                window.location.href = "#page-con";
            },
            error: function (event) {
                $(".hide-page-loading-msg").click();
                alert("Please Try Again!!!");

            }
        });
    } else {
        WebSerUrl = WebSerUrl + "/Values/UpdatePatientData?PtCode=" + $("#pro_txtReg").val() + "&Ptname=" + $("#pro_txtname").val() + "&MoNo=" + $("#pro_txtmo").val() + "&Email=" + $("#pro_txtemail").val() + "&Add=" + $("#pro_txtadd").val() + "&Stcode=" + state + "&CtCode=" + city + "&area=" + area + "&DrName=" + DrName + "&DrCode=" + DrCode;
       
        $.ajax({
            url: WebSerUrl,
            type: "get",
            dataType: 'json',
            processData: true,
            success: function (data) {
                $(".hide-page-loading-msg").click();
                if (data == "1") {
                    localStorage.setItem("PTNAME", $("#pro_txtname").val());
                    localStorage.setItem("PTNO", $("#pro_txtmo").val());
                    localStorage.setItem("PTEMAIL", $("#pro_txtemail").val());
                    localStorage.setItem("PTADD", $("#pro_txtadd").val());
                    localStorage.setItem("State", localStorage.getItem("State"));
                    localStorage.setItem("City", localStorage.getItem("City"));
                    localStorage.setItem("Area", localStorage.getItem("Area"));
                    localStorage.setItem("DocCode", DrCode);
                    localStorage.setItem("DocName", DrName);
                    $("#profile_name").text($("#pro_txtname").val());
                    alert('Profile Update Successfully');                  
                }
                else {
                    alert('Sorry!!! Try After Some Time' + data);
                }
                window.location.href = "#page-con";
            },
            error: function (event) {
                $(".hide-page-loading-msg").click();
                alert("Please Try Again!!!");
            }
        });
    }
}

function ProfileImage() {
    AddActiveClass(6);
    getPhotoProfile(pictureSource.PHOTOLIBRARY);
}

function GetActiveSupplierList() {
    if (APPType == "$") {
        $("#Select_NoRecord").hide();
    } else {
        $("#Select_NoRecord").show();
    }
    loadmsg = "Loading Supplier List...";
    $(".show-page-loading-msg").click();
    AddActiveClass(1);
    ToggleMenu(1);
    var url;
    if (APPType == "$") {
        url = GBCServicePath + "/Values/GetActiveSupplier?Pcode=" + PCODE;
    } else {
        url = GBCServicePath + "/Values/GetActiveSupplier";
    }
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            $(".hide-page-loading-msg").click();
            if (data == null || data=="") {
                $(".hide-page-loading-msg").click();
                $("#Select_Grid").html("");
                $("#Select_Grid").append("<ul  data-role='listview' data-inset='true'  class='touch ui-listview ui-listview-inset ui-corner-all ui-shadow' data-icon='false' data-split-icon='delete'>" +
                                    "<li class=' ui-li-static ui-body-inherit ui-first-child ui-last-child'> No Record Available...</li></ul>");
            }
            else {
                var arrLength = data.length;
                if (APPType == "$") {
                    $("#Select").append("<br />");
                }
                $("#Select_Grid").html("");
                for (var i = 0; i <= arrLength - 1; i++) {
                    var data1 = data[i];
                    var a = '"';
                    $("#Select_Grid").append("<li onclick= " + a + " UpdateCustomer('" + data1.Pcode + "','" + data1.Name + "');" + a + " class='ui-first-child ui-last-child' id=" + i + " style='background-color:white;'>" +
                     "<a href='#'  class='ui-btn' style='white-space:initial;background-color:white'>" +
                     "<label id='b-name' style='color: #137ab0; font-size: 16px; font-weight: bold;margin-top:3px;text-align:justify;'>" + data1.Name + "</label>" +
                     "<label id='b-mob' style=' font-size: 12px; font-weight:normal;margin-top:-5px;'>" + data1.MobileNo + "</label>" +
                     "<label id='b-add' style='font-size: 13px; font-weight: normal;margin-top:-5px;color:#808080;text-align:justify;'>" + data1.Address + "</label>" +
                     "<label id='b-status' style='font-size: 13px; font-weight: normal;margin-top:-5px;text-align:right;'></label>" +
                      "</a>" +
                 "</li>"
                );

                    if (APPType == "$") {
                        if (data1.ServiceStatus == true) {
                            $("#b-status").text("Service Is Available");
                            document.getElementById("b-status").style.color = "#1ed40a";
                        } else {                            
                            $("#b-status").text("Service Is Not Available");
                            document.getElementById("b-status").style.color = "#c10f0f";
                        }
                    }
                }
            }

        }
    });
    // window.location.href = "#ReqSend-Acc";
}


function GetOrderPartyUserDetail() {   
    $("#Cust").text("Name:"+ localStorage.getItem("PTNAME") + " (" + localStorage.getItem("PTCODE") + ")");
    $("#CustNo").text("Mobile No: "+localStorage.getItem("PTNO"));
    $("#CustEmail").text("Email Id: "+localStorage.getItem("PTEMAIL"));
    $("#CustAdd").text("Address: " + localStorage.getItem("PTADD"));
    $("#txtbillingAdd").val(localStorage.getItem("PTADD"));
    $("#dr-name").val(localStorage.getItem("DocName"));
    localStorage.setItem("DrCode", localStorage.getItem("DocCode"));
    SetStaeCity();
    $("#del-area").val($("#Textarea").val());
    var a = localStorage.getItem("DelCharges");
    $("#charges").text(Number(a).toFixed(2));
   
}

function ShowItemList(id) {
    $("#itmtbl" + id).toggle(500);
}


function onPhotoDataSuccessProfile(imageURI) {  ///////////////
    window.location.href = "#profile";
    var smallImage = document.getElementById('Profile-img');
    smallImage.src = imageURI;
    localStorage.setItem("Profile-img", imageURI);    
}

function SetProfilePhoto() {
    if (localStorage.getItem("Profile-img") == null || localStorage.getItem("Profile-img") == "") {
        var smallImage = document.getElementById('Profile-img');
        smallImage.src = "assets/img/add-user.png";
    }
    else {
        var smallImage = document.getElementById('Profile-img');
        smallImage.src = localStorage.getItem("Profile-img");
    }
    
}

function getPhotoProfile(source) {  ////////////
    navigator.camera.getPicture(onPhotoDataSuccessProfile, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source,
        allowEdit: true,
        saveToPhotoAlbum: true,

    });
}




///////////////////////////Folder And Move


function movePic(file) {
    alert(file)
    window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError);
}

//Callback function when the file system uri has been resolved
function resolveOnSuccess(entry) {
    var Vrno = localStorage.getItem("VRNOName");
    alert(Vrno);
    if (Vrno.indexOf("G") == 0) {
    } else {
        var d;
        var n;
        var newFileName;
        if (Vrno == "" || Vrno == null) {
            d = new Date();
            n = d.getTime();
            newFileName = n + ".jpg";
        } else {
            newFileName = Vrno;
        }
        var myFolderApp = FolderName;// "TiaERP@ConsumerApp";
        alert(myFolderApp);
        alert(LocalFileSystem.PERSISTENT);

        window.webkitStorageInfo.requestQuota(PERSISTENT, 1024 * 1024, function (grantedBytes) {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, grantedBytes, function (fileSys) {
                alert(fileSys.root);
                alert(grantedBytes);
                alert('inside');
                fileSys.root.getDirectory(myFolderApp,
                                { create: true, exclusive: true },
                                function (directory) {
                                    try{                                        
                                        alert(directory.fullPath); //debugging
                                        entry.moveTo(directory, newFileName, successMove, resOnErrorMove);
                                    } catch (e) {
                                        alert(e.message);
                                    }
                                },
                                resOnError);
            },
       resOnErrorFile);            
        }, function (e) {
            alert('Error'+ e.message);
        });
               
    }
}

function successMove(entry) {    
    var imgLoc = folderPath + entry.fullPath;
    alert(imgLoc);
    localStorage.setItem("ImagePath", imgLoc);
}

function resOnErrorFile(error) {
    alert(" From Request File System " + FolderName + " . Error Code:-" + error.code);
}
function resOnError(error) {
    alert("Failed To Create Folder " + FolderName + " . Error Code:-" + error.code );    
}

function resOnErrorMove(error) {
    alert("Failed To Move Prescription In " + FolderName + " Folder. Error Code:-" + error.code);
}

function SubstitudeItemList() {
    $("#gnameS").text($("#lblContent").text());
    loadmsg = "Loading Item List...";
    $(".show-page-loading-msg").click();
    var WebSerUrl = localStorage.getItem("APIURL") + "/Product/AlternateIMList?icode=" + $("#lblItmCode").text();
    $.ajax({
        url: WebSerUrl,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            try{
                $(".hide-page-loading-msg").click();
                var itm = data;
                $("#Substitude_Grid").html("");
                for (var i = 0; i < itm.length; i++) {
                    var data1 = itm[i];
                    var a = '"';
                    $("#Substitude_Grid").append("<li onclick= " + a + "SetDataFromSubstitude('" + data1.Icode + "','" + data1.Rate + "','" + data1.MRP + "','" + data1.Iname + "','" + data1.Packing.replace("'", "$") + "','" + data1.Genric + "','" + data1.WRate + "');" + a + " class='ui-first-child ui-last-child' id=" + i + ">" +
                                                 "<a href='#'  class='ui-btn ui-btn-icon-right ui-icon-carat-r'>" +
                                                     "<p style='color:#137ab0;font-size:14px;font-weight:bold'>" + data1.Iname + "</p>" +
                                                     "<label style='float:right;font-size:13px;background-color:#137ab0;color:white;padding:3px;font-weight:lighter;margin-top:-14px'>" + data1.MRP + "</label>" +
                                                     "<label style='font-size:11px;margin-top:-6px;'>" + data1.Packing + "</label>" +
                                                     "<p style='display:inline;float:left;font-weight:bold;margin-top:-3px;font-size:11px;'> Rate: " + data1.WRate + "</p>" +
                                                 "</a>" +
                                             "</li>"
                                                 );
                }
            } catch (e) {
                alert(e.message);
            }
        },
        error: function (d) {
            $(".hide-page-loading-msg").click();
            alert(d.responseText);
        }
    });
}

function SetDataFromSubstitude(icode, rate, mrp, iname, pack, gname,Wrate) {
    pack = pack.replace("$", "'");
    $("#lblItmCode").text(icode);
    $("#lblRetailrate").text(rate);
    $("#lblRate").text(Wrate);
    $("#lblItmMRP").text(mrp);
    $("#lblItmName").text(iname);
    $("#PackExp").text(pack);
    $("#lblContent").text(gname);
    $("#txt-qty").val($("#txt-qty").val());
    $("#txt-free").val($("#txt-free").val());
    $("#a_Item-Info-Search-Body").click();
}

function OrdTrackFromHistory(Vrno, name) {    
    TrackOrder(Vrno, name);
}

function ShowTrackOrd(val) {
    if (val == '1') {
        $("#OPLDiv").show();
        $("#BEDDiv").hide();
        $("#DSPDiv").hide();
        $("#DELDiv").hide();
    }
    else if (val == '2') {
        $("#OPLDiv").show();
        $("#BEDDiv").show();
        $("#DSPDiv").hide();
        $("#DELDiv").hide();
    }
    else if (val == '3') {
        $("#OPLDiv").show();
        $("#BEDDiv").show();
        $("#DSPDiv").show();
        $("#DELDiv").hide();
    }
    else if (val == '4') {
        $("#OPLDiv").show();
        $("#BEDDiv").show();
        $("#DSPDiv").show();
        $("#DELDiv").show();
    }
}

function OrderTrack(Vrno, name) {
    $("#divdsp").hide();
    $("#trackVrno").text("");
    $("#trackVrdate").text("");
    $("#lblStatus").text("");
    loadmsg="Loading Order Details."
    $(".hide-page-loading-msg").click();
    var WebSerUrl = localStorage.getItem("APIURL") + "/Order/GetOrderTrackingDetail?Vrno=" + Vrno;    
    $.ajax({
        url: WebSerUrl,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            try{
                $("#DelImg").addClass("track-disable");
                $("#DispImg").addClass("track-disable");
                $("#BillImg").addClass("track-disable");
                $("#OPLImg").addClass("track-disable");
                $(".hide-page-loading-msg").click();
                $("#dpname").text(name);
                $("#trackVrno").text("Ord VrNO: " +data.VRNO);
                $("#trackVrdate").text(data.TRCode);
                $("#dOrdVr").text("Ord VrNO: "+data.VRNO);
                $("#dOrdDate").text(data.TRCode);
                $("#dOrdAmt").text("Ord Amt: " + data.ORAMT.toFixed(2));
                if (data.Status != "CNL") {
                    $("#OPLImg").removeClass("track-disable");
                    document.getElementById("lblStatus").style.color = "#1ed40a";
                    $("#lblStatus").text("Order Placed");
                    document.getElementById("trackVrno").style.color = "#137ab0";
                    if (data.Status == "BEP" || data.Status == "DIS" || data.Status == "DLV" || data.Status == "RCD") {
                        try{
                            $("#lblStatus").text("Bill Prepared");
                            $("#BillImg").removeClass("track-disable");
                            $("#dBillVr").text("Bill VrNo: " + data.ORDERNO);
                            $("#dBillDate").text(data.BillDt);
                            $("#dBillAmt").text("Bill Amt: " + data.BillAmt.toFixed(2));
                            $("#dbillwaltdisc").text(data.DCode);
                            $("#dbillremark").text("Remark : " + data.BillRemark);
                        } catch (e) {
                            alert(e.message);
                        }
                        if (data.Status == "DIS" || data.Status == "DLV" ||  data.Status == "RCD") {
                            $("#lblStatus").text("Dispatched");
                            $("#DispImg").removeClass("track-disable");
                            $("#Label5").text("Dispacted Info:");
                            $("#dDispDate").text("Disp Date: " + data.DisDt);
                            $("#dExpDelDate").text("Expectated Del. Date: " + data.ExpDelDt);
                            $("#dDispRemark").text("Remark : " + data.DispRemark);
                            $("#DCour").text("Sent By : " + data.CourierName);
                            if (data.Status == "DLV" || data.Status == "RCD") {
                                $("#lblStatus").text("Order (d");
                                if (data.Status == "DLV") {
                                    $("#lblStatus").text("Delivered");
                                    $("#DelImg").removeClass("track-disable");
                                    $("#ddElTo").text("Delivered To: " + data.DeliverdTo);
                                    $("#dDelDate").text("Delivered Date: " + data.DelDt);
                                    $("#dPaidAmt").text("Received Amt: " + data.PaidAmt.toFixed(2));
                                    $("#pDelremark").text("Remark : " + data.DelvRemark);
                                    $("#dcreditmt").text(data.NameP);
                                }
                                else {
                                    $("#DelImg").addClass("track-disable");
                                }
                            }
                        }
                        else {
                            $("#DelImg").addClass("track-disable");
                            $("#DispImg").addClass("track-disable");
                        }
                    }
                    else {
                        $("#DelImg").addClass("track-disable");
                        $("#DispImg").addClass("track-disable");
                        $("#BillImg").addClass("track-disable");
                    }
                    var a, b;
                    clearInterval(a);
                    clearInterval(b);
                    if (data.Status == "DIS") {
                        $("#lbldispnote").text("If You Received Your Order, Please Update Status To Received Order ( Add Mark To CheckBox ) . !");
                        var scrolled = 0;
                        scrolled = scrolled + 500;
                        $("#DivOrdDetail").stop().animate({
                            scrollTop: scrolled
                        });
                        $("#divdsp").show();
                        a = setInterval(function blink() {
                            $("#lbldispnote").hide();
                            b = setInterval(function blink() {
                                $("#lbldispnote").show();
                            }, 3000);
                        }, 2000);
                        setTimeout(function blinkstop() {
                            clearInterval(a);
                            clearInterval(b);
                        }, 190000);
                    }
                    else {
                        $("#divdsp").hide();
                    }
                
                }
                else {
                    clearInterval(a);
                    clearInterval(b);
                    $("#divdsp").hide();
                    $("#DelImg").addClass("track-disable");
                    $("#DispImg").addClass("track-disable");
                    $("#BillImg").addClass("track-disable");
                    $("#OPLImg").addClass("track-disable");
                    document.getElementById("trackVrno").style.color = "#c10f0f";
                    $("#lblStatus").text("Canceled");
                    document.getElementById("lblStatus").style.color = "#c10f0f";
                }
            }
            catch (e) {
                
            }
        },
        error: function (d) {
            $(".hide-page-loading-msg").click();
            alert(d.responseText);
        }
    });
}

function OnChangeTrackOrd() {
    OrderTrack($("#ordVrList").val(), localStorage.getItem("PNAME"));
}

function BindOrdVrNo() {
    var Code = localStorage.getItem("ClientCode");
    var WebSerUrl = GBCServicePath;
    WebSerUrl = WebSerUrl + "/Values/OrderVrNOList?PtCode=" + Code + "&AppType=" + APPType;
   
    $.ajax({
        url: WebSerUrl,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            $('#ordVrList').empty();
            for (var i = 0; i < data.length; i++) {
                select = document.getElementById('ordVrList');
                for (var i = 0; i <= data.length - 1; i++) {
                    var opt = document.createElement('option');
                    opt.value = data[i].VrNo;
                    opt.innerHTML = data[i].VrNo;
                    select.appendChild(opt);
                }
                $("#ordVrList").selectmenu("refresh", true);
            }
            if (data != "" && data != null) {
                OrderTrack($("#ordVrList").val(), localStorage.getItem("PNAME"));
            }
        },
        //if any error occure
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            $(".hide-page-loading-msg").click();
        }
    })
}



////////////////////////////////////////////////////

function CheckSMSPluginSupport() {

    if ((/(ipad|iphone|ipod|android)/i.test(navigator.userAgent))) {
        document.addEventListener('deviceready', initApp, false);
    } else {
        updateStatus('SMS plugin not support.');
    }
}

// we will restore the intercepted SMS here, for later restore
var smsList = [];
var interceptEnabled = false;

function initApp() {
    try {
        if (!SMS) { alert('SMS plugin not ready'); return; }

        document.addEventListener('onSMSArrive', function (e) {
           
            loadmsg = "Verifying No.";
            $(".show-page-loading-msg").click();
            var data = e.data;
            smsList.push(data);
            updateStatus('SMS arrived, count: ' + smsList.length);

            var divdata = $('div#data');
            divdata.html(divdata.html() + JSON.stringify(data));
            var msg;
            var SmsBody = JSON.stringify(data);
            if (SmsBody.toString().toLowerCase().indexOf("md-goyals")) {
                var ParaSMSBoby = SmsBody.split(',');
                for (var i = 0; i < ParaSMSBoby.length - 1; i++) {
                    var subArray = ParaSMSBoby[i].split(':');
                    if (subArray[0].toString().toLowerCase().indexOf("body") >= 0) {
                        var msg = subArray[1];
                        var z = localStorage.getItem("CheckRegCode");
                        z = z.toString().toLowerCase();
                        if (msg.toString().toLowerCase().indexOf(z) >= 0) {
                            $("#txt-clientMobno").val("");
                            $("#txt-clientCode").val(localStorage.getItem("CheckRegCode"));
                            stopWatch();
                            closeVerificationRegCode();
                            CheckRegCode();
                        }
                        else {
                            stopWatch();
                            closeVerificationRegCode();
                        }
                        if (msg.toString().toLowerCase().indexOf(localStorage.getItem("OTpMsgBody").toString().toLocaleLowerCase()) >= 0) {
                            if (msg.toString().toLowerCase().indexOf(localStorage.getItem("OTP")) >= 0) {
                                $("#txtotp").val(localStorage.getItem("OTP"));
                                closeVerification();
                                CheckOTP();
                               
                            }
                            else {                                
                            }
                        }
                        else {                            
                        }
                        closeVerification();
                        break;
                    }
                    else {
                       
                    }
                }
            }
            else {
            }
        });
    }
    catch (e) {
        //alert(e.message);
    }
}

function update(id, str) {
    //$('div#' + id).html(str);
}
function updateStatus(str) {
    //$('div#status').html(str);
}
function updateData(str) {
    //$('div#data').html(str);
}

function sendSMS() {
    try {
        var sendto = $('input#sendto').val().trim();
        var textmsg = $('textarea#textmsg').val();
        if (sendto.indexOf(";") >= 0) {
            sendto = sendto.split(";");
            for (i in sendto) {
                sendto[i] = sendto[i].trim();
            }
        }
        if (SMS) SMS.sendSMS(sendto, textmsg, function () { }, function (str) { alert(str); });
    }
    catch (e) {
        alert(e.message);
    }
}
function listSMS() {
    updateData('');

    if (SMS) SMS.listSMS({}, function (data) {
        updateStatus('sms listed as json array');
        //updateData( JSON.stringify(data) );

        var html = "";
        if (Array.isArray(data)) {
            for (var i in data) {
                var sms = data[i];
                smsList.push(sms);
                html += sms.address + ": " + sms.body + "<br/>";
            }
        }
        updateData(html);

    }, function (err) {
        updateStatus('error list sms: ' + err);
    });
}
function deleteLastSMS() {
    updateData('');

    if (smsList.length == 0) {
        updateStatus('no sms id to delete');
        return;
    }

    var sms = smsList.pop();

    if (SMS) SMS.deleteSMS({
        _id: sms["_id"]
    }, function (n) {
        updateStatus(n + ' sms messages deleted');
    }, function (err) {
        updateStatus('error delete sms: ' + err);
    });
}
function restoreAllSMS() {
    
    if (SMS) SMS.restoreSMS(smsList, function (n) {
        // clear the list if restore successfully
        smsList.length = 0;
        updateStatus(n + ' sms messages restored');

    }, function (err) {
        updateStatus('error restore sms: ' + err);
    });
}
function startWatch() {
    try {
       
        if (SMS) SMS.startWatch(function () {
         
            update('watching', 'watching started');
        }, function () {
           
            updateStatus('failed to start watching');
        });
    }catch(e){
    }
}
function stopWatch() {
    try{
        if (SMS) SMS.stopWatch(function () {
            update('watching', 'watching stopped');
        }, function () {
            updateStatus('failed to stop watching');
        });
    } catch (e) {
    }
}

function toggleIntercept() {
    interceptEnabled = !interceptEnabled;

    if (interceptEnabled) { // clear the list before we start intercept
        smsList.length = 0;
    }

    if (SMS) SMS.enableIntercept(interceptEnabled, function () { }, function () { });

    $('span#intercept').text('intercept ' + (interceptEnabled ? 'ON' : 'OFF'));
    $('button#enable_intercept').text(interceptEnabled ? 'Disable' : 'Enable');
}

function ShowOffer() {    
    window.location.href = "#div-offer";
}


function index_click() {
    $(".flex-control-nav").hide();
    $("#HomePagehree").show();
    $("#menuBottun").hide();
    $("#sliderFrame").hide();
    if (PCODE == "00002_") {
        $("#main-p-00002_").show();
        $("#main-p-RSHT01").hide();
    } else {
        $("#main-p-00002_").hide();
        $("#main-p-RSHT01").show();
    }
}

function home_click() {
    $(".flex-control-nav").show();
    $("#HomePagehree").hide();
    $("#menuBottun").show();
    $("#sliderFrame").show();
}

function ProfileOrMenu() {    
    if (APPType == "@") {
        window.location.href = "#profile";
        GetActiveSupplierList();
    }
    else {
        window.location.href = "#outside";
    }
}

function GetPRetailOrdQty() {
    $.ajax({
        url: GBCServicePath + "/Values/getPretailOrdQty?PCode=" + PCODE,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            localStorage.setItem("pretailordQty", data);
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert(xmlHttpRequest.responseText);
        }
    });
}

function GetDataFromMobNo() {
    WebSerUrl = localStorage.getItem("APIURL");
    $.ajax({
        url: WebSerUrl + "/Values/getDataFromMobno1?MobNo=" + $("#txt-clientMobno").val(),
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            $(".hide-page-loading-msg").click();
            if (data != "") {
                var arry = data.split('<|>');
                if (confirm("Client Detail of entered mobile No is\nName : " + arry[0] + "\nAddress : " + arry[1] + "\nWish to continue to send Registration Code In Entered Mobile No.")) {
                    localStorage.setItem("CheckRegCode", arry[2]);
                    SendingRegistrtionCode();
                }
            } else {
                alert("Sorry! Entered mobile no. is not registered on GBC Server. Please Create New account.");
            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            $(".hide-page-loading-msg").click();
            alert(xmlHttpRequest.responseText);
        }
    });
}
function GetDataFromRegCode() {
    WebSerUrl = localStorage.getItem("APIURL");
    $.ajax({
        // url: GBCServicePath + "/Values/getDataFromRegCode1?code=" + $("#txt-clientCode").val(),
        url: WebSerUrl + "/Values/getDataFromRegCode1?code=" + $("#txt-clientCode").val(),
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            str = data.split('|')
            localStorage.setItem("ClientCode", str[4]);
            localStorage.setItem("PTCODE", str[4]);
           $(".hide-page-loading-msg").click();
            if (data != "") {
                var arry = data.split('<|>');
                if (confirm("Client Detail of entered Registration Code is\nName : " + arry[0] + "\nMobile No : " + arry[3] + "\nAddress : " + arry[1] + "\n\nWish to continue to send OTP No In Registered Mobile No.")) {
                    localStorage.setItem("CheckRegCode", arry[2]);
                    $("#txt-clientMobno").val(arry[3]);
                    $("#txt-clientCode").val("");
                    localStorage.setItem("isOTPmsg", "1");
                    SendingRegistrtionCode();
                }
            } else {
                alert("Sorry! Entered Registration Code is not registered on GBC Server. Please Create New account.");
            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            $(".hide-page-loading-msg").click();
            alert(xmlHttpRequest.responseText);
        }
    });
}

function SendingRegistrtionCode() {
    try {

        // alert('sendoing otp');
        startWatch();
        var MoNo = $("#txt-clientMobno").val().trim();
        //alert('show');
        if (localStorage.getItem("isOTPmsg") == "1") {
            loadmsg = "Sending Registration Code.";
        }
        else {
            loadmsg = "Sending OTP No.";
        }
        var showIntval1 = setInterval(function fun2() {
            $(".show-page-loading-msg").click();
        }, 10);

        var msg = "Hi! Welcome to TiaERP@ConsumerApp. Your Registrion Code is ";
        if (APPType == "$") {
            msg = "Hi! Welcome to " + Heading + " App. Your Registrion Code is ";
        }
        msg = msg + localStorage.getItem("CheckRegCode");
        if (localStorage.getItem("isOTPmsg") == "1") {
            randomNumberGenerate();
            var no = localStorage.getItem("randomNo");
            msg = msg + " And OTP no is " + no;
        }
        $.ajax({
            url: GBCServicePath + "/Values/GetSMSUrl?mono=" + MoNo + "&msg=" + msg + "&AppType=" + APPType + "&Pcode=" + PCODE,
            type: "GET",
            dataType: "json",
            cache: false,
            success: function (data) {
                if (data == "1") {
                    clearInterval(showIntval1);
                    $(".show-page-loading-msg").click();
                    ReadSMSRegCode();
                } else {
                    clearInterval(showIntval1);
                    $(".hide-page-loading-msg").click();
                    if (data.indexOf("remote name could not be resolved") > 0) {
                        alert('Please Check Your Internet! And Try Again! Failed To SMS');
                    }
                    else {
                        alert("Sorry!!! SMS Sending Failed. Please Try after some Time.");
                    }
                }

            },
            error: function (xmlHttpRequest, textStatus, errorThrown) {
                alert("Sorry!!! SMS Sending Failed. Please Try after some Time.");
                clearInterval(showIntval1);
                $(".hide-page-loading-msg").click();
            }
        })
    }
    catch (e) {
        alert(e.message);
    }
}
function ReadSMSRegCode() {
    $(".hide-page-loading-msg").click();
    if (localStorage.getItem("isOTPmsg") == "1") {
        loadmsg = "Verifying SMS to read OTP No.";
    }
    else {
        loadmsg = "Verifying SMS to read registration code.";
    }

    $(".show-page-loading-msg").click();
    showIntval = setInterval(function fun2() {
        $(".show-page-loading-msg").click();
    }, 10);
    setTimeout(function fun1() {
        closeVerificationRegCode();
    }, 20000);
}
function closeVerificationRegCode() {
    clearInterval(showIntval);
    $(".hide-page-loading-msg").click();
    $("#txt-clientCode").focus();
    if (localStorage.getItem("isOTPmsg") == "1") {
        $("#RegOTPNo").slideDown(1000);
        $("#txt-clientOTP").focus();
    }
}


//////Wallet

function SetWalletBal() {
    loadmsg = "Please Wait! Loading Data..";
    $(".show-page-loading-msg").click();
    GetWalletBal('1');
}

function GetWalletBal(val) {
    if (APPType == $) {
        $("#wal-last-vr").html("");
        $.ajax({
            url: localStorage.getItem("APIURL") + "/Order/GetWalleteBal?Ptcode=" + localStorage.getItem("ClientCode"),
            type: "GET",
            dataType: "json",
            cache: false,
            success: function (data) {
                if (data != "|" && data != "") {
                    $("#wal2").text(data.split('|')[0]);
                    $("#wal1").text(data.split('|')[1]);
                    if (val == '2') {
                        CheckCreditGet();
                    }
                }
                else {
                    $("#wal1").text("0.00");
                }
                $(".hide-page-loading-msg").click();
            },
            error: function (xmlHttpRequest, textStatus, errorThrown) {
                alert(xmlHttpRequest.responseText);
                $(".hide-page-loading-msg").click();
            }
        });
    }
}

function GetLastWalletTransc() {
    loadmsg = "Please Wait! Loading Transcation List..";
    $(".show-page-loading-msg").click();
    $.ajax({
        url: localStorage.getItem("APIURL") + "/Order/GetLastWalletetTrans?Ptcode=" + localStorage.getItem("ClientCode"),
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
            $("#wal-last-vr").html("");
            if (data.length == 0) {
                $("#wal-last-vr").append("<li class=' ui-li-static ui-body-inherit ui-first-child ui-last-child' style='overflow-x:auto;'>" +
                          "<label style='text-align:center' class='theme-color-txt-red'>No Transcations Available...</label> " +
                       "</li>");
            } else {
                for (var i = 0; i <= data.length; i++) {
                    $("#wal-last-vr").append("<li class=' ui-li-static ui-body-inherit ui-first-child ui-last-child' style='overflow-x:auto;'>" +
                          "<table style='width:100%'>" +
                              "<tr>" +
                                  "<td>" +
                                      "<label class='theme-color-txt-red' style='margin-top:6px;font-size:6vmin'>" + data[i].ordvrno + "</label>" +
                                      "<label style='color:#bbbdbb;margin-top:-4vmin;font-size:12px'>Order VrNo</label>" +
                                  "</td>" +
                                  "<td>" +
                                      "<label class='theme-color-txt' style='margin-top:6px;font-size:6vmin;text-align:right'>" + data[i].billamt.toFixed(2) + " Rs</label>" +
                                      "<label style='text-align:right;color:#bbbdbb;margin-top:-4vmin;font-size:12px;'>Bill No: " + data[i].SbVrNo + "</label>" +
                                  "</td>" +
                              "</tr>" +
                              "<tr>" +
                                  "<td>" +
                                      "<label>Credit: " + data[i].addamt.toFixed(2) + " Rs</label>" +
                                  "</td>" +
                                  "<td>" +
                                      "<label style='text-align:right' > " + data[i].dedamt + " Rs</label>" +
                                  "</td>" +
                              "</tr>" +
                          "</table>" +
                          "<progress id='"+i+"' max='100'  value='30'></progress>"+
                       "</li>");
                    if (data[i].status == "OPL") {
                        $("#" + i).val(30);
                    }
                    else
                        if (data[i].status == "BEP") {
                            $("#" + i).val(60);
                        }
                        else
                            if (data[i].status == "DIS") {
                                $("#" + i).val(80);
                            }
                            else
                                if (data[i].status == "DLV") {
                                    $("#" + i).val(100);
                                }
                                else {
                                    $("#" + i).val(0);
                                }
                }
            }
            $(".hide-page-loading-msg").click();
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            $(".hide-page-loading-msg").click();
            alert(xmlHttpRequest.responseText);
        }
    });
}

function ShowMsgCredit(val) {
    $("#Div11").html(" <center>" +
                    "<img id='booke' src='assets\img\booke.jpg' alt='Thank You' style='width:80px;'/>" +
                "<label id='Div11-1' style='padding-top:10px'>" +
                "</label>" +
                    "<span style='color:red;font-size:12px;'>Get More Benifits By More Order. </span>" +
                    "</center>   ");
    $('#booke').attr('src', 'assets/img/booke.jpg');
    $('#Div11-1').text("Congratulation! Your Wallete Is Credited With " + val + " . Please Check Your Wallet.")
}
function ShowMsgOrdSave() {
    $("#Div12").html(" <center>" +
                    "<img id='thank' alt='Thank You' style='width:80px;'/>"+
                "<label style='padding-top:10px'>Your Order Received! We will Notify You For Further Order Details."+
                "</label>"+
                    "<span style='color:red;font-size:12px;'> Please Note:- Order Amount May Be Change When Order Is Proceed. </span>"+
                    "</center>   ");
    $('#thank').attr('src', 'assets/img/thanku.jpg');
}

function ShowPopupDivMsg() {
    $("#Div12").show();
    textAnim('Div12', 'rollIn');
}

function HidePopupDivMsg() {
    setTimeout(
        function abc() {
            textAnim('Div12', 'rollOut');
            setTimeout(
        function xyz() {
            $("#Div12").hide();
        }, 1000);
        }, 8000);
}

function ShowPopupDivMsg1() {
    $("#Div11").show();
    textAnim('Div11', 'rollIn');
}

function HidePopupDivMsg1() {
    setTimeout(
        function abc() {
            textAnim('Div11', 'rollOut');
            setTimeout(
        function xyz() {
            $("#Div11").hide();
        }, 1000);
        }, 8000);
}

function CheckCreditGet() {
    var a = $("#wal2").text().trim();
    if (a.indexOf("Credit") >= 0) {
        var b = a.replace("Credit", "");
        b = b.replace("Rs.", "");
        ShowMsgCredit(b);
        ShowPopupDivMsg1();
        HidePopupDivMsg1();
    }
}


function SendNotif(val) {
    $.ajax({
        url: localStorage.getItem("APIURL") + "/Connection/SendNotify?PtCode=" + localStorage.getItem("ClientCode")+"&Vrno="+val,
        type: "GET",
        dataType: "json",
        cache: false,
        success: function (data) {
           
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert(xmlHttpRequest.responseText);
            $(".hide-page-loading-msg").click();
        }
    });
}

function updateStatusRcd() {
    if ($("#chkrcd").is(":checked")) {
        $.ajax({
            url: localStorage.getItem("APIURL") + "/Order/UpdateRcdStatus?OrdNo=" + $("#ordVrList").val(),
            type: "GET",
            dataType: "json",
            cache: false,
            success: function (data) {
                $("#lbldispnote").text("Thank You!");
            },
            error: function (xmlHttpRequest, textStatus, errorThrown) {
                alert(xmlHttpRequest.responseText);
                $(".hide-page-loading-msg").click();
            }
        });
    } else {
       
    }
}






function DownLoad() {
    alert('You Click Me');
    DownloadFile("http://tiaapp.goyalonline.in/vrimg/GC16000355.jpeg", FolderName, "Sample")
}




///////////////Download File From Server
//First step check parameters mismatch and checking network connection if available call    download function
function DownloadFile(URL, Folder_Name, File_Name) {
    //Parameters mismatch check
    alert(' Inside DownloadFile');
    if (URL == null && Folder_Name == null && File_Name == null) {
        alert('1 return');
        return;
    }
    else {
        //checking Internet connection availablity
        var networkState = navigator.connection.type;
        if (networkState == Connection.NONE) {
            alert('2 return');
            return;
        } else {
            download(URL, Folder_Name, File_Name); //If available download function call
        }
    }
}
//Second step to get Write permission and Folder Creation

function download(URL, Folder_Name, File_Name) {
    //step to request a file system 
    alert('Inside download');
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);
    Folder_Name = "00002_";
    function fileSystemSuccess(fileSystem) {
        alert("fileSystem.root.toURL()=" + fileSystem.root.toURL());
        alert("fileSystem.root.toInternalURL()=" + fileSystem.root.toInternalURL());
        alert("fileSystem.root.nativeURL=" + fileSystem.root.nativeURL);
        alert('inside fileSystemSuccess');
        var download_link = encodeURI(URL);
        ext = download_link.substr(download_link.lastIndexOf('.') + 1); //Get extension of URL

        //window.resolveLocalFileSystemURL("00002_", onResolveSuccess, onResolveFail);


        var directoryEntry = fileSystem.root; // to get root path of directory
        directoryEntry.getDirectory(Folder_Name, { create: true, exclusive: false }, onDirectorySuccess, onDirectoryFail); // creating folder in sdcard
        var rootdir = fileSystem.root;
        var fp = rootdir.fullPath; // Returns Fulpath of local directory

        fp = fp + "/" + Folder_Name + "/" + File_Name + "." + ext; // fullpath and name of the file which we want to give
        // download function call
        filetransfer(download_link, fp);
        
        //function onResolveSuccess(fileEntry) {
        //    alert(" Yashaswi "+ fileEntry.toNativeURL());
        //}

        //function onResolveFail(e) {
        //    alert("Erro :");
        //}
    }

    function onDirectorySuccess(parent) {
        // Directory created successfuly
        alert('Directory created successfuly');
    }

    function onDirectoryFail(error) {
        //Error while creating directory
        alert("Unable to create new directory: " + error.code);
    }

    function fileSystemFail(evt) {
        //Unable to access file system
        alert("Unable to access file system :" + evt.target.error.code);
    }
}
//Third step for download a file into created folder

function filetransfer(download_link, fp) {
    try{
        alert(download_link);
        alert(DownloadPath);
        DownloadPath = fileSystem.root.toURL() + "check1" + "." + "jpeg";
        alert(DownloadPath);
        var uri = encodeURI("http://tiaapp.goyalonline.in/vrimg/GC16000356.jpeg");
        var fileTransfer = new FileTransfer();
        // File download function with URL and local path
        fileTransfer.download(uri, DownloadPath,
                            function (entry) {
                                alert(DownloadPath);
                                alert("download complete: " + entry.fullPath);
                            },
                         function (error) {
                             //Download abort errors or download failed errors
                             alert("download error Code " + error.code);
                             //alert("download error target " + error.target);
                             //alert("upload error code" + error.code);
                         }
                    );
    } catch (e) {
        alert(e.message);
    }
}



function Dwn() {
   
    alert("Inside Dwn");
    try {
       

        //////Try6
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);
        function fileSystemSuccess(fileSystem) {
            try {
                //alert(Environment.getExternalStorageDirectory());
                var DownloadPath = fileSystem.root.toURL();
                alert(DownloadPath);
                //DownloadPath = DownloadPath.replace("files/", "");
                //alert(DownloadPath);
                //DownloadPath = DownloadPath.replace("files/", "");
                //alert(DownloadPath);
                //DownloadPath = DownloadPath.replace("com.adobe.phonegap.app/", "");
                //DownloadPath = "file:///storage/";
                //alert(DownloadPath);
                DownloadPath = DownloadPath + "check1" + "." + "jpeg";
                var DownloadPath1 = DownloadPath + "GC16000427.jpeg";
                alert(DownloadPath);
                //DownloadPath = "file:///storage/sdcard/";
                //DownloadPath = DownloadPath + "check" + "." + "jpeg";
                var uri = encodeURI("http://tiaapp.goyalonline.in/vrimg/icon.png");
                var fileTransfer = new FileTransfer();
                fileTransfer.download(uri, DownloadPath,
                                function (entry) {
                                    alert(DownloadPath);
                                    alert("download complete: " + entry.fullPath);
                                    document.getElementById('dwn_img').src = DownloadPath1;
                                },
                             function (error) {
                                 alert("download error Code " + error.code);
                             }
                        );
            } catch (e) {
                alert(e.message);
            }
        }
        function fileSystemFail(evt) {
            //Unable to access file system
            alert("Unable to access file system :" + evt.target.error.code);
        }
        //Try5  okk
        ////var DownloadPath = "file:///storage/sdcard0/Download/";

        ////DownloadPath = DownloadPath + "check" + "." + "jpeg";
        ////var uri = encodeURI("http://tiaapp.goyalonline.in/vrimg/GC16000356.jpeg");
        ////var fileTransfer = new FileTransfer();
        ////fileTransfer.download(uri, DownloadPath,
        ////                function (entry) {
        ////                    alert(DownloadPath);
        ////                    alert("download complete: " + entry.fullPath);
        ////                },
        ////             function (error) {
        ////                 alert("download error Code " + error.code);
        ////             }
        ////        );

        ////Try4 
        //var url = "http://tiaapp.goyalonline.in/vrimg/GC16000356.jpeg";
 
        //// we need to access LocalFileSystem
        //window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, function (fs) {
        //    // create the download directory is doesn't exist
        //    fs.root.getDirectory('downloads', { create: true });

        //    ////// we will save file in .. downloads/phonegap-logo.png
        //    ////var filePath = fs.root.fullPath + '/downloads/' + url.split('/').pop();
        //    ////var ft = new window.FileTransfer();
        //    ////var uri = encodeURI(url);
        //    ////alert(filePath);
        //    ////alert(uri);
        //    ////ft.download(uri, filePath, function (entry) {
        //    ////    alert("Successfully downloaded file, full path is " + entry.fullPath);
        //    ////},
        //    ////function (error) {
        //    ////    alert("Try1");
        //    ////    alert("Some error " + error.code + " for " + url);
        //    ////},
        //    ////false);


        //    alert("2nd Try");
        //    var filePath = fs.root.toURL() + '/downloads/' + url.split('/').pop();
        //    var ft = new window.FileTransfer();
        //    var uri = encodeURI(url);
        //    alert(filePath);
        //    alert(uri);
        //    ft.download(uri, filePath, function (entry) {
        //        alert(entry);
        //        alert(entry.fullPath);
        //        alert(entry.toURL);
        //        alert("Successfully downloaded file, full path is " + filePath);
        //    },
        //    function (error) {
        //        alert("Try2");
        //        alert("Some error " + error.code + " for " + url);
        //    },
        //    false);

        //}, fileSystemFail);

        //function fileSystemFail(evt) {
        //    //Unable to access file system
        //    alert("Unable to access file system :" + evt.target.error.code);
        //}
        //Try3
        //if (confirm('you wanna save this image?')) {
        //    window.win = open(localStorage.getItem("APIURL"));
        //    //    response.redirect("~/testpage.html");   
        //    setTimeout('win.document.execCommand("SaveAs")', 100);
        //    //setTimeout('win.close()', 500);
        //}
        //Try2
        //$.ajax({
        //    url: localStorage.getItem("APIURL"),
        //    type: "GET",
        //    dataType: "json",
        //    cache: false,
        //    success: function (data) {
        //        alert('1')
        //    },
        //    error: function (xmlHttpRequest, textStatus, errorThrown) {
        //        alert('');
        //        alert(xmlHttpRequest.responseText);
        //    }
        //});
        //Try1
        //alert("Alert In ");
        ////window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function gotFS(fileSystem) {
        ////    fileSystem.root.getDirectory(FolderName, { create: true }, function fileSystemSuccess(fileSystem) {
        ////        fileSystem.getFile("dummy.txt", { create: true, exclusive: false }, function gotFileEntry(fileEntry) {
        ////            alert(fileSystem.root);
        ////            alert("Yash "+ fileEntry.toNativeURL());
        ////            var path = fileEntry.fullPath.replace("dummy.txt", "");
        ////            alert('A');
        ////            fileEntry.remove();
        ////            var fileTransfer = new FileTransfer();
        ////            alert(localStorage.getItem("APIURL"))
        ////            fileTransfer.download(localStorage.getItem("APIURL"), path + "" + "Sample", function (theFile) {
        ////                alert("File Downloaded Successfully " + theFile.toURI());
        ////            }, function (error) {
        ////                alert("File Transfer failed " + error.code);
        ////            });
        ////        }, fail);
        ////    });
        ////}, fail);
    } catch (e) {
        alert(e.message);
    }
}

