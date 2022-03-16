using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web;
using System.Web.UI.WebControls;
using MailMessage = System.Net.Mail.MailMessage;

/// <summary>
/// Summary description for RunQuery
/// </summary>
///

namespace RunQuery
{
    public class SQLQuery
    {
        public static string ReturnString(string query)
        {
            string result = "";

            SqlCommand cmd = new SqlCommand(query, new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString));
            cmd.Connection.Open();
            result = Convert.ToString(cmd.ExecuteScalar());
            cmd.Connection.Close();
            return result;
        }


        public static void PopulateDropDown(string query, DropDownList ddGenerate, string value, string text)
        {
            SqlCommand cmd = new SqlCommand(query, new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString));
            cmd.Connection.Open();
            SqlDataReader Grouplist = cmd.ExecuteReader();

            ddGenerate.DataSource = Grouplist;
            ddGenerate.DataValueField = value;
            ddGenerate.DataTextField = text;
            ddGenerate.DataBind();

            cmd.Connection.Close();
            cmd.Connection.Dispose();
        }
        public static void PopulateMultiDropDown(DropDownList ddGenerate, string query1)
        {
            DataSet ds = new DataSet();
            SqlDataReader dr;
            int recordcount = 0;

            string query = "SELECT (Select GroupName from AccountGroup where GroupID=a.GroupID) as GroupName , AccountsHeadID, [AccountsHeadName] FROM [HeadSetup] a WHERE IsActive=1 ORDER BY GroupName, [AccountsHeadName]";
            SqlCommand cmd = new SqlCommand(query, new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString));

            cmd.Connection.Open();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(ds, "Products");
            cmd.Connection.Close();

            recordcount = ds.Tables[0].Rows.Count;
            DataTable dt = ds.Tables["Products"];

            if (recordcount > 0)
            {
                string oldGroupName = "";
                ListItem item1 = new ListItem();

                foreach (DataRow row in dt.Rows) //Each Items Will be looped
                {
                    string GroupName = row["GroupName"].ToString();
                    string AccountsHeadID = row["AccountsHeadID"].ToString();
                    string AccountsHeadName = row["AccountsHeadName"].ToString();

                    if (oldGroupName != GroupName)
                    {
                        oldGroupName = GroupName;
                        item1 = new ListItem(" ________ " + GroupName + " ________");
                        ddGenerate.Items.Add(item1);
                    }

                    item1 = new ListItem(AccountsHeadName, AccountsHeadID);
                    item1.Attributes["OptionGroup"] = GroupName;
                    ddGenerate.Items.Add(item1);

                }
                ddGenerate.DataBind();
            }

            cmd.Connection.Close();
            cmd.Connection.Dispose();
        }


        //Convert Gridview to datatable
        //DataTable dt = GetDataTable(GridView1);
        public static DataTable GetDataTable(GridView dtg)
        {
            DataTable dt = new DataTable();
            if (dtg.HeaderRow != null)
            {
                for (int i = 0; i < dtg.HeaderRow.Cells.Count; i++)
                {
                    dt.Columns.Add(dtg.HeaderRow.Cells[i].Text);
                }
            }
            foreach (GridViewRow row in dtg.Rows)
            {
                DataRow dr;
                dr = dt.NewRow();

                for (int i = 0; i < row.Cells.Count; i++)
                {
                    dr[i] = row.Cells[i].Text.Replace(" ", "");
                }
                dt.Rows.Add(dr);
            }
            return dt;
        }

        public static DataTable ReturnDataTable(String Query)
        {
            SqlCommand cmd2y = new SqlCommand(Query, new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString));
            cmd2y.Connection.Open();
            SqlDataAdapter da = new SqlDataAdapter(cmd2y);
            DataSet ds = new DataSet("Board");
            da.Fill(ds, "Board");
            cmd2y.Connection.Close();

            DataTable citydt = ds.Tables["Board"];
            return citydt;
        }

        //Sql query to dataset
        public static DataSet ReturnDataSet(String Query)
        {
            DataSet ds = new DataSet();
            String connStr = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;
            using (SqlConnection conn = new SqlConnection(connStr))
            {
                SqlCommand objCommand = new SqlCommand(Query, conn);
                SqlDataAdapter da = new SqlDataAdapter(objCommand);
                da.Fill(ds);
                da.Dispose();
            }
            return ds;
        }

        public static int ExecNonQry(string query)
        {
            SqlCommand cmd7 = new SqlCommand(query, new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString));
            cmd7.Connection.Open();
            int numOfRowsAffected = cmd7.ExecuteNonQuery();
            cmd7.Connection.Close();
            cmd7.Connection.Dispose();
            return numOfRowsAffected;
        }

        public static void Empty2Zero(TextBox textBox)
        {
            if (textBox.Text == "")
            {
                textBox.Text = "0";
            }
        }

        public static string Zero2Empty(string hc)
        {
            hc = hc.Replace(",", ".");
            /*  if (hc == "") // get last data if empty
                {
                    hc = lastData;
                }
                else //not empty data >> so set to last data
                {
                    lastData = hc;
                }*/

            if (hc != "")
            {
                if (Convert.ToDecimal(hc) <= 0)
                {
                    hc = "";
                }
            }

            return hc;
        }
        public static string GetImage(string photoID)
        {
            string absoluteUrl = SQLQuery.ReturnString("Select SettingValue from Settings where id=1");
            string url = absoluteUrl + SQLQuery.ReturnString("Select PhotoURL from Photos where PhotoID='" + photoID + "'");
            if (url == "")
            {
                url = absoluteUrl + "Uploads/Image_coming_soon.png";
            }
            return url;
        }
        public static string GenerateCustomerQS(string CustName, string custId)
        {
            string qs = Text2URL(CustName);
            string isExist = ReturnString("Select QueryStringURL from Customer where QueryStringURL='" + qs + "' AND sl<>'" + custId + "'");
            int i = 0;
            while (isExist != "")
            {
                i++;
                isExist = SQLQuery.ReturnString("Select QueryStringURL from Customer where QueryStringURL='" + (qs + i) + "'");
            }
            if (i > 0)
            {
                qs = qs + i;
            }
            return qs;
        }

        public static string UploadImage(string description, FileUpload FileUpload1, string filePath, string savePath, string entryBy, string photoType)
        {
            string pid = ReturnString("Select ISNULL(MAX(PhotoID),0)+1 from Photos");
            FileInfo fi = new FileInfo(FileUpload1.PostedFile.FileName);
            string tExt = fi.Extension;
            string fileName = RemoveSpecialCharacters(description.Trim().Replace(" ", "-")) + "." + pid + "." + tExt;
            ExecNonQry("Insert into Photos (Description, PhotoURL, EntryBy, PhotoType) VALUES ('" + description + "','./Uploads/Photos/" + fileName + "','" + entryBy + "','" + photoType + "')");
            pid = ReturnString("Select ISNULL(MAX(PhotoID),0) from Photos");

            string strFullPath = filePath + fileName;

            if (File.Exists(strFullPath))
            {
                File.Delete(strFullPath);
            }
            var file = FileUpload1.PostedFile.InputStream;
            System.Drawing.Image img = System.Drawing.Image.FromStream(file, false, false);
            img.Save(savePath + fileName);

            return pid;
        }

        public static string UploadFile(string description, FileUpload FileUpload1, string filePath, string savePath, string linkPath, string entryBy, string photoType)
        {
            string pid = ReturnString("Select ISNULL(MAX(PhotoID),0)+1 from Photos");
            FileInfo fi = new FileInfo(FileUpload1.PostedFile.FileName);
            string tExt = fi.Extension;
            string fileName = RemoveSpecialCharacters(description.Trim().Replace(" ", "-")) + "." + pid + "." + tExt;
            ExecNonQry("Insert into Photos (Description, PhotoURL, EntryBy, PhotoType) VALUES ('" + description +
                       "','" + linkPath + fileName + "','" + entryBy + "','" + photoType + "')");
            pid = ReturnString("Select ISNULL(MAX(PhotoID),0) from Photos");

            string strFullPath = filePath + fileName;

            if (File.Exists(strFullPath))
            {
                File.Delete(strFullPath);
            }
            FileUpload1.PostedFile.SaveAs(savePath + fileName);
            return pid;
        }
        public static string RemoveSpecialCharacters(string str)
        {
            str = str.Trim().Replace(" ", "-");
            StringBuilder sb = new StringBuilder();
            foreach (char c in str)
            {
                if ((c >= '0' && c <= '9') || (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || c == '.' || c == '_' || c == '-')
                {
                    sb.Append(c);
                }
            }
            return sb.ToString().Replace("--", "-");
        }
        public static string Text2URL(string str)
        {
            str = str.Trim().ToLower().Replace(" ", "-").Replace(".", "");
            StringBuilder sb = new StringBuilder();
            foreach (char c in str)
            {
                if ((c >= '0' && c <= '9') || (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || c == '.' || c == '_' || c == '-')
                {
                    sb.Append(c);
                }
            }
            return sb.ToString().ToLower().Replace("--", "-");
        }
        public static string ToAgeString(DateTime dob)
        {
            DateTime dt = DateTime.Today;

            int days = dt.Day - dob.Day;
            if (days < 0)
            {
                dt = dt.AddMonths(-1);
                days += DateTime.DaysInMonth(dt.Year, dt.Month);
            }

            int months = dt.Month - dob.Month;
            if (months < 0)
            {
                dt = dt.AddYears(-1);
                months += 12;
            }

            int years = dt.Year - dob.Year;

            return string.Format("{0} year{1}, {2} month{3} and {4} day{5}",
                                 years, (years == 1) ? "" : "s",
                                 months, (months == 1) ? "" : "s",
                                 days, (days == 1) ? "" : "s");
        }
        public static string generatePinNumber()
        {
            string mid = SQLQuery.ReturnString("Select ISNULL(COUNT(AdmissionId),0)+10000001 from Admission");
            string isExist = SQLQuery.ReturnString("Select AdmissionId from Admission WHERE AdmissionId='" + mid + "'");
            int i = 0;
            while (isExist != "")
            {
                i++;
                mid = SQLQuery.ReturnString("Select ISNULL(COUNT(AdmissionId),0)+10000001+" + i + " from Admission");
                isExist = SQLQuery.ReturnString("Select AdmissionId from Admission WHERE AdmissionId='" + mid + "'");
            }

            return mid;
        }
        public static string ToAgeString(DateTime dateFrom, DateTime dateTo)
        {
            int days = dateTo.Day - dateFrom.Day;
            if (days < 0)
            {
                dateTo = dateTo.AddMonths(-1);
                days += DateTime.DaysInMonth(dateTo.Year, dateTo.Month);
            }

            int months = dateTo.Month - dateFrom.Month;
            if (months < 0)
            {
                dateTo = dateTo.AddYears(-1);
                months += 12;
            }

            int years = dateTo.Year - dateFrom.Year;

            return string.Format("{0} year{1}, {2} month{3} and {4} day{5}",
                years, (years == 1) ? "" : "s",
                months, (months == 1) ? "" : "s",
                days, (days == 1) ? "" : "s");
        }
        public static string ReturnInvNo(string tableName, string colName, string prefix, string colEval)
        {
            SqlCommand cmd = new SqlCommand("Select ISNULL(MAX(" + colName + "),0)+1001 from " + tableName, new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString));
            cmd.Connection.Open();
            string invNo = Convert.ToString(cmd.ExecuteScalar());
            cmd.Connection.Close();

            string isExist = ReturnString("Select " + colEval + " from " + tableName + " where (" + colEval + " like '%" + prefix + invNo + "%')");
            while (isExist != "")
            {
                invNo = Convert.ToString(Convert.ToInt32(invNo) + 1);
                isExist = ReturnString("Select " + colEval + " from " + tableName + " where (" + colEval + " like '%" + prefix + invNo + "%')");
            }

            return prefix + invNo;
        }

        public static string NumberToWords(int number)
        {
            if (number == 0) { return "zero"; }
            if (number < 0) { return "minus " + NumberToWords(Math.Abs(number)); }
            string words = "";
            if ((number / 10000000) > 0) { words += NumberToWords(number / 10000000) + " Crore "; number %= 10000000; }
            if ((number / 100000) > 0) { words += NumberToWords(number / 100000) + " Lac "; number %= 100000; }
            if ((number / 1000) > 0) { words += NumberToWords(number / 1000) + " Thousand "; number %= 1000; }
            if ((number / 100) > 0) { words += NumberToWords(number / 100) + " Hundred "; number %= 100; }
            if (number > 0)
            {
                if (words != "") { words += "and "; }
                var unitsMap = new[] { "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" };
                var tensMap = new[] { "Zero", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "seventy", "Eighty", "Ninety" };
                if (number < 20) { words += unitsMap[number]; }
                else { words += tensMap[number / 10]; if ((number % 10) > 0) { words += "-" + unitsMap[number % 10]; } }
            }
            return words;//+" Taka Only.";
        }

        public static string separateColor(string line)
        {
            string s = ""; string t = "";
            int i = 1;

            string[] words = line.Split(' ');
            foreach (string word in words)
            {
                if (i == 1)
                {
                    s += "<span style='color: #FF6600;'>" + word + " </span>";
                }
                else
                {
                    s += word + " ";
                }

                i++;
            }
            return s;
        }

        public static void Subscribe(string QueryType, string Name, string Company, string Email, string Phone, string message, string MemberType, string NewsLetter, string ProductInterested, string ProductID, string ipAddress)
        {
            ExecNonQry(@"INSERT INTO Subscribers (QueryType, Name, Company, Email, Phone, Message, MemberType, NewsLetter, ProductInterested, ProductID, IPAddress) 
                            VALUES ('" + QueryType + "','" + Name + "', '" + Company + "', '" + Email + "','" + Phone + "','" + message + "','" + MemberType + "','" + NewsLetter + "','" + ProductInterested + "','" + ProductID + "','" + ipAddress + "')");
        }
        /*
        public static IRestResponse SendEmail(string receiver, string subject, string body)
        {
            RestClient client = new RestClient();
            client.BaseUrl = new Uri("https://api.mailgun.net/v3");
            client.Authenticator = new HttpBasicAuthenticator("api", "key-9b59792d89239f9e5a8d5fc223495a1e");
            RestRequest request = new RestRequest();
            request.AddParameter("domain", "xtremebd.com", ParameterType.UrlSegment);
            request.Resource = "{domain}/messages";
            request.AddParameter("from", "Extreme Solutions <marketing@xtremebd.com>");
            request.AddParameter("to", receiver);// you can use hundreds of "to" field!
            //request.AddParameter("cc", "baz@example.com");
            //request.AddParameter("bcc", "bar@example.com");
            request.AddParameter("subject", subject);
            //request.AddParameter("text", "Testing some Mailgun awesomness!");
            request.AddParameter("html", body);
            //request.AddFile("attachment", Path.Combine("files", "test.jpg"));
            //request.AddFile("attachment", Path.Combine("files", "test.txt"));
            request.Method = Method.POST;
            return client.Execute(request);
        }*/
        public static void SendEmail2(string receiverEmail, string replyTo, string subject, String body)
        {
            try
            {
                //create the mail message
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("info@extreme.com.bd", "Extreme Solutions");
                mail.To.Add(receiverEmail);
                mail.Subject = subject;

                mail.Body = body;
                mail.IsBodyHtml = true;

                //send the message
                SmtpClient smtp = new SmtpClient("smtp.postmarkapp.com", 25);
                //to authenticate we set the username and password properites on the SmtpClient
                smtp.Credentials = new NetworkCredential("1c947ef0-050a-40f6-8e72-a1207b09a27b", "1c947ef0-050a-40f6-8e72-a1207b09a27b");
                smtp.Send(mail);
            }
            catch (Exception ex)
            {

            }
        }
        public static string SendJoiningEmail(string userId, string password, string name)
        {
            string msg = "Dear Sir,<br><br>Everyone at Extreme Solutions welcomes you as an honorable customer. We appreciate your decision and assure you of our best services at all times." +
                    "<br><br>We have sent your login information in this email. With these information you will be able to check your account status along with track your projects work progress at any time. <br/><br/>Your login information are as follows:<br/> <p><strong>&nbsp;</strong><strong>Login  ID : " +
                userId + "<br/>Password: " + password + "</strong></p><br/>If you have forgotten and wish to reset your login password at any time, you can do so by accessing the &quot;Forgot Password&quot; link on customer login page of our website.";

            msg += "<br><br>If you have any questions or if you need any help, please feel free to e-mail us at <a href=&quot;mailto:support@xtremebd.com&quot; target=&quot;_blank&quot;>support@xtremebd.com</a> or call our help-desk number: +88 01613 987363.";
            msg += "<br><br>Please don't forget to give us your <font style='color=#ff6b00'>★★★★★</font> rating at: https://goo.gl/68jrns <br><br><br>";
            msg += "Thank you and welcome again to Extreme Solutions!<br><br>Sincerely,<br>Team Extreme<br><a href=&quot;http://xtremebd.com/&quot; target=&quot;_blank&quot;>http://xtremebd.com</a><br><br><br>---------------------------------------------------------------------<br><i>If you have not signed up for this account and if you<br>think that someone else has used you e-mail address, please send us<br>an e-mail at <a href=&quot;mailto:support@xtremebd.com&quot; target=&quot;_blank&quot;>support@xtremebd.com</a></i><br>---------------------------------------------------------------------";

            msg = GenerateMailBody(msg);
            SendEmail("support@xtremebd.com", userId, "xservice.team@gmail.com", "Welcome to Extreme Solutions!", msg);
            return msg;
        }
        public static string GenerateMailBody(string mainText)
        {
            string body = "<div style='font-family: Calibri,Candara,Arial, sans-serif;'>";
            body += "<table border='0' cellspacing='0' cellpadding='0' width='100%'>";

            body += "<tr>";
            body += "<td width='50%' valign='top'><h2><img src='http://xtremebd.com/images/Logo2015.png' alt='EXTREME SOLUTIONS' /></h2></td>";
            body += "<td width='50%'><p align='right'>Wali Mansion (4th Floor)<br>";
            body += "600 Sheikh Mujib Road<br>";
            body += "Agrabad, Chittagong.<br>";
            body += "Hotline: 01613 987363<br>";
            body += "Email: info@extreme.com.bd<br>";
            body += "Website: http://xtremebd.com</p></td>";
            body += "</tr>";
            
            body += "<tr>";
            body += "<td colspan='2' valign='top'>" + mainText + "</td>";
            body += "</tr>";
            body += "</table><hr/>";
            return body;
        }


        public static string SendSMS(string mob, string msg, string type)
        {
            try
            {                
                string reqText = "";
                mob=VerifyMobileNumber(mob);
                /*
                DataTable dtx = RunQuery.SQLQuery.ReturnDataTable(@"SELECT TOP (1) pid, GatewayName, HostIP, SenderName, UserID, Password FROM SMSGateway WHERE (IsActive = '1')");

                foreach (DataRow drx in dtx.Rows)
                {
                    string pid = drx["pid"].ToString();
                    string hostIP = drx["HostIP"].ToString();
                    string sender = drx["SenderName"].ToString();
                    string userID = drx["UserID"].ToString();
                    string password = drx["Password"].ToString();

                    if (pid == "1") //Route SMS
                    {
                        reqText = hostIP + "bulksms/bulksms?username=" + userID + "&password=" + password + "&type=0&dlr=1&destination=" + mob + "&source=" + sender + "&message=" + msg;
                    }
                    else if (pid == "2") //Bulk SMS
                    {
                        reqText = hostIP + "api.php?username=" + userID + "&password=" + password + "&number=" + mob + "&sender=" + sender + "&type=0&message=" + msg;
                    }
                    else if (pid == "3") //Extreme SMS : http://107.20.199.106/api/v3/sendsms/plain?user=extremebd&password=jrhM0DIy&sender=xtremebd&SMSText=messagetext&GSM=8801817251582
                    {
                        reqText = hostIP + "api/v3/sendsms/plain?user=" + userID + "&password=" + password + "&sender=" + sender + "&SMSText=" + msg + "&GSM=" + mob;
                    }
                }
                */
                string pswd = SQLQuery.ReturnString("Select Pswd from SMSUsers where UserID='rony'");
                 reqText = "https://license.extreme.com.bd/api/sms?user=rony&pswd="+pswd+"&rcvr="+ mob + "&msg="+ msg;
                reqText = Convert.ToString(WebRequest.Create(reqText).GetResponse());
                return reqText;

            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        public static string DataTable2HTMLtable(DataTable dt)
        {
            if (dt.Rows.Count == 0) return ""; // enter code here

            StringBuilder builder = new StringBuilder();
            builder.Append("<html>");
            builder.Append("<head>");
            builder.Append("<title>");
            builder.Append("Page-");
            builder.Append(Guid.NewGuid());
            builder.Append("</title>");
            builder.Append("</head>");
            builder.Append("<body>");
            builder.Append("<table border='1px' cellpadding='5' cellspacing='0' ");
            builder.Append("style='border: solid 1px Silver; font-size: x-small;'>");
            builder.Append("<tr align='left' valign='top'>");
            foreach (DataColumn c in dt.Columns)
            {
                builder.Append("<td align='left' valign='top'><b>");
                builder.Append(c.ColumnName);
                builder.Append("</b></td>");
            }
            builder.Append("</tr>");
            foreach (DataRow r in dt.Rows)
            {
                builder.Append("<tr align='left' valign='top'>");
                foreach (DataColumn c in dt.Columns)
                {
                    builder.Append("<td align='left' valign='top'>");
                    builder.Append(r[c.ColumnName]);
                    builder.Append("</td>");
                }
                builder.Append("</tr>");
            }
            builder.Append("</table>");
            builder.Append("</body>");
            builder.Append("</html>");

            return builder.ToString();
        }
        public static string VerifyMobileNumber(string mobileNo)
        {
            mobileNo = mobileNo.Replace(" ", "").Trim();

            if (mobileNo.StartsWith("+88"))
            {
                mobileNo = mobileNo.Replace("+88", "");
            }

            if (!mobileNo.StartsWith("88"))
            {
                mobileNo = "88" + mobileNo;
            }

            if (mobileNo.Length != 13 || !mobileNo.StartsWith("8801"))
            {
                mobileNo = "";
            }

            return mobileNo;
        }
        public static void GetReminders()
        {
            try
            {
                DataTable dtx = SQLQuery.ReturnDataTable(
                    @"SELECT    sl, CustomerID, Status, Detail, EntryDate, EntryBy, RemindDate, IsRemind, EmailSend FROM Leads WHERE RemindDate<'" +
                    DateTime.Now.ToString("yyyy-MM-dd hh:mm tt") + "' AND (EmailSend = '1') AND IsRemind=1");

                foreach (DataRow drx in dtx.Rows)
                {
                    string msg = "Below task was scheduled to remind on " +
                                 Convert.ToDateTime(drx["RemindDate"].ToString()).ToString("dd/MM/yyyy hh:mm tt") +
                                 " for taking actions";
                    msg += "<br/> <br/>Customer Name: <b>" +
                           SQLQuery.ReturnString("Select Name from Directory where sl='" + drx["CustomerID"].ToString() +
                                                 "'") + "</b>";
                    msg += "<br/>Lead Description: <b>" + drx["Detail"].ToString() + "</b>";
                    msg += "<br/>Entry by: " + drx["EntryBy"].ToString();
                    msg += "<br/>Entry date: " +
                           Convert.ToDateTime(drx["EntryDate"].ToString()).ToString("dd/MM/yyyy hh:mm tt");
                    msg += "<br/>Task Status: " + drx["Status"].ToString();

                    msg = GenerateMailBody(msg);
                    SendEmail("support@xtremebd.com", "info@extreme.com.bd", "xservice.team@gmail.com", drx["Detail"].ToString(), msg);

                    DateTime dt = Convert.ToDateTime(drx["RemindDate"].ToString());
                    SQLQuery.ExecNonQry(
                        "Insert into Tasks (taskFor, TaskName, TaskDetails, DeadLine, Priority, Status, EntryBy)" +
                        " VALUES ('" + drx["EntryBy"].ToString() + "', 'Sales Lead', '" + drx["Detail"].ToString() +
                        "', '" + dt + "', 'High', 'Pending', '" + drx["EntryBy"].ToString() + "')");

                }
                
            }
            catch (Exception ex)
            {

            }
            finally
            {
                SQLQuery.ExecNonQry("Update Leads SET IsRemind=0, EmailSend=2 WHERE  RemindDate<'" +
                                    DateTime.Now.ToString("yyyy-MM-dd hh:mm tt") + "'");
            }
        }
        
        public static void SendEmail(string senderEmail, string receiverEmail, string replyTo, string subject, String body)
        {
            try
            {
                /*
                MailMessage o = new MailMessage("TEAM EXTREME <support@xtremebd.com>", receiverEmail, subject, body);
                o.ReplyTo = new MailAddress(replyTo);
                o.IsBodyHtml = true;
                NetworkCredential netCred = new NetworkCredential("support@xtremebd.com", "jDvm63*4");
                SmtpClient smtpobj = new SmtpClient("mail.xtremebd.com", 25);
                smtpobj.EnableSsl = false;
                smtpobj.Credentials = netCred;
                smtpobj.Send(o);*/

                SendEmail2(receiverEmail, replyTo, subject, body);
            }
            catch (Exception ex)
            {

            }
        }

        public static void SendWorkTrackingEmail(string lName, string customerID, string subject, string body)
        {
            string compBy = SQLQuery.ReturnString("Select Name from Employee where LoginID='" + lName + "'");
            string custEmail = SQLQuery.ReturnString("Select email from Customer where sl='" + customerID + "'");
            body = "Dear sir,<br/> bellow tasks has been done by " + compBy + " for your project assigned to Extreme Solutions.<br/><br/>" + body + "<br/><hr/><br/>";
            body += "<table><tr><td colspan='2' valign='top' style='border: none;text-align: center;font-weight: bold;'>Please give us your <font style='color: #ff6b00;font-size: 25px;'>★★★★★</font> rating at: <a href='https://goo.gl/68jrns' target='_blank'>https://goo.gl/68jrns</a> </td></tr></table>";
            body += "<br/><br/>Regards,<br/>Team Extreme<br/><br/><i>FYI: The contents in this email was auto generated during the submission of work updates by " + compBy + " using <a href='https://extreme-office.com' target='_blank'>Extreme OFFICE</a> software.</i><br/><br/>";

            if (subject == "")
            {
                subject = "Work report by " + compBy + " ";
            }

            SQLQuery.SendEmail2(custEmail, "xservice.team@gmail.com", subject, body);
        }

        public static void GetMailingList()
        {
            string qty = SQLQuery.ReturnString("Select SettingValue from Settings where SettingName='Email Sending Frequency'");
            DataTable dtx = RunQuery.SQLQuery.ReturnDataTable(
                @"SELECT TOP("+ qty + @") EmailCampDetail.id, EmailCampDetail.EmailAddress as email, Directory.Name, Directory.ContactPerson, EmailCampDetail.TemplateID, Directory.Designation, EmailTemplate.EmailSubject, EmailTemplate.id AS EmailTemplateID, EmailCampDetail.CampaignID
                FROM EmailCampDetail INNER JOIN Directory ON EmailCampDetail.DirectoryID = Directory.sl INNER JOIN EmailTemplate ON EmailCampDetail.TemplateID = EmailTemplate.TargetIndustry WHERE (EmailCampDetail.IsReceived = '0') order by EmailCampDetail.id");

            foreach (DataRow drx in dtx.Rows)
            {
                DataTable dtx2 = RunQuery.SQLQuery.ReturnDataTable(@"SELECT Top(1) id, GatewayName, Link, UserName, Password, Port, EnableSSL, MonthlyLimit, MonthID, MonthlySendQty, TotalSendQty, SendingPriority
                                                                FROM EmailGateways WHERE (IsActive = '1') AND SendingPriority IN (Select MIN(SendingPriority) from EmailGateways WHERE (IsActive = '1')) ");
                foreach (DataRow drx2 in dtx2.Rows)
                {
                    string emailBody= SQLQuery.ReturnString("SELECT SUBSTRING((SELECT left(('' + PageContent),3900) FROM BodyContent where  ContentType='Email Template' AND SectionTitle='" + drx["TemplateID"] + "' ORDER BY ContentSerial FOR XML PATH('')),2,200000) AS CSV");
                    emailBody += "<br/><br/><br/><center><div style='text-align:center; font-size:9px;'>This email was sent you, as you have been subscribed to receive email from EXTREME SOLUTIONS.<br/>To unsubscribe from the mailing list, please <a href='http://xtremebd.com/connect/unsubscribe/?email="+ drx["email"] + "'>click here</a></div></center>";
                    string isSuccess = SQLQuery.SendMarketingEmail(drx2["UserName"].ToString(), drx["email"].ToString(), drx["EmailSubject"].ToString(), HttpUtility.HtmlDecode(HttpUtility.HtmlDecode(emailBody)), drx2["Link"].ToString(), drx2["Port"].ToString(), drx2["Password"].ToString(), Convert.ToBoolean(drx2["EnableSSL"].ToString()));

                    string newID = DateTime.Now.ToString("yyyy-MM-01");
                    string oldID = drx2["MonthID"].ToString();
                    string monthCounter = "MonthlySendQty+1";
                    if (oldID != newID)
                    {
                        monthCounter = "0";
                    }
                    SQLQuery.ExecNonQry("UPDATE EmailGateways SET MonthlySendQty="+ monthCounter + ", MonthID='"+ newID + "', TotalSendQty=TotalSendQty+1, SendingPriority=(PriorityRatio*" + (Convert.ToDecimal(drx2["MonthlySendQty"].ToString()) + 1) + ") WHERE ID=" + drx2["id"]);

                    if (isSuccess == "success")
                    {
                        SQLQuery.ExecNonQry("UPDATE EmailCampDetail SET IsReceived=1, ReceiveDate='" + DateTime.Now.ToString("yyyy-MM-dd HH:mm") + "', GateWayID='" + drx2["id"] + "' WHERE ID=" + drx["id"]);
                    }
                }
            }
        }
        public static string SendMarketingEmail(string loginID, string receiverEmail, string subject, String body, string server, string port, string pswd, bool enableSSL)
        {
            try
            {
                if (loginID.Contains("gmail"))
                {
                    return SendSSLGmail(loginID, receiverEmail, subject, body, server, port, pswd);
                }
                else
                {
                //create the mail message
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("marketing@xtremebd.com", "Extreme Solutions");
                mail.To.Add(receiverEmail);
                mail.ReplyToList.Add("xservice.team@gmail.com");
                mail.Subject = subject;

                mail.Body = body;
                mail.IsBodyHtml = true;

                //send the message
                SmtpClient smtp = new SmtpClient(server, Convert.ToInt32(port));
                smtp.EnableSsl = enableSSL;
                //to authenticate we set the username and password properites on the SmtpClient
                smtp.Credentials = new NetworkCredential(loginID, pswd);
                smtp.Send(mail);
                return "success";

                }
            }
            catch (Exception ex)
            {
                return "ERROR: "+ ex.ToString();
            }
        }

        public static string SendSSLGmail(string loginID, string receiverEmail, string subject, String body, string server, string port, string pswd)
        {
            try
            {
                using (MailMessage mm = new MailMessage(loginID, receiverEmail))
                {
                    mm.From = new MailAddress("marketing@xtremebd.com", "Extreme Solutions");
                    mm.To.Add(receiverEmail);
                    mm.ReplyToList.Add("xservice.team@gmail.com");
                    mm.Subject = subject;
                    mm.Body = body;
                    //if (fuAttachment.HasFile)
                    //{
                    //    string FileName = Path.GetFileName(fuAttachment.PostedFile.FileName);
                    //    mm.Attachments.Add(new Attachment(fuAttachment.PostedFile.InputStream, FileName));
                    //}
                    mm.IsBodyHtml = true;
                    SmtpClient smtp = new SmtpClient();
                    smtp.Host = server;
                    smtp.EnableSsl = true;
                    NetworkCredential NetworkCred = new NetworkCredential(loginID, pswd);
                    smtp.UseDefaultCredentials = true;
                    smtp.Credentials = NetworkCred;
                    smtp.Port = Convert.ToInt32(port);
                    smtp.Send(mm);
                }
                return "success";
            }
            catch (Exception ex)
            {
                return "ERROR: " + ex.ToString();
            }
        }

        public static void BMI()
        {
            /*
            //Correct BMI and Age
            DataTable dtx = SQLQuery.ReturnDataTable(@" SELECT VitalsID, ViPatientId, Age, Height, Weight, BMI, HeadCircumference, Temperature, Pulse, RespiratoryRate, SBP, DBP, BloodOxygenSaturation, InsertDate, InsertUserId, UpdateDate, UpdateUserId
                        FROM Vitals WHERE (BMI IS NULL) ");

            foreach (DataRow drx in dtx.Rows)
            {
                string id = drx["VitalsID"].ToString();
                string pid = drx["ViPatientId"].ToString();

                string hgt = drx["Height"].ToString();
                string wgt = drx["Weight"].ToString();
                decimal bmi = 0;
                if (hgt != "" && wgt != "")
                {
                    if (Convert.ToDecimal(hgt) > 0 && Convert.ToDecimal(wgt) > 0)
                    {
                        bmi = (Convert.ToDecimal(wgt) / 1M) / ((Convert.ToDecimal(hgt) / 100M) * (Convert.ToDecimal(hgt) / 100M));
                    }
                }

                string dob = SQLQuery.ReturnString("Select PDataNascita from tabPazienti where PCodPaz='" + pid + "'");
                string InsertDate = drx["InsertDate"].ToString();
                if (InsertDate == "")
                {
                    InsertDate = DateTime.Now.ToString("yyyy-MM-dd");
                }
                string age = "0";
                if (dob != "")
                {
                    age = SQLQuery.ToAgeString(Convert.ToDateTime(dob), Convert.ToDateTime(InsertDate));
                }

                string query = "Update Vitals SET Age='" + age + "', BMI='" + Comma2Dot(bmi) + "' WHERE VitalsID='" + id + "' ";
                SQLQuery.ExecNonQry(query);
            }*/
        }
        public static string ShowMessage(string msg, string type)
        {
            return "<div class='xerp_" + type + "'>" + msg + "</div>";
        }
        private static string Comma2Dot(decimal bmi)
        {
            return bmi.ToString().Replace(",", ".");
        }
    }
}

