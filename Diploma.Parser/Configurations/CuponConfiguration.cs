using OpenQA.Selenium.Chrome;

namespace Diploma.Parser.Configurations;

public class CuponConfiguration
{
    public string name { get; set;}
    public string url { get; set;}
    public string cuponsClassName { get; set;}
    public string[] chromeOptions { get; set;}
}