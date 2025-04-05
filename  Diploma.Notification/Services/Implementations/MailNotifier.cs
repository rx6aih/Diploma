using System.Net.Mail;
using Diploma.Notification.Services.Interfaces;

namespace Diploma.Notification.Services.Implementations;

public class MailNotifier : INotify
{
    public void Notify(string content)
    {
        SmtpClient smtpClient = new SmtpClient("cupones", 25);
        
        smtpClient.Credentials = new System.Net.NetworkCredential("mrsaintsssss@gmail.com", "1957ra14");
        smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
        smtpClient.EnableSsl = true;
        
        MailMessage mailMessage = new MailMessage();
        mailMessage.From = new MailAddress("cupones", "cupones");
        mailMessage.To.Add("mrsaintsteam@mail.ru");
        mailMessage.Body = content;
        
        smtpClient.Send(mailMessage);
    }
}